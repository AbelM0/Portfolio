'use client';

import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';

type NeuformMode = 'dark' | 'light';
type NeuformModePreference = NeuformMode | 'auto';

export type ConstellationFieldProps = {
  mode?: NeuformModePreference;
  speed?: number;
  size?: number;
  gap?: number;
  length?: number;
  density?: number;
  strokeWidth?: number;
  opacity?: number;
  hue?: number;
  saturation?: number;
  brightness?: number;
  className?: string;
  style?: CSSProperties;
};

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
};

const DEFAULTS = {
  mode: 'dark' as NeuformMode,
  speed: 1,
  size: 1,
  gap: 2,
  length: 1,
  density: 1,
  strokeWidth: 1,
  opacity: 1,
  hue: 0,
  saturation: 1,
  brightness: 1,
} as const;

const COLORS = {
  dark: {
    background: '#0B0D0C',
    node: '#B7F34A',
    line: '183, 243, 74',
  },
  light: {
    background: '#EEF1F6',
    node: '#517A13',
    line: '81, 122, 19',
  },
} as const;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function resolveMode(
  mode: NeuformMode | number | string | undefined,
  fallback: NeuformMode = 'dark',
): NeuformMode {
  if (mode === undefined || mode === null) return fallback;
  if (mode === 'light' || mode === 1 || mode === '1') return 'light';
  return 'dark';
}

function readAutomaticMode(): NeuformMode {
  if (typeof document === 'undefined' || typeof window === 'undefined') return 'dark';

  const root = document.documentElement;
  const declared = root.dataset.scheme ?? root.dataset.theme;
  if (declared === 'light' || declared === 'dark') return declared;

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function useAutomaticMode(enabled: boolean) {
  const [mode, setMode] = useState<NeuformMode>(readAutomaticMode);

  useEffect(() => {
    if (!enabled || typeof document === 'undefined' || typeof window === 'undefined') {
      return undefined;
    }

    const root = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const update = () => setMode(readAutomaticMode());
    const observer = new MutationObserver(update);

    observer.observe(root, {
      attributes: true,
      attributeFilter: ['data-scheme', 'data-theme'],
    });
    media.addEventListener('change', update);
    update();

    return () => {
      observer.disconnect();
      media.removeEventListener('change', update);
    };
  }, [enabled]);

  return mode;
}

export default function ConstellationField({
  mode,
  speed = DEFAULTS.speed,
  size = DEFAULTS.size,
  gap = DEFAULTS.gap,
  length = DEFAULTS.length,
  density = DEFAULTS.density,
  strokeWidth = DEFAULTS.strokeWidth,
  opacity = DEFAULTS.opacity,
  hue = DEFAULTS.hue,
  saturation = DEFAULTS.saturation,
  brightness = DEFAULTS.brightness,
  className,
  style,
}: ConstellationFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestedMode = mode ?? DEFAULTS.mode;
  const automaticMode = useAutomaticMode(requestedMode === 'auto');
  const resolvedMode =
    requestedMode === 'auto' ? automaticMode : resolveMode(requestedMode, DEFAULTS.mode);
  const palette = COLORS[resolvedMode];

  const safeSpeed = clamp(speed, 0, 3);
  const safeSize = clamp(size, 0.05, 200);
  const safeGap = clamp(gap, 0, 64);
  const safeLength = clamp(length, 0.35, 2.5);
  const safeDensity = clamp(density, 0.25, 2.5);
  const safeStrokeWidth = clamp(strokeWidth, 0.25, 8);
  const safeOpacity = clamp(opacity, 0.05, 1);
  const safeHue = clamp(hue, -180, 180);
  const safeSaturation = clamp(saturation, 0, 2);
  const safeBrightness = clamp(brightness, 0.35, 1.65);

  const filter = useMemo(
    () =>
      safeHue === 0 && safeSaturation === 1 && safeBrightness === 1
        ? undefined
        : `hue-rotate(${safeHue}deg) saturate(${safeSaturation}) brightness(${safeBrightness})`,
    [safeBrightness, safeHue, safeSaturation],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext('2d');
    if (!context) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: -1000, y: -1000 };
    let width = 1;
    let height = 1;
    let animationFrame = 0;
    let nodes: Node[] = [];

    const createNodes = () => {
      const baseCount = width < 768 ? 40 : 85;
      const gapFactor = 1 / Math.max(0.7, 0.7 + safeGap * 0.15);
      const count = Math.max(8, Math.round(baseCount * safeDensity * gapFactor));

      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: (Math.random() * 2.4 + 1.8) * safeSize,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createNodes();
    };

    const draw = (time: number, updatePositions: boolean) => {
      context.clearRect(0, 0, width, height);
      context.lineCap = 'butt';
      context.lineJoin = 'miter';
      context.lineWidth = safeStrokeWidth;

      const linkDistance = 160 * safeLength;
      for (let first = 0; first < nodes.length; first += 1) {
        for (let second = first + 1; second < nodes.length; second += 1) {
          const horizontal = nodes[first].x - nodes[second].x;
          const vertical = nodes[first].y - nodes[second].y;
          const distance = Math.hypot(horizontal, vertical);

          if (distance < linkDistance) {
            const alpha = (1 - distance / linkDistance) * 0.34;
            context.strokeStyle = `rgba(${palette.line}, ${alpha})`;
            context.beginPath();
            context.moveTo(nodes[first].x, nodes[first].y);
            context.lineTo(nodes[second].x, nodes[second].y);
            context.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        if (updatePositions) {
          node.x += node.vx * safeSpeed;
          node.y += node.vy * safeSpeed;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          const pointerDistance = Math.hypot(node.x - pointer.x, node.y - pointer.y);
          if (pointerDistance < 220) {
            node.x -= (node.x - pointer.x) * 0.0035;
            node.y -= (node.y - pointer.y) * 0.0035;
          }
        }

        const pulse = reducedMotion ? 0.88 : 0.78 + Math.sin(time * 0.001 + node.phase) * 0.18;
        context.globalAlpha = pulse * 0.18;
        context.fillStyle = palette.node;
        context.beginPath();
        context.arc(node.x, node.y, node.radius * 2.1, 0, Math.PI * 2);
        context.fill();

        context.globalAlpha = pulse;
        context.beginPath();
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        context.fill();
      });

      context.globalAlpha = 1;
    };

    const animate = (time: number) => {
      draw(time, true);
      animationFrame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const clearPointer = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', clearPointer);
    resize();

    if (reducedMotion) draw(0, false);
    else animationFrame = window.requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', clearPointer);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [
    palette,
    safeDensity,
    safeGap,
    safeLength,
    safeSize,
    safeSpeed,
    safeStrokeWidth,
  ]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        background: palette.background,
        filter,
        opacity: safeOpacity,
        ...style,
      }}
    />
  );
}

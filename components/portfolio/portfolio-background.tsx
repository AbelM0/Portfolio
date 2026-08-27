import ConstellationField from '@/components/ui/constellation-field';

export function PortfolioBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <ConstellationField
        className="absolute inset-0"
        mode="dark"
        speed={0.35}
        size={0.78}
        gap={2.4}
        length={0.85}
        density={0.75}
        strokeWidth={0.55}
        opacity={0.42}
        hue={0}
        saturation={1}
        brightness={1}
      />
    </div>
  );
}

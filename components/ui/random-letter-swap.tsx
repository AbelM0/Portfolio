'use client';

import { motion, useReducedMotion, type Transition } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/[]{}';

export type RandomLetterSwapProps = {
  label: string;
  href?: string;
  className?: string;
  staggerDuration?: number;
  transition?: Transition;
};

function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

export function RandomLetterSwap({
  label,
  href = '#',
  className,
  staggerDuration = 0.025,
  transition = { duration: 0.6, type: 'spring' },
}: RandomLetterSwapProps) {
  const [characters, setCharacters] = useState(() => label.split(''));
  const timers = useRef<number[]>([]);
  const reduceMotion = useReducedMotion();

  const clearTimers = () => {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
  };

  const scramble = () => {
    clearTimers();
    setCharacters(label.split(''));
    if (reduceMotion) return;

    label.split('').forEach((character, index) => {
      if (character === ' ') return;

      for (let frame = 0; frame < 4; frame += 1) {
        const delay = index * staggerDuration * 1000 + frame * 38;
        const timer = window.setTimeout(() => {
          setCharacters((current) =>
            current.map((value, characterIndex) => {
              if (characterIndex !== index) return value;
              return frame === 3 ? character : randomGlyph();
            }),
          );
        }, delay);
        timers.current.push(timer);
      }
    });
  };

  useEffect(() => {
    setCharacters(label.split(''));
    return clearTimers;
  }, [label]);

  return (
    <motion.a
      className={className}
      href={href}
      aria-label={label}
      onFocus={scramble}
      onMouseEnter={scramble}
      transition={transition}
      whileTap={{ y: 1 }}
    >
      <span aria-hidden="true" className="inline-flex">
        {characters.map((character, index) => (
          <span className="inline-block min-w-[0.62em] text-center" key={`${label}-${index}`}>
            {character === ' ' ? '\u00A0' : character}
          </span>
        ))}
      </span>
    </motion.a>
  );
}

'use client';

import { motion, useReducedMotion, type Transition } from 'motion/react';
import { useCallback, useEffect, useRef, useState, type ElementType } from 'react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/[]{}';

export type RandomLetterSwapProps = {
  label: string;
  href?: string;
  className?: string;
  staggerDuration?: number;
  transition?: Transition;
};

export type RandomLetterSwapTextProps = {
  label: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  staggerDuration?: number;
};

function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

function useRandomLetterSwap(label: string, staggerDuration: number) {
  const [characters, setCharacters] = useState(() => label.split(''));
  const timers = useRef<number[]>([]);
  const reduceMotion = useReducedMotion();

  const clearTimers = useCallback(() => {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
  }, []);

  const scramble = useCallback(() => {
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
  }, [clearTimers, label, reduceMotion, staggerDuration]);

  useEffect(() => {
    setCharacters(label.split(''));
    return clearTimers;
  }, [clearTimers, label]);

  return { characters, scramble };
}

export function RandomLetterSwap({
  label,
  href = '#',
  className,
  staggerDuration = 0.025,
  transition = { duration: 0.6, type: 'spring' },
}: RandomLetterSwapProps) {
  const { characters, scramble } = useRandomLetterSwap(label, staggerDuration);

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

export function RandomLetterSwapText({
  label,
  as = 'h2',
  className,
  staggerDuration = 0.025,
}: RandomLetterSwapTextProps) {
  const { characters, scramble } = useRandomLetterSwap(label, staggerDuration);
  const Tag = as as ElementType;
  let nextWordStart = 0;
  const words = label.split(' ').map((word) => {
    const start = nextWordStart;
    nextWordStart += word.length + 1;
    return { start, word };
  });

  return (
    <Tag
      className={`group transition-colors hover:text-[#B7F34A] ${className ?? ''}`}
      aria-label={label}
      onMouseEnter={scramble}
    >
      <span aria-hidden="true">
        {words.map(({ start, word }, wordIndex) => (
          <span className="inline-block whitespace-nowrap" key={`${word}-${wordIndex}`}>
            {word.split('').map((originalCharacter, indexWithinWord) => {
              const index = start + indexWithinWord;

              return (
                <span
                  className="relative inline-block transition-colors group-hover:text-[#B7F34A]"
                  key={`${label}-${index}`}
                >
                  <span className="invisible">{originalCharacter}</span>
                  <span className="absolute inset-0 text-center">{characters[index]}</span>
                </span>
              );
            })}
            {wordIndex < words.length - 1 ? (
              <span aria-hidden="true">{'\u00A0'}</span>
            ) : null}
          </span>
        ))}
      </span>
    </Tag>
  );
}

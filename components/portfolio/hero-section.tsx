'use client';

import { motion, useReducedMotion } from 'motion/react';
import { ease } from './motion-config';

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="grid gap-12 pb-20 pt-16 sm:pb-24 sm:pt-20 lg:grid-cols-[1.55fr_.45fr] lg:gap-20 lg:pb-32">
      <div>
        <motion.p
          className="mb-4 font-sans text-lg text-[#929A90] sm:mb-2 sm:text-2xl"
          initial={reduceMotion ? false : { opacity: 0, x: -16 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="mb-6 block font-mono text-xs text-[#B7F34A]">$ whoami</span>
          Hello, I&apos;m
        </motion.p>
        <motion.h1
          className="max-w-[12ch] font-sans text-[clamp(4rem,10vw,9.5rem)] font-semibold leading-[0.79] tracking-[-0.078em] text-[#F0F3EF]"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease }}
        >
          Abel
          <span className="ml-[0.08em] text-[#B7F34A]">Mulat.</span>
        </motion.h1>
      </div>
      <motion.div
        className="self-end border border-[#30352F] bg-[#101310] p-5 font-mono"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease }}
      >
        <div className="mb-8 flex items-center justify-between border-b border-[#30352F] pb-3 text-[0.625rem] text-[#747C72]">
          <span>STATUS.JSON</span>
          <span className="size-2 bg-[#B7F34A]" />
        </div>
        <dl className="space-y-5 text-xs">
          <div>
            <dt className="text-[#666D64]">location</dt>
            <dd className="mt-1 text-[#D8DDD8]">&quot;Addis Ababa, ET&quot;</dd>
          </div>
          <div>
            <dt className="text-[#666D64]">role</dt>
            <dd className="mt-1 text-[#D8DDD8]">&quot;AI / Software Engineer&quot;</dd>
          </div>
          <div>
            <dt className="text-[#666D64]">focus</dt>
            <dd className="mt-1 text-[#D8DDD8]">
              [&quot;AI features&quot;, &quot;full-stack projects&quot;]
            </dd>
          </div>
          <div>
            <dt className="text-[#666D64]">availability</dt>
            <dd className="mt-1 text-[#B7F34A]">true</dd>
          </div>
        </dl>
        <div className="mt-8 flex gap-4 border-t border-[#30352F] pt-4 text-[0.625rem] text-[#899087]">
          <a
            className="hover:text-[#B7F34A]"
            href="https://github.com/AbelM0"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>
          <a
            className="hover:text-[#B7F34A]"
            href="https://linkedin.com/in/abel-mulat-517b23297"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN ↗
          </a>
        </div>
      </motion.div>
    </section>
  );
}

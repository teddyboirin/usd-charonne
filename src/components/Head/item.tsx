import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import Button from '../Button';
import Link from 'next/link';
import H2 from '../Titles/h2';
import H5 from '../Titles/h5';

type Props = {
  title: string;
  desc: string;
  img: string;
  button?:
    | {
        link: string;
        value: string;
      }
    | false;
};

export default function SliderItem({ title, desc, img, button }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        className="h-[90vh] md:h-screen w-full relative overflow-hidden"
        style={{
          backgroundImage: `url('${img}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 gradient_hero" />
        <div className="absolute inset-0 court-pattern" />
        <div className="absolute inset-0 gradient_head" />

        <div className="absolute top-24 md:top-28 left-4 md:left-8 z-10">
          <span className="badge-prenational font-display text-11 md:text-13 uppercase tracking-widest text-white px-3 py-1.5 rounded-full">
            Équipe 1 — Pré-National
          </span>
        </div>

        <div className="absolute w-full bottom-0 left-0 p-4 md:p-8 pb-16 md:pb-20 flex items-end justify-center flex-col z-10">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              exit={{ opacity: 0, y: 25 }}
              className="w-full"
            >
              <H2 title={title} center uppercase />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              exit={{ opacity: 0, y: 25 }}
              className="w-full mt-3"
            >
              <H5 title={desc} white center />
              {button && (
                <div className="mt-5 flex items-center justify-center gap-3">
                  <Link href={button.link}>
                    <Button red>{button.value}</Button>
                  </Link>
                  <Link href="/teams">
                    <Button white>Nos équipes</Button>
                  </Link>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 gradient_brand" />

        <a
          href="#contenu"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors scroll-indicator"
          aria-label="Défiler vers le contenu"
        >
          <span className="font-display text-10 uppercase tracking-widest hidden md:block">Découvrir</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </motion.div>
    </AnimatePresence>
  );
}

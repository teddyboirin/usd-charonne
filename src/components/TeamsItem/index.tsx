'use client';
import { memo } from 'react';
import H3 from '../Titles/h3';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  img: string;
  link: string;
  prenational?: boolean;
}

function TeamsItem({ title, img, link, prenational }: Props) {
  return (
    <Link href={link} className="group relative block overflow-hidden rounded-xl">
      {prenational && (
        <div className="absolute top-4 left-4 z-20 badge-prenational font-display text-11 uppercase tracking-widest text-white px-3 py-1.5 rounded-full">
          Pré-National
        </div>
      )}
      <motion.div
        className={`w-full flex items-end justify-start p-6 relative ${
          prenational ? 'h-[480px] md:h-[580px]' : 'h-[420px] md:h-[520px]'
        }`}
        style={{
          background: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-t from-dark-1 via-dark-1/50 to-transparent transition-opacity duration-300 ${
            prenational ? 'opacity-70 group-hover:opacity-80' : 'opacity-80 group-hover:opacity-90'
          }`}
        />
        <div
          className={`absolute top-0 left-0 w-full h-1 gradient_brand transition-transform duration-500 origin-left ${
            prenational ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}
        />
        {prenational && (
          <div className="absolute inset-0 border-2 border-accent/30 rounded-xl pointer-events-none group-hover:border-accent/60 transition-colors duration-300" />
        )}
        <div className="relative z-10">
          <H3 title={title} className="group-hover:text-red transition-colors duration-300" />
          <span className="font-display text-12 uppercase tracking-widest text-white/60 mt-2 block group-hover:text-accent transition-colors">
            Voir l&apos;effectif →
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
export default memo(TeamsItem);

'use client';
import { memo } from 'react';
import { motion } from 'framer-motion';
import H1 from '../Titles/h1';

interface Props {
  title: string;
  image?: string;
}

function BasicHead({ image, title }: Props) {
  return (
    <div className="relative bg-dark-1 w-full min-h-[300px] md:min-h-[420px] flex items-center justify-center overflow-hidden">
      {image && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'grayscale(40%) brightness(0.5)',
          }}
        />
      )}
      <div className="absolute inset-0 gradient_hero" />
      <div className="absolute inset-0 court-pattern" />
      <div className="absolute bottom-0 w-full h-1 gradient_brand" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 px-4"
      >
        <H1 title={title} className="mt-16 md:mt-20" />
      </motion.div>
    </div>
  );
}
export default memo(BasicHead);

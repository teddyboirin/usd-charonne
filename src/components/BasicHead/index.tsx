'use client';
import { memo } from 'react';
import { motion } from 'framer-motion';
import H1 from '../Titles/h1';

interface Props {
  title: string;
  image: string;
}

function BasicHead({ image, title }: Props) {
  return (
    <div
      className="relative bg-black w-full min-h-[270px] md:min-h-[390px] flex items-center justify-center"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundPosition: 'center',
        filter: 'grayscale(70%)',
      }}
    >
      <div className="absolute h-[130px] gradient_filter_head bottom-0 w-full"></div>
      <motion.div
        initial={{ opacity: 0, y: -45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'just', duration: 0.3, ease: 'easeInOut' }}
        exit={{ opacity: 0, y: -45 }}
      >
        <H1 title={title} className="mt-10 uppercase max-w-[400px]" />
      </motion.div>
    </div>
  );
}
export default memo(BasicHead);

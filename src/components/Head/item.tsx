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
        className="h-screen w-full relative"
        style={{
          backgroundImage: `url('${img}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        initial={{
          opacity: 0,
          backgroundColor: 'black',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        animate={{
          opacity: 1,
          background: `url('${img}')`,
          backgroundColor: 'black',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        transition={{ type: 'just', duration: 0.8, ease: 'easeIn' }}
        exit={{
          opacity: 0,
          background: `url('${img}')`,
          backgroundSize: 'cover',
          backgroundColor: 'black',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="min-h-[700px] md:min-h-[600px] absolute w-full p-4 md:p-7 bottom-0 flex items-center justify-end flex-col">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'just', duration: 0.3, ease: 'easeInOut' }}
              exit={{ opacity: 0, y: 25 }}
            >
              <H2 title={title} center />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'just',
                duration: 0.3,
                ease: 'easeInOut',
                delay: 0.3,
              }}
              exit={{ opacity: 0, y: 25 }}
            >
              <H5 title={desc} white />
              {button && (
                <div className="mt-3 flex items-center justify-center">
                  <Link href={button.link}>
                    <Button white>{button.value}</Button>
                  </Link>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

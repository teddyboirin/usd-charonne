'use client';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import Head from '@/components/Head';
import ImageSide from '@/components/ImageSide';
import LastResults from '@/components/LastResults';
import H2 from '@/components/Titles/h2';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef(null);
  const refResults = useRef(null);
  const isInViewTitle = useInView(ref, { once: false });
  const isInViewResults = useInView(ref, { once: false });
  return (
    <>
      <Head />
      <section className="bg-black p-6 w-full flex flex-col md:items-center gap-6">
        <div
          ref={ref}
          style={{
            transform: isInViewTitle ? 'none' : 'translateY(25px)',
            opacity: isInViewTitle ? 1 : 0,
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <H2 title="Derniers résultats" uppercase center />
        </div>
        <div
          ref={refResults}
          style={{
            transform: isInViewResults ? 'none' : 'translateY(25px)',
            opacity: isInViewResults ? 1 : 0,
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <LastResults />
        </div>
      </section>
      <ImageSide
        title="title1"
        content="text"
        image="https://placehold.co/600"
        color="black"
      />
      <ImageSide
        color="white"
        title="title1"
        content="text"
        image="https://placehold.co/600"
        reverse
      />
    </>
  );
}

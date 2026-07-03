'use client';
import { memo } from 'react';
import H3 from '../Titles/h3';
import Markdown from 'react-markdown';
import ScrollReveal from '../ScrollReveal';

interface Props {
  title: string;
  content?: string;
  image?: string | null;
  id?: string;
  reverse?: boolean;
  children?: JSX.Element;
  color: 'black' | 'white';
}

function hasValidImage(image?: string | null): boolean {
  if (!image) return false;
  const trimmed = image.trim();
  return Boolean(trimmed) && trimmed !== 'undefined' && trimmed !== 'null';
}

function ImageSide({
  title,
  content,
  id,
  image,
  reverse,
  children,
  color,
}: Props) {
  const isDark = color === 'black';
  const showImage = hasValidImage(image);

  return (
    <section
      id={id || ''}
      className={`w-full scroll-mt-28 ${
        isDark ? 'bg-dark-1' : 'bg-gray-0'
      } flex flex-col ${
        showImage ? `md:min-h-[560px] ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}` : ''
      }`}
    >
      <ScrollReveal
        className={`px-4 py-8 md:p-10 lg:p-12 flex flex-col justify-center ${
          showImage ? 'md:w-1/2' : 'w-full max-w-3xl mx-auto'
        }`}
      >
        <div className="w-12 h-1 gradient_brand mb-5" />
        <H3 title={title} color={isDark ? 'white' : 'black'} />
        <div
          className={`text-14 md:text-16 mt-4 markdown-content leading-relaxed ${
            isDark ? 'text-white/80' : 'text-gray-2'
          }`}
        >
          <Markdown>{content}</Markdown>
        </div>
        {children || ''}
      </ScrollReveal>

      {showImage && (
        <ScrollReveal
          delay={0.15}
          className="h-[320px] md:h-auto w-full md:w-1/2 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 scale-100 hover:scale-105 transition-transform duration-700"
            style={{
              background: `url("${image}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className={`absolute inset-0 ${isDark ? 'bg-red/10' : 'bg-blue/5'}`}
          />
        </ScrollReveal>
      )}
    </section>
  );
}
export default memo(ImageSide);

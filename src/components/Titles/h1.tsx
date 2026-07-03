import { memo } from 'react';

interface Props {
  title: string;
  className?: string;
}

function H1({ title, className }: Props) {
  return (
    <h1
      className={`font-display text-4xl md:text-6xl font-bold text-white text-center uppercase tracking-wide ${
        className || ''
      }`}
    >
      {title}
    </h1>
  );
}

export default memo(H1);

import { memo } from 'react';

interface Props {
  title: string;
  className?: string;
}

function H1({ title, className }: Props) {
  return (
    <h1
      className={`text-4xl md:text-6xl font-extrabold text-white text-center ${
        className || ''
      }`}
    >
      {title}
    </h1>
  );
}

export default memo(H1);

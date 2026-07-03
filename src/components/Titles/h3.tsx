import { memo } from 'react';

interface Props {
  title: string;
  className?: string;
  center?: boolean;
  color?: 'black' | 'white';
}

function H3({ title, center, color = 'white', className }: Props) {
  return (
    <h3
      className={`font-display ${className || ''} text-2xl md:text-5xl font-bold uppercase tracking-wide ${
        color === 'black' ? 'text-dark-1' : ''
      } ${color === 'white' ? 'text-white' : ''} ${
        center ? 'text-center' : ''
      }`}
    >
      {title}
    </h3>
  );
}

export default memo(H3);

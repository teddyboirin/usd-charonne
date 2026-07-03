import { memo } from 'react';

interface Props {
  title: string;
  className?: string;
  uppercase?: boolean;
  center?: boolean;
  color?: 'black' | 'white';
}

function H2({ title, center, color = 'white', className, uppercase }: Props) {
  return (
    <h2
      className={`font-display ${className || ''} text-3xl md:text-hero font-bold ${
        color === 'black' ? 'text-dark-1' : ''
      } ${color === 'white' ? 'text-white' : ''} ${
        center ? 'text-center' : ''
      } ${uppercase ? 'uppercase tracking-wide' : ''}`}
    >
      {title}
    </h2>
  );
}

export default memo(H2);

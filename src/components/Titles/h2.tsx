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
    <h3
      className={`${className || ''} text-3xl md:text-5xl ${
        color === 'black' ? 'text-dark-1' : ''
      } ${color === 'white' ? 'text-white' : ''} ${
        center ? 'text-center' : ''
      } ${uppercase ? 'uppercase' : ''}`}
    >
      {title}
    </h3>
  );
}

export default memo(H2);

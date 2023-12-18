import { memo } from 'react';

interface Props {
  title: string;
  center?: boolean;
  uppercase?: boolean;
  color?: 'white' | 'black';
}

function H4({ title, center, uppercase, color = 'white' }: Props) {
  return (
    <h3
      className={`text-xl md:text-3xl font-semibold ${color === 'white' ? 'text-white' : ''} ${color === 'black' ? 'text-dark-1' :''} ${
        center ? 'text-center' : ''
      } ${uppercase ? 'uppercase' : ''}`}
    >
      {title}
    </h3>
  );
}

export default memo(H4);

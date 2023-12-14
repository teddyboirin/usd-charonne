import { memo } from 'react';

interface Props {
  title: string;
  center?: boolean;
  color: 'black' | 'white';
};

function H3({ title, center, color }: Props) {
  return (
    <h3 className={`text-2xl md:text-5xl font-extrabold ${color === 'black' ? 'text-dark-1' : ''} ${color === 'white' ? 'text-white' : ''} ${center ? 'text-center' : ''}`}>
      {title}
    </h3>
  );
}

export default memo(H3);

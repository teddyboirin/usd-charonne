import { memo } from 'react';

interface Props {
  title: string;
  center?: boolean;
  uppercase?: boolean;
}

function H4({ title, center, uppercase }: Props) {
  return (
    <h3
      className={`text-xl md:text-3xl font-semibold text-white ${
        center ? 'text-center' : ''
      } ${uppercase ? 'uppercase' : ''}`}
    >
      {title}
    </h3>
  );
}

export default memo(H4);

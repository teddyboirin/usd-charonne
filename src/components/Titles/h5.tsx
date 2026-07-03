import { memo } from 'react';

interface Props {
  title: string;
  center?: boolean;
  red?: boolean;
  white?: boolean;
}

function H5({ title, red, white, center }: Props) {
  return (
    <h5
      className={`text-16 md:text-18 font-normal leading-relaxed ${
        center ? 'text-center' : ''
      } ${red ? 'text-red' : ''} ${white ? 'text-white/80' : 'text-gray-2'}`}
    >
      {title}
    </h5>
  );
}

export default memo(H5);

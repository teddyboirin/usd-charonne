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
      className={`text-l md:text-xl font-semibold  ${
        center ? 'text-center' : ''
      } ${red ? 'text-red' : ''} ${white ? 'text-white' : ''}`}
    >
      {title}
    </h5>
  );
}

export default memo(H5);

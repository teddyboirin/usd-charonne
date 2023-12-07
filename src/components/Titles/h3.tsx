import { memo } from 'react';

interface Props {
  title: string;
  center?: boolean;
};

function H3({ title, center }: Props) {
  return (
    <h3 className={`text-2xl md:text-5xl font-extrabold text-white ${center ? 'text-center' : ''}`}>
      {title}
    </h3>
  );
}

export default memo(H3);

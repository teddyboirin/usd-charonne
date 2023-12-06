import { memo } from 'react';

interface Props {
  title: string;
  center?: boolean;
};

function H5({ title, center }: Props) {
  return (
    <h5 className={`text-l md:text-xl font-semibold text-red ${center ? 'text-center' : ''}`}>
      {title}
    </h5>
  );
}

export default memo(H5);

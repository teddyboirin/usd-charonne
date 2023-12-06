import { memo } from 'react';

interface Props {
  title: string;
};

function H4({ title }: Props) {
  return (
    <h3 className="text-xl md:text-3xl font-semibold text-white text-center">
      {title}
    </h3>
  );
}

export default memo(H4);

import { memo } from 'react';

interface Props {
  title: string;
}

function H2({title}: Props) {
  return <h2 className="text-3xl md:text-5xl font-semibold text-white text-center">{title}</h2>;
}

export default memo(H2);

import { memo } from 'react';

interface Props {
  title: string;
  uppercase?: boolean;
  center?: boolean;
}

function H2({title, uppercase, center}: Props) {
  return <h2 className={`text-3xl md:text-5xl font-semibold text-white ${center ? 'text-center' : ''} ${uppercase ? 'uppercase' : ''}`}>{title}</h2>;
}

export default memo(H2);

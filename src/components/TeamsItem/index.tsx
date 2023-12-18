import { memo } from 'react';
import H3 from '../Titles/h3';
import Link from 'next/link';

interface Props {
  title: string;
  img: string;
  link: string;
}

function TeamsItem({ title, img, link }: Props) {
  return (
    <Link href={link} className="relative">
      <div
        className="h-[585px] w-full flex items-center z-[10] justify-center p-6"
        style={{
          background: `url(${img})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <H3 title={title} center className="z-[10]" />
      </div>
      <div className="absolute h-full w-full bg-black top-0 left-0 opacity-30"></div>
    </Link>
  );
}
export default memo(TeamsItem);

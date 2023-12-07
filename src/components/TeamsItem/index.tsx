import { memo } from 'react';
import H3 from '../Titles/h3';

interface Props {
  title: string;
  img: string;
  link: string;
}

function TeamsItem({ title, img, link }: Props) {
  return (
    <a href={link}>
      <div
        className="h-[585px] w-full flex items-center justify-center p-6"
        style={{
          background: `url(${img})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <H3 title={title} center />
      </div>
    </a>
  );
}
export default memo(TeamsItem);

import { memo } from 'react';
import H3 from '../Titles/h3';

interface Props {
    title: string;
    content: string;
    image: string;
    reverse?: boolean; 
}

function ImageSide({title, content, image, reverse}: Props) {
  return (
    <section className={`w-full bg-dark-1 flex md:min-h-[600px] flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className="md:w-1/2 px-4 py-6 md:p-6 flex flex-col justify-center">
        <H3 title={title} />
        <p className="text-14 md:text-16 mt-3 text-white">{content}</p>
      </div>
      <div
        className="h-[300px] md:h-auto w-full md:w-1/2"
        style={{
          background: `url("${image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </section>
  );
}
export default memo(ImageSide);
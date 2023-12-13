import { memo } from 'react';
import H3 from '../Titles/h3';
import Markdown from 'react-markdown';

interface Props {
  title: string;
  content?: string;
  image: string;
  id?: string;
  reverse?: boolean;
  children?: JSX.Element;
  color: 'black' | 'white';
}

function ImageSide({
  title,
  content,
  id,
  image,
  reverse,
  children,
  color,
}: Props) {
  return (
    <section
      id={id || ''}
      className={`w-full ${
        color === 'black' ? 'bg-dark-1' : 'bg-gray-0'
      } flex md:min-h-[600px] flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <div className="md:w-1/2 px-4 py-6 md:p-6 flex flex-col justify-center">
        <H3 title={title} color={color === 'black' ? 'white' : 'black'} />
        <p
          className={`text-14 md:text-16 mt-3 ${
            color === 'black' ? 'text-white' : 'text-dark-1'
          }`}
        >
          <Markdown>{content}</Markdown>
        </p>
        {children || ''}
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

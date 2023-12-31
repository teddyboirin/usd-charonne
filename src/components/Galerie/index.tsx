'use client';
import { isDesktop } from '@/helpers/utils';
import { useWindowSize } from 'react-use';
import Item from './Item';
import ButtonFilter from './ButtonFilter';
import 'react-image-gallery/styles/css/image-gallery.css';
import Masonry from '@mui/lab/Masonry';

export default function GlobalContainer({ data }) {
  const { width } = useWindowSize();

  return (
    <>
      <section className="w-full bg-gray-0">
        <div className="w-full flex items-center justify-center">
          <div className="flex gap-3 items-center justify-center max-w-[80%] md:max-w-[600px]">
            <ButtonFilter value="SM1" />
            <ButtonFilter value="SF1" />
            <ButtonFilter value="S1" />
          </div>
        </div>
        <div className="mt-6 w-full">
          <Masonry columns={isDesktop(width) ? 4 : 2} spacing={2}>
            {data?.data?.map((item, index) => (
              <Item
                key={index}
                imageLink={`${`http://localhost:1337`}${
                  item.attributes.photo.data.attributes.formats.large.url
                }`}
                imageLinkFull={`${`http://localhost:1337`}${
                  item.attributes.photo.data.attributes.url
                }`}
                height={Math.random() * (900 - 200) + 200}
                title={item.attributes.titre}
              />
            ))}
          </Masonry>
        </div>
      </section>
    </>
  );
}

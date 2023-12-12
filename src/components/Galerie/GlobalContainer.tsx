'use client';
import { isDesktop } from '@/helpers/utils';
import { useWindowSize } from 'react-use';
import Item from './Item';
import ButtonFilter from './ButtonFilter';
import 'react-image-gallery/styles/css/image-gallery.css';
import Masonry from '@mui/lab/Masonry';

export default function GlobalContainer() {
  const heights = [
    150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
  ];

  const { width } = useWindowSize();

  return (
    <>
      <section className="w-full bg-black">
        <div className="w-full flex items-center justify-center">
          <div className="mb-4 flex gap-3 items-center justify-center max-w-[80%] md:max-w-[600px]">
            <ButtonFilter value="SM1" />
            <ButtonFilter value="SF1" />
            <ButtonFilter value="S1" />
          </div>
        </div>
        <div className="mt-6 w-full">
          <Masonry columns={isDesktop(width) ? 4 : 2} spacing={2}>
            {heights.map((height, index) => (
              <Item
                key={index}
                imageLink="https://placehold.co/800x800/jpg"
                height={Math.random() * (900 - 200) + 200}
              />
            ))}
          </Masonry>
        </div>
      </section>
    </>
  );
}

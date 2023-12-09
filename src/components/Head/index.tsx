'use client';
import {
  Autoplay,
  EffectFade,
  Keyboard,
  Pagination,
  Navigation,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnimatePresence, motion } from 'framer-motion';
import H2 from '../Titles/h2';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import H5 from '../Titles/h5';
type Props = {
  title: string;
  desc: string;
  img: string;
};

const Item = ({ title, desc, img }: Props) => {
  return (
    <div
      className="h-screen bg-black w-full relative"
      style={{
        backgroundImage: `url('${img}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="min-h-[700px] md:min-h-[600px] absolute w-full p-4 md:p-7 gradient_head bottom-0 flex items-center justify-end flex-col">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'just', duration: 0.3, ease: 'easeInOut' }}
            exit={{ opacity: 0, y: 25 }}
          >
            <H2 title={title} center />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'just',
              duration: 0.3,
              ease: 'easeInOut',
              delay: 0.3,
            }}
            exit={{ opacity: 0, y: 25 }}
          >
            <H5 title={desc} white />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function Head() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Item
            title="MATCH SÉNIORS 1 VS FRESNES"
            desc="24 NOV 2023 20:30"
            img="./assets/bg-head.jpg"
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Item
            title="MATCH SÉNIORS 1F VS LOS ANGELES"
            desc="17 DÉC 2023 20:30"
            img="https://placehold.co/800x300"
          />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

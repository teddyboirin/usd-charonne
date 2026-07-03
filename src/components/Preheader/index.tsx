'use client';
import { Autoplay, Navigation } from 'swiper/modules';
import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Preheader({ data }) {
  return (
    <div className="fixed top-0 z-50 flex items-center justify-center w-full py-2 bg-dark-2 text-white text-11 md:text-13 border-b border-white/10">
      <div className="hidden md:flex items-center gap-2 mr-4">
        <span className="inline-block w-2 h-2 rounded-full bg-red animate-pulse" />
        <span className="font-display uppercase tracking-widest text-accent text-11">
          Pré-National
        </span>
      </div>
      <Swiper
        slidesPerView={1}
        direction="vertical"
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="preheader-swiper w-full md:w-[50%] max-h-[32px]"
      >
        {data?.length ? (
          data.map((item, index) => (
            <SwiperSlide
              className="text-center flex items-center justify-center"
              key={index}
            >
              <p className="text-center flex items-center justify-center text-gray-4">
                {item.attributes.texte}
              </p>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide className="text-center flex items-center justify-center">
            <p className="text-gray-4">USD Charonne — Club de basket Paris 20e</p>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}
export default memo(Preheader);

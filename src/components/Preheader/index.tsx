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
    <div className="absolute top-0 flex items-center justify-center w-full p-1.5 bg-dark-1 text-white z-50 text-11 md:text-14 max-h-[40px]">
      <Swiper
        slidesPerView={1}
        direction="vertical"
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="preheader-swiper w-full md:w-[45%] max-h-[inherit]"
      >
        {data.map((item, index) => (
          <SwiperSlide
            className="text-center flex items-center justify-center"
            key={index}
          >
            <p className="h-full text-center flex items-center justify-center">
              {item.attributes.texte}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default memo(Preheader);

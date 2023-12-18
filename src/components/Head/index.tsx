'use client';
import { Autoplay, Keyboard, Pagination, Navigation } from 'swiper/modules';
import { AnimatePresence, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import SliderItem from './item';

export default function Head({ data }: any) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        effect={'fade'}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Keyboard, Pagination, Navigation]}
      >
        {data?.data.map((item, index) => (
          <SwiperSlide key={index}>
            <SliderItem
              title={item.attributes.titre}
              desc={item.attributes.sous_titre}
              img={`${`http://localhost:1337`}${
                item.attributes.photo?.data?.attributes?.url
              }`}
              button={
                item.attributes.button
                  ? {
                      value: item.attributes.button_content,
                      link: item.attributes.lien,
                    }
                  : false
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

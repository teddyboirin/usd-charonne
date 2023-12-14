import { fetcher } from '@/helpers/utils';
import React from 'react';
import SliderItem from './item';
import { SwiperSlide } from 'swiper/react';

export default async function Slider() {
  const data = await fetcher('http://localhost:1337/api/sliders?populate=*');

  return data.map((item, index) => (
    <SwiperSlide key={index}>
      <SliderItem
        title={item.attributes.titre}
        desc={item.attributes.sous_titre}
        img="./assets/bg-head.jpg"
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
  ));
}

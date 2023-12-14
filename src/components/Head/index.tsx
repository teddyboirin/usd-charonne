'use client'
import { Autoplay, Keyboard, Pagination, Navigation } from 'swiper/modules';
import { AnimatePresence, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SliderItem from './item';

export default function Head({ data }: any) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Keyboard, Pagination, Navigation]}
      >
        {data?.map((item, index) => (
          <AnimatePresence key={index}>
            <motion.div
              initial={{ opacity: 0, left: 0, top: 0 }}
              animate={{ opacity: 1, left: 0, top: 0 }}
              transition={{ duration: 2 }}
              exit={{ opacity: 0, left: 0, top: 0 }}
            >
              <SwiperSlide>
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
            </motion.div>
          </AnimatePresence>
        ))}
      </Swiper>
    </>
  );
}

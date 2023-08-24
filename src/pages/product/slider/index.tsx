import styles from './slider.module.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Mousewheel,
} from 'swiper';

import 'swiper/swiper-bundle.min.css';

interface SliderProps {
  images: string[];
}

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Keyboard, Mousewheel]);

const Slider: React.FC<SliderProps> = ({ images }): JSX.Element => {
  return (
    <>
      {styles['button-next']}
      <Swiper
        loop={true}
        slidesPerView={1}
        slidesPerGroup={1}
        navigation
        pagination={{ clickable: true }}
        mousewheel
        keyboard={{ enabled: true }}
        className={styles.container + ' ' + 'Swiper'}
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrl} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;

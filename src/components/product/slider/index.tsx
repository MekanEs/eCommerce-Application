import styles from './slider.module.scss';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Keyboard,
  Mousewheel,
} from 'swiper';

import 'swiper/swiper-bundle.min.css';
import ModalSlider from '../modalSlider';

interface SliderProps {
  images: string[];
}

SwiperCore.use([Navigation, Pagination, A11y, Keyboard, Mousewheel]);

const Slider: React.FC<SliderProps> = ({ images }): JSX.Element => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const openModal = (imageUrl: string): void => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = (): void => {
    setSelectedImage('');
    setModalOpen(false);
  };

  const showNavigation = images.length > 1;

  return (
    <>
      {modalOpen && (
        <ModalSlider
          images={images}
          selectedImage={selectedImage}
          closeModal={closeModal}
        />
      )}

      <Swiper
        loop={showNavigation}
        slidesPerView={1}
        slidesPerGroup={1}
        navigation={{
          prevEl: '.' + styles['swiper-button-prev'],
          nextEl: '.' + styles['swiper-button-next'],
        }}
        pagination={{ el: '.' + styles['swiper-pagination'], clickable: true }}
        mousewheel={showNavigation}
        keyboard={{ enabled: showNavigation }}
        className={styles.container + ' ' + 'Swiper'}
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img
              src={imageUrl}
              alt={`Slide ${index}`}
              onClick={(): void => openModal(imageUrl)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles['swiper-navigation']}>
        <div className={styles['swiper-button-prev']}></div>
        <div className={styles['swiper-button-next']}></div>
      </div>
      <div className={styles['swiper-pagination']}></div>
    </>
  );
};

export default Slider;

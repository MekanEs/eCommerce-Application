/* eslint-disable max-lines-per-function */
import styles from './slider.module.scss';
import React, { useState } from 'react';
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
import ModalSlider from '../modalSlider';

interface SliderProps {
  images: string[];
}

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Keyboard, Mousewheel]);

const Slider: React.FC<SliderProps> = ({ images }): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageUrl: string): void => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = (): void => {
    setSelectedImage('');
    setModalOpen(false);
  };
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
            <img
              src={imageUrl}
              alt={`Slide ${index}`}
              onClick={(): void => openModal(imageUrl)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;

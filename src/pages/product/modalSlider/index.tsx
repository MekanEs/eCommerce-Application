import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import styles from './modalSlider.module.scss';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Mousewheel,
} from 'swiper';

interface ModalSliderProps {
  images: string[];
  selectedImage: string;
  closeModal: () => void;
}

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Keyboard, Mousewheel]);

export const ModalSlider: React.FC<ModalSliderProps> = ({
  images,
  selectedImage,
  closeModal,
}): JSX.Element => {
  return (
    <div className={styles.modal}>
      <div className={styles['modal-content']}>
        <span className={styles['close-button']} onClick={closeModal}>
          X
        </span>
        <Swiper
          loop={true}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          initialSlide={images.indexOf(selectedImage)}
          mousewheel
          keyboard={{ enabled: true }}
        >
          {images.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img src={imageUrl} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ModalSlider;

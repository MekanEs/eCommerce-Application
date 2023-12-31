import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import styles from './modalSlider.module.scss';

import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Keyboard,
  Mousewheel,
} from 'swiper';

interface ModalSliderProps {
  images: string[];
  selectedImage: string;
  closeModal: () => void;
}

SwiperCore.use([Navigation, Pagination, A11y, Keyboard, Mousewheel]);

export const ModalSlider: React.FC<ModalSliderProps> = ({
  images,
  selectedImage,
  closeModal,
}): JSX.Element => {
  const modalRef = useRef(null);

  const handleCloseModal = (event: React.MouseEvent<HTMLElement>): void => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  const showNavigation = images.length > 1;

  return (
    <div className={styles.modal} ref={modalRef} onClick={handleCloseModal}>
      <div className={styles['modal-content']}>
        <span className={styles['close-button']} onClick={closeModal}>
          x
        </span>
        <Swiper
          loop={showNavigation}
          slidesPerView={1}
          navigation={{
            prevEl: '.' + styles['swiper-button-prev'],
            nextEl: '.' + styles['swiper-button-next'],
          }}
          pagination={{
            el: '.' + styles['swiper-pagination'],
            clickable: true,
          }}
          initialSlide={images.indexOf(selectedImage)}
          mousewheel={showNavigation}
          keyboard={{ enabled: showNavigation }}
        >
          {images.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img src={imageUrl} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles['swiper-navigation']}>
          <div className={styles['swiper-button-prev']}></div>
          <div className={styles['swiper-button-next']}></div>
        </div>
        <div className={styles['swiper-pagination']}></div>
      </div>
    </div>
  );
};

export default ModalSlider;

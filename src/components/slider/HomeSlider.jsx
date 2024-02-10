import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './home.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function HomeSlider() {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide> <img src="./assets/coding/slide1.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="./assets/coding/slide2.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="./assets/coding/slide3.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="./assets/coding/slide4.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="./assets/coding/slide5.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="./assets/coding/slide1.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="./assets/coding/slide2.jpg" alt="" /> </SwiperSlide>

            </Swiper>
        </>
    );
}

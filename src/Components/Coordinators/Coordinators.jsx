import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Coordinators.css';
import Alumni from '../alumnicard'
// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Alumni/></SwiperSlide>
        <SwiperSlide><Alumni/></SwiperSlide>
        <SwiperSlide><Alumni/></SwiperSlide>
        <SwiperSlide><Alumni/></SwiperSlide>
        <SwiperSlide><Alumni/></SwiperSlide>
        <SwiperSlide><Alumni/></SwiperSlide>
        <SwiperSlide><Alumni/></SwiperSlide>
        <SwiperSlide><Alumni/></SwiperSlide>
        <SwiperSlide><Alumni/></SwiperSlide>
      </Swiper>
    </>
  );
}

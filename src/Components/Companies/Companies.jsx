import CompCard from '../CompCard/CompCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Companies.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  const [companies, setCompanies] = useState([]);


  useEffect(() => {
    axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/')
      .then(response => {
        const data = response.data;
        setCompanies(data.companies);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
      <Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  }}
  pagination={true}
  modules={[EffectCoverflow, Pagination]}
  className="mySwiper"
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  onSwiper={(swiper) => console.log('Swiper instance:', swiper)}
  onSlideChange={() => console.log('Slide index changed')}
>
  {companies.map((company, index) => (
    <SwiperSlide key={index} className='mySwiper-slide'>
      <CompCard
        imgSrc={company.logo}
        imgAlt={company.companyname}
        CompanyName={company.companyname}
        NoOfStudPlaced={company.numberOfStudentsPlaced}
        Avgpkg={company.avgPackage}
        LinkLabel='Check Website'
        link={company.link}
      />
    </SwiperSlide>
  ))}
</Swiper>


    </>
  );
}

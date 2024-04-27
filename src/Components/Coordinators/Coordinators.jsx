import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Coordinators.css';
import Alumni from '../alumnicard'
// import required modules
import { Pagination } from 'swiper/modules';
// import image from '../../Assets/edusity_assets/user-3.png'

export default function App() {
  const [tnp, setTnp] = useState([]);

  useEffect(() => {
    axios.get('https://placement-internship-tracker-backend.vercel.app/api/')
      .then(response => {
        const data = response.data;
        setTnp(data.tnp);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={'3'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="Swiper-Coordinators"
      >
        {tnp.map((person, index) => (
          <SwiperSlide key={index} className='Coordinator'>
            <Alumni
              imageSrc={person.image}
              name={person.name}
              jobTitle={person.position}
              email={person.tnpemailId}
              phone={person.department}
              linkedinlink={person.linkedin}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

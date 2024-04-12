import React from 'react'
import './Hero.css'
import dark_arrow from '../../Assets/dark-arrow.png'
import Title from '../Title/Title'
import Programs from '../programs/programs'
import Modal from '../Modal/Modal'
import Statistics from '../Statistics/Statistics'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'

const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <div className="hero-text">
          <h1>
            <span className='animated-text'>Unlock Opportunities </span>
            <div className='type'>Your Guide to Internships and Placements </div>
            at PICT..
          </h1>
          <p>Discover valuable resources, senoir guidance, and daily updates of tnp cell drives.Unlock doors to top companies, prestigious organizations, and exciting career opportunities with our support. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, molestias.</p>
          <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
      </div>
      <div className="container">
        <Title subTitle='OUR ACHIEVEMENTS' title='DREAM OFFERS' />
        <Programs />
        <Modal />
      </div>
      <Title subTitle='STATISTICS' title='Strike our graph' />
      <Statistics />
      <Title subTitle='TESTIMONIALS' title='Meet Our Coordinators' />
      <Testimonials />
      <Title subTitle='Contact Us' title='Get in Touch' />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Hero
import React from 'react'
import './Hero.css'
import dark_arrow from '../../Assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
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
  )
}

export default Hero
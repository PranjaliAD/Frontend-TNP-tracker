import React from 'react'
import './programs.css'
import program_1 from '../../Assets/barclays.jpg'
import program_2 from '../../Assets/edusity_assets/progran-2-1.jpg'
import program_3 from '../../Assets/edusity_assets/program-3-1.avif'
import program_icon_1 from '../../Assets/edusity_assets/program-icon-1.png'
import program_icon_2 from '../../Assets/edusity_assets/program-icon-2.png'
import program_icon_3 from '../../Assets/edusity_assets/program-icon-3.png'
// import Carousel from 'react-elastic-carousel'
const programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <h2>30 lpa</h2>
            <p>20+ offers</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <h2>20 lpa</h2>
            <p>60+ offers</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <h2>35 lpa</h2>
            <p>50+ offers</p>
        </div>
      </div>
    </div>
  )
}

export default programs

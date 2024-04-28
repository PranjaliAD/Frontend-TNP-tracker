import React from 'react'
import './CompCard.css'
const CompCard = ({
    imgSrc,
    imgAlt,
    CompanyName,
    NoOfStudPlaced,
    Avgpkg,
    // CompDesp,
    LinkLabel,
    link,
}) => {
  return (
    <div className="card-container">
      <img src={imgSrc} alt={imgAlt} className='card-img'/>
      <h2 className='card-title'>{CompanyName}</h2>
      <h4 className='No-Of-stud-placed'><span className='first-heading'>Students Placed</span> : {NoOfStudPlaced}</h4>
      <h4 className='Average-package'><span className='first-heading'>Average Package</span> : {Avgpkg}</h4>
      {/* <p className='card-description'>{CompDesp}</p> */}
      <a href={link} className='company-card-btn'>{LinkLabel}</a>
    </div>
  )
}
export default CompCard;
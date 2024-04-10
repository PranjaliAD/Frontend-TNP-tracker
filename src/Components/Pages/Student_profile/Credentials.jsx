import React, { useState } from 'react';
import './Credentials.css'

const Credentials = () => {

  return (
    <div className='container1'>
      <h2 className='name'>Pranjali Dharmadhikari</h2>
      <h2 className='reg_id'>I2K221467684</h2>
      <h3 className='prn no'>722756378E</h3>
      <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quia nam, obcaecati omnis dicta provident!</p>
      <hr />
      <div className="mail-no">
        <div className="item1">
          <h4>Email: </h4> <p>abcd1234@gmail.com</p>
        </div>
        <div className="vertical-line"></div>
        <div className="item1">
          <h4>Contact No.: </h4> <p>7987567674</p>
        </div>
      </div>
      <hr />
      <button className='edit'>Edit Profile</button>
    </div>
  )
}

export default Credentials
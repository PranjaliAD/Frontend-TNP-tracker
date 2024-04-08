import React from 'react';
import './Contri_section.css';

const Contri_section = () => {
  return (
    <div className='contri-container'>
        <h2>Contributions</h2>
        <hr />
        <div className="question-container">
          <h3>Your Contributions</h3>
          <p>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore magnam explicabo itaque praesentium tenetur excepturi.</p>
          <p>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora assumenda ad error sequi labore rem aut voluptatibus!</p>
        </div>
        <button>Contribute now</button>
    </div>
  )
}

export default Contri_section
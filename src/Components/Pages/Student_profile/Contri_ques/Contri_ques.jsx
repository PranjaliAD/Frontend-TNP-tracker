import React, { useState } from 'react';
import './Contri_ques.css'; 
import '@fortawesome/fontawesome-free/css/all.css';

function Contri_ques() {
  return (
    <>

      <header className='head'>
        <div class="shape-outer ellipse">
          <div class="shape-inner ellipse"></div>
        </div>
        <div class="shape-outer circle1">
          <div class="shape-inner circle1"></div>
        </div>
        <div class="shape-outer circle2">
          <div class="shape-inner circle2"></div>
        </div>
        <div class="shape-outer circle3">
          <div class="shape-inner circle3"></div>
        </div>
        <div class="shape-outer circle4">
          <div class="shape-inner circle4"></div>
        </div>
        
      </header>
      <div className="container">

        <Online_q />
        <Interwive_q />
       
      </div>
    </>
  );
}

function Online_q() {
  const [showInput, setShowInput] = useState(false);
  const [inputs, setInputs] = useState(['']);
  const [submittedInputs, setSubmittedInputs] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleToggleInput = () => {
    setShowInput(!showInput);
  };

  const addInput = () => {
    setInputs([...inputs, '']);
  };

  const handleSubmit = () => {
    setSubmittedInputs([...submittedInputs, ...inputs]);
    setInputs(['']); // Clear inputs after submission
    setShowInput(false); // Hide input fields after submission
  };

  return (
    <div className="input-button-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

      <button onClick={handleToggleInput} id='OQ'>Online quetiones</button>
      {isHovered && (
        <div className="submitted-inputs">
          {submittedInputs.map((input, index) => (
            <p key={index} className='Questions_no'>Quetiones {index + 1}: {input}</p>
          ))}
        </div>
      )}
      {showInput && (
        <div className="component">
          
          {inputs.map((input, index) => (
            <input
              key={index}
              type="text"
              value={input}
              onChange={(e) => handleChange(index, e.target.value)}
              className="input-field"
              placeholder={`Question ${index + 1}`}
            />
            
          ))}
          <button onClick={addInput} id='AI'><i class='fas fa-pencil-alt'></i> Add Input</button>
          <button onClick={handleSubmit} id='SB'><i className="fas fa-thumbs-up"></i>  Submit</button>
        </div>
      )}
    </div>
  );
}

function Interwive_q() {
  const [showInput, setShowInput] = useState(false);
  const [inputs, setInputs] = useState(['']);
  const [submittedInputs, setSubmittedInputs] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleToggleInput = () => {
    setShowInput(!showInput);
  };

  const addInput = () => {
    setInputs([...inputs, '']);
  };

  const handleSubmit = () => {
    setSubmittedInputs([...submittedInputs, ...inputs]);
    setInputs(['']); // Clear inputs after submission
    setShowInput(false); // Hide input fields after submission
  };

  return (
    <div className="input-button-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

      <button onClick={handleToggleInput} id='IQ'>Interwive quetiones</button>
      {isHovered && (
        <div className="submitted-inputs">
          {submittedInputs.map((input, index) => (
            <p key={index} className='Questions_no'>Quetiones {index + 1}: {input}</p>
          ))}
        </div>
      )}
      {showInput && (
        <div className="component">
          {inputs.map((input, index) => (
            <input
              key={index}
              type="text"
              value={input}
              onChange={(e) => handleChange(index, e.target.value)}
              className="input-field"
              placeholder={`Question ${index + 1}`}
            />
          ))}
          <button onClick={addInput}id='AI'> <i class='fas fa-pencil-alt'></i> Add Input</button>
          <button onClick={handleSubmit} id='SB'><i className="fas fa-thumbs-up"></i>  Submit</button>
        </div>
      )}
    </div>
  );
}


export default Contri_ques;
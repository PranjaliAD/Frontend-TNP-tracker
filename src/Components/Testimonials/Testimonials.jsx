// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import next_icon from '../../Assets/edusity_assets/next-icon.png';
// import back_icon from '../../Assets/edusity_assets/back-icon.png';

// const Testimonials = () => {
//   const [alumni, setAlumni] = useState([]);

//   useEffect(() => {
//     axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/')
//       .then(response => {
//         const data = response.data;
//         setAlumni(data.alumni);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, [alumni]);

//   const slider = useRef();
//   let tx = 0;

//   const slideForward = () => {
//     if (tx > -50) {
//       tx -= 25;
//     }
//     slider.current.style.transform = `translateX(${tx}%)`;
//   };

//   const slideBackward = () => {
//     if (tx < 0) {
//       tx += 25;
//     }
//     slider.current.style.transform = `translateX(${tx}%)`;
//   };

//   return (
//     <div className="testimonials">
//       <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
//       <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
//       <div className="slider">
//         <ul ref={slider}>
//           {alumni.map((alumni, index) => (
//             <li key={index}>
//               <div className="slide">
//                 <div className="user-info">
//                   <img src={alumni.image} alt={alumni.name} />
//                   <div>
//                     <h3>{alumni.name}</h3>
//                     <span>{alumni.department}</span>
//                   </div>
//                 </div>
//                 <p>{alumni.testimonial}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import next_icon from '../../Assets/edusity_assets/next-icon.png';
import back_icon from '../../Assets/edusity_assets/back-icon.png';

const Testimonials = () => {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/')
      .then(response => {
        const data = response.data;
        setAlumni(data.alumni);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [alumni]);

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider" style={{ overflow: 'hidden' }}>
        <ul ref={slider} className="slides">
          {alumni.map((alumni, index) => (
            <li key={index} className="slide">
              <div className="user-info">
                <img src={alumni.image} alt={alumni.name} />
                <div>
                  <h3>{alumni.name}</h3>
                  <span>{alumni.department}</span>
                </div>
              </div>
              <p>{alumni.testimonial}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;

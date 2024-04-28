// import React, { useState, useEffect } from 'react';
// import './Place_status.css';
// import axios from 'axios';

// const Place_status = () => {
//   const [showPlacementDetails, setShowPlacementDetails] = useState(false);
//   const pl_status = 'Placed'; 
//   const comp = 'BNY Mellon';
//   const pos = 'Data scientist';
//   const msg1 = "Congratulations on your placement!!.. Now you can contribute in others' success by sharing your experiences..";
//   const msg2 = "Your journey towards success is unique. Let's tailor our resources to your needs and help you succeed..";

//   const togglePlacementDetails = () => {
//     setShowPlacementDetails(!showPlacementDetails);
//   };

//   const [userData, setUserData] = useState(null);
//   const [placeData,setPlaceData] =useState(null);

//   useEffect(() => {
//     axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/students/student/?prnNo=72278496B')
//       .then(response1 => {
//         setUserData(response1.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, [userData]); 

//   useEffect(() => {
//     axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/students/student/placement/?prnNo=72278496B')
//       .then(response2 => {
//         setPlaceData(response2.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, [placeData]); 

//   return (
//     <div>
//       {userData && (
//         <div className="status-container" onClick={togglePlacementDetails}>
//           <h2 className='sh'>Placement Status: <div className={`status ${pl_status === 'Placed' ? 'placed' : 'not-placed'}`}><h4 className='st'>{userData.placementStatus}</h4></div></h2>
//         </div>
//       )}
//       {showPlacementDetails && pl_status === 'Placed' && (
//         <div className="company-placed">
//           <div className="company-info">
//             <h2 className='comp'>Comapany - {placeData.companyname}<div className="position"><h5><i>Role - {placeData.role}</i></h5></div> </h2>
//           </div>
//           <div className="offerlet">
//             <a href={placeData.offerLetter} target="_blank" rel="noopener noreferrer" className="offer_btn">Offer Letter</a>
//           </div>
//           <hr/>
//           <div className="msg">
//             <h4><i>{msg1}</i></h4>
//           </div>
//         </div>
//       )}
//       {pl_status !== 'Placed' && (
//         <div className="company-notplaced">
//           <div className="msg">
//             <h4><i>{msg2}</i></h4>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Place_status;
import React, { useState, useEffect } from 'react';
import './Place_status.css';
import axios from 'axios';
axios.defaults.baseURL='https://placement-internship-tracker-backend.vercel.app/api/students/?prnNo=${value}';

const Place_status = () => {
  const [showPlacementDetails, setShowPlacementDetails] = useState(false);
  const pl_status = 'Placed'; 
  const msg1 = "Congratulations on your placement!!.. Now you can contribute in others' success by sharing your experiences..";
  const msg2 = "Your journey towards success is unique. Let's tailor our resources to your needs and help you succeed..";

  const togglePlacementDetails = () => {
    setShowPlacementDetails(!showPlacementDetails);
  };

  const [studData, setStudData] = useState(null);

  useEffect(() => {
    // const cookies = document.cookie;
    const value=localStorage.getItem('studentsData');
      console.log(value)

      axios.get(`https://placement-internship-tracker-backend.vercel.app/api/students/?prnNo=${value}`)
      .then(response => {
        setStudData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {studData && (
        <div className="status-container" onClick={togglePlacementDetails}>
          <h2 className='sh'>Placement Status: <div className={`status ${pl_status === 'Placed' ? 'placed' : 'not-placed'}`}><h4 className='st'>{studData.placementStatus}</h4></div></h2>
        </div>
      )}
      {showPlacementDetails && pl_status === 'Placed' && studData && (
        <div className="company-placed">
          <div className="company-info">
            <h2 className='comp'>Company - {studData.companyname}<div className="position"><h5><i>Role - {studData.role}</i></h5></div> </h2>
          </div>
          <hr />
          <div className="offerlet">
            <a href={studData.offerLetter} target="_blank" rel="noopener noreferrer" className="offer_btn">Offer Letter</a>
          </div>
          <hr/>
          <div className="msg">
            <h4 className='heading-placement'><i>{msg1}</i></h4>
            <h4 className='heading-placement'><i>{msg1}</i></h4>
          </div>
        </div>
      )}
      {pl_status !== 'Placed' && (
        <div className="company-notplaced">
          <div className="msg">
            <h4 className='heading-placement'><i>{msg2}</i></h4>
            <h4 className='heading-placement'><i>{msg2}</i></h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default Place_status;

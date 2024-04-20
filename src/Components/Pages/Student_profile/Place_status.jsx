import React from 'react';
import './Place_status.css';

const Place_status = () => {
  const pl_status = 'Placed'; 
  const comp = 'BNY Mellon';
  const pos = 'Data scientist';
  const msg1 = "Congratulations on your placement!!.. Now you can contribute in others' success by sharing your experiences..";
  const msg2 = "Your journey towards success is unique. Let's tailor our resources to your needs and help you succeed..";

  return (
    <div>
      <div className="status-container">
        <h2 className='heading-placement-2'>Placement Status: <div className={`status ${pl_status === 'Placed' ? 'placed' : 'not-placed'}`}><h4>{pl_status}</h4></div></h2>
      </div>
      {pl_status === 'Placed' ? (
        <div className="company-placed">
          <div className="company-info">
            <h2 className='heading-placement-2'>{comp} - <div className="position"><h5><i>{pos}</i></h5></div></h2>
          </div>
          <hr />
          <div className="offerlet">
            <button>Offer Letter</button>
          </div>
          <hr />
          <div className="msg">
            <h4 className='heading-placement'><i>{msg1}</i></h4>
          </div>
        </div>
      ) : (
        <div className="company-notplaced">
          <div className="msg">
            <h4 className='heading-placement'><i>{msg2}</i></h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default Place_status;




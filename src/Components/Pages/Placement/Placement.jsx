// import React from 'react'
// import './Placement.css'
// import Card from '../../company_cards'
// import logos from '../../../Assets/place_logo.webp'

// const Placement = () => {
//   return (
//     <div >
//         <div className="nav">
//         </div >
//         <div className='pl-body'>
//         <div className="heading">
//             <div className="text">
//                 <h1>Campus Placement Pro: Your Roadmap to Success</h1>
//                 <p>Master Your Job Interview: Access company-specific problems, guided pathways, resources, problem lists, and mock tests all in one comprehensive platform..</p>
//             </div>
//             <img src={logos} alt="" />
//         </div>
//         <div className="search">
//             <input type="text" placeholder='search..'/>
//             <button type="submit">Search</button>
//         </div>
        
//         <div className='comp-container'>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Placement

// import React from 'react'
// import './Placement.css'
// import Card from '../../company_cards'
// import logos from '../../../Assets/place_logo.webp'
// import Questions from '../../Questions/Questions';

// const Placement = () => {
//   return (
//     <div >
//         <div className="nav">
//         </div >
//         <div className='pl-body'>
//         <div className="heading">
//             <div className="text">
//                 <h1>Campus Placement Pro: Your Roadmap to Success</h1>
//                 <p>Master Your Job Interview: Access company-specific problems, guided pathways, resources, problem lists, and mock tests all in one comprehensive platform..</p>
//             </div>
//             <img src={logos} alt="" />
//         </div>
//         <div className="search">
//             <input type="text" placeholder='search..'/>
//             <button type="submit">Search</button>
//         </div>
        
//         <div className='comp-container'>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//         </div>
//         </div>
// <hr></hr>
//         <Questions/>
//     </div>
//   )
// }

// export default Placement

import React, { useState } from 'react';
import './Placement.css';
import CompanyCards from '../../company_cards';
import logos from '../../../Assets/place_logo.webp';
import Questions from '../../Questions/Questions';

const Placement = () => {
    const [selectedCompany, setSelectedCompany] = useState(null);

    const handleSolveClick = (companyName) => {
        setSelectedCompany(companyName);
    };

    return (
        <div>
            <div className="nav"></div>
            <div className='pl-body'>
                <div className="heading">
                    <div className="text">
                        <h1>Campus Placement Pro: Your Roadmap to Success</h1>
                        <p>Master Your Job Interview: Access company-specific problems, guided pathways, resources, problem lists, and mock tests all in one comprehensive platform.</p>
                    </div>
                    <img src={logos} alt="" />
                </div>
                <div className="search">
                    <input type="text" placeholder='search..' />
                    <button type="submit">Search</button>
                </div>

                <div className='comp-container'>
                    <CompanyCards onSolveClick={handleSolveClick} />
                    <CompanyCards onSolveClick={handleSolveClick} />
                    <CompanyCards onSolveClick={handleSolveClick} />
                    <CompanyCards onSolveClick={handleSolveClick} />
                    <CompanyCards onSolveClick={handleSolveClick} />
                    <CompanyCards onSolveClick={handleSolveClick} />
                </div>
            </div>
            {selectedCompany && <Questions companyName={selectedCompany} />}
        </div>
    );
};

export default Placement;

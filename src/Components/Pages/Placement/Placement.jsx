import React, { useState, useEffect } from 'react';
import './Placement.css';
import Studnav from '../../Navbar/Studnav'
import CompanyCards from '../../company_cards';
import logos from '../../../Assets/place_logo.webp';
import Questions from '../../Questions/Questions';
import axios from 'axios';

const Placement = () => {
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);

    useEffect(() => {
        axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/students/questions/?prnNo=U2FsdGVkX1/qpDs6wtRNbSA0FhiC330wq9DfvKgxDX1HDgGGAvDS8No8UHh6xIwD')
            .then(response => {
                const data = response.data;
                console.log(data);
                setCompanies(data[0].questions);
            })
            .catch(error => {
                console.error('Error fetching companies:', error);
            });
    }, []);
    

    const handleSolveClick = (companyName) => {
        setSelectedCompany(companyName);
    };
    
    return (
        <div>
            <div className="navpl"><Studnav /></div>
            <div className='pl-body'>
                <div className="heading">
                    <div className="text">
                        <h1>Campus Placement Pro: Your Roadmap to Success</h1>
                        <p>Master Your Job Interview: Access company-specific problems, guided pathways, resources, problem lists, and mock tests all in one comprehensive platform.</p>
                    </div>
                    <img src={logos} alt="" />
                </div>
                <div className="search">
                    <input type="text" placeholder='search' />
                    <button type="submit">Search</button>
                </div>

                <div className='comp-container'>
                    {companies && companies.map((company, index) => (
                        <CompanyCards
                            
                            key={index}
                            compname={company.companyname}
                            complogo={company.companylogo}
                            onSolveClick={handleSolveClick}
                        />
                    ))}
                </div>
            </div>
            {selectedCompany && <Questions companyName={selectedCompany} />}
        </div>
    );
};

export default Placement;

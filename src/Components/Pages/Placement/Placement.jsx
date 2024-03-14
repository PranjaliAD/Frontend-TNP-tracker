import React from 'react'
import './Placement.css'
import Card from '../../company_cards'
import logos from '../../../Assets/place_logo.webp'

const Placement = () => {
  return (
    <div >
        <div className="nav">
        </div >
        <div className='pl-body'>
        <div className="heading">
            <div className="text">
                <h1>Campus Placement Pro: Your Roadmap to Success</h1>
                <p>Master Your Job Interview: Access company-specific problems, guided pathways, resources, problem lists, and mock tests all in one comprehensive platform..</p>
            </div>
            <img src={logos} alt="" />
        </div>
        <div className="search">
            <input type="text" placeholder='search..'/>
            <button type="submit">Search</button>
        </div>
        
        <div className='comp-container'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        </div>
    </div>
  )
}

export default Placement
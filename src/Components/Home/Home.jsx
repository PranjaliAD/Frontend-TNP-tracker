import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import Listtask from '../StatisticsIT/List'
import CompaniesChart from '../BarChart/BarChart'
import PieChart from '../StatisticsIT/PieChart/PieChart';
import LineChart from '../LineChart/LineChart';
import PieChart2 from '../StatisticsIT/PieChart2/PieChart2'
import PieChart3 from '../StatisticsIT/PieChart3/PieChart3';
import './Home.css'
const Home = () => {
    return (
        
        <main className='main-container'>
            <div className='main-cards'>
                <div className='dash-card'>
                    <div className='dash-card-inner'>
                        <h3>Less than 5 lpa</h3>
                        <BsFillArchiveFill className='dash-card_icon'/>
                    </div>
                    <h1>130</h1>
                </div>
                <div className='dash-card'>
                    <div className='dash-card-inner'>
                        <h3>Less than 10 lpa</h3>
                        <BsFillGrid3X3GapFill className='dash-card_icon'/>
                    </div>
                    <h1>120</h1>
                </div>
                <div className='dash-card'>
                    <div className='dash-card-inner'>
                        <h3>Less than 15 lpa</h3>
                        <BsPeopleFill className='dash-card_icon'/>
                    </div>
                    <h1>190</h1>
                </div>
                <div className='dash-card'>
                    <div className='dash-card-inner'>
                        <h3>Less than 20 lpa</h3>
                        <BsFillBellFill className='dash-card_icon'/>
                    </div>
                    <h1>42</h1>
                </div>
            </div>

            <div className='charts'>
                <div className='chart-item'>
                        <h2 className="heading-home">Companies Visited in each month</h2>
                       <CompaniesChart/>
                </div>
                <div className='chart-item'>
                    <h2 className="heading-home">Companies below 10 lpa</h2>
                    <PieChart/>
                </div>
                <div className='chart-item'>
                    <h2 className="heading-home">Companies below 20 lpa and above 10 lpa</h2>
                    <PieChart2/>
                </div>
                <div className='chart-item'>
                    <h2 className="heading-home">Companies above 20 lpa</h2>
                    <PieChart3/>
                </div>
                <div className='chart-item'>
                    <h2 className="heading-home">Trend of placement</h2>
                    <LineChart/>
                </div>
                <div className='List'>
                       <Listtask/>
                </div>
            </div>
        </main>
    )
}

export default Home;

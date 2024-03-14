import React from 'react'
import './company_cards.css'
import logoc from '../Assets/google_logo.jpg'

const company_cards = () => {
    return (
        <div>
            <div className="box">
                <div className="head">
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img src={logoc} alt="Google Logo" />
                    </a>
                    <h3>Google </h3>
                </div>
                <div className="cbody">
                    <h1>25</h1>
                    <p>Total Problems</p>
                    <button>Solve</button>
                </div>
            </div>
        </div>
    )
}

export default company_cards
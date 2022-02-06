import React from 'react';
import { NavLink } from 'react-router-dom';
import './Error.css';
import img1 from './errimg.png';

const Errorpg = () => {
    return (
        <>
            <div className='err-container'>
                <div>
                    <img src={img1} alt="error img" className='err-img' />
                </div>
                <div>
                    <div className="err-text">404 ERROR</div>
                    <div className='err-para'>Sorry this page is not available.</div>
                    <NavLink to="/">Go Back</NavLink>
                </div>
            </div>
        </>
    );
};

export default Errorpg;

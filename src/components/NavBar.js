import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css";

export default function Nav() {
    return (
        <div className='nav-container'>
            <ul className='navigation-bar'>
                <li><NavLink to="/" className='link-class'> Sign Up </NavLink></li>
                <li><NavLink to="/login" className='link-class'> Log In </NavLink></li>
                <li><NavLink to="/admin/yuvi/singh" className='link-class'> Admin </NavLink></li>
            </ul>
            {/* <div>
                <input type="text" placeholder='Search' className='search-bar' />
                <button className='search-btn'>Search</button>
            </div> */}
        </div>
    );
}

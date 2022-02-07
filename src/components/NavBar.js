import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css";

export default function Nav() {
    return (
        <div className='nav-container'>
            <ul className='navigation-bar'>
                <li><NavLink to="/project-01" className='link-class'> Home </NavLink></li>
                <li><NavLink to="/admin/yuvi/singh" className='link-class'> Admin </NavLink></li>
                <li>..</li>
                <li>..</li>
                <li>..</li>
            </ul>
            {/* <div id='search-contain'>
                <input type="text" placeholder='Search' className='search-bar' />
                <button className='search-btn'>Search</button>
            </div> */}
            <div id='btn-right'>
                <NavLink to="/login" className='link-class'><button> Log In </button></NavLink>
                <NavLink to="/signup" className='link-class'><button> Sign Up </button></NavLink>
            </div>
        </div>
    );
}

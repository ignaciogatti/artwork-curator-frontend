import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () =>{
    return(
        <header id="home">
            <nav id="nav-wrap">
            <ul id="nav" className="nav">
                <li className="current">
                    <Link to="/">Artwork Curator</Link>
                </li>
                <li>
                    <Link to="/aboutme">About me</Link>
                </li>
                <li>
                    <GoogleAuth />
                </li>
            </ul>
    
            </nav>
    
        </header>


        );
};

export default Header;

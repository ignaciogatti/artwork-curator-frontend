import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import {connect} from 'react-redux';


class Header extends React.Component{

    render(){
        return(
        <header id="home">
            
            <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
                <li className="current">
                    <Link className="header-link" to="/">Artwork Curator</Link>
                </li>
                <li>
                    <Link className="header-link" to="/aboutme">About me</Link>
                </li>

                {this.props.isSignedIn && (
                    <li>
                        <Link className="header-link" to="/experiment">Experiments</Link>
                    </li>
                    )}
                    
                <li className="auth">
                    <GoogleAuth />
                </li>

            </ul>
    
            </nav>
    
        </header>
        );
    }
}


const mapStateToProps = (state) =>{
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, null)(Header);

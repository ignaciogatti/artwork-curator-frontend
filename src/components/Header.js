import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import {connect} from 'react-redux';


class Header extends React.Component{

    render(){
        return(
            <header id="home">
                <nav id="nav-wrap">
                <ul id="nav">
                    <li className="current">
                        <Link to="/">Artwork Curator</Link>
                    </li>
                    <li>
                        <Link to="/aboutme">About me</Link>
                    </li>
                    {this.props.isSignedIn && (
                        <li>
                        <Link to="/aboutme">Tests</Link>
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

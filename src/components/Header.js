import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import {connect} from 'react-redux';


class Header extends React.Component{

    render(){
        return(
        <header id="home">
            
            <button id="mobile-btn" className="ui icon button">
                <i className="big bars icon"></i>
            </button>
            <nav id="nav-wrap">

                <ul id="nav" className="nav">
                    <li className="active">
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
                    
                    {this.props.isSignedIn && (
                        <li>
                            <Link className="header-link" to="/aboutai">About DCurator</Link>
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

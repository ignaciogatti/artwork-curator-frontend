import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import GoogleAuth from './GoogleAuth';
import LanguageSelector from './LanguageSelector';
import LanguageContext from '../contexts/LanguageContext';


class Header extends React.Component{

    static contextType = LanguageContext;

    render(){
        
        let links_name = this.props.headerDescription.links_name[this.context.language];
        return(
        <header id="home">
            
            <button id="mobile-btn" className="ui icon button">
                <i className="big bars icon"></i>
            </button>
            <nav id="nav-wrap">

                <ul id="nav" className="nav">
                    <li className="header-li">
                        <Link className="header-link" to="/">{links_name.artwork_curator}</Link>
                    </li>
                    <li className="header-li">
                        <Link className="header-link" to="/aboutme">{links_name.about_me}</Link>
                    </li>
                    <li className="header-li">
                        <Link className="header-link" to="/aboutai">{links_name.about_dcurator}</Link>
                    </li>

                    {this.props.isSignedIn && (
                        <li className="header-li">
                            <Link className="header-link" to="/experiment">{links_name.experiments}</Link>
                        </li>
                        )}
                    

                    <li className="auth">
                        <GoogleAuth />
                    </li>

                    <li className="flag-li">
                        <LanguageSelector />
                    </li>



                </ul>
    
            </nav>
    
        </header>
        );
    }
}


const mapStateToProps = (state) =>{
    return { 
        isSignedIn: state.auth.isSignedIn,
        headerDescription : state.headerDescription 
    };
}

export default connect(mapStateToProps, null)(Header);

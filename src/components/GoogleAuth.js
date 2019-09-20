import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '968813464115-tn9b6dvvsua44ibt7fk87gcjsbjs7n29.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen( this.onAuthChange);
            });
        });
    }

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn){
            this.props.signIn( this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }

    renderAuthButton(){
        if (this.props.isSignedIn === null) {
            return null
        }
        if (this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="red google button" >
                    <i className="google icon" />
                    Log Out
                </button>
            );
        }else{
            return (
                <button onClick={this.onSignInClick} className="red google button">
                    <i className="google icon" />
                    Log In with Google
                </button>
            );
        }
    }

    render(){
        return(
            <React.Fragment>
                {this.renderAuthButton()}
            </React.Fragment>
        );
    };
}

const mapStateToProps = (state) =>{
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(
        mapStateToProps,
        {signIn,
        signOut}
    )(GoogleAuth);
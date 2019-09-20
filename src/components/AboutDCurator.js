import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import LanguageContext from '../contexts/LanguageContext';
import Modal from './Modal';
import GoogleAuth from './GoogleAuth';


class AboutDCurator extends React.Component{

    static contextType = LanguageContext;

    state = {showModal: false};


    hideModal = () =>{ this.setState({showModal:false})};

    renderContent(){
        return "Before you start the experiment, you must log in"
    }

    renderAction(){
         return (
            <React.Fragment>
                <GoogleAuth />
                <button 
                    className="massive ui button"
                    onClick = {this.hideModal}
                > 
                    Cancel 
                </button>
            </React.Fragment>
        );
    };

    renderButton(link){
        
        if (this.props.isSignedIn){
            return(
                <React.Fragment>
                    <Link
                        to="/experiment"
                        className="massive ui primary button"         
                        > 
                            {link}
                    </Link>
                </React.Fragment>
            );
        }else{
            return (
                <React.Fragment>
                    <button 
                        className="massive ui primary button"
                        onClick={()=>this.setState({showModal: true})}
                    >
                        {link}
                    </button>
                </React.Fragment>
            );
        }

    }


    render(){
        
        let full_description = this.props.experimentDescription.full_description[this.context.language];
        return(
            <section id="aboutai">
                <div className="row">
                    <div className="six columns main-col">
                        <h2>{full_description.about_dcurator.title}</h2>
                        <p>
                            {full_description.about_dcurator.paragraph_1}
                            <br/>
                            {full_description.about_dcurator.paragraph_2}
                        </p>
                    </div>
                </div>        
                <div className="row">
                    <div className="six columns main-col">
                        <h2>{full_description.about_experiment.title}</h2>
                        <p>
                            {full_description.about_experiment.paragraph_1}
                            <br/>
                            {full_description.about_experiment.paragraph_2}
                            <br/>
                            {full_description.about_experiment.paragraph_3}
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="six columns main-col button-row">
                        {this.renderButton(full_description.link)}
                    </div>
                </div>
                {this.state.showModal && (
                    <Modal
                        show={this.state.showModal} 
                        handleClose={this.hideModal}
                        title = "Log In"
                        content = {this.renderContent()}
                        actions={this.renderAction()}
                        onDismiss = {()=>this.setState({showModal:false})}
                    />
                )}
            </section>
        );
    }
}

const mapStateToProps = state =>{
    return { 
        experimentDescription : state.experimentDescription,
        isSignedIn: state.auth.isSignedIn
    };
}


export default connect(mapStateToProps,null)(AboutDCurator);
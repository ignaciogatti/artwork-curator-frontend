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


    componentDidUpdate(prevProps){
        if (prevProps.isSignedIn !== this.props.isSignedIn && this.props.isSignedIn){
            this.setState({showModal: false})
        }

    }

    renderContent(content){
        return content;
    }

    renderAction(cancelButton){
         return (
            <React.Fragment>
                <GoogleAuth />
                <button 
                    className="massive ui button"
                    onClick = {this.hideModal}
                > 
                    {cancelButton} 
                </button>
            </React.Fragment>
        );
    };

    renderButton(link){
        
        if (this.props.isSignedIn){
            return(
                <React.Fragment>
                    <Link
                        to="/"
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
        let modal_description = this.props.experimentDescription.modal_description[this.context.language];
        return(
            <section id="aboutai">
                <div className="row">
                    <div className="six columns main-col">
                        <h2>{full_description.about_dcurator.title}</h2>
                        <p>
                            {full_description.about_dcurator.paragraph_1}
                            <br/>
                            {full_description.about_dcurator.paragraph_2}
                            <br/>
                            {full_description.about_dcurator.paragraph_3}
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
                        content = {this.renderContent(modal_description.content)}
                        actions={this.renderAction(modal_description.button)}
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
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import LanguageContext from '../contexts/LanguageContext';

class AboutDCurator extends React.Component{

    static contextType = LanguageContext;

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
                        <Link
                        to="/experiment"
                        className="massive ui primary button"         
                        > 
                            {full_description.link}
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state =>{
    return { 
        experimentDescription : state.experimentDescription
    };
}


export default connect(mapStateToProps,null)(AboutDCurator);
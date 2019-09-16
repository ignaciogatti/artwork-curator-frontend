import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {

    static contextType = LanguageContext;

    render(){

        return(
            <React.Fragment>
                <i className="flag es" onClick={ ()=> this.context.onLanguageChange('spanish') } />
                <i className="flag gb uk" onClick={ ()=> this.context.onLanguageChange('english') } />
            </React.Fragment>
        );
    }
}

export default LanguageSelector;
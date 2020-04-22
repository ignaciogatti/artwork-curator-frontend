import React from 'react';
import {Router, Route} from 'react-router-dom';
import AboutMe from './AboutMe';
import ArtworkListContainer from './ArtworkListContainer';
import Header from './Header';
import Experiment from './Experiment';
import AboutDCurator from './AboutDCurator';
import SequenceGenerator from './SequenceGenerator';
import history from '../history';
import {LanguageStore} from '../contexts/LanguageContext';

class App extends React.Component{

    render(){

        return(
            <div>
                <Router history={history}>
                <div>
                    <LanguageStore>
                        <Header />
                        <Route path="/" exact component={ArtworkListContainer}></Route>
                        <Route path="/sequencegeneration" component={SequenceGenerator}></Route>
                        <Route path="/aboutme" component={AboutMe}></Route>
                        <Route path="/experiment" component={Experiment}></Route>
                        <Route path="/aboutai" component={AboutDCurator}></Route>                             
                    </LanguageStore>
                </div>
                </Router>
            </div>
        );

    }

}

export default App;
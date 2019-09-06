import React from 'react';
import {Router, Route} from 'react-router-dom';
import AboutMe from './AboutMe';
import ArtworkListContainer from './ArtworkListContainer';
import Header from './Header';
import Experiment from './Experiment';
import AboutDCurator from './AboutDCurator';
import history from '../history';

class App extends React.Component{

    render(){

        return(
            <div>
                <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={ArtworkListContainer}></Route>
                    <Route path="/aboutme" component={AboutMe}></Route>
                    <Route path="/experiment" component={Experiment}></Route>
                    <Route path="/aboutai" component={AboutDCurator}></Route>                             
                </div>
                </Router>
            </div>
        );

    }

}

export default App;
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import AboutMe from './AboutMe';
import ArtworkListContainer from './ArtworkListContainer';
import Header from './Header';

class App extends React.Component{

    render(){

        return(
            <div>
                <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={ArtworkListContainer}></Route>
                    <Route path="/aboutme" component={AboutMe}></Route>      
                                   
                </div>
                </BrowserRouter>
            </div>
        );

    }

}

export default App;
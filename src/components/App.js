import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import CuratorBar from './CuratorBar';
import ArtworkList from './ArtworkList';
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

        /*
        return(
            <div>
                <div className="ui inverted menu">
                    <div className="item">
                        <CuratorBar />
                    </div>
                    <BrowserRouter>
                        <div>
                            <Link to='/aboutme'>About Me</Link>
                            <Route to="/aboutme" exact component={AboutMe}></Route>
                        </div>
                    </BrowserRouter>
                </div>
                <div className='ui container' >
                    <ArtworkList />
                </div>
            </div>
        );
        */
    }

}

export default App;
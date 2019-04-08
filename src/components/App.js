import React from 'react';
import CuratorBar from './CuratorBar';
import ArtworkList from './ArtworkList';

class App extends React.Component{

    render(){
        return(
            <div>
                <div className="ui inverted menu">
                    <div className="item">
                        <CuratorBar />
                    </div>
                </div>
                <div className='ui container' margin-top='50px'>
                    <ArtworkList />
                </div>
            </div>
        );
    }
}

export default App;
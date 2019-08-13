import React from 'react';
import {connect} from 'react-redux';
import {save_data} from '../actions';

class Experiment extends React.Component{

    onClick = () => {
       this.props.save_data("Liked");
    }


    render(){
        return(
            <div>
                <button onClick={this.onClick}>
                    Experiment
                </button>
            </div>
        );
    };
}


export default connect(null, {save_data})(Experiment);
import React from 'react';
import {connect} from 'react-redux';
import {save_data} from '../actions';

class AgreeDesagreeButtons extends React.Component{

    onClick(data){ 
        return event => {
            event.preventDefault();

            this.props.save_data(data);
        };
    }

    render(){
        const rated = this.props.saveData.find(res => res.ratedArtworkId === this.props.ratedArtworkId); 
        if (!rated){
            return(
                <React.Fragment>
                    <button 
                        className="massive circular ui icon positive left button"
                        onClick={this.onClick({
                            sourceArtworkId: this.props.sourceArtworkId, 
                            ratedArtworkId: this.props.ratedArtworkId,
                            rating: 'Agree'
                        })}
                    >
                        <i className="massive thumbs up outline icon"></i>
                    </button>
                    <button 
                        className="massive circular ui icon negative right button"
                        onClick={this.onClick({
                            sourceArtworkId: this.props.sourceArtworkId, 
                            ratedArtworkId: this.props.ratedArtworkId,
                            rating: 'Disagree'
                        })}
                    >
                        <i className="massive thumbs down outline icon"></i>
                </button>
            </React.Fragment>);
        }
        else{
            return null;
        }
    }
}

const mapStateToProps = state =>{

    return {
        saveData : state.saveData
    };
}


export default connect(mapStateToProps, {save_data})(AgreeDesagreeButtons);
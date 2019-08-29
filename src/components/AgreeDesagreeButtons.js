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
        let rated = this.props.saveData.find(res => res.ratedArtworkId === this.props.ratedArtworkId);
        let old_ratings = this.props.userRatings.find(res => res.ratedArtworkId === this.props.ratedArtworkId);
        if ((!rated) && (!old_ratings)){
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
                        <i className="massive check icon"></i>
                    </button>
                    <button 
                        className="massive circular ui icon negative right button"
                        onClick={this.onClick({
                            sourceArtworkId: this.props.sourceArtworkId, 
                            ratedArtworkId: this.props.ratedArtworkId,
                            rating: 'Disagree'
                        })}
                    >
                        <i className="massive times icon"></i>
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
        saveData : state.saveData,
        userRatings : state.userRatings
    };
}


export default connect(mapStateToProps, {save_data})(AgreeDesagreeButtons);
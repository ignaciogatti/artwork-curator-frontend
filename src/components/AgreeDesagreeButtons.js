import React from 'react';
import {connect} from 'react-redux';
import {save_data} from '../actions';

class AgreeDesagreeButtons extends React.Component{

    onClick(data){ 
        return event => {
            event.preventDefault();
            this.props.save_data(data);
            this.props.onClickUpdateCarousel();
        };
    }

    render(){

        let old_ratings = this.props.userRatings.find(res => res.ratedArtworkId === this.props.ratedArtworkId);
        if (!old_ratings){
            return(
                <React.Fragment>
                    <button 
                        className="massive circular ui icon positive left button"
                        onClick={this.onClick({
                            sourceArtworkId: this.props.sourceArtworkId, 
                            ratedArtworkId: this.props.ratedArtworkId,
                            experimentType: this.props.experimentType,
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
                            experimentType: this.props.experimentType,
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
        userRatings : state.userRatings
    };
}


export default connect(mapStateToProps, {save_data})(AgreeDesagreeButtons);
import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {save_data, fetch_experiment_data, fetch_user_ratings} from '../actions';
import Carousel from 'react-bootstrap/Carousel'
import AgreeDesagreeButtons from './AgreeDesagreeButtons';

class Experiment extends React.Component{


    state ={
        current_index:0,
        index:0,
        direction:null
    };


    handleSelect = (selectedIndex, e) => {
        this.setState({index:selectedIndex, direction: e.direction});
      };

    onClick = () => {
        let new_index = (this.state.current_index + 1) % this.props.experimentData.length; 
        this.setState({
            current_index: new_index,
            index:0, 
            direction: null
        });
    }

    componentDidMount(){
        this.props.fetch_experiment_data();
        if (this.props.isSignedIn){
            this.props.fetch_user_ratings();
         }
    }

    componentDidUpdate(prevProps){
        if (prevProps.isSignedIn !== this.props.isSignedIn){
            this.props.fetch_user_ratings();
        }
     
    }
    
    renderSlides(){
        return this.props.experimentData[this.state.current_index].sim_artworks.map((artwork, index)=>{
            let url = artwork.imageUrl.split('.jpg')[0];
            url = url +'.jpg';
            return(
                <Carousel.Item key={artwork.id}>
                    <img
                        className="d-block" 
                        src={url} 
                        alt={artwork.title}
                    />
                    <Carousel.Caption>
                        <p className="legend">
                            <i>{artwork.title}</i> by <strong>{artwork.artist}</strong> 
                        </p>
                    </Carousel.Caption>
                    <AgreeDesagreeButtons 
                        sourceArtworkId={this.props.experimentData[this.state.current_index].source_artwork.id} 
                        ratedArtworkId={artwork.id} 
                    />
                </Carousel.Item>
            );
        })
    }


    render(){

        if(_.isEmpty(this.props.experimentData)){
            return <div>Loading...</div>;
        }

        let url = this.props.experimentData[this.state.current_index].source_artwork.imageUrl.split('.jpg')[0];
        url = url +'.jpg';
        return(
            <div>
            <section id="experiment">
                <div className="row">
                    <div className="three columns header-col">
                        <h3>D-Curator</h3>
                        <p>The following artworks were selected by an AI. They are considered to be related to 
                            <i>"{this.props.experimentData[this.state.current_index].source_artwork.title}"</i> ({this.props.experimentData[this.state.current_index].source_artwork.artist}, {this.props.experimentData[this.state.current_index].source_artwork.year}).
                            <br />
                            The AI is learning how to analyze and compare artworks. Help it to improve: tell it if you agree with the choice or not. 
                        </p>
                        <div className="card">
                            <img 
                                id="sourceImg"
                                src={url} alt="Source Artwork" 
                            />
                        </div>
                        <button 
                            className="huge ui right labeled icon primary button"
                            onClick= {this.onClick}
                        >
                            Next Image
                            <i className="huge angle double right icon"></i>
                        </button>
                    </div>

                    <div className=" nine columns main-col">
                        <Carousel 
                            activeIndex={this.state.index} 
                            direction={this.state.direction}
                            onSelect={this.handleSelect}
                            interval={null} 
                            indicators={false}
                        >
                            {this.renderSlides()}
                        </Carousel>
                    </div>
                </div>
            </section>
        </div>
        );
    };
}

const mapStateToProps = state =>{
    return { 
        experimentData: state.experimentData,
        isSignedIn : state.auth.isSignedIn,
        userRatings : state.userRatings

    };
}


export default connect(mapStateToProps, {save_data, fetch_experiment_data, fetch_user_ratings})(Experiment);
import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {save_data, fetch_experiment_data, fetch_user_ratings} from '../actions';
import Carousel from 'react-bootstrap/Carousel'
import AgreeDesagreeButtons from './AgreeDesagreeButtons';

class Experiment extends React.Component{

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
        return this.props.experimentData.sim_artworks.map((artwork, index)=>{
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
                        sourceArtworkId={this.props.experimentData.source_artwork.id} 
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
        return(
            <div>
            <section id="experiment">
                <div className="row">
                    <div className="three columns header-col">
                        <h3>D-Curator</h3>
                        <p>The following artworks was selected by an IA. It consider that are related to 
                            <i>"{this.props.experimentData.source_artwork.title}"</i> ({this.props.experimentData.source_artwork.artist}, {this.props.experimentData.source_artwork.year}).
                            <br />
                            Help it to improve: tell it if you agree with the choice or not. 
                        </p>
                        <img 
                            id="sourceImg"
                            src="https://uploads8.wikiart.org/images/claude-monet/waterloo-bridge-london-1.jpg!Large.jpg" alt="Source Artwork" 
                        />
                    </div>

                    <div className=" nine columns main-col">
                        <Carousel interval={null} indicators={false}>
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
        saveData : state.saveData,
        isSignedIn : state.auth.isSignedIn,
        userRatings : state.userRatings

    };
}


export default connect(mapStateToProps, {save_data, fetch_experiment_data, fetch_user_ratings})(Experiment);
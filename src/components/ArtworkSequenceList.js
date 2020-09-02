import React from 'react';
import {connect} from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import {resetArtworkList, save_data, fetch_experiment_data, fetch_user_ratings} from '../actions';
import AgreeDesagreeButtons from './AgreeDesagreeButtons';

class ArtworkSequenceList extends React.Component{

    state={
        index:0,
        direction:null,
        prev_index: 0
    }

    tourApproach = "sequence";

//-------------------------- Component set up ------------------------------------------
    componentDidMount(){
        this.props.fetch_experiment_data();
        if (this.props.artworks.length !== 1) {
            this.props.resetArtworkList();
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.artworks.length !== this.props.artworks.length){
            this.setState({index:0, direction: null, prev_index:0});
        }
    }

//-------------------------- Carousel design ------------------------------------------
    handleSelect = (selectedIndex, e) => {
        this.setState({index:selectedIndex, direction: e.direction});
      };


    updateCarouselIndex = () => {
        let new_index = (this.state.index + 1) % this.props.artworks.length;
        this.setState({index:new_index});
        if (new_index === 0){
            this.setState({showModal:true});
        }
    }

    renderSlides=()=>{
        return this.props.artworks.map((artwork, index)=>{
            let url = artwork.imageUrl.split('.jpg')[0];
            url = url +'.jpg';
            return(
                <Carousel.Item key={artwork.id}>
                    <img 
                        src={url} 
                        alt={artwork.title}
                        className="d-block"
                    />

                    {(artwork.title !== "") && 
                        <Carousel.Caption>
                            <p className="legend">
                                <i className="title">{artwork.title}</i> by <b className="artist">{artwork.artist}</b> 
                            </p>
                        </Carousel.Caption>
                    }
                    {(artwork.title !== "") && (this.props.isSignedIn) &&
                    <AgreeDesagreeButtons 
                        sourceArtworkId={this.props.file_id}
                        ratedArtworkId={artwork.id}
                        experimentType={this.props.experimentData[this.tourApproach].experimentType}
                        tourApproach={this.tourApproach}
                        onClickUpdateCarousel={this.updateCarouselIndex} 
                    />}
                </Carousel.Item>
            );
        })
    }

 

    render(){
        if (this.props.isFetching){
            return (
                <div className="sequence-row">
                    <div className="ui active inverted dimmer">
                        <div className="ui small text loader">Searching</div>
                    </div>
                </div>
                );
        }else{
            return(
                <div className="sequence-row">
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
            );
        }
        
        
    };
}

const mapStateToProps = state => {
    
    return {
        artworks : state.artworksFetchData.items,
        isFetching : state.artworksFetchData.isFetching,
        file_id : state.artworksFetchData.file_id,
        experimentData : state.experimentData,
        isSignedIn : state.auth.isSignedIn
    } 
}

export default connect(mapStateToProps, {resetArtworkList, save_data, fetch_experiment_data, fetch_user_ratings})(ArtworkSequenceList);
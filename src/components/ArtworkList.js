import React from 'react';
import {connect} from 'react-redux';
import Carousel from 'react-bootstrap/Carousel'
import AgreeDesagreeButtons from './AgreeDesagreeButtons';
import {resetArtworkList, save_data, fetch_experiment_data, fetch_user_ratings} from '../actions';

class ArtworkList extends React.Component{

    state={
        index:0,
        direction:null
    }


    componentDidMount(){
        this.props.fetch_experiment_data();
        if (this.props.artworks.length !== 1) {
            this.props.resetArtworkList();
        }

        if (this.props.isSignedIn){
            this.props.fetch_user_ratings();
         }
    }


    componentDidUpdate(prevProps){
        if(prevProps.artworks.length !== this.props.artworks.length){
            this.setState({index:0, direction: null});
        }

        if (prevProps.isSignedIn !== this.props.isSignedIn){
            this.props.fetch_user_ratings();
        }
    }


    handleSelect = (selectedIndex, e) => {
        this.setState({index:selectedIndex, direction: e.direction});
      };


    updateCarouselIndex = () => {
        let new_index = (this.state.index + 1) % this.props.artworks.length; 
        this.setState({index:new_index});
    }


    renderSlides=()=>{
        return this.props.artworks.map((artwork, index)=>{
            let url = artwork.imageUrl.split('.jpg')[0];
            url = url +'.jpg';
            console.log(this.props.experimentType)
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
                                <i>{artwork.title}</i> by {artwork.artist} 
                            </p>
                        </Carousel.Caption>
                        
                    }
                    {(artwork.title !== "") && (this.props.isSignedIn) &&
                    <AgreeDesagreeButtons 
                        sourceArtworkId={-1} 
                        ratedArtworkId={artwork.id}
                        experimentType={this.props.experimentType}
                        onClickUpdateCarousel={this.updateCarouselIndex} 
                    />}
                </Carousel.Item>
            );
        })
    }

 

    render(){
        if (this.props.isFetching){
            return (
                <div className="nine columns main-col">
                    <div className="ui active inverted dimmer">
                        <div className="ui small text loader">Searching</div>
                    </div>
                </div>
                );
        }else{
            return(
                <div className="nine columns main-col">
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
        isSignedIn : state.auth.isSignedIn,
        experimentType : state.experimentData.experimentType
    } 
}

export default connect(mapStateToProps, {resetArtworkList, save_data, fetch_experiment_data, fetch_user_ratings})(ArtworkList);
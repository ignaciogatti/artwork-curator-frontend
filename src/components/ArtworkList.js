import React from 'react';
import {connect} from 'react-redux';
import Carousel from 'react-bootstrap/Carousel'

class ArtworkList extends React.Component{


    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.artworks !== this.props.artworks) || (nextProps.isFetching !== this.props.isFetching);
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
                    <Carousel.Caption>
                        <p className="legend">
                            <i>{artwork.title}</i> by {artwork.artist} 
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            );
        })
    }

    renderPresentationSlide(){
        return(
            <Carousel.Item>
                <img id="description" src="images/description-app.jpg" alt="Description app" />
            </Carousel.Item>
        );
    }

    renderFetchingSlide(){
        return(
            <Carousel.Item>
                <div className="ui active inverted dimmer">
                    <div className="ui small text loader">Searching</div>
                </div>
            </Carousel.Item>
        );
    }

    renderCarousel(renderSlide){
        return(
            <div className="nine columns main-col">
                <Carousel interval={null}>
                    {renderSlide()}
                </Carousel>
            </div>
        );
    }

    render(){
        console.log(this.props);
        
        if (this.props.isFetching){
            return (
                this.renderCarousel(this.renderFetchingSlide)
                );
        }
        if(this.props.artworks.length > 0){
            return(
                this.renderCarousel(this.renderSlides)
            );
        }else{
            return (
                this.renderCarousel(this.renderPresentationSlide)
            );
        }
        
    };
}

const mapStateToProps = state => {
    
    return {
        artworks : state.artworksFetchData.items,
        isFetching : state.artworksFetchData.isFetching
    } 
}

export default connect(mapStateToProps)(ArtworkList);
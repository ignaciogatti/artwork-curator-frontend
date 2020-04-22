import React from 'react';
import {connect} from 'react-redux';
import Carousel from 'react-bootstrap/Carousel'

class ArtworkSequenceList extends React.Component{

    state={
        index:0,
        direction:null
    }

    componentDidUpdate(prevProps){
        if(prevProps.artworks.length !== this.props.artworks.length){
            this.setState({index:0, direction: null});
        }
    }

    handleSelect = (selectedIndex, e) => {
        this.setState({index:selectedIndex, direction: e.direction});
      };

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
                                <i>{artwork.title}</i> by {artwork.artist} 
                            </p>
                        </Carousel.Caption>
                    }
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
        isFetching : state.artworksFetchData.isFetching
    } 
}

export default connect(mapStateToProps)(ArtworkSequenceList);
import React from 'react';
import {connect} from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './ArtworkList.css';

class ArtworkList extends React.Component{


    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.artworks !== this.props.artworks) || (nextProps.isFetching !== this.props.isFetching);
    }


    render(){
        console.log(this.props);
        if (this.props.isFetching){
            return (
                <div className="row item">
                    <h3>Curator selection</h3>
                    <hr />
                    <div className="ui active inverted dimmer">
                        <div className="ui small text loader">Searching</div>
                    </div>
                </div>
                );
        }
        if(this.props.artworks.length > 0){
            return(
                <div className="row item">
                    <h3>Curator selection</h3>
                    <hr />
                    <Carousel showThumbs={true} showArrows={true} dynamicHeight>
                    {
                        this.props.artworks.map((artwork, index)=>{
                            let url = artwork.imageUrl.split('.jpg')[0];
                            url = url +'.jpg';
                            return(
                                <div key={artwork.id}>
                                    <img src={url}/>
                                    <p className="legend">
                                        <b>{artwork.title}</b> by {artwork.artist} 
                                    </p>
                                </div>
                            );
                        })
                    }
                    </Carousel>
                </div>
            );
        }else{
            return (
            <div className="row item">
                <h3>Curator selection</h3>
                <hr />
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

export default connect(mapStateToProps)(ArtworkList);
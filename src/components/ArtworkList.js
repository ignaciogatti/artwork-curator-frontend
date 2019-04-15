import React from 'react';
import {connect} from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './ArtworkList.css';

class ArtworkList extends React.Component{


    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.artoworks !== this.props.artworks;
    }


    render(){
        console.log(this.props.artworks);
        if(this.props.artworks.length > 0){
            return(
                <div className="ui segment">
                    <h1 className="title">Curator selection</h1>
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
            <div className="ui segment">
                <h1 className="title">Curator selection</h1>
                <hr />
            </div>
            );
        }
        
    };
}

const mapStateToProps = state => {
    return {artworks : state.artworks}
}

export default connect(mapStateToProps)(ArtworkList);
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
        if(this.props.artworks.length > 0){
            return(
                <div className="ui segment">
                    <h1 className="title">Curator selection</h1>
                    <hr />
                    <Carousel showThumbs={true} showArrows={true} dynamicHeight>
                    {
                        this.props.artworks.map((artwork, index)=>{
                            let name = artwork.substring(artwork.lastIndexOf('/')+1);
                            name = name.split('.jpg')[0];
                            let url = artwork.split('.jpg')[0];
                            url = url +'.jpg';
                            return(
                                <div key={index}>
                                    <img src={url}/>
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
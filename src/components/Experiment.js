import React from 'react';
import {connect} from 'react-redux';
import {save_data} from '../actions';
//import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
//import 'pure-react-carousel/dist/react-carousel.es.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Experiment extends React.Component{

    onClick(data){ 
        return event => {
            event.preventDefault();

            this.props.save_data(data);
        };
    }

    renderSlides(){
        return this.props.experimentData.sim_artworks.map((artwork, index)=>{
            let url = artwork.imageUrl.split('.jpg')[0];
            url = url +'.jpg';
            return(
                <div key={index} >
                    <img src={url}/>
                    <p className="legend">
                        <b>{artwork.title}</b> by {artwork.artist} 
                    </p>
                    <button 
                    onClick={this.onClick({
                        sourceArtworkId : 32, 
                        ratedArtworkId : artwork.id, 
                        rating :'Agree'
                    })}>
                        Agree
                    </button>
                </div>
            );
        })
    }


    render(){
        console.log(this.props.experimentData);
        return(
            <div>
            <section id="experiment">
                <div className="row">
                    <div className="three columns header-col">
                        <h2>Image</h2>
                        <img src="https://uploads8.wikiart.org/images/claude-monet/waterloo-bridge-london-1.jpg!Large.jpg" alt="Source Artwork" />
                    </div>

                    <div className=" nine columns main-col">
                        <h3>Curator selection</h3>
                        <div id="carousel">
                            <Carousel showThumbs={true} showArrows={true}>
                                {this.renderSlides()}
                            </Carousel>
                        </div>
                    </div>
                </div>


            </section>
        </div>
        );
    };
}

const mapStateToProps = state =>{

    return { experimentData: state.experimentData };
}


export default connect(mapStateToProps, {save_data})(Experiment);
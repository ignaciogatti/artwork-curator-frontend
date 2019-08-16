import React from 'react';
import {connect} from 'react-redux';
import {save_data} from '../actions';
import Carousel from 'react-bootstrap/Carousel'

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
                <Carousel.Item key={artwork.id}>
                    <img 
                        src={url} 
                        alt={artwork.title}
                        className="d-block w-100"
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


    render(){
        console.log(this.props.experimentData);
        return(
            <div>
            <section id="experiment">
                <div className="row">
                    <div className="three columns header-col">
                        <h3>D-Curator</h3>
                        <p>The following artworks was selected by an IA. It consider that are related to <i>"Waterloo Bridge, London"</i> (Monet, 1903) </p>
                        <img 
                            id="sourceImg"
                            src="https://uploads8.wikiart.org/images/claude-monet/waterloo-bridge-london-1.jpg!Large.jpg" alt="Source Artwork" 
                        />
                    </div>

                    <div className=" nine columns main-col">
                        <Carousel interval={null}>
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

    return { experimentData: state.experimentData };
}


export default connect(mapStateToProps, {save_data})(Experiment);
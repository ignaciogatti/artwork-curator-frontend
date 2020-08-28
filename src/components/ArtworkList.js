import React from 'react';
import {connect} from 'react-redux';
import Carousel from 'react-bootstrap/Carousel'
import AgreeDesagreeButtons from './AgreeDesagreeButtons';
import {resetArtworkList, save_data, fetch_experiment_data, fetch_user_ratings} from '../actions';
import Modal from './Modal';
import LanguageContext from '../contexts/LanguageContext';

class ArtworkList extends React.Component{

    static contextType = LanguageContext;
    tourApproach = "artworkRetrieval";

    state={
        index:0,
        direction:null,
        prev_index: 0,
        showModal: false
    }


//-------------------------- Component set up ------------------------------------------
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
            this.setState({index:0, direction: null, prev_index : 0, showModal: false});
        }

        if (prevProps.isSignedIn !== this.props.isSignedIn){
            this.props.fetch_user_ratings();
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
                        experimentType={this.props.experimentType[this.tourApproach]}
                        tourApproach={this.tourApproach}
                        onClickUpdateCarousel={this.updateCarouselIndex} 
                    />}
                </Carousel.Item>
            );
        })
    }

 //---------------------------- Modal set up ------------------------------------------

    hideModal = () =>{ this.setState({showModal:false})};

    renderContent(content){
        return content;
    }

    renderAction(surveyButton, cancelButton){
         return (
            <React.Fragment>
                <a 
                    className="massive ui primary button"
                    href='https://docs.google.com/forms/d/e/1FAIpQLSc0UOGTw1aIb2L1sSFYdINgbaCbBDd-j2EslCAmFhFFjG8kDQ/viewform?usp=sf_link'
                    target="_blank"
                    onClick = {this.hideModal}
                >
                    {surveyButton}
                </a>

                <button 
                    className="massive ui button"
                    onClick = {this.hideModal}
                > 
                    {cancelButton} 
                </button>
            </React.Fragment>
        );
    };


//--------------------------- Render ----------------------------------------------------
    render(){
        
        let surveyModalDescription = this.props.surveyModalDescription.modal_description[this.context.language];
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
                    {this.state.showModal && (
                    <Modal
                        show={this.state.showModal} 
                        handleClose={this.hideModal}
                        title = {surveyModalDescription.title}
                        content = {this.renderContent(surveyModalDescription.content)}
                        actions={this.renderAction(surveyModalDescription.surveyButton, surveyModalDescription.cancelButton)}
                        onDismiss = {()=>this.setState({showModal:false})}
                    />
                )}
                </div>
            );
        }
        
        
    };
}

const mapStateToProps = state => {
    
    return {
        artworks : state.artworksFetchData.items,
        file_id : state.artworksFetchData.file_id,
        isFetching : state.artworksFetchData.isFetching,
        isSignedIn : state.auth.isSignedIn,
        experimentType : state.experimentData.experimentType,
        surveyModalDescription : state.surveyModalDescription
    } 
}

export default connect(mapStateToProps, {resetArtworkList, save_data, fetch_experiment_data, fetch_user_ratings})(ArtworkList);
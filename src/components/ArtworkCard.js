import React from 'react';

class ArtworkCard extends React.Component{

    constructor(props){
        super(props);

        this.imageRef = React.createRef();
    }

    render(){
        const {index, name, url} = this.props;
        console.log(index);
        console.log(name);

        return(
            <div className="img-ctn">
                <img alt={name} className="img-responsive" src={url}/>
            </div>
        );
    }

}

export default ArtworkCard;
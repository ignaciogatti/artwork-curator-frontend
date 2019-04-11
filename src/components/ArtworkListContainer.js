import React from 'react';
import UploardForm from './UploadForm';
import ArtworkList from './ArtworkList';


const ArtworkListContainer = () => {
    return (

        <div className="ui stackable two column grid">
            <div className="column">
                <UploardForm />
            </div>
            <div className="column">
                <ArtworkList />
            </div>
        </div>


    );
}

export default ArtworkListContainer;
import React from 'react';
import UploardForm from './UploadForm';
import ArtworkList from './ArtworkList';


const ArtworkListContainer = () => {
    return (

        <section id="artworkList">
            <div className="row">
                <div className="three columns header-col">
                    <UploardForm />
                </div>

                <div className=" nine columns main-col">
                    <ArtworkList />
                </div>
            </div>


        </section>

    );
}

export default ArtworkListContainer;
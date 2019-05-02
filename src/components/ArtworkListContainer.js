import React from 'react';
import UploardForm from './UploadForm';
import ArtworkList from './ArtworkList';


const ArtworkListContainer = () => {
    return (

        <div>
            <section id="description">
                <div className="row">
                    <img className="description-app"  src="images/description-app.jpg" alt="Artwork app description" />
                </div>
            </section>
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
        </div>

    );
}

export default ArtworkListContainer;
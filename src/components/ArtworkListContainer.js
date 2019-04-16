import React from 'react';
import UploardForm from './UploadForm';
import ArtworkList from './ArtworkList';


const ArtworkListContainer = () => {
    return (

        <section id="resume">
            <div className="row">

                <div className="three column">
                    <UploardForm />
                </div>

                <div className=" nine column main-col">
                    <ArtworkList />
                </div>
            </div>


        </section>

    );
}

export default ArtworkListContainer;
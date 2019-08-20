import React from 'react';
import UploardForm from './UploadForm';
import ArtworkList from './ArtworkList';


const ArtworkListContainer = () => {
    return (

        <div>
            <section id="artworkList">
                <div className="row">
                    <div className="three columns header-col">
                        <h3>D-Curator</h3>
                            <p><i>D-Curator</i> is an IA tool that looks for interesting (and crazy) relatinships between artworks. 
                            <br />
                            Have fun! You only need to upload your favourite artwork.
                            </p>
                        <UploardForm />
                    </div>
                    <ArtworkList />
                </div>


            </section>
        </div>

    );
}

export default ArtworkListContainer;
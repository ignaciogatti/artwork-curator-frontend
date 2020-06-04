import React, { useContext } from 'react';
import UploardForm from './UploadForm';
import ArtworkList from './ArtworkList';
import LanguageContext from '../contexts/LanguageContext';
import {Link} from 'react-router-dom';




const ArtworkListContainer = () => {

    const languageContext = useContext(LanguageContext);

    const description = {
        english: {
            sentence_1: "is an IA tool that looks for interesting (and crazy) relationships between artworks.",
            sentence_2: "Have fun! You only need to upload your favourite artwork.",
            link: "Read more about the experiment." 
        },
        spanish: {
            sentence_1: "es una herramienta de IA que encuentra relaciones interesantes (y un poco locas) entre obras de arte.",
            sentence_2: "¡Diviértete! Solo tienes que subir tu obra de arte favorita.",
            link: "Leer más sobre el experimento."
        }
    }

    let current_description = description[languageContext.language];

    return (

        <div>
            <section id="artworkList">
                <div className="row">
                    <div className="three columns header-col">
                        <h3>D-Curator</h3>
                            <p><i>D-Curator</i> {current_description.sentence_1} 
                            <br />
                            {current_description.sentence_2} <Link to="/aboutai">{current_description.link}</Link>
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
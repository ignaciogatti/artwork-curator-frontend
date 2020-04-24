import React, { useContext } from 'react';
import UploadSequenceForm from './UploadSequenceForm';
import ArtworkSequenceList from './ArtworkSequenceList';
import LanguageContext from '../contexts/LanguageContext';



const SequenceGenerator = () => {

    const languageContext = useContext(LanguageContext);

    const description = {
        english: {
            sentence_1: "is an IA tool that looks for interesting (and crazy) relationships between artworks.",
            sentence_2: "Have fun! You only need to upload three artworks that you like." 
        },
        spanish: {
            sentence_1: "es una herramienta de IA que encuentra relaciones interesantes (y un poco locas) entre obras de arte.",
            sentence_2: "¡Diviértete! Solo tienes que subir tres obras de arte que te gusten."
        }
    }

    let current_description = description[languageContext.language];

    return (

        <div>
            <section id="sequenceGenerator">
                <div className="row">
                    <div className="three columns main-col description">
                        <h3>D-Curator</h3>
                            <p><i>D-Curator</i> {current_description.sentence_1} 
                            <br />
                            {current_description.sentence_2}
                            </p>
                            
                    </div>
                    <div className="nine columns main-col upload-form">
                        <UploadSequenceForm />
                    </div>
                </div>
                    <ArtworkSequenceList />

            </section>
        </div>

    );
}

export default SequenceGenerator;
import React from 'react';
import {Link} from 'react-router-dom';

class AboutDCurator extends React.Component{
    render(){
        return(
            <section id="aboutai">
                <div className="row">
                    <div className="six columns main-col">
                        <h2>About D-Curator</h2>
                        <p>
                            D-Curator is a AI developed with Deep Learning techniques. Basically, these techniques allow the machine to analize
                            the images taking into account only the pixel representation. In other words, D-Curator has no idea about who painted each artwork,
                            or the history behind each one, or what it means when someone says "this is an impressionist painting". 
                            <br/>
                            It only looks at image and takes it own conclusions. Despite of the fact that it doesn't know anything about Art History, 
                            it is able to find interesting relationships between artworks. Indeed, it seems that D-Curator can find artworks that have 
                            a similar composition (color, structure, strength lines).
                        </p>
                    </div>
                </div>        
                <div className="row">
                    <div className="six columns main-col">
                        <h2>Experiment</h2>
                        <p>
                            The objective of the experiment is to give a feedback to D-Curator. In order to improve its skills as artwork analyzer, it is 
                            necessary to tell to D-Curator which choices were right and which ones not.
                            <br/>
                            In this experiment you will have an reference artwork and a set of artworks that were selected by D-Curator. Your task consists on 
                            analyze if each artwork of the set is related to the reference artwork. Remember that D-Curator only takes into account the 
                            compositon (color, structure, strength lines). Don't expect to find relationships like "same artist" or "same genre", because 
                            D-Curator doesn't know anything about Art History. 
                            <br/>
                            Also, you have to know that D-Curator only saw artworks from the following periods: Baroque, Romanticism, Realism, 
                            Impressionism, Expressionism, Surrealism, Symbolism and Art-Nouveau. Therefore, all the artworks in the set belong to those periods.

                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="six columns main-col button-row">
                        <Link
                        to="/experiment"
                        className="massive ui primary button"         
                        > 
                            Begin with experiment!
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutDCurator;
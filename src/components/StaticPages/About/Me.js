import React from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";

import lolly from "../../../assets/images/lolly.png";
import styles from './About.module.css';

function About() {
    return (
        <DefaultPage image={lolly} title="About Me">
            <div>
                <p>
                    I like to give credit where credit is due.  I also like helping friends.  I will have a location on the site 
                    sooner or later where I can put their names in lights where other people hitting my page can find them in the
                    event that the types of things that they can do may be needed.
                </p>
            </div>
        </DefaultPage>
    );
}

export default About;
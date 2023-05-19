import React from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";

import lolly from "../../../assets/images/lolly.png";
import styles from './About.module.css';

function About() {
    return (
        <DefaultPage image={lolly} title="About Me">
            <div>
                <p>
                    Hello!  My name is Chris, and I have been developing software professionally since Spring of 2004.  I've had 
                    the pleasure to work with Google, even though, for only a short period of time.  I enjoy many facets of 
                    design and development and like learning new things.
                </p>
                <p>
                    I enjoy playing guitar, creating 2D/3D objects, and playing with game engines.  Most of these types of things 
                    can be found under my Interests menu.
                </p>
            </div>
        </DefaultPage>
    );
}

export default About;
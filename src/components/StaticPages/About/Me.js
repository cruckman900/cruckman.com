import React from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";

import lolly from "../../../assets/images/lolly.png";
import styles from './About.module.css';

function About() {
    return (
        <DefaultPage image={lolly} title="About Me">
            <div>
                <p>
                    Hello!  My name is Chris, and I have been developing software professionally since Spring of 2004.
                    I sort've consider myself a man that has lived through almost every walk of life imaginable.  I've
                    had to get food from a food pantry, and I have worked as a developer shortly for Google.  My past is 
                    about as rocky as it can be.
                </p>
                <p>
                    I've had difficult times searching for new work in between jobs, sometimes running out of unemployment
                    compensation, if I even could get that, before finding my next job.  I suffer from schizophrenia with bipolar 
                    depression.  I've lost jobs due to this in the past.  Three jobs among quite a few dating back to 1999.  The worst 
                    part of my disability is that once a psychotic episode starts to manifest itself, I fight against reality 
                    as if my life depended on it.  The majority of my psychotic episodes is the hearing of voices.  I 
                    believe that they are real and have no control of it.  I've had several instances where I've stopped 
                    taking the medicines that help with my psychosis only to find myself back in the hospital to get 
                    back on the meds and regulated.  I also have therapy now.  I'm on Social Security Disability, which, 
                    compared to working in my field, is barely enough to get by now.  I can't afford my own place.  I am 
                    currently living with my uncle and am going through a pretty nasty court case stemming from a psychotic 
                    episode that began in November of 2021 and ran its course for about 8 months in varying degrees.  I've 
                    tried running away from my uncle's home several times.  I was found in the woods in a creek, unable to 
                    move my legs.  I ran away again later and was missing for 3 or 4 days, only to be found in the middle of 
                    the road sitting cross-legged.  I had developed sepsis, hypothermia, and a slew of other ailments, all of 
                    which could have killed me, had I not been found and treated for them.
                </p>
                <p>
                    I can't publicly be telling about my court case.  I am unsure what would happen should the other party 
                    see what all I have to say, but it's been going on for almost a year (will be 1 year in August).
                </p>
                <p>
                    What I hope to find are small contractual work, nothing long-term for now.  I need to find out if I am 
                    ready to rejoin the working class or if I am at the end of the line and depending on Disability for the 
                    rest of my life or not.  Side jobs would greatly benefit me to supplement the Disability payments.  I am 
                    building this website, practically from scratch using ReactJS.  I am learning as I go, and there is a ton
                    to learn if I want to have a full working understanding of it.  This is also the first site I've created that
                    is fully responsive.  You can see my site in all its glory on a large widescreen monitor or you can look
                    through it on your phone.
                </p>
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
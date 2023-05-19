import React from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import lolly_computer from "../../../assets/images/lolly_computer.png";
import classes from './SoftwareDev.module.css';

function SoftwareDev() {
    return (
        <DefaultPage image={lolly_computer} title="Software Dev">
            <p>
                I've been working on a new site: <a className={classes.link} href="https://chatterboxsm.com" target="_blank">ChatterboxSM</a>. 
                I have most of the layout work done... just a handful of heavy components left to build before I start working with the back end. 
                It will be similar to other social media apps more or less... text chat, emojis, gifs, etc.  It will have some nice perks.  
                I will most likely be sharing the code from GitHub for this project... at least the front end portion.
            </p>
            <p>
                This site has been a growing pain.  It was my first attempt at both React, and trying to figure out Responsive Design.  Also, I 
                got to try to refamiliarize myself with Bootstrap.  The CSS in this app looks like jibberish compared to Chatterbox.  This whole 
                site's folder/file heirarchy is a mess!  :D
            </p>
            <p>
                Challenger has turned down any further development from me, meaning, that I suppose I can add the source code of the project as it 
                stands today.  I am not sure what works and what doesnt.  I managed to mess things up a bit going upgrade crazy.  I can figure it 
                out, but there's not much point to it.  It does touch on some good (but outdated) tools: SignalR, Entity Framework, and MVC architectural 
                design practices.  I used vanilla HTML for most, if not all the front end of it.  I should have got comfortable with Razor pages or 
                something as that would have helped me in my next workplace environment after working on this package.
            </p>
            <p>
                Any code that I share from GitHub will be in the About section of my site.  There is a menu item for GitHub Links.
            </p>
        </DefaultPage>
    );
};

export default SoftwareDev;
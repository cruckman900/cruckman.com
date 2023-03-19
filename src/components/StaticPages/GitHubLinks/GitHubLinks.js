import React from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import lolly_sentada2 from "../../../assets/images/lolly_sentada2.png";
import classes from './GitHubLinks.module.css';

function GitHubLinks() {
    return (
        <DefaultPage image={lolly_sentada2} title="GitHub Links">
            <p>
                I am hoping to grow this region of my site.  I need to create more code bundles!
                For now though, I have a small Android app (My Marvel Comic Collection) and this site (cruckman.com)
                on GitHub.  You can clone them or simply browse through the code right on GitHub.
                Maybe there is a portion of my code that helps you out, or you would like to expand on what
                I have created.
            </p>

            <h6>My Marvel Comic Collection</h6>
            <p>
                It's an older project.  I am not sure if it will be helpful as a teaching tool.  What you could do
                is download it and either upgrade it, or develop in it as is.  A challenging exercise for someone, would
                be to use 'Build Variants' and code the app in Java (did something similar to this idea at Google).
            </p>
            <p className={classes.linkBody}>
                Here is the link:<br />
                <a 
                    className={classes.href}
                    href="https://github.com/cruckman900/MyMarvelComicCollection"
                    target="_blank"
                    title="My Marvel Comic Collection app"
                >
                    MyMarvelComicCollection
                </a>
            </p>

            <h6>cruckman.com</h6>
            <p>
                I am currently teaching myself ReactJS.  My site consists of everything that I have learned so far, and as I learn more about React,
                I will be adding content to my site that incorporates it!  So, if you keep checking in GitHub for changes, take a look!  
            </p>
            <p className={classes.linkBody}>
                Here is the link:<br />
                <a 
                    className={classes.href}                
                    href="https://github.com/cruckman900/cruckman.com" 
                    target="_blank"
                    title="cruckman.com"
                >
                    cruckman.com
                </a>
            </p>
        </DefaultPage>
    );
};

export default GitHubLinks;
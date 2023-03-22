import React from "react";
import Card from "../UI/Card/Card";
import classes from './Writings.module.css';

function CWInfo(props) {
    return (
        <Card
            header="Creative Writing Info"
        >
            <div className={classes.stanza}>
                Other than the short story, Ellowyn, I haven't written anything like the things you will see here in over
                15 years.  Why?  I think I lost motivation.  A lot of the stuff I wrote was dark and twisted, because, 
                well... that is what my life felt like: dark and twisted.  I was drinking so much that I would go to bed 
                at 4am drunk and or passed out, to wake up on my off days to opening up another beer.  I have no idea
                how I got through the day when I was working.
            </div>
            <div className={classes.stanza}>
                Anyway... here are some writings that I have done.  I have to type these all in, so it may be slow for me
                to populate this to any great degree.  HTML formatting a document is abusive!
            </div>
            <div className={classes.stanza}>
                *Points* SQUIRREL! *hides*
            </div>
        </Card>
    );
}

export default CWInfo;
import React from "react";
import Card from "../UI/Card/Card";
import classes from './Writings.module.css';

function Volcano() {
    return (
        <Card className={classes.Card}>
            <div className={`${classes.header}`}>Volcano</div>
            <div className={classes.stanza}>
                <p>Ready to erupt,</p>
                <p>The lava is coming.</p>
                <p>The world is corrupt.</p>
                <p>How becoming...</p>
                <p>Time is at an end,</p>
                <p>And life is not fair.</p>
                <p>You could be my friend</p>
                <p>If only you'd care.</p>
            </div>
            <div className={classes.stanza}>
                <p>Like a volcano,</p>
                <p>I'm ready to blow.</p>
                <p>In my heart, I know</p>
                <p>You tear me to pieces so.</p>
                <p>To the boiling point I will be...</p>
                <p>Ready to explode.</p>
                <p>Life isn't that easy,</p>
                <p>For truer hearts corrode.</p>
            </div>
            <div className={classes.stanza}>
                <p>Try your luck</p>
                <p>And claim your prize.</p>
                <p>Time to run amock...</p>
                <p>Look deep into these eyes.</p>
                <p>Caring words are few.</p>
                <p>I count the days.</p>
                <p>It's not me, must be you</p>
                <p>That has been lost in this maze.</p>
            </div>
            <div className={classes.stanza}>
                <p>Time is short.</p>
                <p>So is my fuse.</p>
                <p>It isn't of the friendly sort.</p>
                <p>I sit and muse.</p>
                <p>Tornados cannot tear me apart.</p>
                <p>I am the supreme element.</p>
                <p>If only you had a heart,</p>
                <p>You would've known what I meant</p>
            </div>
            <div className={classes.date}>12/26/2000</div>
        </Card>
    );
}

export default Volcano;
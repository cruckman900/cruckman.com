import React from "react";
import Card from "../../UI/Card/Card";
import classes from '../Writings.module.css';

function Resurrection() {
    return (
        <Card className={classes.Card}>
            <div className={`${classes.header}`}>Resurrection</div>
            <div className={classes.stanza}>
                <p>The fermented blood that trickles from my vein</p>
                <p>Is all that remains of the world I reigned.</p>
                <p>Hell on earth is a living HELL,</p>
                <p>With all of its sinners that really mean well.</p>
            </div>
            <div className={classes.stanza}>
                <p>I build my chaos with an acquired taste...</p>
                <p>Looking down upon those that dwell in my waste.</p>
                <p>Night after night and day by day,</p>
                <p>I think of ways to hurt you: my own way.</p>
            </div>
            <div className={classes.stanza}>
                <p>I am one of the fallen that has risen...</p>
                <p>You are the one that shall live in your own prison.</p>
                <p>Every breath you take brings you to your last.</p>
                <p>I can't see into the future, but I already know your past.</p>
            </div>
            <div className={classes.stanza}>
                <p>Void of those thoughts that try to control</p>
                <p>Allow me to maneuver quickly as I patrol.</p>
                <p>Time has finally come to pay the toll.</p>
                <p>Give in to your doom and hand over your soul!</p>
            </div>
            <div className={classes.date}>early summer '91</div>
        </Card>
    );
}

export default Resurrection;
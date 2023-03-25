import React from "react";
import Card from "../UI/Card/Card";
import classes from './Writings.module.css';

function Resurrection() {
    return (
        <Card className={classes.Card}>
            <div className={`${classes.header}`}>Distortion</div>
            <div className={classes.stanza}>
                <p>Get ready to play</p>
                <p>As loud as you can.</p>
                <p>The ends of eternity fray.</p>
                <p>Light it up, my man.</p>
            </div>
            <div className={classes.stanza}>
                <p>The volume goes higher...</p>
                <p>The distortion is deafening!</p>
                <p>Engulfed in the fire...</p>
                <p>You begin to sing!</p>
            </div>
            <div className={classes.stanza}>
                <p>Keep yp with the band...</p>
                <p>Play the fastest lead!</p>
                <p>Feel the power in your hand...</p>
                <p>Touch the music being freed!</p>
            </div>
            <div className={classes.date}>06/17/2001</div>
        </Card>
    );
}

export default Resurrection;
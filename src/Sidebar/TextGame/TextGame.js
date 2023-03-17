import React from "react";
import Card from '../../components/UI/Card/Card';
import classes from './TextGame.module.css';

function TextGame(props) {
    return (
        <Card className={`${classes.LeftColumn} ${props.className}`}>
            <div className={`${classes.header}`}>Text-based Game</div>
            <div className={classes.container}>
                <p className={classes.typing}>
                    Would you like to play a game?
                </p>
            
                <div className={classes.hiders}>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
            </div>
        </Card>
    );
};

export default TextGame;
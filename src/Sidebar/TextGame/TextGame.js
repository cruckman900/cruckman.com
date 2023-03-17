import { React, useState, useEffect } from "react";
import Button from "../../components/UI/Button/Button";
import Card from '../../components/UI/Card/Card';
import classes from './TextGame.module.css';

function TextGame(props) {
    const [play, setPlay] = useState();
    const [gameButton1Show, setGameButton1Show] = useState(classes.buttonHidden);
    const [gameButton2Show, setGameButton2Show] = useState(classes.buttonHidden);
    const [gameButton3Show, setGameButton3Show] = useState(classes.buttonHidden);
    const [gameButton4Show, setGameButton4Show] = useState(classes.buttonHidden);

    useEffect(() => {
        setGameButton4Show(classes.buttonHidden);
        setGameButton3Show(classes.buttonHidden);
        setGameButton2Show(classes.playButton);
        setGameButton1Show(classes.playButton);
    }, []);

    const isPlayingHandler = () => {
        localStorage.setItem('isPlaying', 'yes')
        setPlay(true);
        console.log(`playHandler ${play}`);
    }

    const stopPlayingHandler = () => {
        localStorage.removeItem('isPlaying');
        setPlay(false);
    }

    useEffect(() => {
        const storedIsPlaying = localStorage.getItem('isPlaying');
        if(storedIsPlaying === 'yes') {
            setPlay(true);
        } else {
            setPlay(false);
        }
        console.log(`useEffect ${play}`);
    }, [play]);

    return (
        <Card className={`${classes.LeftColumn} ${props.className}`}>
            <div className={`${classes.header}`}>Text-based Game</div>
            <div className={classes.container}>
                {!play &&
                    <p className={classes.typing}>
                        Would you like to play a game?
                    </p>
                }
                
                <div className={classes.gameButtonContainer}>
                    <Button id="gameButton1" className={`${gameButton1Show}`} onClick={isPlayingHandler}>Yes</Button>
                    <Button id="gameButton2" className={`${gameButton2Show}`} onClick={stopPlayingHandler}>No</Button>
                    <Button id="gameButton3" className={`${gameButton3Show}`} onClick={null}>empty</Button>
                    <Button id="gameButton4" className={`${gameButton4Show}`} onClick={null}>empty</Button>
                </div>
            
                <div className={classes.hiders}>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
            </div>
        </Card>
    );
};

export default TextGame;
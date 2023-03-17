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

    const playHandler = () => {
        console.log("we have a winner!");
        setPlay(true);
    }

    useEffect(() => {
        setPlay(false);
        console.log('fuck you joe boo!');
        setGameButton4Show(classes.playButton);
        setGameButton3Show(classes.playButton);
        setGameButton2Show(classes.playButton);
        setGameButton1Show(classes.playButton);
    }, []);

    return (
        <Card className={`${classes.LeftColumn} ${props.className}`}>
            <div className={`${classes.header}`}>Text-based Game</div>
            <div className={classes.container}>
                {!play &&
                    <p className={classes.typing}>
                        Would you like to play a game?<br />(Hiding sidebar or refreshing the window will reset game)
                    </p>
                }
                
                <div className={classes.gameButtonContainer}>
                    <Button key="gameButton1" className={gameButton1Show} onClick={playHandler}>1 Yes<br />1 Yes</Button>
                    <Button key="gameButton2" className={gameButton2Show} onClick={playHandler}>2 Yes<br />2 Yes</Button>
                    <Button key="gameButton3" className={gameButton3Show} onClick={playHandler}>3 Yes<br />3 Yes</Button>
                    <Button key="gameButton4" className={gameButton4Show} onClick={playHandler}>4 Yes<br />4 Yes</Button>
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
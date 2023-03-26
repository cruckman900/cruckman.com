import { React, useState, useEffect } from "react";
import Button from "../../components/UI/Button/Button";
import Card from '../../components/UI/Card/Card';
import textNodes from './TextGameNodes';
import classes from './TextGame.module.css';

function TextGame(props) {
    const [play, setPlay] = useState(false);

    const [gameButton1Show, setGameButton1Show] = useState(classes.buttonHidden);
    const [gameButton2Show, setGameButton2Show] = useState(classes.buttonHidden);
    const [gameButton3Show, setGameButton3Show] = useState(classes.buttonHidden);
    const [gameButton4Show, setGameButton4Show] = useState(classes.buttonHidden);

    const [gameText, setGameText] = useState(null);

    const [btn1Text, setBtn1Text] = useState(null);
    const [btn2Text, setBtn2Text] = useState(null);
    const [btn3Text, setBtn3Text] = useState(null);
    const [btn4Text, setBtn4Text] = useState(null);

    useEffect(() => {
        const storedIsPlaying = localStorage.getItem('isPlaying');
        if(storedIsPlaying === 'yes') {
            setPlay(true);
        } else {
            setPlay(false);
        }
    }, [play]);

    const [state, setState] = useState(null);

    const startGame = () => {
        setState(null);
        showTextNode(0);
    }

    useEffect(() => {
        clearButtons();
        startGame();
    }, []);

    const [textNode, setTextNode] = useState(null);

    const showTextNode = (textNodeIndex) => {
        const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
        
        if (!textNode.options) {
            gameOver("You'll have to try again when I've had time to work more on the game! Thanks for trying it out!")
            return;
        }
        setTextNode(textNode);

        setGameText(textNode.text);
        clearButtons();
        
        if (textNode.options[0]) {
            setBtn1Text(textNode.options[0].text);
            textNode.options[0].text !== null ? setGameButton1Show(classes.playButton) :  setGameButton1Show(classes.buttonHidden);
        }
        
        if (textNode.options[1]) {
            setBtn2Text(textNode.options[1].text);
            textNode.options[1].text !== null ? setGameButton2Show(classes.playButton) :  setGameButton2Show(classes.buttonHidden);
        }
        
        if (textNode.options[2]) {
            setBtn3Text(textNode.options[2].text);
            textNode.options[2].text !== null ? setGameButton3Show(classes.playButton) :  setGameButton3Show(classes.buttonHidden);
        }
        
        if (textNode.options[3]) {
            setBtn4Text(textNode.options[3].text);
            textNode.options[3].text !== null ? setGameButton4Show(classes.playButton) :  setGameButton4Show(classes.buttonHidden);
        }
    }

    const showOption = (option) => {
        return option.requiredState == null || option.requiredState(state);
    }

    const selectOption = (option) => {
        if (!option) {
            gameOver("You'll have to try again when I've had time to work more on the game! Thanks for trying it out!")
            return;
        }
        const nextTextNodeId = option.nextText;
        showTextNode(nextTextNodeId);
    }

    const gameOver = (gameOverText) => {
        clearButtons();
        setGameText(gameOverText);
    }

    const clearButtons = () => {
        setGameButton1Show(classes.buttonHidden);
        setGameButton2Show(classes.buttonHidden);
        setGameButton3Show(classes.buttonHidden);
        setGameButton4Show(classes.buttonHidden);
    }

    return (
        <Card showToggle={false} expanded={true}
            header="Text-based Game"
        >
            <div className={classes.container}>
                <div id="gameText" className={classes.typing}>{gameText}</div>
                
                <div key={Math.random()} className={classes.hiders}>
                    <p>&nbsp;</p><p>&nbsp;</p>
                    <p>&nbsp;</p><p>&nbsp;</p>
                    <p>&nbsp;</p><p>&nbsp;</p>
                </div>
                
                <div className={classes.gameButtonContainer}>
                    <Button id="gameButton1" key="gameButton1" className={gameButton1Show} onClick={() => selectOption(textNode.options[0])}>{btn1Text}</Button>
                    <Button id="gameButton2" key="gameButton2" className={gameButton2Show} onClick={() => selectOption(textNode.options[1])}>{btn2Text}</Button>
                    <Button id="gameButton3" key="gameButton3" className={gameButton3Show} onClick={() => selectOption(textNode.options[2])}>{btn3Text}</Button>
                    <Button id="gameButton4" key="gameButton4" className={gameButton4Show} onClick={() => selectOption(textNode.options[3])}>{btn4Text}</Button>
                </div>
            </div>
        </Card>
    );
};

export default TextGame;
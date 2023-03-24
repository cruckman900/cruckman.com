import { React, useState, useEffect } from "react";
import Button from "../../components/UI/Button/Button";
import Card from '../../components/UI/Card/Card';
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
    
    const textNodes = [
        {
            id: 0,
            text: `Do you want to play a game?`,
            options: [
                {
                    text: `Yes, please!`,
                    nextText: 1
                },
                {
                    text: `No thanks.`,
                    nextText: 5000
                }
            ]
        },
        {
            id: 1,
            text: `You wake up and notice that you are lying in a puddle of blood in the woods.
            You hear men talking faintly a short distance away.`,
            options: [
                {
                    text: `Get closer so you can hear what they are saying.`,
                    nextText: 2
                },
                {
                    text: `Look around for something to defend yourself with in case of trouble.`,
                    nextText: 3
                }
            ]
        },
        {
            id: 2,
            text: `You attempt to get closer and are noticed. The group of men are headed your way.`,
            options: [
                {
                    text: `Stay and fight!`,
                    nextText: 4
                },
                {
                    text: `Call out for help!!`,
                    nextText: 5
                },
                {
                    text: `Run like hell!!!`,
                    nextText: 6
                }
            ]
        },
        {
            id: 3,
            text: `You spot a very big stick. One that could crush skulls. Do you want to pick it up?`,
            options: [
                {
                    text: `Pick it up and take a few practice swings!`,
                    nextText: 7
                },
                {
                    text: `You weigh less than the stick. You see some nice-sized rocks and pick up a handful
                        of those instead.`,
                    setState: { rocks: true },
                    nextText: 8
                }
            ]
        },
        {
            id: 4,
            text: `You try to stand your ground. There are 3 men in black robes: 1 has a knife, the other 2 are empty-handed
                but look much more muscular.`,
            options: [
                {
                    text: `Go for the one with the knife. If you can get the knife, you'll stand a better chance with the other 2.`,
                    nextText: 9
                },
                {
                    text: `Go for the biggest one! Maybe it's like prison, where if you take out the big one, the others will leave you alone!`,
                    nextText: 10
                }
            ]
        },
        {
            id: 5,
            text: `You call out for help, but there is nobody here to hear your screams. You are frozen in your tracks, 
                afraid of what is about to happen.`,
            options: [
                {
                    text: `You find a bush and crawl into it, hoping to stay safe,`,
                    nextText: 11
                },
                {
                    text: `You keep thinking about a stick that you saw.  You decide to go back and grab it.`,
                    nextText: 12
                }
            ]
        },
        {
            id: 6,
            text: `You start booking it away from the baddies, but they are much faster than you. You are feeling the pain
                from whatever happened to you before you woke up.`,
            options: [

            ]
        },
        {
            id: 7,
            text: `As you pick up the stick, you feel a great, powerful sensation come over you.  You look at the stick glowing in your hands as
                it becomes straight and narrow... black and mighty with a golden dragon insignia.`,
            setState: {dragonstaff: true},
            options: [

            ]
        },
        {
            id: 8,
            text: `You hear some noises coming from the wilderness behind you.  You feel safe with your handful of rocks.`,
            options: [
                {
                    text: `Throw a rock in the direction of the noises`,
                    nextText: 13
                },
                {
                    text: `You start rethinking yourself with your handful of rocks.  Something nice and heavy would make you feel safer`,
                    nextText: 14
                }
            ]
        },
        {
            id: 9,
            text: ``,
            options: [

            ]
        },
        {
            id: 5000,
            text: `Fine then! I didn't want you to play it anyway! *pbbbbbbbbt!* >:3`,
            options: [
                {
                    text: `Reset this graphically intensive game!`,
                    nextText: 0
                }
            ]
        },
    ];

    return (
        <Card showToggle={false}
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
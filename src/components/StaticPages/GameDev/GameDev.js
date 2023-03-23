import React from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import lolly_gamer from "../../../assets/images/lolly_gamer.png";
import classes from './GameDev.module.css';

function GameDev() {
    return (
        <DefaultPage image={lolly_gamer} title="Game Dev">
            here is a tad of text
        </DefaultPage>
    );
};

export default GameDev;
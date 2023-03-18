import React from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import lolly_computer from "../../../assets/images/lolly_computer.png";
import classes from './GameDev.module.css';

function GameDev() {
    return (
        <DefaultPage image={lolly_computer} title="Game Dev">
            here is a tad of text
        </DefaultPage>
    );
};

export default GameDev;
import React from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import lolly_gamer from "../../../assets/images/lolly_gamer.png";
import classes from './GameDev.module.css';

function GameDev() {
    return (
        <DefaultPage image={lolly_gamer} title="Game Dev">
            <p>
                I am really interested in game creation: from generating game objects, to creating a world to put them in.  I'm 
                no genius at it, but I have fun doing it.  I like to model things in Blender.  It's a very tricky tool to master, 
                but once you start figuring things out, it's probably one of the most powerful tools I've ever played with, and it's 
                free!  They just added hair stuff in it (version 3.5)... I will have to try it out.
            </p>
            <p>
                Once you have some game objects, you need to put them into a game engine.  Unity is pretty nice and has a very large 
                assets library that you can purchase assets (or get some for free).  There are a lot of tutorials online to get you 
                started.
            </p>
        </DefaultPage>
    );
};

export default GameDev;
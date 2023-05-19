import React, { Component } from "react";
import styles from './Home.module.css';
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import Card from "../../UI/Card/Card";
import oldcomputer from "../../../assets/images/oldcomputer.jpg";
import lolly from "../../../assets/images/lolly.png";

export default class Home extends Component {
    render() {
        return (
            <DefaultPage image={lolly} title="Welcome to cruckman.com!">
                <Card showToggle={false} expanded={true}>
                    I hope to populate this site with a lot of interesting things. I will share with you tidbits
                    of information about what I have found while building this site. ReactJS is new to me, and
                    I am developing this site as I progress through a Udemy course on React using what I learn in 
                    the tutorial to make this site run.
                </Card>
                <div></div>
                <div className={styles.bodyDiv}>
                    <img src={oldcomputer} alt="Old Computer" className={styles.bodyImage} />
                    A friend of mine told me that this site looks like a 'Throw-back Thursday' site.  Little
                    does he know that that is exactly what I was aiming to achieve.  
                    I want something that looks retro, because everything on this site will be aiming at what
                    things were like in the 90's and early 2k era.  Text-based games or side-scrollers, early metal music, etc.
                </div>
                <div className={styles.bodyDiv}>
                    <i>
                        The little pink-haired cartoon girl comes from a friend that makes 'chibi' versions of people's
                        characters in a game called Perfect World International (PWI).  I began playing this game around 
                        2006, shortly after quitting World of Warcraft (WoW).  Money was tight, so I had to quit playing
                        a game that was subscription-based and looked up games that were free-to-play while maintaining
                        a similar game style equivalent to WoW.
                    </i>
                </div>
            </DefaultPage>
        )
    }
}
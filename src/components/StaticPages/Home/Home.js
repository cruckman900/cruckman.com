import React, { Component } from "react";
import styles from './Home.module.css';
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import lolly from "../../../assets/images/lolly.png";

export default class Home extends Component {
    render() {
        return (
            <DefaultPage image={lolly} title="Welcome to cruckman.com!">
                <div>I hope to populate this site with a lot of interesting things.</div>
                <div className={styles.bodyDiv}>
                    A friend of mine told me that this site looks like a 'throw-back Thursday' site.  Little
                    does he know that that is exactly what I was aiming to achieve.  hehehaha
                    I want something that looks retro, because everything on this site will be aiming at what
                    things were like in the 90's and early 2k era.  Text-based games, early metal music, etc.
                </div>
                <div className={styles.bodyDiv}>
                    The little pink-haired cartoon girl comes from a friend that makes 'chibi' versions of people's
                    characters in a game called Perfect World International (PWI).  I began playing this game around 
                    2006, shortly after quitting World of Warcraft (WoW).  Money was tight, so I had to quit playing
                    a game that was subscription-based and looked up games that were free-to-play while maintaining
                    a similar game style equivalent to WoW.
                </div>
                <div className={styles.bodyDiv}>
                    One thing that you should be aware of is that I have a Login/Register link.
                    Why would a personal website need a login?  I plan on placing things here
                    that not all eyes coming upon my page need to see.  I'll have graphics, writings,
                    code samples, etc that should only be seen if you are wanting that material.  I will have
                    items that can be purchased, shared, and/or used in whole, or in part by anyone
                    wishing to use them.
                </div>
                <div className={styles.bodyDiv}>
                    This will also be a place where you can share materials in order to participate
                    in things that are far larger than 1 person can partake... like building a game!
                </div>
                <div className={styles.bodyDiv}>
                    And finally, I (and possibly you), hope to have people coming around asking for help,
                    or contract works that fit my (or maybe your) skill sets.  Or maybe, we can all just hang out
                    and chat for a while.
                </div>
            </DefaultPage>
        )
    }
}
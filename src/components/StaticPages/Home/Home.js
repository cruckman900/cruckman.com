import React, { Component } from "react";
import styles from './Home.module.css';
import WaitPart from "../../WaitPart/WaitPart";

export default class Home extends Component {
    render() {
        setTimeout(() => {
            document.getElementById("body").style.display = "inline-block";
          }, 5100);
        
        return (
            <>
                <WaitPart />
                <div id="body" className={styles.body}>
                    <h1>Welcome to my website!</h1>
                    <div>I hope to populate this site with a lot of interesting things.</div>
                    <div>
                        One thing that you should be aware of is that I have a Login/Register link.
                        Why would a personal website need a login?  I plan on placing things here
                        that not all eyes coming upon my page need to see.  I'll have graphics, writings,
                        code samples, etc that should only be seen if you are wanting that material.  I will have
                        items that can be purchased, shared, and/or used in whole, or in part by anyone
                        wishing to use them.
                    </div>
                    <div>
                        This will also be a place where you can share materials in order to participate
                        in things that are far larger than 1 person can partake... like building a game!
                    </div>
                </div>
            </>
        )
    }
}
import React from "react";
import Card from '../../UI/Card/Card';
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import lolly_friends from "../../../assets/images/lf222.png";
import styles from './About.module.css';

function Friends() {
    return (
        <DefaultPage image={lolly_friends} title="Friends and Family">
            <p>
                I know that this may be hard to believe, but I do have friends and aquaintances!  hehehaha  I will be listing
                some of the skilled people that I know that allow me to post information.  I'm talking... highly skilled people!!
            </p>
            <Card header="Cassie Lightfritz">
                <p>
                    I met Cassie in 2008 when I got hired on at Wheeling Jesuit University (now just Wheeling University).
                    I worked for sponsored programs, Center for Educational Technology and Challenger Learning Center.
                    Cassie was a graphic designer, into Karate, and even had a motorcycle!  I am not sure if she still has the motercycle,
                    but she is still into Karate and is an instructor at United Martial Arts.  I also am not sure, but I know that
                    she had a drum set.
                </p>
                <p>
                    As I started develop this site,
                    I reached out to her for design ideas and a dragon image.  She was too busy, but she forwarded me to
                    Silas Amunga to help me out.
                </p>
                <p>
                    I highly recommend trying to reach her if you are looking to have something made:
                    if she has time.
                </p>
                <p>
                    <a className={styles.link} href="https://caslig.myportfolio.com/graphic-design" alt="Cassie's design portfolio" target="_blank"  rel="noreferrer">
                        Cassie's graphic design portfolio
                    </a>
                </p> 
            </Card>
            <Card header="Silas Amunga">
                <p>
                    I don't know too much about Silas yet, but he was referred to me by Cassie.  I contracted him to design the amazing
                    dragon that you see on all the pages of my site as the background image.  If Cassie is busy in the future, and I need 
                    some graphic work done, I will hit him up!
                </p>
                <p>
                    <a className={styles.link} href="http://agnumasalis.carbon33.com" alt="Silas' design portfolio" target="_blank"  rel="noreferrer">
                        Silas' portfolio
                    </a>
                </p>
                <p>
                    Contact him at <a className={styles.link} href="mailto:contactme@carbon33.com">contactme@carbon33.com</a>
                </p>
            </Card>
        </DefaultPage>
    );
}

export default Friends;
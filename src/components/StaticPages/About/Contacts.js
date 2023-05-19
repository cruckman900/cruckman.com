import React from "react";
import Card from '../../UI/Card/Card';
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import lolly_friends from "../../../assets/images/lf222.png";
import dragon1 from "../../../assets/images/dragon900.png";
import styles from './About.module.css';

function Friends() {
    return (
        <DefaultPage image={lolly_friends} title="Friends and Family">
            <p>
                Here are some people that I know that are great at what they do if you need help with getting something worked on.
            </p>
            <Card header="Cassie Lightfritz" showToggle={false} expanded={true}>
                <p>
                    Graphic Designer
                </p>
                <p>
                    <a className={styles.link} href="https://caslig.myportfolio.com/graphic-design" alt="Cassie's design portfolio" target="_blank"  rel="noreferrer">
                        Cassie's graphic design portfolio
                    </a>
                </p> 
            </Card>
            <Card header="Silas Amunga" showToggle={false} expanded={true}>
                <p>
                    <img src={dragon1} alt="Dragon by Silas Amunga" className={styles.bodyImage} />
                    Graphic Designer
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
import React from "react";
import { Row, Col } from 'react-bootstrap';

import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import Player from '../../UI/Player/Player';
import MasterOfPuppets from '../../../assets/audio/ChrisRuckman_MasterOfPuppets.mp3';
import EnterSandman from '../../../assets/audio/ChrisRuckman_EnterSandman.mp3';
import SetTheWorldAfire from '../../../assets/audio/ChrisRuckman_SetTheWorldAfire.mp3';
import HighwayToHell from '../../../assets/audio/ChrisRuckman_HighwayToHell.mp3';
import HotelCalifornia from '../../../assets/audio/ChrisRuckman_HotelSomethingOrOther.mp3';
import Sanitarium from '../../../assets/audio/ChrisRuckman_WelcomeHome(Sanitarium).mp3';

import guitars from "../../../assets/images/myGuitars.jpg";

import lollyGuitar from "../../../assets/images/lolly_guitar.png";
import styles from './Music.module.css';

function Music() {
    return (
        <>
            <DefaultPage image={lollyGuitar} title="Music (guitar)">
                <div>
                        <img src={guitars} alt="My Guitars" className={styles.bodyImage} />
                        <p>
                            I have 2 guitars currently. 1 electric (BC Rich Beast - Speedloader edition) and an acoustic-electric (Alvarez).
                            I've only recently bought the Alvarez to learn finger-picking thanks to this composition of
                            <a href='https://youtu.be/4SQg3hVt44Q' className={styles.link} target='blank'>Hotel California</a> by Lucas Imbiriba.
                        </p>
                        <p>
                            I've been playing guitar since 1987.  That's a long time, right?  I don't feel that I have the talent or skill
                            that one playing guitar that long should possess, but I enjoy it.  I began taking lessons about 2 months ago.  I'm
                            trying to get a real understanding of how and what I play and why I am playing what I play.
                        </p>
                        <p>
                            I mostly like 80's - 90's hard rock and heavy metal.  And for the longest time, that was pretty much all that I
                            played.  Why?  Power Chords.  Easy to play and can really play as fast as you want since you are only playing notes
                            on 2 or 3 strings at a time.  My goal now is to learn how to play melodies, do improv leads and get more into other genres
                            of music, mostly folk and classical.
                        </p>
                        <p>
                            Here are a few songs that I have recorded.  I will be replacing them with better versions and adding more songs to the 
                            list as time permits.
                        </p>
                </div>
                <div className={styles.Song}>
                    <Row><Col xs={9}><span className={styles.colText}>AC/DC - Highway To Hell</span></Col><Col><Player url={HighwayToHell} className={styles.float} /></Col></Row>
                    <hr className={styles.hr} />
                    <Row><Col xs={9}><span className={styles.colText}>Eagles - Hotel California</span></Col><Col><Player url={HotelCalifornia} className={styles.float} /></Col></Row>
                    <hr className={styles.hr} />
                    <Row><Col xs={9}><span className={styles.colText}>MegaDeth - Set The World Afire</span></Col><Col><Player url={SetTheWorldAfire} className={styles.float} /></Col></Row>
                    <hr className={styles.hr} />
                    <Row><Col xs={9}><span className={styles.colText}>Metallica - Master of Puppets</span></Col><Col><Player url={MasterOfPuppets} className={styles.float} /></Col></Row>
                    <hr className={styles.hr} />
                    <Row><Col xs={9}><span className={styles.colText}>Metallica - Enter Sandman</span></Col><Col><Player url={EnterSandman} className={styles.float} /></Col></Row>
                    <hr className={styles.hr} />
                    <Row><Col xs={9}><span className={styles.colText}>Metallica - Welcome Home (Sanitarium)</span></Col><Col><Player url={Sanitarium} className={styles.float} /></Col></Row>
                    <hr className={styles.hr} />
                </div>
            </DefaultPage>
        </>
    );
}

export default Music;
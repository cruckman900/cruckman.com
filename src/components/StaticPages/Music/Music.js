import React from "react";
import { Row, Col } from 'react-bootstrap';

import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import Player from '../../UI/Player/Player';
import MasterOfPuppets from '../../../assets/audio/ChrisRuckman_MasterOfPuppets.mp3';
import EnterSandman from '../../../assets/audio/ChrisRuckman_EnterSandman.mp3';
// import MasterOfPuppets from '../../../assets/audio/ChrisRuckman_MasterOfPuppets.mp3';
// import MasterOfPuppets from '../../../assets/audio/ChrisRuckman_MasterOfPuppets.mp3';
// import MasterOfPuppets from '../../../assets/audio/ChrisRuckman_MasterOfPuppets.mp3';

import lollyGuitar from "../../../assets/lolly_guitar.png";
import styles from './Music.module.css';

function Music() {
    return (
        <>
            <DefaultPage image={lollyGuitar} title="Music (guitar)">
                <div className={styles.Song}>
                    <Row><Col xs={7}>Metallica - Master of Puppets</Col><Col><Player url={MasterOfPuppets} className={styles.float} /></Col></Row>
                    <Row><Col xs={7}>Metallica - Enter Sandman</Col><Col><Player url={EnterSandman} className={styles.float} /></Col></Row>
                </div>
            </DefaultPage>
        </>
    )
}

export default Music;
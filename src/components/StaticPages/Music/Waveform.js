import { React, useRef, useEffect, useState } from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FormGroup } from "react-bootstrap";
import Card from '../../UI/Card/Card';
import { WaveformContainer } from '../../UI/WaveformUIComponents/WaveformContainer';
import { PlayButton } from '../../UI/WaveformUIComponents/PlayButton';
import WaveSurfer from 'wavesurfer.js';
import styles from './Waveform.module.css';
import MasterOfPuppets from '../../../assets/audio/ChrisRuckman_MasterOfPuppets.mp3';
import EnterSandman from '../../../assets/audio/ChrisRuckman_EnterSandman.mp3';
import SetTheWorldAfire from '../../../assets/audio/ChrisRuckman_SetTheWorldAfire.mp3';
import HighwayToHell from '../../../assets/audio/ChrisRuckman_HighwayToHell.mp3';
import HotelCalifornia from '../../../assets/audio/ChrisRuckman_HotelSomethingOrOther.mp3';
import Sanitarium from '../../../assets/audio/ChrisRuckman_WelcomeHome(Sanitarium).mp3';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

export default function Waveform() {
    const waveformRef = useRef();
    const trackRef = useRef();

    const [waveform, setWaveform] = useState();
    const [playing, setPlayPause] = useState(false);    
    const [songChoice, setSong] = useState();
    
    const songs = {
        '#masterofpuppets': MasterOfPuppets,
        '#entersandman': EnterSandman,
        '#settheworldafire': SetTheWorldAfire,
        '#highwaytohell': HighwayToHell,
        '#hotelcalifornia': HotelCalifornia,
        '#sanitarium': Sanitarium
    };

    const songTitles = {
        '#masterofpuppets': 'Metallica - Master Of Puppets',
        '#entersandman': 'Metallica - Enter Sandman',
        '#settheworldafire': 'MegaDeth - Set The World Afire',
        '#highwaytohell': 'AC/DC - Highway To Hell',
        '#hotelcalifornia': 'Eagles - Hotel California',
        '#sanitarium': 'Metallica - (Welcome Home) Sanitarium'
    }

    useEffect(() => {
        setSong('#masterofpuppets');        
    }, []);
    
    useEffect(() => {
        if(waveformRef.current) {
            setWaveform(WaveSurfer.create({
                container: waveformRef.current,
                barRadius: 3,
                cursorWidth: 1,
                backend: 'WebAudio',
                height: 80,
                progressColor: '#eebb5a',
                responsive: true,
                waveColor: '#260000',
                cursorColor: 'transparent'
            }));
        } else {
            console.log("there is no reference to the div element");
        }
    }, []);
        
    useEffect(() => {
        if (waveform) {
            waveform.load(trackRef.current);
        }
    }, [songChoice]);

    const changeHandler = (evt) => {
        setSong(evt);
    }

    const handlePlay = () => {
        setPlayPause(!playing);
        waveform.playPause();
    }

    return (
        <>
            <FormGroup>
                <Dropdown as={ButtonGroup} size="sm" onSelect={(e) => {changeHandler(e)}}>
                    <Dropdown.Toggle id="electric" className={styles.dropDownToggle}>Electric Guitar</Dropdown.Toggle>
                    <Dropdown.Menu className={styles.menu}>
                        <Dropdown.Item href="#masterofpuppets" className={styles.ddlItem}>Metallica - Master Of Puppets</Dropdown.Item>
                        <Dropdown.Item href="#entersandman" className={styles.ddlItem}>Metallica - Enter Sandman</Dropdown.Item>
                        <Dropdown.Item href="#settheworldafire" className={styles.ddlItem}>MegaDeth - Set The World Afire</Dropdown.Item>
                        <Dropdown.Item href="#highwaytohell" className={styles.ddlItem}>AC/DC - Highway To Hell</Dropdown.Item>
                        <Dropdown.Item href="#hotelcalifornia" className={styles.ddlItem}>Eagles - Hotel California</Dropdown.Item>
                        <Dropdown.Item href="#sanitarium" className={styles.ddlItem}>Metallica - (Welcome Home) Sanitarium</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </FormGroup>

            <Card header={songTitles[songChoice]} showToggle={false} expanded={true}>
                <WaveformContainer>
                    <PlayButton onClick={handlePlay}>
                        {!playing ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
                    </PlayButton>
                    <div id="waveform" className={styles.wave} ref={waveformRef} />
                    <audio id="track" src={songs[songChoice]} ref={trackRef} />
                </WaveformContainer>
            </Card>
        </>
    );
};
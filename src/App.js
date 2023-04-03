import { React, useEffect, useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from './components/UI/Button/Button';

import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Sidebar';
import MainContentWindow from './MainContentWindow/MainContentWindow';
import Footer from './Footer/Footer';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import dragon1 from './assets/images/dragon1.png';
import audio from './assets/audio/cool-impact.wav';
import classes from './App.module.css';

function App() {
    const trackRef = useRef();
    const [loadState, setLoadState] = useState('load');
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (loadState === 'loading') {
            setTimeout(() => {
                setLoadState('loaded');
            }, 5000);
            if (trackRef.current) {
                setTimeout(() => {
                    trackRef.current.play();
                }, 1800);
            }
        }
    }, [loadState]);
  
    return (
        <>
            {
                loadState === 'load' && 
                    <>
                        <div className={classes.loaderContainer}>
                            <img src={dragon1} className={classes.dragon} alt="Spinning Dragon" />
                        </div>
                        <div className={classes.loaderContainer2} onClick={() => {setLoadState('loading')}}>Touch, to enter the dragon!</div>
                    </>
            }
            {
                loadState === 'loading' &&
                    <>
                        <div className={classes.loaderContainer}>
                            <img src={dragon1} className={`${classes.dragon} ${classes.spinner}`} alt="Spinning Dragon" />
                        </div>
                        <div className={classes.loaderContainer2}>LOADING!! the 80's, 90's<br />and early 2000's<br />Please remain calm.</div>
                        <audio id="track" src={audio} ref={trackRef} muted={false} />
                    </>
            }
            {
                loadState === 'loaded' && 
                    <Container fluid className={classes.App}>
                    <Row>
                        <Col lg="12"><Navigation /></Col>
                    </Row>
                    <Row className={classes.RowBody}>
                        {show &&
                            <Col lg="2" className={classes.ColLeft}><Sidebar /></Col>
                        }
                        <Col>
                            <Button className={`${classes.buttonHolder}`} onClick={() => setShow((prevState) => !prevState)}>
                                <FontAwesomeIcon icon={!show ? faChevronRight : faChevronLeft} className={classes.chevron} fontSize="1.0rem" />
                            </Button>                        
                        </Col>
                        <Col lg="10" className={`${classes.Body} ${classes.ColRight} ${show ? classes.Right : classes.Left} ${show ? classes.RightHide : classes.RightShow}`}>
                            <MainContentWindow />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12"><Footer /></Col>
                    </Row>
                </Container>
            }
            <div className={classes.angry}><img src={dragon1} /></div>
        </>
    );
}

export default App;
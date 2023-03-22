import { React, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from './components/UI/Button/Button';

import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Sidebar';
import MainContentWindow from './MainContentWindow/MainContentWindow';
import Footer from './Footer/Footer';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import dragon1 from './assets/images/dragon1.png';
import classes from './App.module.css';

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 4100);
    }, []);
    
    const [show, setShow] = useState();

    useEffect(() => {
      setShow(true);
    }, []);
  
    return (
        <>
            {loading ? (
                <>
                <div className={classes.loaderContainer}>
                    <img src={dragon1} className={classes.spinner} alt="Spinning Dragon" />
                </div>
                <div className={classes.loaderContainer2}>LOADING!! the 80's, 90's<br />and early 2000's<br />Please remain calm.</div>
                </>
            ) : (      
                <Container fluid className={classes.App}>
                    <Row>
                        <Col lg="12"><Navigation /></Col>
                    </Row>
                    <Row className={classes.RowBody}>
                        {show &&
                        <Col lg="2" className={classes.ColLeft}><Sidebar /></Col>
                        }
                        <Col lg="10" className={`${classes.Col} ${classes.ColRight}`}>
                            <MainContentWindow />
                            <Button className={`${classes.buttonHolder}`} onClick={() => setShow((prevState) => !prevState)}>
                                <FontAwesomeIcon icon={!show ? faChevronRight : faChevronLeft} className={classes.chevron} fontSize="1.0rem" />
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12"><Footer /></Col>
                    </Row>
                </Container>
            )}
        </>
    );
}

export default App;
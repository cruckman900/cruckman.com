import { React, useEffect, useState } from 'react';

import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Sidebar';
import MainContentWindow from './MainContentWindow/MainContentWindow';
import Footer from './Footer/Footer';

import { Container, Row, Col } from 'react-bootstrap';

import classes from './App.module.css';

function App() {
    return (
        <Container fluid className={classes.App}>
            <Row>
                <Col lg="12"><Navigation /></Col>
            </Row>
            <Row className={classes.RowBody}>
                <Col lg="2" className={classes.ColLeft}><Sidebar /></Col>
                <Col lg="10" className={`${classes.Col} ${classes.ColRight}`}>
                    <MainContentWindow />
                </Col>
            </Row>
            <Row>
                <Col lg="12"><Footer /></Col>
            </Row>
        </Container>
    );
}

export default App;
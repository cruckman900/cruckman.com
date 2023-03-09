import React from 'react';

import Navigation from './components/UI/Navigation/Navigation';
import TextGame from './components/TextGame/TextGame';
import Weather from './components/Weather/Weather';
import WaitPart from './components/WaitPart/WaitPart';

import { Container, Row, Col } from 'react-bootstrap';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      {/* <Navigation /> */}
      <Container fluid className={styles.Container}>
        <Row className={styles.RowBody}>
          <Col xs={2} className={styles.ColLeft}>
            <TextGame />
            <Weather />
          </Col>
          <Col className={styles.Col}>
            <Navigation />
          </Col>
        </Row>
      </Container>
      <footer className={styles.Footer}>
        <i>&copy; Christopher Ruckman {new Date().getFullYear()}</i>
      </footer>
    </div>
  );
}

export default App;
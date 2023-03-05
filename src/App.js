import React from 'react';

import Navigation from './components/UI/Navigation/Navigation';
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
          <Col xs={2} className={`${styles.Col} ${styles.ColLeft}`}>
            <Weather />
          </Col>
          <Col className={styles.Col}>
            <Navigation />
          </Col>
        </Row>
      </Container>
      <footer className={styles.Footer}>

      </footer>
    </div>
  );
}

export default App;
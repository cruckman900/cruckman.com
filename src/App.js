import React from 'react';

import dragon1 from './assets/dragon1.png';

import Navigation from './components/UI/Navigation/Navigation';
import Weather from './components/Weather';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Navigation />
      <Container fluid className={styles.Container}>
        <Row className={styles.RowBody}>
          <Col xs={2} className={`${styles.Col} ${styles.ColLeft}`}>
            <div>Cookies and milk</div>
            <Weather></Weather>
          </Col>
          <Col className={styles.Col}>
            <img src={dragon1} alt="logo" className={`${styles.AppLogo}`} />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className={styles.AppLink}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </Col>
        </Row>
      </Container>
      <footer className={styles.Footer}>

      </footer>
    </div>
  );
}

export default App;
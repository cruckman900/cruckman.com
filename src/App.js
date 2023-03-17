import React from 'react';

import Navigation from './components/UI/Navigation/Navigation';
import TextGame from './Sidebar/TextGame/TextGame';
import Weather from './Sidebar/Weather/Weather';

import { Container, Row, Col } from 'react-bootstrap';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Container fluid className={styles.Container}>
        <Row className={styles.RowBody}>
          <Col xs={2} className={styles.ColLeft}>
            <div className={styles.fixed}>
              <TextGame className={styles.padBottom} />
              <Weather className={styles.padBottom} />
            </div>
          </Col>
          <Col className={`${styles.ColRight} ${styles.Col}`}>
            <div class={styles.bgColor}>
              <Navigation />
            </div>
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
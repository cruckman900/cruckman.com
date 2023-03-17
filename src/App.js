import { React, useEffect, useState } from 'react';

import Navigation from './components/UI/Navigation/Navigation';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import TextGame from './Sidebar/TextGame/TextGame';
import Weather from './Sidebar/Weather/Weather';

import { Container, Row, Col } from 'react-bootstrap';
import styles from './App.module.css';
import Button from './components/UI/Button/Button';

function App() {
  const [show, setShow] = useState();

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={styles.App}>
      <Container fluid className={styles.Container}>
        <Row className={styles.RowBody}>
          <Col xs="2" className={show && styles.ColLeft}>
              { show &&
                <div className={styles.fixed}>
                  <TextGame className={styles.padBottom} />
                  <Weather className={styles.padBottom} />
                </div>
              }
          </Col>
          <Col xs="9" className={`${styles.ColRight} ${styles.Col}`}>
            <Navigation />
            <Button className={`${styles.buttonHolder}`} onClick={() => setShow((prevState) => !prevState)}>
              <FontAwesomeIcon icon={!show ? faChevronRight : faChevronLeft} className={styles.chevron} fontSize="1.0rem" />
            </Button>
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
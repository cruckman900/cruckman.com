import { React, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import dragon1 from '../../assets/dragon1.png';
import Resume from '../StaticPages/Resume/Resume';
import styles from './WaitPart.module.css';

function WaitPart() {
  
useEffect(() => {
  const identifier = setTimeout(() => {
    document.getElementById("welcome").style.display = 'none';
    document.getElementById("description").style.display = 'inline-block';
  }, 7000);
  
  return () => {
    clearTimeout(identifier);
    }
  }, []);

  return (
    <div>
      <div id="welcome">
        <h2>Welcome to my site!</h2>
        <img src={dragon1} alt="logo" style={{display: 'inline-block'}} className={`${styles.AppLogo}`} />
      </div>\
      <Container fluid className={styles.body}>
        <div id="description" className={styles.body}>
            <h2>You can call me Chris.  I'm not much into formalities.</h2>
            <p>Hola hola hola</p>
        </div>
      </Container>
      <div id="resume" className={styles.body}>
          <Resume />
      </div>
    </div>
  );
};

export default WaitPart;
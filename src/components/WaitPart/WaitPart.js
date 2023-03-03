import { React, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import dragon1 from '../../assets/dragon1.png';
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
    <>
      <div id="welcome">
        <h2>Welcome to my site!</h2>
        <img src={dragon1} alt="logo" style={{display: 'inline-block'}} className={`${styles.AppLogo}`} />
      </div>
      <div id="description" className={styles.WelcomeDiv} style={{display: 'none'}}>
        <h2>You can call me Chris.  I'm not much into formalities.</h2>
        <Container fluid id={styles.body}>
          Hola hola hola
        </Container>
      </div>
    </>
  );
};

export default WaitPart;
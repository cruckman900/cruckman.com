import { React, useEffect } from 'react';
import dragon1 from '../../assets/dragon1.png';
import styles from './WaitPart.module.css';

function WaitPart() {
  return (
    <div>
      <div id="welcome">
        <img src={dragon1} alt="logo" className={styles.AppLogo} />
      </div>
    </div>
  );
};

export default WaitPart;
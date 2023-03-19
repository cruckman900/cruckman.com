import React from "react";
import { Col, Row } from 'react-bootstrap';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.Footer}>
            <i>&copy; Christopher Ruckman {new Date().getFullYear()}</i>
        </footer>
    );
}

export default Footer;
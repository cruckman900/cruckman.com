import React from "react";
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.Footer}>
            <i>&copy;{new Date().getFullYear()} Christopher Ruckman</i>
        </footer>
    );
}

export default Footer;
import React from "react";
import styles from './DefaultPage.module.css';

const DefaultPage = (props) => {
    return (
        <div>
            <div className={styles.header}>
                <img src={props.image} alt="" className={styles.image} />
                <h1 className={styles.headertext}>{props.title}</h1>
            </div>
            <div className={`${styles.body} ${props.className}`}>
                {props.children}
            </div>
        </div>
    );
}

export default DefaultPage;
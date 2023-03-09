import React from "react";
import styles from './DefaultPage.module.css';

const DefaultPage = (props) => {
    return (
        <>
            <div className={styles.header}>
                <img src={props.image} alt="header image" className={styles.image} />
                <h1 className={styles.headertext}>{props.title}</h1>
            </div>
            <div>
                {props.children}
            </div>
        </>
    );
}

export default DefaultPage;
import React from "react";
import { Container } from "react-bootstrap";
import styles from './ResumeHeader.module.css';

const ResumeHeader = (props) => {
    return (
    <Container>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.contactInfo}>{props.contactInfo}</div>
    </Container>
    )
}

export default ResumeHeader;
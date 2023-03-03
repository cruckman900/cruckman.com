import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from './JobHeader.module.css';

const JobHeader = (props) => {
    console.log('JobHeader', props);
    return (
        <Row>
            <Col><div className={styles.floatStart}>{props.jobInfo}</div></Col>
            <Col><div className={styles.floatEnd}>{props.datesWorked}</div></Col>
        </Row>
    );
}

export default JobHeader;
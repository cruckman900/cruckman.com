import { React, useState } from "react";
import Card from '../UI/Card/Card';
import Label from '../UI/Label/Label';
import Button from '../UI/Button/Button';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './Login.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const myIcons = {
    up: faChevronUp, 
    down: faChevronDown
}

function Login(props) {
    const [arrow, setArrow] = useState('up');
    const [containerStyle, setContainerStyle] = useState('block');

    const rollupHandler = () => {
        if (arrow === 'up') {
            setArrow('down');
            setContainerStyle('none');
            return;
        }
        setArrow('up');
        setContainerStyle('block');
    }

    return (
        <Card className={`${classes.LeftColumn} ${props.className}`}>
            <div className={classes.header}>
                Login/Register
                <span className={classes.icon} onClick={rollupHandler}><FontAwesomeIcon icon={myIcons[arrow]} fontSize="1.0rem" /></span>
            </div>
            <Container className={classes.container} style={{display: containerStyle}}>
                <Row>
                    <Col>
                        <Label className={classes.loginLabel}>USERNAME</Label><input className={classes.UserInput} />
                    </Col>
                    <Col>
                        <Label className={classes.loginLabel}>PASSWORD</Label><input className={classes.UserInput} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className={classes.Button}>Submit</Button>
                        <span>
                            <a className={classes.loginLink} href="" alt="Register">Register</a>
                            <a className={classes.loginLink} href="" alt="Register">Forgot User/Pass</a>
                        </span>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
}

export default Login;
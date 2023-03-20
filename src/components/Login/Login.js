import React from "react";
import Card from '../UI/Card/Card';
import Label from '../UI/Label/Label';
import Button from '../UI/Button/Button';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './Login.module.css';

function Login(props) {
    return (
        <Card className={`${classes.LeftColumn} ${props.className}`}>
            <div className={classes.header}>Login/Register</div>
            <Container className={classes.container}>
                <Row>
                    <Col>
                        <Label className={classes.Label}>USERNAME</Label><input className={classes.UserInput} />
                    </Col>
                    <Col>
                        <Label className={classes.Label}>PASSWORD</Label><input className={classes.UserInput} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className={classes.Button}>Submit</Button>
                        <a className={classes.link} href="" alt="Register">Register</a>
                        <a className={classes.link} href="" alt="Register">Forgot User/Pass</a>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
}

export default Login;
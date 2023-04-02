import { React } from "react";

import Label from '../../components/UI/Label/Label';
import Button from '../../components/UI/Button/Button';
import { Container, Row, Col } from 'react-bootstrap';

import classes from './Login.module.css';

const LoginForm = () => {
    return (
        <Container className={classes.container}>
            <Row>
                <Col>
                    <Label className={classes.loginLabel}>USERNAME</Label>
                    <input className={classes.UserInput} />
                </Col>
                <Col>
                    <Label className={classes.loginLabel}>PASSWORD</Label>
                    <input className={classes.UserInput} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className={classes.Button}>Submit</Button>
                    <div className={classes.linksContainer}>
                        <a className={`${classes.loginLink} ${classes.left}`}
                            href="#" alt="Register">Register</a>
                        <a className={`${classes.loginLink} ${classes.right}`}
                            href="#" alt="Register">Forgot User/Pass</a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;
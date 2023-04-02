import { React } from "react";

import Label from '../../components/UI/Label/Label';
import Button from '../../components/UI/Button/Button';
import { Container, Row, Col } from 'react-bootstrap';

import classes from './Login.module.css';

const ForgotForm = (props) => {
    function handleClick(event) {
        props.changeActive(event.target.name);
    }

    return (
        <Container className={classes.container}>
            <Row>
                <Col>
                    <div className={`${classes.linksContainer} ${classes.loginLink}`}>
                        <p>Please provide the email address that you used to register with.</p>
                    </div>
                </Col>
                <Col>
                    <Label className={classes.loginLabel}>EMAIL ADDRESS</Label>
                    <input className={classes.UserInput} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className={classes.Button}>Submit</Button>
                    <div className={classes.linksContainer}>
                        <a className={`${classes.loginLink} ${classes.left}`}
                            href="#" name="Login" onClick={handleClick}>Back to Login</a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ForgotForm;
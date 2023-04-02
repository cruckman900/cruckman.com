import { React } from "react";

import Label from '../../components/UI/Label/Label';
import { Container, Row, Col } from 'react-bootstrap';

import classes from './Login.module.css';

const LoggedInUser = (props) => {
    function handleClick(event) {
        props.changeActive(event.target.name);
    }

    return (
        <Container className={classes.container}>
            <Row>
                <Col>
                    <Label className={classes.loginLabel}>WELCOME {props.username}</Label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={classes.linksContainer}>
                        <a className={`${classes.loginLink} ${classes.left}`}
                            href="#" name="LogOut" onClick={handleClick}>Log Out</a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default LoggedInUser;
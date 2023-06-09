import React from "react";
import { Row } from 'react-bootstrap'; 

import Login from './Login/Login';
import TextGame from "./TextGame/TextGame";
import Weather from "./Weather/Weather";

import classes from './Sidebar.module.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div className={`${classes.wrapperDiv} ${classes.scrollable} ${classes.noScrollbars}`}>
                <div>
                    <Row className={classes.login}><Login /></Row>
                    <Row className={classes.textGame}><TextGame /></Row>
                    <Row className={classes.weather}><Weather /></Row>
                </div>
            </div>
        )
    }
}

export default Sidebar;
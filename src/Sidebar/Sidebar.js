import React from "react";
import { Row } from 'react-bootstrap'; 

import Login from './Login/Login';
import TextGame from "./TextGame/TextGame";
import Weather from "./Weather/Weather";

import classes from './Sidebar.module.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div className={classes.wrapperDiv}>
                <div className={`${classes.scrollable} ${classes.noScrollbars}`}>
                    <Row><Login /></Row>
                    <Row><TextGame /></Row>
                    <Row><Weather /></Row>
                </div>
            </div>
        )
    }
}

export default Sidebar;
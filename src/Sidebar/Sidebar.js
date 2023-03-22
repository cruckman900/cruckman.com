import React from "react";
import classes from './Sidebar.module.css';

import Login from './Login/Login';
import TextGame from "./TextGame/TextGame";
import Weather from "./Weather/Weather";

import { Row, Col } from 'react-bootstrap'; 

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <Row><Login /></Row>
                {/* <Row><TextGame /></Row>
                <Row><Weather /></Row> */}
            </div>
        )
    }
}

export default Sidebar;
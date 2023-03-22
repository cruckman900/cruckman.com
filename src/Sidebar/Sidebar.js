import React from "react";
import { Row } from 'react-bootstrap'; 

import Login from './Login/Login';
import TextGame from "./TextGame/TextGame";
import Weather from "./Weather/Weather";


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
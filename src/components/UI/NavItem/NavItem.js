import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from 'react-bootstrap';

function NavItem(props) {
    return (
        <Row>
            <Col className={props.className}><FontAwesomeIcon icon={props.icon} fontSize={props.fontSize} /></Col>
            <Col className={props.className}>{props.children}</Col>
        </Row>
    )
}
 
export default NavItem;
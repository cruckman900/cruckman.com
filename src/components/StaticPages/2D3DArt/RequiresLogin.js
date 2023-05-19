import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHand
} from '@fortawesome/free-solid-svg-icons';
import classes from "./RequiresLogin.module.css";

function RequiresLogin() {
    return (
        <div className={classes.requiresLogin}>
            <FontAwesomeIcon icon={faHand} style={{color: "red"}}/>&nbsp;&nbsp;Requires Login.
        </div>
    )
}

export default RequiresLogin;
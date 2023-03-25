import React from "react";
import Card from "../../UI/Card/Card";
import classes from "./RequiresLogin.module.css";

function RequiresLogin() {
    return (
        <div className={classes.requiresLogin}>
            <div>In order to see this image, you need to be logged in.</div>
        </div>
    )
}

export default RequiresLogin;
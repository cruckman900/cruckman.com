import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
    return (
        <button
            id={props.id}
            key={props.id}
            type={props.type || 'button'}
            className={props.className}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
}

export default Button;
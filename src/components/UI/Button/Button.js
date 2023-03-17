import React from "react";

const Button = (props) => {
    return (
        <button
            id={props.key}
            key={props.key}
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
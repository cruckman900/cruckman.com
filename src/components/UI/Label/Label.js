import React from 'react';
import classes from './Label.module.css';

const Card = (props) => {
    return (
        <span className={`${classes.Label} ${props.className}`}>{props.children}</span>
    );
};

export default Card;
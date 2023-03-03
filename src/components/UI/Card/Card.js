import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
    console.log("card", props.children);
    return (
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    );
};

export default Card;
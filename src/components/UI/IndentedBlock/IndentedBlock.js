import React from 'react';
import classes from './IndentedBlock.module.css';

const IndentedBlock = (props) => {
    return (
        <div className={`${classes.IndentedBlock} ${props.className}`}>{props.children}</div>
    );
};

export default IndentedBlock;
import { React, useState } from 'react';
import classes from './Card.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Label } from 'reactstrap';

const myIcons = {
    up: faChevronUp, 
    down: faChevronDown
}

const Card = (props) => {
    const [arrow, setArrow] = useState('up');
    const [containerStyle, setContainerStyle] = useState('block');

    const rollupHandler = () => {
        if (arrow === 'up') {
            setArrow('down');
            setContainerStyle('none');
            return;
        }
        setArrow('up');
        setContainerStyle('inline-block');
    }

    return (
        <div className={`${classes.card} ${classes.cardOuterDiv}`}>
            <div className={classes.header}>
                <span className={classes.headerLeft}>{props.header}</span>
                <span className={classes.headerRight}>
                    <span className={classes.icon} onClick={rollupHandler}>
                        <FontAwesomeIcon icon={myIcons[arrow]} fontSize="1.0rem" />
                    </span>
                </span>
            </div>
            <div style={{display: containerStyle}}>
                <div className={classes.cardInnerDiv}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Card;
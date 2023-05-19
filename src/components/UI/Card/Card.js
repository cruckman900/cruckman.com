import { React, useEffect, useState } from 'react';
import classes from './Card.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

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

    useEffect(() => {
        if(!props.expanded) {
            setArrow("down");
            setContainerStyle("none");
        }
    }, []);

    return (
        <div className={`${classes.card} ${classes.cardOuterDiv}`}>
            <div className={`${classes.header} ${props.showToggle && classes.hasDropdownFeature}`} onClick={rollupHandler}>
                <span className={classes.headerLeft}>{props.header}</span>
                {props.showToggle &&
                    <span className={classes.headerRight}>
                        <span className={classes.icon}>
                            <FontAwesomeIcon icon={myIcons[arrow]} fontSize="1.0rem" />
                        </span>
                    </span>
                }
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
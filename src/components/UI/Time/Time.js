import React from 'react';
import styles from './Time.module.css';

const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
const interval = 12000;

function printDate(string) {
    setInterval(() => {
        return new Date(string).toLocaleDateString([],options);
    }, interval);
    return new Date(string).toLocaleDateString([],options);
}

function Time(props) {
    return (
        <div className={props.className}>{printDate(new Date)}</div>
    )
}

export default Time;
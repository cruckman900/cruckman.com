import React from "react";
import styles from './LeftbarLabelledContainer.module.css';

const LeftbarLabelledContainer = (props) => {
    return (
        <div>
            <div className={props.className}>
                <div className={styles.category}>{props.Title}</div>
            </div>
        </div>
    );
};

export default LeftbarLabelledContainer;
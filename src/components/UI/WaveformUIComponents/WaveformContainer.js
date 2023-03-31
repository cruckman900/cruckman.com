import React from "react";
import styles from "./WaveformUIComponents.module.css";

export const WaveformContainer = (props) => {
    return (
        <div className={styles.waveformContainer}>{props.children}</div>
    )
}
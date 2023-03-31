import React from "react";
import styles from "./WaveformUIComponents.module.css";

export const PlayButton = (props) => {
    return (
        <button onClick={props.onClick} className={styles.playButton}>{props.children}</button>
    )
}
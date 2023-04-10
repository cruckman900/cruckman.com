import React, { useRef } from "react";
import Button from "../../UI/Button/Button";
import ReactToPrint from "react-to-print";
import classes from './Resume.module.css';

import ResumeBody from "./ResumeBody";

export default function PrintResume() {
    let componentRef = useRef();

    return (
        <>
            <div>
                <ReactToPrint
                    trigger={() => <Button className={classes.Button}>Print this out!</Button>}
                    content={() => componentRef}
                />

                <ResumeBody ref={(el) => (componentRef = el)} />
            </div>
        </>
    );
}
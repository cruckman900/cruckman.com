import React from "react";
import Card from '../Card/Card';

const LeftbarLabelledContainer = (props) => {
    console.log('props', props);
    return (
        <div>
            <div className={props.className}>
                <h3>{props.Title}</h3>
            </div>
            <Card></Card>
        </div>
    );
};

export default LeftbarLabelledContainer;
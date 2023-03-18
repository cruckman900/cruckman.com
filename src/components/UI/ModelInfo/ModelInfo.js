import React from 'react';
import Card from '../Card/Card';
import Label from '../Label/Label';
import Button from '../Button/Button';
import classes from './ModelInfo.module.css';

function ModelInfo(props) {
    return (
        <Card className={classes.dropShadow}>
            <div className={classes.header}>{props.Title}</div>
            <div className={classes.container}>
                <div className={classes.ImgWrapper}>
                    <img src={props.ImageSrc} alt={props.AltText} className={classes.ImgWidth} />
                </div>
                <div className={classes.ModelInfo}>
                    <Label>Attributes</Label>
                    <div className={classes.ObjDetail}><Label className={classes.Label2}>Num Objects</Label>: {props.NumObjects}</div>
                    <div className={classes.ObjDetail}><Label className={classes.Label2}>Num Edges</Label>: {props.NumEdges}</div>
                    <div className={classes.ObjDetail}><Label className={classes.Label2}>Num Faces</Label>: {props.NumFaces}</div>
                    <div className={classes.ObjDetail}><Label className={classes.Label2}>Num Verts</Label>: {props.NumVerts}</div>
                </div>
                <div className={classes.Request}>
                    <Label>Request this model</Label>
                    <div className={classes.ObjDetail}><Label className={classes.Label2}>Price</Label>: <Label className={classes.Label2}>{props.Price}</Label></div>
                    <div className={classes.PaymentDetail}>
                        <Label className={classes.Label2}>Payment Method</Label>
                        <Button className={classes.PaymentMethodButton}>PayPal</Button>
                        <Button className={classes.PaymentMethodButton}>Venmo</Button>    
                    </div>
                    <div>
                        <Label className={classes.Label2}>Email Address</Label><input className={classes.PaymentMethodInput} />
                    </div>
                    <div>
                        <Button className={classes.PaymentMethodButton}>Submit</Button>
                    </div>
                </div>
            </div>
            <div className={classes.description}>{props.Description}</div>
        </Card>
    )
}

export default ModelInfo;
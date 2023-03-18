import React from 'react';
import Card from '../Card';
import Label from '../Label';
import Button from '../Button';
import classes from './ModelInfo.module.css';

function ModelInfo(props) {
    <Card>
        <div className={classes.header}>{props.Title}</div>
        <div className={classes.container}>
            <div className={classes.ImgWrapper}>
                <img src={props.ImageSrc} width={props.width} />
            </div>
            <div className={classes.ModelInfo}>
                <div className={classes.ObjDetail}><Label>Num Objects</Label>: {props.NumObjects}</div>
                <div className={classes.ObjDetail}><Label>Num Faces</Label>: {props.NumFaces}</div>
                <div className={classes.ObjDetail}><Label>Num Verts</Label>: {props.NumVerts}</div>
            </div>
            <div className={classes.Request}>
                <Label>Request this model</Label>
                <div className={classes.ObjDetail}><Label>Price</Label>: {props.Price}</div>
                <div>
                    <Label>Payment Method</Label>
                    <Button className={classes.PaymentMethod}>PayPal</Button>
                    <Button className={classes.PaymentMethod}>Venmo</Button>    
                </div>
                <input className={classes.EmailAddress} />
                <Button className={classes.SubmitButton}>Submit</Button>
            </div>
        </div>
    </Card>
}
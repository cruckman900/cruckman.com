import { React, useState } from 'react';
import Card from '../Card/Card';
import Label from '../Label/Label';
import Button from '../Button/Button';
import classes from './ModelInfo.module.css';
import RequiresLogin from '../../StaticPages/2D3DArt/RequiresLogin';

function ModelInfo(props) {
    const paymentTypes = [
        {
            index: 0,
            key: 0,
            value: 'PayPal'
        },
        {
            index: 1,
            key: 1,
            value: 'Venmo'
        }
    ];

    const [active, setActive] = useState(0);

    const clickHandler = (id) => {
        setActive(id);
    }
    
    return (
        <Card showToggle={true} expanded={false}
            header={props.Title}
        >
            <div className={classes.container}>
                <div className={classes.ImgWrapper}>
                    {props.Blur && <RequiresLogin />}
                    <img src={props.ImageSrc} alt={props.AltText} className={`${classes.ImgWidth} ${props.Blur && classes.blur}`} />
                </div>
                <div className={classes.ModelInfo}>
                    <Label>Attributes</Label>
                    <div className={classes.ObjDetail}><Label className={classes.Label2}>Num Objects</Label>: {props.NumObjects}</div>
                    <div className={classes.ObjDetail}><Label className={classes.Label2}>Num Edges</Label>: {props.NumEdges}</div>
                    <div className={classes.ObjDetail}><Label className={classes.Label2}>Num Faces</Label>: {props.NumFaces}</div>
                    <div className={classes.ObjDetail}><Label className={classes.Label2}>Num Verts</Label>: {props.NumVerts}</div>
                </div>
                <div className={classes.Request}>
                    <Label>Request this Model</Label>
                    <div>
                        <Label className={classes.Label2}>Full Name</Label><input className={classes.PaymentMethodInput} />
                    </div>
                    <div>
                        <Label className={classes.Label2}>Email Address</Label><input className={classes.PaymentMethodInput} />
                    </div>
                    <br />
                    <div>
                        <Label className={classes.Label2}>Price</Label>: <Label className={classes.Label2}>{props.Price}</Label>
                    </div>
                    <div className={classes.PaymentDetail}>
                        <Label className={classes.Label2}>Payment Method</Label>
                        <div>
                            {paymentTypes.map((type) => {
                                return (
                                    <Button
                                    id={type.index}
                                    className={`${classes.PaymentMethodButton} ${active !== type.index && classes.PaymentMethodButton_disabled}`}
                                    key={type.key}
                                    onClick={() => clickHandler(type.index)}
                                    >
                                        {type.value}
                                    </Button>
                                )
                            })}
                        </div>
                    </div>
                    <br />
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
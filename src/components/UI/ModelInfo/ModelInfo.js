import { React, useState } from 'react';
import Card from '../Card/Card';
import Label from '../Label/Label';
import classes from './ModelInfo.module.css';
import RequiresLogin from '../../StaticPages/2D3DArt/RequiresLogin';

function ModelInfo(props) {
    const [active, setActive] = useState(0);

    const clickHandler = (id) => {
        setActive(id);
    }
    
    return (
        <Card showToggle={false} expanded={true}
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
            </div>
            <div className={classes.description}>{props.Description}</div>
        </Card>
    )
}

export default ModelInfo;
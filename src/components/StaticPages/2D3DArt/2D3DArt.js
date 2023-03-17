import React from "react";
import { Row, Col } from 'react-bootstrap';
import DefaultPage from "../../UI/DefaultPage/DefaultPage";

import lolly_sentada2 from "../../../assets/images/lolly_sentada2.png";
import styles from './2D3DArt.module.css';

function Art2D3D() {
    return (
        <DefaultPage image={lolly_sentada2} title="2D/3D Art (CG)">
            <div>
                <p>
                    Over the years, I have had the opportunity to use a wide range of software packages to create 
                    all sorts of things.  Those packages include Adobe Photoshop, Adobe Illustrator, GIMP, 3D Studio Max,
                    Blender, Wings, and others.  I haven't done a whole lot of work or devoted very much time in
                    creating many things, but I have a decent amount of knowledge about the workings of each software
                    package.
                </p>
                <p>
                    I have an image saved somewhere on a USB stick that I need to locate.  It's a picture of a dragon 
                    in a nighttime scene with snow-covered mountains in the background.  I used Adobe Illustrator to 
                    produce the line work for the dragon and the moon, and Adobe Photoshop to create the mountains and 
                    other scenery and to shade the dragon and moon.  It's not nearly as good as the background image of
                    a dragon on this website, but it was a good learning experience on how to use some of the tools in the 
                    packages I used.  I will post my image as soon as I find it.
                </p>
                <p>
                    I don't have any saved works of things I've done with 3D Studio Max, but I do have a few items that I've
                    created using Blender.  I will post screenshots of the items I have made, and for a tiny fee, will share 
                    the items with you to use in any way you wish.
                </p>
            </div>
        </DefaultPage>
    );
}

export default Art2D3D;
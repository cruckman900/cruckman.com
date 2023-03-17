import React from "react";
import { Row, Col } from 'react-bootstrap';
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import Label from "../../UI/Label/Label";

import lolly_sentada2 from "../../../assets/images/lolly_sentada2.png";
import bow1 from "../../../assets/images/3DModels/bow1.png";
import bow2 from "../../../assets/images/3DModels/bow2.png";
import sword1 from "../../../assets/images/3DModels/sword1.png";
import female1 from "../../../assets/images/3DModels/female1.png";
import car1 from "../../../assets/images/3DModels/car1.png";
import missile1 from "../../../assets/images/3DModels/missile1.png";
import halberd1 from "../../../assets/images/3DModels/halberd1.png";
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
            <div>
                <Label>3D Objects created in Wings3D</Label>
                <p>
                    This was one of my first models in Wings3D, and the first 3D object I ever made that I was somewhat proud of.
                    Looking at it now... meh.
                </p>
                <p><img src={car1} alt="Car 1" /></p>
                <p>
                    I made this missile for a mecha robot that I created... I can't find the mecha.
                </p>
                <p><img src={missile1} alt="Missile 1" /></p>
                <p>
                    My first attempt at making a weapon from the age of dragons or some shit.  I called it a winged halberd.
                </p>
                <p><img src={halberd1} alt="Halberd 1" /></p>
                <hr />
                <Label>3D Objects created in Blender</Label>
                <p>This was one of my first models in Blender that actually resembled something that could exist in the real world.</p>
                <p><img src={bow1} alt="Bow 1" /></p>
                <p>Somewhat pleased with the first bow, I created another one, a little fancier.</p>
                <p><img src={bow2} alt="Bow 2" /></p>
                <p>Can't always fight from afar, so here's a pretty plain sword</p>
                <p><img src={sword1} alt="Sword 1" /></p>
                <p>
                    And finally, we need someone to use these weapons, she could use some type of clothing or armor... or not.
                    I started this model in 2004.  I've only recently started back to finishing it.  I just procrastinate with 
                    this model too much.  The smaller and more intricate the parts are, the less I feel motivated to work on them.
                </p>
                <p><img src={female1} alt="Female 1" /></p>
            </div>
        </DefaultPage>
    );
}

export default Art2D3D;
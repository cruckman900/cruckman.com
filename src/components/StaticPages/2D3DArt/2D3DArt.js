import React from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import ModelInfo from "../../UI/ModelInfo/ModelInfo";
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
                <ModelInfo
                    Title="Body1.wings"
                    ImageSrc={car1}
                    AltText="Car 1"
                    NumObjects="17"
                    NumEdges="16,364"
                    NumFaces="8,620"
                    NumVerts="8,870"
                    Price="$1.99"
                >
                </ModelInfo>
                <p>
                    I made this missile for a mecha robot that I created... I can't find the mecha.
                </p>
                <ModelInfo
                    Title="Missile.wings"
                    ImageSrc={missile1}
                    AltText="Missile 1"
                    NumObjects="1"
                    NumEdges="496"
                    NumFaces="242"
                    NumVerts="256"
                    Price="$1.25"
                >
                </ModelInfo>
                <p>
                    My first attempt at making a weapon from the age of dragons or some shit.  I called it a winged halberd.
                </p>
                <ModelInfo
                    Title="Halberd2.wing"
                    ImageSrc={halberd1}
                    AltText="Halberd 1"
                    NumObjects="1"
                    NumEdges="1,522"
                    NumFaces="764"
                    NumVerts="760"
                    Price="$2.50"
                >
                </ModelInfo>
                <hr />
                <Label>3D Objects created in Blender</Label>
                <p>This was one of my first models in Blender that actually resembled something that could exist in the real world.</p>
                <ModelInfo
                    Title="bow1.blend"
                    ImageSrc={bow1}
                    AltText="Bow 1"
                    NumObjects="3"
                    NumEdges=""
                    NumFaces="66,256"
                    NumVerts="66,208"
                    Price="$3.00"
                >
                </ModelInfo>
                <p>Somewhat pleased with the first bow, I created another one, a little fancier.</p>
                <ModelInfo
                    Title="bow2.blend"
                    ImageSrc={bow2}
                    AltText="Bow 2"
                    NumObjects="1"
                    NumEdges=""
                    NumFaces="37,792"
                    NumVerts="37,776"
                    Price="$7.00"
                >
                </ModelInfo>
                <p>Can't always fight from afar, so here's a pretty plain sword</p>
                <ModelInfo
                    Title="bastardsword.blend"
                    ImageSrc={sword1}
                    AltText="Sword 1"
                    NumObjects="1"
                    NumEdges=""
                    NumFaces="794"
                    NumVerts="824"
                    Price="$5.00"
                >
                </ModelInfo>
                <p>
                    And finally, we need someone to use these weapons, she could use some type of clothing or armor... or not.
                    I started this model in 2004.  I've only recently started back to finishing it.  I just procrastinate with 
                    this model too much.  The smaller and more intricate the parts are, the less I feel motivated to work on them.
                </p>
                <ModelInfo
                    Title="FEM001_ehhc_ba5_exp5.blend"
                    ImageSrc={female1}
                    AltText="Female 1"
                    NumObjects="4"
                    NumEdges=""
                    NumFaces="12,522"
                    NumVerts="11,426"
                    Price="$12.00"
                >
                </ModelInfo>
            </div>
        </DefaultPage>
    );
}

export default Art2D3D;
import React from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import ModelInfo from "../../UI/ModelInfo/ModelInfo";

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
                    all sorts of things.  Those packages include 
                    <a href="https://www.adobe.com/products/photoshop.html" className={styles.link} alt="Adobe Photoshop" target="_blank" rel="noreferrer">Adobe Photoshop</a>, 
                    <a href="https://www.adobe.com/products/illustrator.html" className={styles.link} alt="Adobe Illustrator" target="_blank" rel="noreferrer">Adobe Illustrator</a>, 
                    <a href="https://www.gimp.org" className={styles.link} alt="GIMP" target="_blank" rel="noreferrer">GIMP</a>, 
                    <a href="https://www.autodesk.com" className={styles.link} alt="3D Studio Max" target="_blank" rel="noreferrer">3D Studio Max</a>,
                    <a href="https://www.blender.org" className={styles.link} alt="Blender" target="_blank" rel="noreferrer">Blender</a>, 
                    <a href="https://www.wings3d.com" className={styles.link} alt="Wings3D" target="_blank" rel="noreferrer">Wings3D</a>, 
                    and others.  I haven't done a whole lot of work or devoted very much time in
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
                <p>
                    Most of these objects are really old.  The only newer model is the sword.  Bow2 and my female model have had
                    recent work done to them, so they are a little more sophisticated than the other models.  The cool thing about 
                    Blender is, when you start developing a new file, the layouts and stuff are saved in your model data.  So,
                    no matter what edition of the software you have, your layouts are the same throughout.
                </p>
                <p>
                    If you are looking for ease of use, I strongly suggest Wings3D, but if you want a platform that currently
                    competes with most enterprise class software, Blender is the tool of choice!
                </p>
            </div>
            <div>
                <h6>3D Objects created in Wings3D</h6>
                <ModelInfo
                    Title="Body1.wings"
                    Description="This was one of my first models in Wings3D, and the first 3D object I ever made that I was somewhat proud 
                        of.  Looking at it now... meh."
                    ImageSrc={car1}
                    AltText="Car 1"
                    NumObjects="17"
                    NumEdges="16,364"
                    NumFaces="8,620"
                    NumVerts="8,870"
                    Price="$1.99"
                >
                </ModelInfo>
                <ModelInfo
                    Title="Missile.wings"
                    Description="I made this missile for a mecha robot that I created... I can't find the mecha."
                    ImageSrc={missile1}
                    AltText="Missile 1"
                    NumObjects="1"
                    NumEdges="496"
                    NumFaces="242"
                    NumVerts="256"
                    Price="$1.25"
                >
                </ModelInfo>
                <ModelInfo
                    Title="Halberd2.wings"
                    Description="My first attempt at making a weapon from the age of dragons or some shit.  I called it a winged halberd."
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
                <h6>3D Objects created in Blender</h6>
                <ModelInfo
                    Title="bow1.blend"
                    Description="This was one of my first models in Blender that actually resembled something that could exist in the 
                        real world."
                    ImageSrc={bow1}
                    AltText="Bow 1"
                    NumObjects="3"
                    NumEdges=""
                    NumFaces="66,256"
                    NumVerts="66,208"
                    Price="$3.00"
                >
                </ModelInfo>
                <ModelInfo
                    Title="bow2.blend"
                    Description="Somewhat pleased with the first bow, I created another one, a little fancier."
                    ImageSrc={bow2}
                    AltText="Bow 2"
                    NumObjects="1"
                    NumEdges=""
                    NumFaces="37,792"
                    NumVerts="37,776"
                    Price="$7.00"
                >
                </ModelInfo>
                <ModelInfo
                    Title="bastardsword.blend"
                    Description="Can't always fight from afar, so here's a pretty plain sword"
                    ImageSrc={sword1}
                    AltText="Sword 1"
                    NumObjects="1"
                    NumEdges=""
                    NumFaces="794"
                    NumVerts="824"
                    Price="$5.00"
                >
                </ModelInfo>
                <ModelInfo
                    Title="FEM001_ehhc_ba5_exp5.blend"
                    Description="And finally, we need someone to use these weapons, she could use some type of clothing or armor... or not.
                        I started this model in 2004.  I've only recently started back to finishing it.  I just procrastinate with 
                        this model too much.  The smaller and more intricate the parts are, the less I feel motivated to work on them."
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
            <div className={styles.bottomText}>
                <p>
                    I have tried texture mapping objects.  As you can see above, I only used materials in my modelling.
                    I have a model I created in Blender that has textures, but they are very basic (like cylinders and cubes).
                    Someday, I will get familiar with this topic as well as others.  My FEM001_ehhc_ba5_exp5 model has bones,
                    but I have yet to complete everything on that model before I begin working with animations.  I would also like
                    to play around with particle effects.  If anyone has experience using these concepts, feel free to reach out to me!
                </p>
            </div>
        </DefaultPage>
    );
}

export default Art2D3D;
import React from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import lolly_dj_1 from "../../../assets/images/lolly_dj_1.png";
import classes from './AudioVideo.module.css';

function AudioVideo() {
    return (
        <DefaultPage image={lolly_dj_1} title="Audio/Video">
            <p>
                I have made quite a few YouTube videos of game play in a game called Perfect World International.  I began 
                playing it in 2007 or 2008 while I was still in college.  The older videos are of poor quality, and I was 
                tinkering around with different software packages.  I finally came across a package called VSDC from a company 
                called FlashIntegro.  I think it is only around $20 to register the product, but I think you have to re-register 
                every time YOU upgrade, not whenever an upgrade comes out... so... if you like what it can do today, you can keep 
                using that version forever.
            </p>
            <p>
                Another software that I have been playing around with is called Audacity.  It's a sound recording and editing 
                tool.  It has a nice set of features, and is more than powerful enough for the stuff I need to do with it.  I 
                have recordings of myself playing guitar on this site.  Those were all recorded using Audacity.  I need to 
                revisit those songs and try to record better versions.  I mess up a lot on them in the collection I currently have 
                on here.  They aren't TOO bad, but to me, they sound like garbage.  :)
            </p>
        </DefaultPage>
    );
};

export default AudioVideo;
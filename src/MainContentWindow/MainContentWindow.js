import React, { Component } from "react";

import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/StaticPages/Home/Home';
import Resume from '../components/StaticPages/Resume/Resume';
import Me from '../components/StaticPages/About/Me';
import Contacts from '../components/StaticPages/About/Contacts';
import Portfolio from '../components/StaticPages/About/Portfolio';
import ThisSite from '../components/StaticPages/About/ThisSite';
import Art2D3D from '../components/StaticPages/2D3DArt/2D3DArt';
import Music from '../components/StaticPages/Music/Music';
import MartialArts from '../components/StaticPages/MartialArts/MartialArts';
import CreativeWriting from '../components/StaticPages/CreativeWriting/CreativeWriting';
import AudioVideo from '../components/StaticPages/AudioVideo/AudioVideo';
import GameDev from '../components/StaticPages/GameDev/GameDev';
import SoftwareDev from '../components/StaticPages/SoftwareDev/SoftwareDev';
import GitHubLinks from '../components/StaticPages/GitHubLinks/GitHubLinks';
import YouTubeLinks from '../components/StaticPages/YouTubeLinks/YouTubeLinks';


class MainContentWindow extends Component {
    render() {
        return (
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route path="/resume" element={ <Resume /> } />
                <Route path="/about/me" element={ <Me /> } />
                <Route path="/about/contacts" element={ <Contacts /> } />
                <Route path="/about/portfolio" element={ <Portfolio /> } />
                <Route path="/about/thissite" element={ <ThisSite /> } />
                <Route path="/2d3dart/2d3dart" element={ <Art2D3D /> } />
                <Route path="/music/music" element={ <Music /> } />
                <Route path="/martialarts/martialarts" element={ <MartialArts /> } />
                <Route path="/creativewriting/creativewriting" element={ <CreativeWriting /> } />
                <Route path="/audiovideo/audiovideo" element={ <AudioVideo /> } />
                <Route path="/gamedev/gamedev" element={ <GameDev /> } />
                <Route path="/softwaredev/softwaredev" element={ <SoftwareDev /> } />
                <Route path="/githublinks/githublinks" element={ <GitHubLinks /> } />
                <Route path="/youtubelinks/youtubelinks" element={ <YouTubeLinks /> } />
            </Routes>
        );
    }
}

export default MainContentWindow;
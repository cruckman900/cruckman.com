import React from "react";
import PrintResume from "./PrintResume";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import Morph from "../../UI/Morph/morph";
import classes from './Resume.module.css';
import lollyLivro from '../../../assets/images/loly_livro2.png';

// Operating Systems
import Android from '../../../assets/brands/android.svg';
import iOS from '../../../assets/brands/ios.svg';
import macOS from '../../../assets/brands/macos.svg';
import Ubuntu from '../../../assets/brands/ubuntu.svg';
import Windows from '../../../assets/brands/windows.svg';

// Tools
import Illustrator from '../../../assets/brands/adobeillustrator.svg';
import Photoshop from '../../../assets/brands/adobephotoshop.svg';
import AndroidStudio from '../../../assets/brands/androidstudio.svg';
import AnyDesk from '../../../assets/brands/anydesk.svg';
import Audacity from '../../../assets/brands/audacity.svg';
import Blender from '../../../assets/brands/blender.svg';
import CircleCI from '../../../assets/brands/circleci.svg';
import Confluence from '../../../assets/brands/confluence.svg';
import cPanel from '../../../assets/brands/cpanel.svg';
import Discord from '../../../assets/brands/discord.svg';
import Docker from '../../../assets/brands/docker.svg';
import Figma from '../../../assets/brands/figma.svg';
import GIMP from '../../../assets/brands/gimp.svg';
import Git from '../../../assets/brands/git.svg';
import GitHub from '../../../assets/brands/github (1).svg';
import GoogleAnalytics from '../../../assets/brands/googleanalytics.svg';
import GotoMeeting from '../../../assets/brands/gotomeeting.svg';

// Programming Languages
import CSharp from '../../../assets/brands/csharp.svg';
import CSS3 from '../../../assets/brands/css3.svg';
import HTML5 from '../../../assets/brands/html5.svg';
import JavaScript from '../../../assets/brands/javascript.svg';
import JSON from '../../../assets/brands/json.svg';
import Kotlin from '../../../assets/brands/kotlin.svg';

// Frameworks and Libraries
import DotENV from '../../../assets/brands/dotenv.svg';
import DotNET from '../../../assets/brands/dotnet.svg';
import Angular from '../../../assets/brands/angular.svg';
import AWSLambda from '../../../assets/brands/awslambda.svg';
import Axios from '../../../assets/brands/axios.svg';
import Bootstrap from '../../../assets/brands/bootstrap.svg';
import Express from '../../../assets/brands/express.svg';
import Gradle from '../../../assets/brands/gradle.svg';
import GraphQL from '../../../assets/brands/graphql.svg';
import Handlebars from '../../../assets/brands/handlebarsdotjs.svg'
import Pug from '../../../assets/brands/pug.svg'


const Resume = () => {
    const OperatingSystems = [
        { product: "Android", image: Android, color: "#3DDC84", class: "filter-android" },
        { product: "iOS", image: iOS, color:"#000000", class: "filter-ios" },
        { product: "macOS", image: macOS, color:"#000000", class: "filter-macos" },
        { product: "Ubuntu", image: Ubuntu, color:"#E95420", class: "filter-ubuntu" },
        { product: "Windows", image: Windows, color:"#0078D6", class: "filter-windows" }
    ];

    const Tools = [
        { product: "Adobe Illustrator", image: Illustrator, color: "#FF9A00", class: "filter-adobeillustrator" },
        { product: "Adobe Photoshop", image: Photoshop, color: "#21ABFF", class: "filter-adobephotoshop" },
        { product: "Android Studio", image: AndroidStudio, color: "#3DDC84", class: "filter-androidstudio" },
        { product: "AnyDesk", image: AnyDesk, color: "#EF443B", class: "filter-anydesk" },
        { product: "Audacity", image: Audacity, color: "#0000CC", class: "filter-audacity" },
        { product: "Blender", image: Blender, color: "#F5792A", class: "filter-blender" },
        { product: "CircleCI", image: CircleCI, color: "#343434", class: "filter-circleci" },
        { product: "Confluence", image: Confluence, color: "#172B4D", class: "filter-confluence" },
        { product: "cPanel", image: cPanel, color: "#FF6C2C", class: "filter-cpanel" },
        { product: "Discord", image: Discord, color: "#5865F2", class: "filter-discord" },
        { product: "Docker", image: Docker, color: "#2496ED", class: "filter-docker" },
        { product: "Figma", image: Figma, color: "#F24E1E", class: "filter-figma" },
        { product: "GIMP", image: GIMP, color: "#5C5543", class: "filter-gimp" },
        { product: "Git", image: Git, color: "#F05032", class: "filter-git" },
        { product: "GitHub", image: GitHub, color:"#181717", class: "filter-github" },
        { product: "Google Analytics", image: GoogleAnalytics, color: "#E37400", class: "filter-googleanalytics" },
        { product: "GoToMeeting", image: GotoMeeting, color: "#F68D2E", class: "filter-gotomeeting" }
    ];
    
    const ProgrammingLanguages = [
        { product: "C#", image: CSharp, color: "#239120", class: "filter-csharp" },
        { product: "CSS3", image: CSS3, color: "#1572B6", class: "filter-css3" },
        { product: "HTML5", image: HTML5, color: "#E34F26", class: "filter-html5" },
        { product: "JavaScript", image: JavaScript, color: "#F7DF1E", class: "filter-javascript" },
        { product: "JSON", image: JSON, color: "#000000", class: "filter-json" },
        { product: "Kotlin", image: Kotlin, class: "filter-kotlin" }
    ];
    
    const FrameworksLibraries = [
        { product: ".ENV", image: DotENV, color: "#ECD53F", class: "filter-dotenv" },
        { product: ".NET", image: DotNET, color: "#512BD4", class: "filter-dotnet" },
        { product: "Angular", image: Angular, color: "#DD0031", class: "filter-angular" },
        { product: "AWS Lambda", image: AWSLambda, color: "#FF9900", class: "filter-awslambda" },
        { product: "Axios", image: Axios, color: "#5A29E4", class: "filter-axios" },
        { product: "Bootstrap", image: Bootstrap, color: "#7952B3", class: "filter-bootstrap" },
        { product: "Express", image: Express, color: "#000000", class: "filter-express" },
        { product: "Gradle", image: Gradle, color: "#02303A", class: "filter-gradle" },
        { product: "GraphQL", image: GraphQL, color: "#E10098", class: "filter-graphql" },
        { product: "Handlebars.js", image: Handlebars, color: "#000000", class: "filter-handlbarsjs" },
        { product: "Pug", image: Pug, color: "#A86454", class: "filter-pug" }
    ];

    return (
        <>
            <DefaultPage image={lollyLivro} title="R&#232;sum&#232;" className={classes.DoNotPrint}>
                <div className={classes.brands}>
                    <Morph className={classes.wrap} brands={OperatingSystems} />
                    <Morph className={classes.wrap} brands={Tools} />
                    <Morph className={classes.wrap} brands={ProgrammingLanguages} />
                    <Morph className={classes.wrap} brands={FrameworksLibraries} />
                </div>
                <PrintResume />
            </DefaultPage>
        </>
    );
};

export default Resume;
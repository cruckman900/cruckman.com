import React from "react";
import IndentedBlock from "../../UI/IndentedBlock/IndentedBlock";
import Label from "../../UI/Label/Label";
import LeftbarLabelledContainer from "../../UI/LeftbarLabelledContainer/LeftbarLabelledContainer";
import classes from './Resume.module.css';
import ResumeHeader from "./ResumeHeader";

const Resume = () => {
    return (
        <div className={classes.whiteBG}>
            <ResumeHeader name="Christopher Linn Ruckman" title="Software Engineer" contactInfo="Rayland, OH 43943 | (740) 827-2743 | cruckman900@gmail.com"></ResumeHeader>
            <LeftbarLabelledContainer className={classes.category} Title="Technical Skills"></LeftbarLabelledContainer>
                <IndentedBlock>
                <div><Label>Languages</Label>: C#, JavaScript, VB.NET, PHP, ActionScript, JAVA, Kotlin, HTML, CSS, ReactJS</div>
                <div><Label>Technologies</Label>: ASP.NET MVC/Core/Web Forms/Web API, Entity Framework, LINQ, SignalR, jQuery, Bootstrap, Telerik Controls, KendoUI</div>
                <div><Label>Databases</Label>: MS SQL SErver, MySQL, SQLite, Room Database</div>
                <div><Label>Debug/Testing/Performance</Label>: Charles Proxy, JUnit, Espresso</div>
                </IndentedBlock>
            <LeftbarLabelledContainer className={classes.category} Title="Professional Experience"></LeftbarLabelledContainer>
            <LeftbarLabelledContainer className={classes.category} Title="Education"></LeftbarLabelledContainer>
        </div>
    );
};

export default Resume;
import React from "react";
import IndentedBlock from "../../UI/IndentedBlock/IndentedBlock";
import JobHeader from "../../UI/JobHeader/JobHeader";
import Label from "../../UI/Label/Label";
import LeftbarLabelledContainer from "../../UI/LeftbarLabelledContainer/LeftbarLabelledContainer";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import classes from './Resume.module.css';
import ResumeHeader from "./ResumeHeader";
import lollyLivro from '../../../assets/loly_livro2.png';

const Resume = () => {
    return (
        <>
            <DefaultPage image={lollyLivro} title="R&#232;sum&#232;">
                <div className={classes.whiteBG}>
                    <ResumeHeader name="Christopher Linn Ruckman" title="Software Engineer" contactInfo="Rayland, OH 43943 | (740) 827-2743 | cruckman900@gmail.com"></ResumeHeader>
                    <hr />
                    <LeftbarLabelledContainer Title="Technical Skills"></LeftbarLabelledContainer>
                        <IndentedBlock>
                            <div><Label>Languages</Label>: C#, JavaScript, VB.NET, PHP, ActionScript, Java, Kotlin, HTML, CSS, ReactJS</div>
                            <div><Label>Technologies</Label>: ASP.NET MVC/Core/Web Forms/Web API, Entity Framework, LINQ, SignalR, jQuery, Bootstrap, Telerik Controls, KendoUI</div>
                            <div><Label>Databases</Label>: MS SQL Server, MySQL, SQLite, Room Database</div>
                            <div><Label>Debug/Testing/Performance</Label>: Charles Proxy, JUnit, Espresso</div>
                            <div><Label>Version Control</Label>: Visual Source Safe, TFS, Git, GitHub</div>
                            <div><Label>Project Management</Label>: JIRA</div>
                            <div><Label>Software Development Methodologies</Label>: Waterfall, Agile/Scrum</div>
                            <div><Label>Tools</Label>: Visual Studio, Visual Studio Code, Android Studio, Adobe (Photoshop, Illustrator), Microsoft Office. Google Productivity Tools</div>
                        </IndentedBlock>
                    <LeftbarLabelledContainer Title="Professional Experience"></LeftbarLabelledContainer>
                    <JobHeader jobInfo="EnhanceIT, Atlanta, GA" datesWorked="Sept 2020 &mdash; Feb 2022"></JobHeader>
                        <IndentedBlock><Label>Android Developer</Label></IndentedBlock>
                        <IndentedBlock><div><IndentedBlock><Label>Walmart, Google, and Wayfair</Label></IndentedBlock></div></IndentedBlock>
                    <JobHeader jobInfo="Murray Energy Corp, St. Clairsville, OH" datesWorked="Apr 2018 &mdash; Feb 2020"></JobHeader>
                    <JobHeader jobInfo="Challenger Learning Center, Wheeling, WV" datesWorked="Jan 2018 &mdash; May 2019"></JobHeader>
                    <JobHeader jobInfo="EnhanceIT, Atlanta, GA" datesWorked="Sept 2020 &mdash; Feb 2022"></JobHeader>
                    <JobHeader jobInfo="EnhanceIT, Atlanta, GA" datesWorked="Sept 2020 &mdash; Feb 2022"></JobHeader>
                    <JobHeader jobInfo="EnhanceIT, Atlanta, GA" datesWorked="Sept 2020 &mdash; Feb 2022"></JobHeader>
                    <JobHeader jobInfo="EnhanceIT, Atlanta, GA" datesWorked="Sept 2020 &mdash; Feb 2022"></JobHeader>
                    <JobHeader jobInfo="EnhanceIT, Atlanta, GA" datesWorked="Sept 2020 &mdash; Feb 2022"></JobHeader>
                    <JobHeader jobInfo="EnhanceIT, Atlanta, GA" datesWorked="Sept 2020 &mdash; Feb 2022"></JobHeader>
                    <LeftbarLabelledContainer Title="Education"></LeftbarLabelledContainer>
                </div>
            </DefaultPage>
        </>
    );
};

export default Resume;
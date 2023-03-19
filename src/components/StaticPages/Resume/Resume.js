import React from "react";
import IndentedBlock from "../../UI/IndentedBlock/IndentedBlock";
import JobHeader from "../../UI/JobHeader/JobHeader";
import Label from "../../UI/Label/Label";
import LeftbarLabelledContainer from "../../UI/LeftbarLabelledContainer/LeftbarLabelledContainer";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import classes from './Resume.module.css';
import ResumeHeader from "./ResumeHeader";
import lollyLivro from '../../../assets/images/loly_livro2.png';

const Resume = () => {
    return (
        <>
            <DefaultPage image={lollyLivro} title="R&#232;sum&#232;" className={classes.DoNotPrint}>
                <div className={`${classes.whiteBG} ${classes.printable} ${classes.body}`}>
                    <ResumeHeader name="Christopher L Ruckman" title="Software Engineer" contactInfo="Rayland, OH 43943 | (740) 827-2743 | cruckman900@gmail.com"></ResumeHeader>
                    <hr />
                    <LeftbarLabelledContainer Title="Technical Skills"></LeftbarLabelledContainer>
                        <IndentedBlock>
                            <div><Label className={classes.resLabel}>Languages</Label>: C#, VB.NET, PHP, ActionScript, Java, Kotlin, HTML, JavaScript, jQuery, CSS, ReactJS</div>
                            <div><Label className={classes.resLabel}>Technologies</Label>: ASP.NET MVC/Core/Web Forms/Web API, Entity Framework, LINQ, SignalR, jQuery, Bootstrap, Telerik Controls, KendoUI</div>
                            <div><Label className={classes.resLabel}>Databases</Label>: MS SQL Server, MySQL, SQLite, Room Database</div>
                            <div><Label className={classes.resLabel}>Debug/Testing/Performance</Label>: Charles Proxy, JUnit, Espresso</div>
                            <div><Label className={classes.resLabel}>Version Control</Label>: Visual Source Safe, TFS, Git, GitHub</div>
                            <div><Label className={classes.resLabel}>Project Management</Label>: JIRA</div>
                            <div><Label className={classes.resLabel}>Software Development Methodologies</Label>: Waterfall, Agile/Scrum</div>
                            <div><Label className={classes.resLabel}>Tools</Label>: Visual Studio, Visual Studio Code, Android Studio, Unity, Blender, Adobe (Photoshop, Illustrator), Microsoft Office. Google Productivity Tools</div>
                        </IndentedBlock>
                    <hr />
                    <LeftbarLabelledContainer Title="Professional Experience"></LeftbarLabelledContainer>
                        <IndentedBlock>
                            <JobHeader jobInfo="EnhanceIT, Atlanta, GA (Walmart, Google, Wayfair)" jobTitle="Android Developer" datesWorked="Sept 2020 &mdash; Feb 2022"></JobHeader>
                            <ul>
                                <li>Worked in teams for various contracts to develop Android applications using Java and Kotlin</li>
                                <li>Worked with Chromecast devices and example Android Chromecast apps</li>
                                <li>Developed apps using MVVM Clean architecture pattern</li>
                                <li>Utilized Charles Proxy to test endpoints of API calls</li>
                                <li>Created unit and functional tests using JUnit and Espresso</li>
                                <li>Worked in Agile environments with 2 week sprints</li>
                            </ul>
                            <JobHeader jobInfo="Murray Energy Corp, St. Clairsville, OH" jobTitle="Software Developer" datesWorked="Apr 2018 &mdash; Feb 2020"></JobHeader>
                            <ul>
                                <li>Worked on Murray Energy's new ERP software system, <i>CIMS (Coal Infomation Management System)</i></li>
                                <li>
                                    Developed front-end user interfaces using ASP.NET, MVC 5, C# Razor, Telerik UI for MVC controls,
                                    and Bootstrap to accomodate the manipulation of data within the software
                                </li>
                                <li>
                                    Developed Web API 2 functionality for data validation and back-end database communication using ASP.NET, C#,
                                    Entity Framework, and SQL Server to support the development of front-end interfaces
                                </li>
                                <li>Assembled unit tests for a variety of Web API 2 scenarios using Visual Studio's testing components</li>
                                <li>Assisted in requirements gathering and system design</li>
                            </ul>
                            <JobHeader jobInfo="Challenger Learning Center, Wheeling, WV" jobTitle="Volunteer/Charity" datesWorked="Jan 2018 &mdash; May 2019"></JobHeader>
                            <ul>
                                <li>
                                    Developed user interfaces using ASP.NET Core 2.1 MVC, Razor, Entity Framework, SQL Server and SignalR 2.0
                                    for real-time communication between user interfaces for data transfer and online chat
                                </li>
                                <li>Created administrative layouts for adding sites, users, and reading scripts for CLC using MVC</li>
                                <li>Utilized HTML5 canvas to display and allow user input data related to a 2D map</li>
                            </ul>
                            <JobHeader jobInfo="Mortgage Connect, Moon Township, PA" jobTitle="Software Developer" datesWorked="Nov 2017 &mdash; Jan 2018"></JobHeader>
                            <ul>
                                <li>Implemented software enhancement requests</li>
                                <li>Resolved software defects reported from clients</li>
                                <li>Created Ad-hoc SQL queries to support client requests</li>
                                <li>Scrubbed data in SQL for erroneous problems with data input and/or software defects</li>
                            </ul>
                            <JobHeader jobInfo="Murray Energy Corp, St. Clairsville, OH" jobTitle="Software Engineer" datesWorked="Nov 2016 &mdash; Aug 2017"></JobHeader>
                            <ul>
                                <li>Developed automated test software to be used prior to software releases, using VB.NET</li>
                                <li>
                                    Oversaw requirement gathering, design, and development of a web-based asset tracking system using
                                    ASP.NET Web Forms, Telerik UI for AJAX, VB.NET, and SQL Server
                                </li>
                                <li>Collaborated with management to design a shipment scheduling system using ASP.NET Web Forms, 
                                    Telerik UI for AJAX, VB.NET, and SQL Server
                                </li>
                                <li>Developed system configuration screens</li>
                            </ul>
                            <JobHeader jobInfo="Challenger Learning Center, Wheeling, WV" jobTitle="Software Developer" datesWorked="Sept 2013 &mdash; Jan 2017"></JobHeader>
                            <ul>
                                <li>Designed, developed and maintained data-driven websites using HTML, CSS, JavaScript, PHP, and MySQL</li>
                                <li>
                                    Maintained, modified, and created functionality for interactive user interfaces using Flash, HTML,
                                    JavaScript, and ActionScript 3.0
                                </li>
                                <li>Maintained newer mission interfaces using ActionScript, Flashbuilder and VB.NET WCF web services
                                    with MS SQL or PHP RESTful APIs using MySQL
                                </li>
                            </ul>
                            <JobHeader jobInfo="CardWorks, Pittsburgh, PA" jobTitle="Software Developer" datesWorked="Dec 2013 &mdash; June 2014"></JobHeader>
                            <ul>
                                <li>Aided in the implementation of Noble Systems' telecom dialer software</li>
                                <li>Configured user accounts in Noble Sys, and Postgres database</li>
                                <li>Diagnosed and resolved client issues with existing software integrated with Avaya service</li>
                                <li>Developed Ad-hoc queries for reporting needs using MS SQL Server</li>
                                <li>Developed database views using MS SQL</li>
                            </ul>
                            <JobHeader jobInfo="Center for Educational Technologies, Wheeling, WV" jobTitle="Software Developer" datesWorked="Sept 2009 &mdash; Sept 2013"></JobHeader>
                            <ul>
                                <li>
                                    Collaborated with CET Principal Investigators, Project Leads, Challenger Learning Center management and personnel
                                    to establish requirements for new projects, change requests and bug fixes
                                </li>
                                <li>
                                    Designed and developed cross-platform and cross-browser compatible web templates that effectively incorporate graphic
                                    designer's concept and artwork and client expectation
                                </li>
                                <li>
                                    Created and updated animated physics simulations using CSS3/JavaScript, Flash, Adobe Edge Animate and jQuery
                                </li>
                                <li>
                                    Created and maintained interactive data-driven web interfaces for group activities (coined e-Missions) using
                                    Flash, ActionScript, PHP, and MySQL
                                </li>
                                <li>
                                    Created and maintained e-Learning web sites using PHP, MySQL, HTML, JavaScript, and CSS
                                </li>
                                <li>
                                    Led in the development and implementation of web services to handle all data communications between e-Mission client/Server
                                    request/response events using the Windows Communication Foundation classes for new e-Missions projects using
                                    .NET technologies
                                </li>
                                <li>
                                    Led in the design and development of an old e-Mission website that was written in HTML using frames and meta-refresh
                                    to disply XML content over time in Flashbuilder that connect to and utilize WCF web services
                                </li>
                                <li>Administrated a Joomla-based website for use by NASA for online blogs and collaborated group networking</li>
                                <li>
                                    Maintained various pre-existing websites and interactive interfaces using VB.NET, C#, JavaScript and HTML, and Flash
                                </li>
                            </ul>
                            <JobHeader jobInfo="Prosite Business Solutions, New Martinsville, WV" jobTitle="Software Developer" datesWorked="June 2004 &mdash; Feb 2010"></JobHeader>
                            <ul>
                                <li>
                                    Maintained, enhanced, and supported <i>OhioValleyOnline</i>, an online CMS for customers to design and maintained
                                    their own websites hosted by Prosite
                                </li>
                                <li>Converted portions of the company's business management software from Classic ASP to .NET using VB.NET</li>
                                <li>
                                    Extended a custom web browser to aid in automating incorporating customer data from online
                                    company's websites into Prosite's databases
                                </li>
                                <li>
                                    Developed and maintained pages of <i>ProBusinessTools</i> software in areas, such as scheduling,
                                    accounting, team and subcontractor availability and scheduling, customer accounts, inventory
                                    and parts requisition using ASP.NET and VB.NET server-side code and MS SQL
                                </li>
                                <li>Maintained and added functionality to a custom in-house web development kit for clients
                                    to create and update their own websites usig CLASSIC and .NET ASP and MS SQL
                                </li>
                                <li>
                                    Maintained, extended and created ASMX web services for clients to be able to build their own UIs based on PBT logic
                                </li>
                            </ul>

                        </IndentedBlock>
                    <hr />
                    <LeftbarLabelledContainer Title="Education"></LeftbarLabelledContainer>
                        <IndentedBlock>
                            <JobHeader jobInfo="Bachelor of Science in Computer Science" datesWorked="May 2008"></JobHeader>
                            <JobHeader jobInfo="Wheeling Jesuit University (now Wheeling University)" datesWorked="Wheeling, WV"></JobHeader>
                            <div>Awarded Presidential Scholarship, Member of Computer Club</div>
                            <br />
                            <JobHeader jobInfo="AAS CIT in Programming and System Dev" datesWorked="May 2005"></JobHeader>
                            <JobHeader jobInfo="West Virginia Northern Community College" datesWorked="Wheeling, WV"></JobHeader>
                            <div>Inducted into Omega Epsilon chapter of Phi Theta Kappa</div>
                        </IndentedBlock>
                </div>
            </DefaultPage>
        </>
    );
};

export default Resume;
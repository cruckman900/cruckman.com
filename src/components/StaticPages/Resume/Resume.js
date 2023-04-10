import React from "react";
import PrintResume from "./PrintResume";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import classes from './Resume.module.css';
import lollyLivro from '../../../assets/images/loly_livro2.png';

const Resume = () => {
    return (
        <>
            <DefaultPage image={lollyLivro} title="R&#232;sum&#232;" className={classes.DoNotPrint}>
                <PrintResume />
            </DefaultPage>
        </>
    );
};

export default Resume;
import { React, useState, useEffect } from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import lolly_livro2 from "../../../assets/images/loly_livro2.png";
import classes from './CreativeWriting.module.css';
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Dropdown } from "react-bootstrap";

import Ellowyn from '../../views/Ellowyn/Ellowyn';
import Volcano from '../../views/Volcano/Volcano';
import PetrifiedStatesIssue1 from '../../views/PetrifiedStates/PetrifiedStatesIssue1';
import PetrifiedStatesIssue2 from '../../views/PetrifiedStates/PetrifiedStatesIssue2';

function CreativeWriting() {
    const [val, setVal] = useState('#Volcano');

    const components = {
        '#Volcano': Volcano,
        '#Ellowyn': Ellowyn,
        '#PetrifiedStates1': PetrifiedStatesIssue1,
        '#PetrifiedStates2': PetrifiedStatesIssue2,        
    };
    
    const SelectedComponent = components[val];

    return (
        <DefaultPage image={lolly_livro2} title="Creative Writing">
            <p>
                I have been writing things for over 20 years, but I don't plan to upload everything I've ever written here.
                I will try to find the best works that I believe people will enjoy.  One category is "Comics".  They could be plays
                or any other type of media, but when I wrote them, I was planning on getting help from people to create comics.
            </p>
            <div className={classes.dropdowns}>
                <DropdownButton
                    id="poems"
                    as={ButtonGroup}
                    variant="warning"
                    title="Poems"
                    onSelect={(e) => {setVal(e)}}
                    size="sm">
                    <Dropdown.Item href="#Volcano"><span className={classes.ddlItem}>Volcano</span></Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                    id="stories"
                    as={ButtonGroup}
                    variant="warning"
                    title="Stories"
                    onSelect={(e) => {setVal(e)}}
                    size="sm">
                    <Dropdown.Item href="#Ellowyn"><span className={classes.ddlItem}>Ellowyn</span></Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                    id="comics"
                    as={ButtonGroup}
                    variant="warning"
                    title="Comics"
                    onSelect={(e) => {setVal(e)}}
                    size="sm">
                    <Dropdown.Item href="#PetrifiedStates1"><span className={classes.ddlItem}>Petrified States (Issue 1)</span></Dropdown.Item>
                    <Dropdown.Item href="#PetrifiedStates2"><span className={classes.ddlItem}>Petrified States (Issue 2)</span></Dropdown.Item>
                </DropdownButton>
            </div>
            <SelectedComponent className={classes.SelectedComponent} />
        </DefaultPage>
    );
};

export default CreativeWriting;
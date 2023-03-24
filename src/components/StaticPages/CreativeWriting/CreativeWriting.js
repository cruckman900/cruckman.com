import { React, useState, useEffect } from "react";
import DefaultPage from "../../UI/DefaultPage/DefaultPage";
import lolly_livro2 from "../../../assets/images/loly_livro2.png";
import classes from './CreativeWriting.module.css';
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import CWInfo from '../../views/CWInfo';//'../../views/CWInfo/CWInfo';
import Ellowyn from '../../views/Ellowyn/Ellowyn';
import Volcano from '../../views/Volcano/Volcano';
import Resurrection from '../../views/Resurrection/Resurrection';
import ShelterISeek from '../../views/ShelterISeek/ShelterISeek';
import PetrifiedStatesIssue1 from '../../views/PetrifiedStates/PetrifiedStatesIssue1';
import PetrifiedStatesIssue2 from '../../views/PetrifiedStates/PetrifiedStatesIssue2';
import { FormGroup } from "react-bootstrap";

function CreativeWriting() {
    const [val, setVal] = useState('#CWInfo');

    const components = {
        '#CWInfo': CWInfo,
        '#Volcano': Volcano,
        '#Ellowyn': Ellowyn,
        '#Resurrection': Resurrection,
        '#ShelterISeek': ShelterISeek,
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
            <div>
                <FormGroup>
                    <Dropdown as={ButtonGroup} size="sm" onSelect={(e) => {setVal(e)}}>
                        <Dropdown.Toggle id="poems" variant="warning" className={classes.dropdown}>Poems</Dropdown.Toggle>
                        <Dropdown.Menu className={classes.menu}>
                            <Dropdown.Item href="#Volcano" className={classes.ddlItem}>Volcano</Dropdown.Item>
                        </Dropdown.Menu>
                        <Dropdown.Menu className={classes.menu}>
                            <Dropdown.Item href="#Resurrection" className={classes.ddlItem}>Resurrection</Dropdown.Item>
                        </Dropdown.Menu>
                        <Dropdown.Menu className={classes.menu}>
                            <Dropdown.Item href="#ShelterISeek" className={classes.ddlItem}>ShelterISeek</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as={ButtonGroup} size="sm" onSelect={(e) =>  {setVal(e)}}>
                    <Dropdown.Toggle id="stories" variant="warning" className={classes.dropdown}>Stories</Dropdown.Toggle>
                        <Dropdown.Menu className={classes.menu}>
                            <Dropdown.Item href="#Ellowyn" className={classes.ddlItem}>Ellowyn</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as={ButtonGroup} size="sm" onSelect={(e) => {setVal(e)}}>
                    <Dropdown.Toggle id="comics" variant="warning" className={classes.dropdown}>Comics</Dropdown.Toggle>
                        <Dropdown.Menu className={classes.menu}>
                            <Dropdown.Item href="#PetrifiedStates1" className={classes.ddlItem}>Petrified States (Issue 1)</Dropdown.Item>
                            <Dropdown.Item href="#PetrifiedStates2" className={classes.ddlItem}>Petrified States (Issue 2)</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </FormGroup>
            </div>
            <SelectedComponent className={classes.SelectedComponent} />
        </DefaultPage>
    );
};

export default CreativeWriting;
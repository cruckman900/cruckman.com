import { React, useState } from "react";
import { Nav, Navbar, NavDropdown, Offcanvas }from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHouse, faBook, faImage, faMusic, faUser, faHandFist, faIcons,
  faPen, faFilm, faGhost, faCode, faCodeBranch, faVideo, faQuestion, faBars,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import NavItem from '../components/UI/NavItem/NavItem';
import styles from './Navigation.module.css';

import dragon1 from '../assets/images/dragon1.png';

const Navigation = () => {
  const expand = 'sm';
  
  const myIcons = {
    user: faUser,
    house: faHouse,
    image: faImage,
    fist: faHandFist,
    pen: faPen,
    book: faBook,
    film: faFilm,
    music: faMusic, 
    ghost: faGhost,
    code: faCode,
    codeBranch: faCodeBranch,
    video: faVideo, 
    question: faQuestion, 
    icons: faIcons,
    bars: faBars,
    close: faXmark
  }

  const location = useLocation();
  const [show, setShow] = useState(false);
  const toggleOffcanvas= () => {
    setShow(!show)
  }

  return (
      <>
          <Navbar key={expand} variant="light" expand={expand} className={`${styles.Navbar} mb-3`} fixed="top">
            <Container fluid>
              <Navbar.Brand className={`${styles.NavbarBrand}`}>
                <span>
                  <img src={dragon1} width="40" height="40" alt="logo" />
                  <i>Christopher Ruckman</i>
                </span>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={toggleOffcanvas}>
                <FontAwesomeIcon icon={myIcons['bars']} className={styles.Hamburger} />
              </Navbar.Toggle>
              <Navbar.Offcanvas
                style={{backgroundColor: '#444', color: '#eebb5a'}}
                id={`offcanvasNavbar-expand-${expand}`}
                show={show}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{color: '#eebb5a', fontFamily: 'DragonSlapper', fontSize: '2rem'}}>
                    Main Menu
                  </Offcanvas.Title>
                  <div onClick={toggleOffcanvas}><FontAwesomeIcon icon={myIcons['close']}></FontAwesomeIcon></div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav 
                    className="justify-content-end flex-grow-1 pe-3" 
                    variant="tabs" 
                    defaultActiveKey="#"
                    activeKey={location.pathname} 
                    justify
                  >
                    <Nav.Link as={Link} to={"/"} eventKey="/" href="#">
                      <span className={styles.ddlink}><FontAwesomeIcon icon={myIcons['house']} fontSize="1.0rem" />&nbsp;&nbsp;HOME</span>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/resume"} href="/resume">
                      <span className={styles.ddlink}><FontAwesomeIcon icon={myIcons['book']} fontSize="1.0rem" />&nbsp;&nbsp;R&#201;SUM&#201;</span>
                    </Nav.Link>
                    <NavDropdown
                      menuVariant='dark'
                      drop="start"
                      title={<span className={styles.ddlink}><FontAwesomeIcon icon={myIcons['icons']} fontSize="1.0rem" />&nbsp;&nbsp;INTERESTS</span>}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item as={Link} to="/2D3DArt/2D3DArt" eventKey="/2D3DArt/2D3DArt" href="#2D3DArt" style={{minWidth: '16rem', maxWidth: '100%'}}>
                        <NavItem className={styles.ddlink} icon={myIcons['image']} fontSize="1.0rem"><div className={styles.floatright}>2D/3D Art</div></NavItem>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"/Music/Music"} eventKey="/Music/Music" href="#Music">
                        <NavItem className={styles.ddlink} icon={myIcons['music']} fontSize="1.0rem"><div className={styles.floatright}>MUSIC (GUITAR)</div></NavItem>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"/MartialArts/MartialArts"} eventKey="/MartialArts/MartialArts" href="#MartialArts">
                        <NavItem className={styles.ddlink} icon={myIcons['fist']} fontSize="1.0rem"><div className={styles.floatright}>MARTIAL ARTS</div></NavItem>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"/CreativeWriting/CreativeWriting"} eventKey="/CreativeWriting/CreativeWriting" href="#CreativeWriting">
                        <NavItem className={styles.ddlink} icon={myIcons['pen']} fontSize="1.0rem"><div className={styles.floatright}>CREATIVE WRITING</div></NavItem>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"/AudioVideo/AudioVideo"} eventKey="/AudioVideo/AudioVideo" href="#AudioVideo">
                        <NavItem className={styles.ddlink} icon={myIcons['film']} fontSize="1.0rem"><div className={styles.floatright}>AUDIO/VIDEO</div></NavItem>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"/GameDev/GameDev"} eventkey="/GameDev/GameDev" href="#GameDev">
                        <NavItem className={styles.ddlink} icon={myIcons['ghost']} fontSize="1.0rem"><div className={styles.floatright}>GAME DEV</div></NavItem>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"/SoftwareDev/SoftwareDev"} eventKey="/SoftwareDev/SoftwareDev" href="#SoftwareDev">
                        <NavItem className={styles.ddlink} icon={myIcons['code']} fontSize="1.0rem"><div className={styles.floatright}>SOFTWARE DEV</div></NavItem>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item as={Link} to={"/YouTubeLinks/YouTubeLinks"} eventKey="/YouTubeLinks/YouTubeLinks" href="#YouTubeLinks">
                        <NavItem className={styles.ddlink} icon={myIcons['video']} fontSize="1.0rem">YouTube LINKS</NavItem>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      menuVariant='dark'
                      title={<span className={styles.ddlink}><FontAwesomeIcon icon={myIcons['question']} fontSize="1.0rem" />&nbsp;&nbsp;ABOUT</span>}
                      drop="start"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item as={Link} to="/About/Me" eventKey="/About/Me" href="#Me" style={{minWidth:'16rem', width: '100%'}}>
                        <NavItem className={styles.ddlink} icon={myIcons['image']} fontSize="1.0rem"><div className={styles.floatright}>JUST ME</div></NavItem>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/About/Friends" eventKey="/About/Friends" href="#Friends">
                        <NavItem className={styles.ddlink} icon={myIcons['image']} fontSize="1.0rem"><div className={styles.floatright}>FRIENDS/FAMILY</div></NavItem>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item as={Link} to="/About/Portfolio" eventKey="/About/Portfolio" href="#Portfolio">
                        <NavItem className={styles.ddlink} icon={myIcons['image']} fontSize="1.0rem"><div className={styles.floatright}>PORTFOLIO</div></NavItem>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/About/ThisSite" eventKey="/About/ThisSite" href="#ThisSite">
                        <NavItem className={styles.ddlink} icon={myIcons['image']} fontSize="1.0rem"><div className={styles.floatright}>THIS SITE</div></NavItem>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item as={Link} to={"/GitHubLinks/GitHubLinks"} eventKey="/GitHubLinks/GitHubLinks" href="#GitHubLinks">
                        <NavItem className={styles.ddlink} icon={myIcons['codeBranch']} fontSize="1.0rem">GitHub LINKS</NavItem>
                      </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
      </>
  );
};

export default Navigation;
import { Nav, Navbar, NavDropdown, Offcanvas }from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHouse, faBook, faImage, faMusic, faUser, faPersonFalling, faIcons,
  faPen, faFilm, faGhost, faCode, faCodeBranch, faVideo, faQuestion
} from '@fortawesome/free-solid-svg-icons';
import NavItem from '../NavItem/NavItem';
import styles from './Navigation.module.css';

import dragon1 from '../../../assets/images/dragon1.png';

import Home from '../../StaticPages/Home/Home';
import Resume from '../../StaticPages/Resume/Resume';
import About from '../../StaticPages/About/About';
import Art2D3D from '../../StaticPages/2D3DArt/2D3DArt';
import Music from '../../StaticPages/Music/Music';
import MartialArts from '../../StaticPages/MartialArts/MartialArts';
import CreativeWriting from '../../StaticPages/CreativeWriting/CreativeWriting';
import AudioVideo from '../../StaticPages/AudioVideo/AudioVideo';
import GameDev from '../../StaticPages/GameDev/GameDev';
import SoftwareDev from '../../StaticPages/SoftwareDev/SoftwareDev';
import GitHubLinks from '../../StaticPages/GitHubLinks/GitHubLinks';
import YouTubeLinks from '../../StaticPages/YouTubeLinks/YouTubeLinks';

const Navigation = () => {
  const expand = 'xl';
  
  const myIcons = {
    user: faUser,
    house: faHouse,
    image: faImage,
    personFalling: faPersonFalling,
    pen: faPen,
    book: faBook,
    film: faFilm,
    music: faMusic, 
    ghost: faGhost,
    code: faCode,
    codeBranch: faCodeBranch,
    video: faVideo, 
    question: faQuestion, 
    icons: faIcons
  }

  return (
    <Router>
      <>
          <Navbar key={expand} variant="light" expand={expand} className={`${styles.Navbar} mb-3`} fixed="top">
            <Container fluid>
              <Navbar.Brand className={`${styles.NavbarBrand}`} href="/">
                <span>
                  <img src={dragon1} width="40" height="40" alt="logo" />
                  <i>Christopher Ruckman</i>
                </span>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Main Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3" variant="tabs" defaultActiveKey="#" justify>
                    <Nav.Link as={Link} to={"/"} href="#">
                      <span className={styles.ddlink}><FontAwesomeIcon icon={myIcons['house']} fontSize="1.0rem" />&nbsp;&nbsp;HOME</span>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/resume"} href="#resume">
                      <span className={styles.ddlink}><FontAwesomeIcon icon={myIcons['book']} fontSize="1.0rem" />&nbsp;&nbsp;R&#201;SUM&#201;</span>
                    </Nav.Link>
                    <NavDropdown
                      menuVariant='dark'
                      title={<span className={styles.ddlink}><FontAwesomeIcon icon={myIcons['icons']} fontSize="1.0rem" />&nbsp;&nbsp;INTERESTS</span>}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item as={Link} to="/2D3DArt/2D3DArt" href="#2D3DArt">
                        <NavItem className={styles.ddlink} icon={myIcons['image']} fontSize="1.0rem">2D/3D Art</NavItem>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"/Music/Music"} href="#Music">
                        <NavItem className={styles.ddlink} icon={myIcons['music']} fontSize="1.0rem">MUSIC (GUITAR)</NavItem>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"/MartialArts/MartialArts"} href="#MartialArts">
                        <NavItem className={styles.ddlink} icon={myIcons['personFalling']} fontSize="1.0rem">MARTIAL ARTS</NavItem>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"/CreativeWriting/CreativeWriting"} href="#CreativeWriting">
                        <NavItem className={styles.ddlink} icon={myIcons['pen']} fontSize="1.0rem">CREATIVE WRITING</NavItem>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"/AudioVideo/AudioVideo"} href="#AudioVideo">
                        <NavItem className={styles.ddlink} icon={myIcons['film']} fontSize="1.0rem">AUDIO/VIDEO</NavItem>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"/GameDev/GameDev"} href="#GameDev">
                        <NavItem className={styles.ddlink} icon={myIcons['ghost']} fontSize="1.0rem">GAME DEV</NavItem>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"/SoftwareDev/SoftwareDev"} href="#SoftwareDev">
                        <NavItem className={styles.ddlink} icon={myIcons['code']} fontSize="1.0rem">SOFTWARE DEV</NavItem>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item as={Link} to={"/GitHubLinks/GitHubLinks"} href="#GitHubLinks">
                        <NavItem className={styles.ddlink} icon={myIcons['codeBranch']} fontSize="1.0rem">GitHub LINKS</NavItem>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to={"/YouTubeLinks/YouTubeLinks"} href="#YouTubeLinks">
                        <NavItem className={styles.ddlink} icon={myIcons['video']} fontSize="1.0rem">YouTube LINKS</NavItem>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to={"/About"} href="#about">
                      <span className={styles.ddlink}><FontAwesomeIcon icon={myIcons['question']} fontSize="1.0rem" />&nbsp;&nbsp;ABOUT</span>
                    </Nav.Link>
                    <Nav.Link className={styles.onlyMobile} href="#12action">
                      <span className={styles.ddlink}><FontAwesomeIcon icon={myIcons['user']} fontSize="1.0rem" />&nbsp;&nbsp;LOGIN</span>
                    </Nav.Link>
                </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
      </>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/resume" element={ <Resume /> } />
        <Route path="/about" element={ <About /> } />
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
    </Router>
  );
};

export default Navigation;
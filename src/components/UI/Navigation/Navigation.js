import { Nav, Navbar, NavDropdown, Offcanvas }from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHouse, faBook, faImage, faMusic, faUser, faPersonFalling, faIcons,
  faPen, faFilm, faGhost, faCode, faCodeBranch, faVideo, faQuestion
} from '@fortawesome/free-solid-svg-icons';
import styles from './Navigation.module.css';

import dragon1 from '../../../assets/dragon1.png';

import Home from '../../StaticPages/Home/Home';
import Resume from '../../StaticPages/Resume/Resume';
import About from '../../StaticPages/About/About';

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
                      <span className={styles.ddlink}><FontAwesomeIcon icon={myIcons['book']} fontSize="1.0rem" />&nbsp;&nbsp;RESUME</span>
                    </Nav.Link>
                    <NavDropdown
                      menuVariant='dark'
                      title={<span className={styles.ddlink}><FontAwesomeIcon icon={myIcons['icons']} fontSize="1.0rem" />&nbsp;&nbsp;INTERESTS</span>}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action4">
                        <Row>
                          <Col className={styles.ddlink}><FontAwesomeIcon icon={myIcons['image']} fontSize="1.0rem" /></Col>
                          <Col className={styles.ddlink}>2D/3D ART (CG)</Col>
                        </Row>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        <Row>
                          <Col className={styles.ddlink}><FontAwesomeIcon icon={myIcons['music']} fontSize="1.0rem" /></Col>
                          <Col className={styles.ddlink}>MUSIC (Guitar)</Col>
                        </Row>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action6">
                        <Row>
                          <Col className={styles.ddlink}><FontAwesomeIcon icon={myIcons['personFalling']} fontSize="1.0rem" /></Col>
                          <Col className={styles.ddlink}>MARTIAL ARTS</Col>
                        </Row>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action7">
                        <Row>
                          <Col className={styles.ddlink}><FontAwesomeIcon icon={myIcons['pen']} fontSize="1.0rem" /></Col>
                          <Col className={styles.ddlink}>CREATIVE WRITING</Col>
                        </Row>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action7">
                        <Row>
                          <Col className={styles.ddlink}><FontAwesomeIcon icon={myIcons['film']} fontSize="1.0rem" /></Col>
                          <Col className={styles.ddlink}>AUDIO/VIDEO</Col>
                        </Row>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action8">
                        <Row>
                          <Col className={styles.ddlink}><FontAwesomeIcon icon={myIcons['ghost']} fontSize="1.0rem" /></Col>
                          <Col className={styles.ddlink}>GAME DEV</Col>
                        </Row>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action9">
                        <Row>
                          <Col className={styles.ddlink}><FontAwesomeIcon icon={myIcons['code']} fontSize="1.0rem" /></Col>
                          <Col className={styles.ddlink}>SOFTWARE DEV</Col>
                        </Row>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action10">
                        <Row>
                          <Col className={styles.ddlink}><FontAwesomeIcon icon={myIcons['codeBranch']} fontSize="1.0rem" /></Col>
                          <Col className={styles.ddlink}>GitHub LINKS</Col>
                        </Row>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action11">
                        <Row>
                          <Col className={styles.ddlink}><FontAwesomeIcon icon={myIcons['video']} fontSize="1.0rem" /></Col>
                          <Col className={styles.ddlink}>YouTube LINKS</Col>
                        </Row>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to={"/about"} href="#about">
                      <span className={styles.ddlink}><FontAwesomeIcon icon={myIcons['question']} fontSize="1.0rem" />&nbsp;&nbsp;ABOUT</span>
                    </Nav.Link>
                    <Nav.Link className={styles.onlyMobile} href="#12action">
                      <span className={styles.ddlink}><FontAwesomeIcon icon={myIcons['user']} fontSize="1.0rem" />&nbsp;&nbsp;LOGIN/REGISTER</span>
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
      </Routes>
    </Router>
  );
};

export default Navigation;
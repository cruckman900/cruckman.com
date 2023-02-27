import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import dragon1 from '../../assets/dragon1.png';

import styles from './Navigation.module.css';

const Navigation = () => {
  const expand = 'xxl';

  return (
    <>
        <Navbar key={expand} variant="dark" expand={expand} className={`${styles.Navbar} mb-3`} fixed="top">
          <Container fluid>
            <Navbar.Brand className={`${styles.NavbarBrand}`} href="#">
              <span>
                <img src={dragon1} width="35" height="35" alt="logo" />
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
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className={`${styles.NavLink}`} href="#action1"><span>Home</span></Nav.Link>
                  <Nav.Link className={`${styles.NavLink}`} href="#action2"><span>Online Resume</span></Nav.Link>
                  <NavDropdown
                    title="Interests"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action4"><span>2D/3D Art (CG)</span></NavDropdown.Item>
                    <NavDropdown.Item href="#action5"><span>Music (Guitar)</span></NavDropdown.Item>
                    <NavDropdown.Item href="#action6"><span>Martial Arts</span></NavDropdown.Item>
                    <NavDropdown.Item href="#action7"><span>Video Editing</span></NavDropdown.Item>
                    <NavDropdown.Item href="#action8"><span>Game Dev (Unity)</span></NavDropdown.Item>
                    <NavDropdown.Item href="#action9"><span>Software Development</span></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action10"><span>GitHub Links</span></NavDropdown.Item>
                    <NavDropdown.Item href="#action11"><span>YouTube Links</span></NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className={`${styles.NavLink}`} href="#action3"><span>About</span></Nav.Link>
               </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-warning">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default Navigation;
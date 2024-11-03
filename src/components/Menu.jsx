import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import classes from "./Menu.module.css";
function ColorSchemesExample() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={classes.link_center}>
              <Nav.Link className={classes.link} as={Link} to="/add">
                Главная
              </Nav.Link>
              <Nav.Link className={classes.link} as={Link} to="/coctail">
                Бар
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

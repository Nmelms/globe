import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faGlobe,
  faMagnifyingGlass,
  faDownload,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function NavBar() {
  return (
    <>
      <Navbar className="NavBar" expand="lg">
        <Container>
          <FontAwesomeIcon size="2x" className="globe-icon" icon={faGlobe} />

          <Navbar.Brand href="#home">GLOBE EXPRESS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#link">HOLIDAYS</Nav.Link>
              <Nav.Link href="#link">DESTINATIONS</Nav.Link>
              <Nav.Link href="#link">FLIGHTS</Nav.Link>
              <Nav.Link href="#link">OFFERS</Nav.Link>
              <Nav.Link href="#link">CONTACT</Nav.Link>
              <FontAwesomeIcon className="px-4" icon={faMagnifyingGlass} />
              <FontAwesomeIcon icon={faDownload} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar

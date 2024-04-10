import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAtom,
  faExclamationTriangle,
  faEyeDropper,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';
import {
  faDiscord,
  faRedditAlien,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

export default function Header({ siteTitle = '' }) {
  return (
    <Navbar variant="dark" bg="danger" expand="lg">
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">
            <FontAwesomeIcon icon={faExclamationTriangle} /> {siteTitle}
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/flavors">
              <FontAwesomeIcon icon={faEyeDropper} /> Flavors
            </Nav.Link>
            <Nav.Link as={Link} to="/vendors">
              <FontAwesomeIcon icon={faBuilding} /> Vendors
            </Nav.Link>
            <Nav.Link as={Link} to="/ingredients">
              <FontAwesomeIcon icon={faAtom} /> Ingredients
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="https://reddit.com/r/DIY_eJuice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faRedditAlien} size="lg" /> /r/DIY_eJuice
            </Nav.Link>
            <Nav.Link
              href="http://discord.gg/ejuice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDiscord} size="lg" /> Discord
            </Nav.Link>
            <Nav.Link
              href="https://github.com/diy-ejuice/diy-flavor-safety"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <Navbar variant="dark" bg="danger" expand="lg">
    <Navbar.Brand>
      <Link to="/">{siteTitle}</Link>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav>
        <Nav.Link as={Link} to="/all">
          Full List
        </Nav.Link>
        <Nav.Link as={Link} to="/search">
          Search
        </Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link
          href="https://reddit.com/r/DIY_eJuice"
          target="_blank"
          rel="noopener noreferrer"
        >
          /r/DIY_eJuice
        </Nav.Link>
        <Nav.Link
          href="http://link.diyejuice.org/discord"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;

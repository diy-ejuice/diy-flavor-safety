import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer({ siteTitle = '' }) {
  const currentYear = format(Date.now(), 'yyyy');

  return (
    <footer className="my-md-4 pt-md-4 text-end">
      <Container>
        <Row>
          <Col>
            Copyright &copy; {currentYear} {siteTitle}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  siteTitle: PropTypes.string
};

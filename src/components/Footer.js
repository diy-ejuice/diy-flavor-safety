import { format } from 'date-fns';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  const currentYear = format(Date.now(), 'yyyy');

  return (
    <footer className="my-md-4 pt-md-4 text-right">
      <Container>
        <Row>
          <Col>Copyright &copy; {currentYear} DIY Compendium</Col>
        </Row>
      </Container>
    </footer>
  );
}

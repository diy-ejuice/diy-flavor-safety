import { format } from 'date-fns';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.currentYear = format(Date.now(), 'yyyy');
  }

  render() {
    return (
      <footer className="my-md-4 pt-md-4 text-right">
        <Container>
          <Row>
            <Col>Copyright &copy; {this.currentYear} DIY Compendium</Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '~components/layout';

class Index extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Row>
            <Col>
              <h2>Welcome to the Safety Compendium.</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                In late 2019 I started this project as a way to give back to the
                vaping community.
              </p>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Index;

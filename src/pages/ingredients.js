import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import Layout from '~components/Layout';
import SEO from '~components/SEO';

export default class IngredientsPage extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    return (
      <Layout>
        <SEO title="Ingredient Info" />
        <Container>
          <Row>
            <h1>Ingredient Info</h1>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export const query = graphql``;

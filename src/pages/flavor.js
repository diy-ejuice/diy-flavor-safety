import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '~components/Layout';
import SEO from '~components/SEO';

export default class FlavorPage extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const {
      data: { flavor, vendor, ingredients }
    } = this.props;

    return (
      <Layout>
        <SEO title={`Flavor Info - ${flavor.name}`} />
        <Container>
          <Row>
            <Col>
              <p>{vendor.name}</p>
              {ingredients.map(ingredient => (
                <p key={ingredient.name}>{ingredient.name}</p>
              ))}
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export const query = graphql`
  query FlavorSearchQuery(
    $vendor: String
    $name: String
    $ingredients: [String]
  ) {
    flavor: flavorsJson(vendor: { eq: $vendor }, name: { eq: $name }) {
      name
    }

    vendor: vendorsJson(code: { eq: $vendor }) {
      name
    }

    ingredients: ingredientsJson(casNumber: { in: $ingredients }) {
      name
      category
    }
  }
`;

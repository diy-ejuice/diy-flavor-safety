import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '~components/Layout';
import SEO from '~components/SEO';
import IngredientCard from '~components/IngredientCard';

export default class IngredientPage extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        casNumber: PropTypes.string.isRequired
      })
    })
  };

  render() {
    const {
      data: { ingredient }
    } = this.props;

    return (
      <Layout>
        <SEO title={`Ingredient Info - ${ingredient.name}`} />
        <Container>
          <Row>
            <Col>
              <IngredientCard ingredient={ingredient} />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export const query = graphql`
  query IngredientSearchQuery($casNumber: String) {
    ingredient: ingredientsJson(casNumber: { eq: $casNumber }) {
      category
      casNumber
      description
      links {
        href
        title
      }
      name
    }
  }
`;

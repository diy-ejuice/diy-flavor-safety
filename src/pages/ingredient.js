import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '~components/Layout';
import SEO from '~components/SEO';
import IngredientCard from '~components/IngredientCard';

export default class IngredientPage extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    const {
      data: { ingredient, flavors }
    } = this.props;

    this.state = {
      ingredient,
      flavors: flavors.nodes
    };
  }

  render() {
    const { ingredient, flavors } = this.state;

    return (
      <Layout>
        <SEO title={`Ingredient Info - ${ingredient.name}`} />
        <Container>
          <Row>
            <Col>
              <IngredientCard {...ingredient} flavors={flavors} />
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
    flavors: allFlavorsJson(filter: { ingredients: { in: [$casNumber] } }) {
      nodes {
        name
        vendor
      }
    }
    vendors: allVendorsJson {
      nodes {
        code
        name
      }
    }
  }
`;

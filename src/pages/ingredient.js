import pluralize from 'pluralize';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
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
      data: { ingredient, flavors, vendors }
    } = this.props;

    this.state = {
      ingredient,
      flavors: flavors.nodes,
      vendors: vendors.nodes
    };
  }

  render() {
    const { flavors, ingredient, vendors } = this.state;

    const title = `Ingredient Info - ${ingredient.name}`;
    const description = `${ingredient.name} is used by ${
      vendors.length
    } ${pluralize('vendor', vendors.length)} in ${flavors.length} ${pluralize(
      'flavor',
      flavors.length
    )}.`;

    return (
      <Layout>
        <SEO title={title} description={description} />
        <Container>
          <Row className="mb-3">
            <Col>
              <Link to="/ingredients">Ingredients</Link>
              <span> &raquo; {ingredient.name}</span>
            </Col>
          </Row>
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

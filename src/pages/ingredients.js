import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import Layout from '~components/Layout';
import SEO from '~components/SEO';
import IngredientCard from '~components/IngredientCard';

export default class IngredientsPage extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    const {
      data: { flavors, ingredients, vendors }
    } = this.props;

    this.state = {
      ingredients: ingredients.nodes.map(ingredient => {
        const ingredientFlavors = flavors.nodes.filter(flavorNode =>
          flavorNode.ingredients.includes(ingredient.casNumber)
        );
        const ingredientVendors = vendors.nodes.filter(vendorNode =>
          ingredientFlavors.some(
            ingredientFlavor => ingredientFlavor.vendor === vendorNode.code
          )
        );

        return {
          ...ingredient,
          flavors: ingredientFlavors,
          vendors: ingredientVendors
        };
      })
    };

    this.state.ingredients.sort(
      (a, b) =>
        a.category.localeCompare(b.category) || a.name.localeCompare(b.name)
    );
  }

  render() {
    const { ingredients } = this.state;

    return (
      <Layout>
        <SEO title="Ingredient Info" />
        <Container>
          <Row>
            <h1>Ingredient Info</h1>
          </Row>
          {ingredients.map(ingredient => (
            <IngredientCard
              {...ingredient}
              key={ingredient.casNumber}
              flavors={ingredient.flavors}
              vendors={ingredient.vendors}
            />
          ))}
        </Container>
      </Layout>
    );
  }
}

export const query = graphql`
  query IngredientsSearchQuery {
    flavors: allFlavorsJson {
      nodes {
        ingredients
        name
        vendor
      }
    }
    ingredients: allIngredientsJson {
      nodes {
        casNumber
        category
        description
        links {
          href
          title
        }
        name
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

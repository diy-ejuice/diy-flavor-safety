import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import Layout from '~components/Layout';
import SEO from '~components/SEO';
import VendorCard from '~components/VendorCard';

export default class VendorsPage extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    const {
      data: { flavors, ingredients, vendors }
    } = this.props;

    this.state = {
      vendors: vendors.nodes.flatMap(vendor => {
        const vendorFlavors = flavors.nodes.filter(
          flavorNode => flavorNode.vendor === vendor.code
        );
        const vendorIngredients = ingredients.nodes.filter(ingredientNode =>
          vendorFlavors.some(vendorFlavor =>
            vendorFlavor.ingredients.includes(ingredientNode.casNumber)
          )
        );

        return vendorFlavors.length
          ? [
              {
                ...vendor,
                flavors: vendorFlavors,
                ingredients: vendorIngredients
              }
            ]
          : [];
      })
    };

    this.state.vendors.sort((a, b) => a.name.localeCompare(b.name));
  }

  render() {
    const { vendors } = this.state;

    return (
      <Layout>
        <SEO title="Vendor Score" />
        <Container>
          <Row>
            <h1>Vendor Score</h1>
          </Row>
          {vendors.map(vendor => (
            <VendorCard
              {...vendor}
              key={vendor.code}
              flavors={vendor.flavors}
              ingredients={vendor.ingredients}
            />
          ))}
        </Container>
      </Layout>
    );
  }
}

export const query = graphql`
  query VendorsSearchQuery {
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

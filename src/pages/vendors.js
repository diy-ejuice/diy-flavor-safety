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
      data: {
        flavors: { nodes: flavors },
        ingredients: { nodes: ingredients },
        vendors: { nodes: vendors }
      }
    } = this.props;

    this.state = {
      vendors: vendors.flatMap((vendor) => {
        const vendorFlavors = flavors.filter(
          (flavor) => flavor.vendor === vendor.code
        );
        const vendorIngredients = ingredients.filter((ingredient) =>
          vendorFlavors.some((vendorFlavor) =>
            vendorFlavor.casNumbers.includes(ingredient.casNumber)
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
        <SEO title="Vendor Info" />
        <Container>
          <Row>
            <h1>Vendor Info</h1>
          </Row>
          {vendors.map((vendor) => (
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
        casNumbers
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
        flavorCount
      }
    }
  }
`;

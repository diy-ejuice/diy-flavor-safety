import pluralize from 'pluralize';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '~components/Layout';
import SEO from '~components/SEO';
import VendorCard from '~components/VendorCard';

export default class VendorPage extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    const {
      data: {
        flavors: { nodes: flavors },
        ingredients: { nodes: ingredients },
        vendor
      }
    } = this.props;

    this.state = {
      flavors,
      ingredients,
      vendor
    };
  }

  render() {
    const { flavors, ingredients, vendor } = this.state;

    const title = `Vendor Info - ${vendor.name}`;
    const description = `${vendor.name} uses ${
      ingredients.length
    } concerning ${pluralize('ingredient', ingredients.length)} in ${
      flavors.length
    } ${pluralize('flavor', flavors.length)}.`;

    return (
      <Layout>
        <SEO title={title} description={description} />
        <Container>
          <Row className="mb-3">
            <Col>
              <Link to="/vendors">Vendors</Link> &raquo; {vendor.name}
            </Col>
          </Row>
          <Row>
            <Col>
              <VendorCard
                {...vendor}
                flavors={flavors}
                ingredients={ingredients}
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export const query = graphql`
  query VendorSearchQuery($code: String) {
    vendor: vendorsJson(code: { eq: $code }) {
      name
      code
      flavorCount
    }
    flavors: allFlavorsJson(filter: { vendor: { eq: $code } }) {
      nodes {
        name
        casNumbers
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
  }
`;

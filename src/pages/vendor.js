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
      data: { flavors, ingredients, vendor }
    } = this.props;

    this.state = {
      flavors: flavors.nodes,
      ingredients: ingredients.nodes,
      vendor
    };
  }

  render() {
    const { flavors, ingredients, vendor } = this.state;

    return (
      <Layout>
        <SEO title={`Vendor Info - ${vendor.name}`} />
        <Container>
          <Row>
            <Link to="/vendors">&laquo; Back</Link>
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
    }
    flavors: allFlavorsJson(filter: { vendor: { eq: $code } }) {
      nodes {
        name
        ingredients
      }
    }
    ingredients: allIngredientsJson {
      nodes {
        name
        casNumber
      }
    }
  }
`;

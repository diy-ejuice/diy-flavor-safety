import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import React, { Component, Fragment } from 'react';
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap';

import Layout from '~components/Layout';
import SEO from '~components/SEO';
import { getCategoryVariant, getIngredientSlug, getVendorSlug } from '~utils';

export default class FlavorPage extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    const {
      data: { flavor, vendor, ingredients }
    } = props;

    this.state = {
      flavor,
      ingredients: ingredients.nodes,
      vendor
    };
  }

  get vendor() {
    const { vendor } = this.state;

    return <Link to={getVendorSlug(vendor)}>Go to vendor page</Link>;
  }

  get ingredients() {
    const { ingredients } = this.state;

    return (
      <Fragment>
        <h6 className="mt-3">
          This flavor contains the following concerning ingredients:
        </h6>
        <ListGroup activeKey="">
          {ingredients.map(ingredient => (
            <ListGroupItem
              action
              key={ingredient.name}
              as={Link}
              to={getIngredientSlug(ingredient)}
              variant={getCategoryVariant(ingredient.category)}
            >
              {ingredient.name}{' '}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Fragment>
    );
  }

  render() {
    const { flavor, vendor } = this.state;

    return (
      <Layout>
        <SEO title={`Flavor Info - ${flavor.name}`} />
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <h3>
                    {vendor.name} {flavor.name}
                  </h3>
                </Card.Header>
                <Card.Body>
                  {this.vendor}
                  {this.ingredients}
                </Card.Body>
              </Card>
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
    ingredients: allIngredientsJson(
      filter: { casNumber: { in: $ingredients } }
    ) {
      nodes {
        name
        category
      }
    }
  }
`;

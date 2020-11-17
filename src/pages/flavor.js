import pluralize from 'pluralize';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

import CategoryInfo from '~components/CategoryInfo';
import Layout from '~components/Layout';
import SEO from '~components/SEO';
import { getIngredientSlug, getVendorSlug } from '~utils';

export default class FlavorPage extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    const {
      data: { flavor, vendor, ingredients }
    } = this.props;

    this.state = {
      flavor,
      ingredients: ingredients.nodes,
      vendor
    };
  }

  get vendor() {
    const { vendor } = this.state;

    return (
      <Col>
        <Link to={getVendorSlug(vendor)}>Go to vendor page</Link>
      </Col>
    );
  }

  sdsUrl(ingredient) {
    if (ingredient.manual) {
      return (
        <Card.Text>This listing was added to the database manually.</Card.Text>
      );
    }

    if (ingredient.sdsUrl) {
      const fullUrl = `https://juicebook.net${ingredient.sdsUrl}`;

      return (
        <Card.Text>
          Click{' '}
          <a target="_blank" rel="noopener noreferrer" href={fullUrl}>
            here
          </a>{' '}
          to view the SDS that generated this finding.
        </Card.Text>
      );
    }

    return null;
  }

  get ingredients() {
    const {
      ingredients,
      flavor: { ingredients: flavorIngredients }
    } = this.state;

    return (
      <Col>
        <h6 className="mt-3">
          This flavor contains the following concerning{' '}
          {pluralize('ingredient', ingredients.length)}:
        </h6>
        {ingredients.map((ingredient) => {
          const flavorIngredient = flavorIngredients.find(
            (flavorIngred) => ingredient.casNumber === flavorIngred.casNumber
          );

          return (
            <Card key={ingredient.name}>
              <Card.Header>
                <Link to={getIngredientSlug(ingredient)}>
                  {ingredient.name}
                </Link>
              </Card.Header>
              <Card.Body>{this.sdsUrl(flavorIngredient)}</Card.Body>
            </Card>
          );
        })}
      </Col>
    );
  }

  render() {
    const { flavor, ingredients, vendor } = this.state;

    const title = `Flavor Info - ${flavor.name}`;
    const description = `${flavor.name} contains ${
      ingredients.length
    } concerning ${pluralize('ingredient', ingredients.length)}.`;

    return (
      <Layout>
        <SEO title={title} description={description} />
        <Container>
          <Row className="mb-3">
            <Col>
              <Link to="/flavors">Flavors</Link> &raquo; {flavor.name}
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <h3>
                    {vendor.name} {flavor.name}
                    <CategoryInfo
                      badgeProps={{ className: 'float-right' }}
                      category={flavor.category}
                    />
                  </h3>
                </Card.Header>
                <Card.Body>
                  <Row>{this.vendor}</Row>
                  <Row>{this.ingredients}</Row>
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
    $casNumbers: [String]
  ) {
    flavor: flavorsJson(vendor: { eq: $vendor }, name: { eq: $name }) {
      name
      category
      ingredients {
        casNumber
        manual
        sdsUrl
      }
    }
    vendor: vendorsJson(code: { eq: $vendor }) {
      code
      name
    }
    ingredients: allIngredientsJson(
      filter: { casNumber: { in: $casNumbers } }
    ) {
      nodes {
        name
        category
      }
    }
  }
`;

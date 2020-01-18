import { graphql } from 'gatsby';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';

import Layout from '~components/layout';
import Search from '~components/search';
import SEO from '~components/seo';
import CategoryInfo from '~components/categoryInfo';

const debounceLeading = (fn, delay = 250) =>
  debounce(fn, delay, { leading: true });

export default class SearchPage extends Component {
  static propTypes = {
    data: PropTypes.shape({
      allVendorsJson: PropTypes.arrayOf(PropTypes.object),
      allFlavorsJson: PropTypes.arrayOf(PropTypes.object),
      allIngredientsJson: PropTypes.arrayOf(PropTypes.object)
    }).isRequired
  };

  constructor(props) {
    super(props);

    const {
      data: { allVendorsJson, allFlavorsJson, allIngredientsJson }
    } = this.props;

    this.state = {
      selected: {
        vendor: '',
        flavor: '',
        ingredient: '',
        category: ''
      },
      vendors: allVendorsJson.edges.map(node => node.node),
      flavors: allFlavorsJson.edges.map(node => node.node),
      ingredients: allIngredientsJson.edges.map(node => node.node),
      results: []
    };

    this.onVendorChange = this.onVendorChange.bind(this);
    this.onFlavorChange = this.onFlavorChange.bind(this);
    this.onIngredientChange = this.onIngredientChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.refreshResults = this.refreshResults.bind(this);
  }

  componentDidMount() {
    this.refreshResults();
  }

  refreshResults() {
    const { vendors, flavors, ingredients, selected } = this.state;
    const results = flavors
      .filter(flavor => {
        const {
          vendor: vendorCode,
          name: flavorName,
          ingredient: ingredientCas
        } = flavor;
        const vendor = vendors.find(vend => vend.code === vendorCode);
        const ingredient = ingredients.find(
          ingr => ingr.casNumber === ingredientCas
        );

        return (
          (!selected?.flavor ||
            flavorName.toLowerCase().includes(selected.flavor.toLowerCase())) &&
          (!selected?.vendor ||
            vendor.name.toLowerCase().includes(selected.vendor.toLowerCase()) ||
            vendor.code
              .toLowerCase()
              .includes(selected.vendor.toLowerCase())) &&
          (!selected?.ingredient ||
            ingredient.name.toLowerCase().includes(selected.ingredient) ||
            ingredient.casNumber.toLowerCase().includes(selected.ingredient)) &&
          (!selected?.category ||
            ingredient.category
              .toLowerCase()
              .includes(selected.category.toLowerCase()))
        );
      })
      .map(flavor => ({
        flavor,
        vendor: vendors.find(vendor => vendor.code === flavor.vendor),
        ingredient: ingredients.find(
          ingredient => ingredient.casNumber === flavor.ingredient
        )
      }));

    results.sort(
      (a, b) =>
        a.vendor.code.localeCompare(b.vendor.code) ||
        a.flavor.name.localeCompare(b.flavor.name) ||
        a.ingredient.name.localeCompare(b.ingredient.name)
    );

    this.setState({ results });
  }

  setSelectedState(state) {
    const selected = {
      ...this.state.selected,
      ...state
    };

    this.setState({ selected }, this.refreshResults);
  }

  onVendorChange(vendor) {
    this.setSelectedState({ vendor });
  }

  onFlavorChange(flavor) {
    this.setSelectedState({ flavor });
  }

  onIngredientChange(ingredient) {
    this.setSelectedState({ ingredient });
  }

  onCategoryChange(category) {
    this.setSelectedState({ category });
  }

  render() {
    const { selected, vendors, flavors, ingredients, results } = this.state;

    return (
      <Layout>
        <SEO title="Search" />
        <Container>
          <Row>
            <Col>
              <Card body className="mb-4">
                <Card.Title>
                  <h3>All Tests</h3>
                </Card.Title>
                <Search
                  vendors={vendors}
                  flavors={flavors}
                  ingredients={ingredients}
                  onVendorChange={debounceLeading(this.onVendorChange)}
                  onFlavorChange={debounceLeading(this.onFlavorChange)}
                  onIngredientChange={debounceLeading(this.onIngredientChange)}
                  onCategoryChange={debounceLeading(this.onCategoryChange)}
                  selected={selected}
                />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Vendor</th>
                    <th>Flavor</th>
                    <th>Ingredient</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map(result => {
                    const key = `${result.vendor.code}-${result.flavor.name}-${result.ingredient.casNumber}`;

                    return (
                      <tr key={key}>
                        <td>{result.vendor.name}</td>
                        <td>{result.flavor.name}</td>
                        <td>{result.ingredient.name}</td>
                        <td>
                          <CategoryInfo category={result.ingredient.category} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export const query = graphql`
  query AllResultsQuery {
    allFlavorsJson {
      edges {
        node {
          name
          vendor
          ingredient
        }
      }
    }

    allIngredientsJson {
      edges {
        node {
          name
          category
          casNumber
        }
      }
    }

    allVendorsJson {
      edges {
        node {
          name
          code
        }
      }
    }
  }
`;

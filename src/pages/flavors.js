import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import React, { Component } from 'react';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';

import Layout from '~components/Layout';
import SearchForm from '~components/SearchForm';
import SEO from '~components/SEO';
import CategoryInfo from '~components/CategoryInfo';
import { getFlavorSlug, getVendorSlug, getIngredientSlug } from '~utils';

const debounceLeading = (fn, delay = 250) =>
  debounce(fn, delay, { leading: true });

const NodesType = PropTypes.shape({
  nodes: PropTypes.arrayOf(PropTypes.object)
});

export default class FlavorsPage extends Component {
  static propTypes = {
    data: PropTypes.shape({
      vendors: NodesType.isRequired,
      flavors: NodesType.isRequired,
      ingredients: NodesType.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);

    const {
      data: { vendors, flavors, ingredients }
    } = this.props;

    this.state = {
      selected: {
        vendor: '',
        flavor: '',
        ingredient: '',
        category: ['Avoid', 'Caution']
      },
      vendors: vendors.nodes,
      flavors: flavors.nodes,
      ingredients: ingredients.nodes,
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
    const results = flavors.flatMap(flavor => {
      const {
        vendor: vendorCode,
        name: flavorName,
        ingredients: flavorIngredients
      } = flavor;
      const vendor = vendors.find(vend => vend.code === vendorCode);
      const matchingIngredients = flavorIngredients
        .map(casNumber =>
          ingredients.find(ingredient => ingredient.casNumber === casNumber)
        )
        .filter(
          ingredient =>
            (!selected?.category?.length ||
              selected.category.includes(ingredient.category)) &&
            (!selected?.ingredient ||
              ingredient.name
                .toLowerCase()
                .includes(selected.ingredient.toLowerCase()))
        );
      const flavorMatches =
        (!selected?.flavor ||
          flavorName.toLowerCase().includes(selected.flavor.toLowerCase())) &&
        (!selected?.vendor ||
          vendor.name.toLowerCase().includes(selected.vendor.toLowerCase()) ||
          vendor.code.toLowerCase().includes(selected.vendor.toLowerCase())) &&
        (!selected?.ingredient ||
          matchingIngredients.some(ingredient =>
            ingredient.name
              .toLowerCase()
              .includes(selected.ingredient.toLowerCase())
          )) &&
        (!selected?.category?.length ||
          selected.category.some(category =>
            matchingIngredients.some(
              ingredient => category === ingredient.category
            )
          ));

      return flavorMatches
        ? [
            {
              flavor,
              vendor,
              ingredients: matchingIngredients
            }
          ]
        : [];
    });

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
    this.setSelectedState({
      category: Array.from([category].flat())
    });
  }

  renderFlavor(result) {
    const { flavor, vendor, ingredients } = result;
    const flavorLink = getFlavorSlug(flavor);
    const vendorLink = getVendorSlug(vendor);

    return ingredients.map(ingredient => {
      const key = `${vendor.code}-${flavor.name}-${ingredient.casNumber}`;
      const ingredientLink = getIngredientSlug(ingredient);

      return (
        <tr key={key}>
          <td>
            <Link to={vendorLink}>{vendor.name}</Link>
          </td>
          <td>
            <Link to={flavorLink}>{flavor.name}</Link>
          </td>
          <td>
            <Link to={ingredientLink}>{ingredient.name}</Link>
          </td>
          <td className="text-center">
            <CategoryInfo category={ingredient.category} />
          </td>
        </tr>
      );
    });
  }

  render() {
    const { selected, vendors, flavors, ingredients, results } = this.state;

    return (
      <Layout>
        <SEO title="Browse Flavors" />
        <Container>
          <Row>
            <Col>
              <Card body className="mb-4">
                <Card.Title>
                  <h3>Search Flavors</h3>
                </Card.Title>
                <SearchForm
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
                  {results?.length ? (
                    results.map(this.renderFlavor)
                  ) : (
                    <tr>
                      <td colSpan={4} className="text-center">
                        No flavors were found with your current search
                        parameters!
                      </td>
                    </tr>
                  )}
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
  query FlavorsSearchQuery {
    vendors: allVendorsJson {
      nodes {
        code
        name
      }
    }
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
  }
`;

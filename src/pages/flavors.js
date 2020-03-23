import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import React, { Component } from 'react';
import {
  Card,
  Container,
  Row,
  Col,
  Table,
  Modal,
  Spinner
} from 'react-bootstrap';

import CategoryInfo from '~components/CategoryInfo';
import Layout from '~components/Layout';
import SearchForm from '~components/SearchForm';
import SEO from '~components/SEO';
import SortIcon from '~components/SortIcon';
import { getFlavorSlug, getVendorSlug, getIngredientSlug } from '~utils';
import SortWorker from '~workers/sortWorker';

const NodesType = PropTypes.shape({
  nodes: PropTypes.arrayOf(PropTypes.object)
});

import '~pages/flavors.scss';

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
      data: {
        vendors: { nodes: vendors },
        flavors: { nodes: flavors },
        ingredients: { nodes: ingredients }
      }
    } = this.props;
    const rows = [];

    for (const flavor of flavors) {
      const { vendor: vendorCode, casNumbers } = flavor;
      const vendor = vendors.find(vend => vend.code === vendorCode);
      const matchingIngredients = casNumbers.map(casNumber =>
        ingredients.find(ingredient => ingredient.casNumber === casNumber)
      );

      for (const ingredient of matchingIngredients) {
        const { created } = flavor.ingredients.find(
          ingredientNode => ingredientNode.casNumber === ingredient.casNumber
        );

        rows.push({
          flavor: {
            ...flavor,
            created,
            slug: getFlavorSlug(flavor)
          },
          vendor: {
            ...vendor,
            slug: getVendorSlug(vendor)
          },
          ingredient: {
            ...ingredient,
            slug: getIngredientSlug(ingredient)
          }
        });
      }
    }

    this.state = {
      selected: {
        vendor: '',
        flavor: '',
        ingredient: '',
        category: ['Avoid', 'Caution']
      },
      rows,
      results: [],
      sort: {
        column: null,
        direction: false
      },
      sorting: false
    };

    this.sortWorker = SortWorker;
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onFlavorChange = this.onFlavorChange.bind(this);
    this.onIngredientChange = this.onIngredientChange.bind(this);
    this.onVendorChange = this.onVendorChange.bind(this);
    this.onSortChange = this.onSortChange.bind(this);
    this.refreshResults = this.refreshResults.bind(this);
    this.startSort = this.startSort.bind(this);
    this.finishSort = this.finishSort.bind(this);
    this.flavorMatches = this.flavorMatches.bind(this);
    this.syncResults = this.syncResults.bind(this);
  }

  componentDidMount() {
    this.sortWorker.addEventListener('message', this.syncResults);
    this.refreshResults();
  }

  componentWillUnmount() {
    this.sortWorker.removeEventListener('message', this.syncResults);
  }

  syncResults({ data: results }) {
    this.setState({ results, sorting: false });
  }

  flavorMatches({ flavor, vendor, ingredient }) {
    const { selected } = this.state;

    return (
      (!selected?.flavor ||
        flavor.name.toLowerCase().includes(selected.flavor.toLowerCase())) &&
      (!selected?.vendor ||
        vendor.name.toLowerCase().includes(selected.vendor.toLowerCase()) ||
        vendor.code.toLowerCase().includes(selected.vendor.toLowerCase())) &&
      (!selected?.ingredient ||
        ingredient.name
          .toLowerCase()
          .includes(selected.ingredient.toLowerCase())) &&
      (!selected?.category?.length ||
        selected.category.some(category => category === ingredient.category))
    );
  }

  refreshResults() {
    const { rows } = this.state;

    this.startSort(rows.filter(row => this.flavorMatches(row)));
  }

  startSort(results) {
    this.setState({ sorting: results.length > 100 }, () =>
      this.finishSort(results)
    );
  }

  finishSort(results) {
    const {
      sort: { column, direction }
    } = this.state;

    this.sortWorker.postMessage({ results, column, direction });
  }

  setSelectedState(state) {
    const selected = {
      ...this.state.selected,
      ...state
    };

    this.setState({ selected }, debounce(this.refreshResults, 250));
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

  onSortChange(column, direction) {
    this.setState({ sort: { column, direction } }, () => {
      this.startSort(this.state.results);
    });
  }

  renderFlavor(result) {
    const { flavor, vendor, ingredient } = result;
    const { created } = flavor.ingredients.find(
      ingredientNode => ingredientNode.casNumber === ingredient.casNumber
    );
    const key = `${vendor.code}-${flavor.name}-${ingredient.casNumber}`;

    return (
      <tr key={key}>
        <td>
          <Link to={vendor.slug}>{vendor.name}</Link>
        </td>
        <td>
          <Link to={flavor.slug}>{flavor.name}</Link>
        </td>
        <td>
          <Link to={ingredient.slug}>{ingredient.name}</Link>
        </td>
        <td>{created}</td>
        <td className="text-center">
          <CategoryInfo category={ingredient.category} />
        </td>
      </tr>
    );
  }

  render() {
    const {
      selected,
      vendors,
      flavors,
      ingredients,
      results,
      sorting
    } = this.state;

    return (
      <Layout>
        <SEO title="Browse Flavors" />
        <Modal
          show={sorting}
          animation={false}
          dialogAs="div"
          className="diy-search-modal"
        >
          <div className="diy-spinner-container">
            <div>
              <Spinner animation="border" role="status" variant="danger" />
              <h4 className="mt-2 text-light">Loading</h4>
            </div>
          </div>
        </Modal>
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
                  onVendorChange={this.onVendorChange}
                  onFlavorChange={this.onFlavorChange}
                  onIngredientChange={this.onIngredientChange}
                  onCategoryChange={this.onCategoryChange}
                  selected={selected}
                />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="text-right text-muted mb-4">
              {results?.length
                ? `${results.length} results displayed (${this.state.rows.length} total)`
                : null}
            </Col>
          </Row>
          <Row>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>
                      Vendor{' '}
                      <SortIcon column="vendor" onToggle={this.onSortChange} />
                    </th>
                    <th>
                      Flavor{' '}
                      <SortIcon column="flavor" onToggle={this.onSortChange} />
                    </th>
                    <th>
                      Ingredient{' '}
                      <SortIcon
                        column="ingredient"
                        onToggle={this.onSortChange}
                      />
                    </th>
                    <th>
                      Added{' '}
                      <SortIcon column="created" onToggle={this.onSortChange} />
                    </th>
                    <th>
                      Category{' '}
                      <SortIcon
                        column="category"
                        onToggle={this.onSortChange}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results?.length ? (
                    results.map(this.renderFlavor)
                  ) : (
                    <tr>
                      <td colSpan={5} className="text-center">
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
        casNumbers
        ingredients {
          casNumber
          created
        }
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

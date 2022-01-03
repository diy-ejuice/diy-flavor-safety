import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Card,
  Container,
  Row,
  Col,
  Table,
  Modal,
  Spinner
} from 'react-bootstrap';

import 'pages/flavors.scss';
import CategoryInfo from 'components/CategoryInfo';
import Layout from 'components/Layout';
import SearchForm from 'components/SearchForm';
import SEO from 'components/SEO';
import SortIcon from 'components/SortIcon';
import { getFlavorSlug, getVendorSlug, getIngredientSlug } from 'utils';
import { createSortWorker } from 'workers/sortWorker';

const NodesType = PropTypes.shape({
  nodes: PropTypes.arrayOf(PropTypes.object)
});

export default function FlavorsPage({ data }) {
  const {
    vendors: { nodes: vendors },
    flavors: { nodes: flavors },
    ingredients: { nodes: ingredients }
  } = data;

  const SortWorker = useMemo(createSortWorker, []);
  const rows = useMemo(() => {
    const result = [];

    for (const flavor of flavors) {
      const { vendor: vendorCode, casNumbers } = flavor;
      const vendor = vendors.find((vend) => vend.code === vendorCode);
      const matchingIngredients = casNumbers.map((casNumber) =>
        ingredients.find((ingredient) => ingredient.casNumber === casNumber)
      );

      for (const ingredient of matchingIngredients) {
        const { created } = flavor.ingredients.find(
          (ingredientNode) => ingredientNode.casNumber === ingredient.casNumber
        );

        result.push({
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

    return result;
  }, [vendors, flavors, ingredients]);

  const [selected, setSelected] = useState({
    vendor: '',
    flavor: '',
    ingredient: '',
    category: ['Avoid', 'Caution']
  });
  const [results, setResults] = useState([]);
  const [sort, setSort] = useState({
    column: null,
    direction: false
  });
  const [sorting, setSorting] = useState(false);

  const syncResults = useCallback(
    ({ data: resultData }) => {
      setResults(resultData);
      setSorting(false);
    },
    [setResults, setSorting]
  );

  const flavorMatches = useCallback(
    ({ flavor, vendor, ingredient }) => {
      const selectedFlavor = selected?.flavor?.toLowerCase?.();
      const selectedVendor = selected?.vendor?.toLowerCase?.();
      const selectedIngredient = selected?.ingredient?.toLowerCase?.();
      const selectedCategories = selected?.category?.length;

      return (
        (!selectedFlavor ||
          flavor.name.toLowerCase().includes(selectedFlavor)) &&
        (!selectedVendor ||
          vendor.name.toLowerCase().includes(selectedVendor) ||
          vendor.code.toLowerCase().includes(selectedVendor) ||
          (vendor.code === 'TPA' && selectedVendor === 'tfa')) &&
        (!selectedIngredient ||
          ingredient.name.toLowerCase().includes(selectedIngredient)) &&
        (!selectedCategories ||
          selected.category.some((category) => category === flavor.category))
      );
    },
    [selected]
  );

  const finishSort = (resultData) => {
    const { column, direction } = sort;

    SortWorker.postMessage({ results: resultData, column, direction });
  };

  const startSort = (resultData) => {
    setSorting(resultData.length > 100);
    finishSort(resultData);
  };

  const refreshResults = useCallback(
    () => startSort(rows.filter((row) => flavorMatches(row))),
    [startSort, rows]
  );

  const setSelectedState = useCallback(
    (state) => setSelected((sel) => ({ ...sel, ...state })),
    [setSelected]
  );

  const onVendorChange = useCallback(
    (vendor) => setSelectedState({ vendor }),
    [setSelectedState]
  );
  const onFlavorChange = useCallback(
    (flavor) => setSelectedState({ flavor }),
    [setSelectedState]
  );
  const onIngredientChange = useCallback(
    (ingredient) => setSelectedState({ ingredient }),
    [setSelectedState]
  );
  const onCategoryChange = useCallback(
    (category) =>
      setSelectedState({
        category: Array.from([category].flat())
      }),
    [setSelectedState]
  );
  const onSortChange = useCallback(
    (column, direction) => {
      setSort({ column, direction });
      startSort(results);
    },
    [setSort, startSort]
  );

  useEffect(() => {
    SortWorker.addEventListener('message', syncResults);

    refreshResults();

    return () => SortWorker.removeEventListener('message', syncResults);
  }, []);

  useEffect(() => {
    debounce(refreshResults, 250)();
  }, [selected]);

  return (
    <Layout>
      <SEO title="Browse Flavors" />
      <Modal
        show={sorting}
        animation={false}
        dialogClassName="diy-search-modal"
      >
        <div className="diy-spinner-container">
          <div className="m-2">
            <Spinner animation="border" role="status" variant="danger" />
            <h4 className="mt-2">Loading</h4>
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
                onVendorChange={onVendorChange}
                onFlavorChange={onFlavorChange}
                onIngredientChange={onIngredientChange}
                onCategoryChange={onCategoryChange}
                selected={selected}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="text-end text-muted mb-4">
            {results?.length
              ? `${results.length} results displayed (${rows.length} total)`
              : null}
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    Vendor <SortIcon column="vendor" onToggle={onSortChange} />
                  </th>
                  <th>
                    Flavor <SortIcon column="flavor" onToggle={onSortChange} />
                  </th>
                  <th>
                    Ingredient{' '}
                    <SortIcon column="ingredient" onToggle={onSortChange} />
                  </th>
                  <th>
                    Added <SortIcon column="created" onToggle={onSortChange} />
                  </th>
                  <th>
                    Category{' '}
                    <SortIcon column="category" onToggle={onSortChange} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {results?.length ? (
                  results.map((result) => {
                    const { flavor, vendor, ingredient } = result;
                    const { created } = flavor.ingredients.find(
                      (ingredientNode) =>
                        ingredientNode.casNumber === ingredient.casNumber
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
                          <CategoryInfo category={flavor.category} />
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center">
                      No flavors were found with your current search parameters!
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

FlavorsPage.propTypes = {
  data: PropTypes.shape({
    vendors: NodesType.isRequired,
    flavors: NodesType.isRequired,
    ingredients: NodesType.isRequired
  }).isRequired
};

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
        category
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

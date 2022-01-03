import pluralize from 'pluralize';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import VendorCard from 'components/VendorCard';

export default function VendorPage({ data }) {
  const {
    flavors: { nodes: flavors },
    ingredients: { nodes: ingredients },
    vendor
  } = data;
  const title = `Vendor Info - ${vendor.name}`;
  const description = `${vendor.name} uses ${
    ingredients.length
  } concerning ${pluralize('ingredient', ingredients.length)} in ${
    flavors.length
  } ${pluralize('flavor', flavors.length)}.`;

  const vendorIngredients = ingredients.filter((ingredient) =>
    flavors.some((flavor) =>
      flavor.ingredients.some(
        (ingred) => ingred.casNumber === ingredient.casNumber
      )
    )
  );

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
              ingredients={vendorIngredients}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

VendorPage.propTypes = {
  data: PropTypes.object.isRequired
};

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
        ingredients {
          casNumber
        }
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

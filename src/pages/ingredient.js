import pluralize from 'pluralize';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '~components/Layout';
import SEO from '~components/SEO';
import IngredientCard from '~components/IngredientCard';

export default function IngredientPage({ data }) {
  const {
    ingredient,
    flavors: { nodes: flavors },
    vendors: { nodes: vendors }
  } = data;
  const title = `Ingredient Info - ${ingredient.name}`;
  const description = `${ingredient.name} is used by ${
    vendors.length
  } ${pluralize('vendor', vendors.length)} in ${flavors.length} ${pluralize(
    'flavor',
    flavors.length
  )}.`;

  return (
    <Layout>
      <SEO title={title} description={description} />
      <Container>
        <Row className="mb-3">
          <Col>
            <Link to="/ingredients">Ingredients</Link>
            <span> &raquo; {ingredient.name}</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <IngredientCard {...ingredient} flavors={flavors} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

IngredientPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  query IngredientSearchQuery($casNumber: String) {
    ingredient: ingredientsJson(casNumber: { eq: $casNumber }) {
      category
      casNumber
      created
      description
      links {
        href
        title
      }
      name
      updated
    }
    flavors: allFlavorsJson(filter: { casNumbers: { in: [$casNumber] } }) {
      nodes {
        name
        category
        vendor
      }
    }
    vendors: allVendorsJson {
      nodes {
        code
        name
      }
    }
  }
`;

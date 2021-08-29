import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Container, Row } from 'react-bootstrap';

import Layout from '~components/Layout';
import SEO from '~components/SEO';
import IngredientCard from '~components/IngredientCard';

export default function IngredientsPage({ data }) {
  const {
    flavors: { nodes: flavors },
    ingredients: { nodes: ingredients },
    vendors: { nodes: vendors }
  } = data;
  const ingredientData = useMemo(() => {
    const result = ingredients.map((ingredient) => {
      const ingredientFlavors = flavors.filter((flavor) =>
        flavor.casNumbers.includes(ingredient.casNumber)
      );
      const ingredientVendors = vendors.filter((vendor) =>
        ingredientFlavors.some(
          (ingredientFlavor) => ingredientFlavor.vendor === vendor.code
        )
      );

      return {
        ...ingredient,
        flavors: ingredientFlavors,
        vendors: ingredientVendors
      };
    });

    result.sort(
      (a, b) =>
        a.category.localeCompare(b.category) || a.name.localeCompare(b.name)
    );

    return result;
  }, [flavors, ingredients, vendors]);

  return (
    <Layout>
      <SEO title="Ingredient Info" />
      <Container>
        <Row>
          <h1>Ingredient Info</h1>
        </Row>
        {ingredientData.map((ingredient) => (
          <IngredientCard
            {...ingredient}
            key={ingredient.casNumber}
            flavors={ingredient.flavors}
            vendors={ingredient.vendors}
          />
        ))}
      </Container>
    </Layout>
  );
}

IngredientsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  query IngredientsSearchQuery {
    flavors: allFlavorsJson {
      nodes {
        casNumbers
        name
        vendor
      }
    }
    ingredients: allIngredientsJson {
      nodes {
        casNumber
        category
        created
        description
        links {
          href
          title
        }
        name
        updated
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

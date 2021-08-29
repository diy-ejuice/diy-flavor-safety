import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Container, Row } from 'react-bootstrap';

import Layout from '~components/Layout';
import SEO from '~components/SEO';
import VendorCard from '~components/VendorCard';

export default function VendorsPage({ data }) {
  const {
    flavors: { nodes: flavors },
    ingredients: { nodes: ingredients },
    vendors: { nodes: vendors }
  } = data;

  const vendorData = useMemo(() => {
    const result = vendors.flatMap((vendor) => {
      const vendorFlavors = flavors.filter(
        (flavor) => flavor.vendor === vendor.code
      );
      const vendorIngredients = ingredients.filter((ingredient) =>
        vendorFlavors.some((vendorFlavor) =>
          vendorFlavor.casNumbers.includes(ingredient.casNumber)
        )
      );

      return vendorFlavors.length
        ? [
            {
              ...vendor,
              flavors: vendorFlavors,
              ingredients: vendorIngredients
            }
          ]
        : [];
    });

    result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [vendors]);

  return (
    <Layout>
      <SEO title="Vendor Info" />
      <Container>
        <Row>
          <h1>Vendor Info</h1>
        </Row>
        {vendorData.map((vendor) => (
          <VendorCard
            {...vendor}
            key={vendor.code}
            flavors={vendor.flavors}
            ingredients={vendor.ingredients}
          />
        ))}
      </Container>
    </Layout>
  );
}

VendorsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  query VendorsSearchQuery {
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
        name
      }
    }
    vendors: allVendorsJson {
      nodes {
        code
        name
        flavorCount
      }
    }
  }
`;

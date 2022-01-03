import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { Container } from 'react-bootstrap';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

export default function NotFoundPage({ data }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="404: Not Found" />
      <Container>
        <h1 className="display-1">Not Found</h1>
        <p>
          Sorry, that page doesn&apos;t exist. Please go back to{' '}
          <Link to="/">the index</Link> and try to find the page from there.
        </p>
      </Container>
    </Layout>
  );
}

NotFoundPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

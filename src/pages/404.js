import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '~components/Layout';
import SEO from '~components/SEO';
import { Container } from 'react-bootstrap';

class NotFound extends Component {
  render() {
    const { data } = this.props;
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
}

NotFound.propTypes = {
  data: PropTypes.object.isRequired
};

export default NotFound;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

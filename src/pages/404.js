import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '~components/layout';
import SEO from '~components/seo';

class NotFound extends Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
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

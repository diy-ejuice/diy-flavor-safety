import { Link } from 'gatsby';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '~components/Layout';
import SEO from '~components/SEO';

class Index extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Container>
          <Row>
            <Col>
              <h2>Welcome to the Safety Compendium.</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                This site provides a resource for DIY e-liquid mixers looking
                for flavor safety information.
              </p>
              <p>
                In late 2019 /u/TeslaDelMar started working on a piece of
                software that scans safety data sheets for known harmful
                ingredients. A Google Sheet was created to contain the findings.
              </p>
              <p>
                Shortly after, /u/Baade89 began sending emails to flavor vendors
                and manufacturers in an effort to augment the machine-sourced
                data.
              </p>
              <p>
                The current dataset contains over 3,000 data sheets sourced from
                17 vendors, as well as data from toxicoligsts at{' '}
                <a
                  href="https://www.trusticert.com/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TRUSTiCERT SRL
                </a>
                . We scan the data sheets and query vendors for the presence of
                32 different compounds.
              </p>
              <p>
                We are in the process of migrating all of the information from
                the{' '}
                <a href="https://docs.google.com/spreadsheets/d/1qtol0dyNh_rvXXG9R6uvlS7qK_zC2HKfBqU_bKTbvTQ/edit?usp=sharing">
                  Flavors to Avoid
                </a>{' '}
                sheet to this site.
              </p>
              <p>
                For now, you can view/search the scan results{' '}
                <Link to="/search">here</Link>.
              </p>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Index;

import { Container, Row, Col } from 'react-bootstrap';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

export default function Index() {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Row>
          <Col>
            <h1>Welcome to the Safety Compendium.</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              This site provides a resource for DIY e-liquid mixers looking for
              flavor safety information.
            </p>
            <p>
              In late 2019 TeslaDelMar started working on a piece of software
              that scans safety data sheets for known harmful ingredients. A
              Google Sheet was created to contain the findings.
            </p>
            <p>
              Shortly after, Baade89 began sending emails to flavor vendors and
              manufacturers in an effort to augment the machine-sourced data.
            </p>
            <p>
              In 2020, this site was created as a way to synthesize the Google
              Sheet and the manually-sourced data as a single, easy to search
              website.
            </p>
            <p>
              The current dataset contains over 3,000 data sheets sourced from
              17 vendors, as well as data from toxicologists at{' '}
              <a
                href="https://www.trusticert.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TRUSTiCERT SRL
              </a>
              . We scan the data sheets and query vendors for the presence of
              over 400 different compounds.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

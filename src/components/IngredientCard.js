import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import CategoryInfo from '~components/CategoryInfo';
import { getFlavorSlug, getVendorSlug, getRelativeTime } from '~utils';

export default class IngredientCard extends Component {
  static propTypes = {
    casNumber: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    description: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
    ),
    name: PropTypes.string.isRequired,
    flavors: PropTypes.arrayOf(PropTypes.object),
    updated: PropTypes.string.isRequired,
    vendors: PropTypes.arrayOf(PropTypes.object)
  };

  get links() {
    const { links } = this.props;

    return links?.length ? (
      <Fragment>
        <h6>More Reading</h6>
        <ListGroup className="my-3" activeKey="">
          {links.map(link => (
            <ListGroupItem
              action
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title} <FontAwesomeIcon icon={faExternalLinkAlt} />
            </ListGroupItem>
          ))}
        </ListGroup>
      </Fragment>
    ) : null;
  }

  get times() {
    const { created, updated } = this.props;

    return (
      <Fragment>
        {' '}
        <h6>
          Added <abbr title={created}>{getRelativeTime(created)}</abbr>
        </h6>
        {created !== updated ? (
          <h6>
            Updated <abbr title={updated}></abbr>
            {getRelativeTime(updated)}
          </h6>
        ) : null}
      </Fragment>
    );
  }

  get description() {
    const { description } = this.props;

    return description ? (
      <Fragment>
        <h6>Information / Notes</h6>
        <p>{description}</p>
      </Fragment>
    ) : null;
  }

  get flavors() {
    const { flavors } = this.props;

    return flavors?.length ? (
      <Fragment>
        <h6 className="mb-3">
          Flavors with this ingredient ({flavors.length})
        </h6>
        <ListGroup>
          {flavors.map(flavor => (
            <ListGroupItem
              action
              as={Link}
              key={`${flavor.vendor} ${flavor.name}`}
              to={getFlavorSlug(flavor)}
            >
              {flavor.vendor} {flavor.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Fragment>
    ) : null;
  }

  get vendors() {
    const { vendors } = this.props;

    return vendors?.length ? (
      <Fragment>
        <h6>Vendors using this ingredient ({vendors.length})</h6>
        <ListGroup className="my-3">
          {vendors.map(vendor => (
            <ListGroupItem
              action
              as={Link}
              key={vendor.code}
              to={getVendorSlug(vendor)}
            >
              {vendor.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Fragment>
    ) : null;
  }

  render() {
    const { casNumber, category, name } = this.props;

    return (
      <Card className="my-3">
        <Card.Header>
          <h3>
            <span>
              {name} (CAS #
              <a
                href={`http://www.commonchemistry.org/ChemicalDetail.aspx?ref=${casNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {casNumber}{' '}
                <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
              </a>
              )
            </span>
            <CategoryInfo
              category={category}
              badgeProps={{ className: 'float-right' }}
            />
          </h3>
        </Card.Header>
        <Card.Body>
          {this.times}
          {this.description}
          {this.links}
          {this.vendors}
          {this.flavors}
        </Card.Body>
      </Card>
    );
  }
}

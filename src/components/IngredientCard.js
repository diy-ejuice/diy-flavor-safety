import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Card, Badge, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class IngredientCard extends Component {
  static propTypes = {
    casNumber: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
    ),
    name: PropTypes.string.isRequired,
    flavors: PropTypes.arrayOf(PropTypes.object),
    vendors: PropTypes.arrayOf(PropTypes.object)
  };

  get links() {
    const { links } = this.props;

    return links?.length ? (
      <Fragment>
        <h6>More Reading</h6>
        <ListGroup variant="flush" activeKey="">
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

  get description() {
    const { description } = this.props;

    return description ? (
      <Fragment>
        <h6>Description</h6>
        <p>{description}</p>
      </Fragment>
    ) : null;
  }

  get flavors() {
    const { flavors } = this.props;

    return flavors?.length ? (
      <Fragment>
        <h6>Flavors with this ingredient</h6>
        <ListGroup variant="flush">
          {flavors.map(flavor => (
            <ListGroupItem key={flavor.name}>
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
        <h6>Vendors using this ingredient</h6>
        <ListGroup variant="flush" activeKey="">
          {vendors.map(vendor => (
            <ListGroupItem key={vendor.code}>{vendor.name}</ListGroupItem>
          ))}
        </ListGroup>
      </Fragment>
    ) : null;
  }

  render() {
    const { casNumber, category, name } = this.props;

    let badgeVariant;

    switch (category) {
      case 'Avoid':
        badgeVariant = 'danger';
        break;
      case 'Caution':
        badgeVariant = 'warning';
        break;
      default:
        badgeVariant = 'info';
        break;
    }

    return (
      <Card className="my-3">
        <Card.Header>
          <span>
            {name} (CAS #
            <a
              href={`http://www.commonchemistry.org/ChemicalDetail.aspx?ref=${casNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {casNumber} <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
            </a>
            )
          </span>
          <Badge variant={badgeVariant} className="float-right">
            {category}
          </Badge>
        </Card.Header>
        <Card.Body>
          {this.description}
          {this.links}
          {this.vendors}
          {this.flavors}
        </Card.Body>
      </Card>
    );
  }
}

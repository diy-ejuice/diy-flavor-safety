import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { Card, ListGroupItem, ListGroup, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default class VendorCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    link: PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    }),
    description: PropTypes.string,
    flavors: PropTypes.arrayOf(PropTypes.object),
    ingredients: PropTypes.arrayOf(PropTypes.object)
  };

  get description() {
    const { description } = this.props;

    return description ? <p>{description}</p> : null;
  }

  get flavors() {
    const { flavors } = this.props;

    return flavors?.length ? (
      <Fragment>
        <h6 className="my-3">Flavors with concerning ingredients</h6>
        <ListGroup activeKey="">
          {flavors.map(flavor => (
            <ListGroupItem key={flavor.name} action>
              {flavor.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Fragment>
    ) : (
      <p>
        <FontAwesomeIcon icon={faExclamationTriangle} /> This vendor is not
        using (or disclosing) any concerning ingredients!
      </p>
    );
  }

  get ingredients() {
    const { ingredients } = this.props;

    return ingredients?.length ? (
      <Fragment>
        <h6 className="my-3">Ingredients used by this vendor</h6>
        <ListGroup activeKey="">
          {ingredients.map(ingredient => {
            let badgeVariant;

            switch (ingredient.category) {
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
              <ListGroupItem key={ingredient.casNumber} action>
                {ingredient.name}{' '}
                <Badge variant={badgeVariant}>{ingredient.category}</Badge>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Fragment>
    ) : null;
  }

  render() {
    const { code, link, name } = this.props;

    return (
      <Card className="my-3">
        <Card.Header>
          <span>{name}</span> <Badge variant="secondary">{code}</Badge>
          {link ? (
            <span className="ml-auto">
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            </span>
          ) : null}
        </Card.Header>
        <Card.Body>
          {this.description}
          {this.flavors}
          {this.ingredients}
        </Card.Body>
      </Card>
    );
  }
}

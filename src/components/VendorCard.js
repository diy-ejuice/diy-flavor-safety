import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Card, ListGroupItem, ListGroup, Badge } from 'react-bootstrap';

import { getCategoryVariant, getFlavorSlug, getIngredientSlug } from 'utils';

export default function VendorCard({
  name,
  code,
  flavorCount,
  link,
  description,
  flavors,
  ingredients
}) {
  const sortedFlavors = [...flavors];
  const sortedIngredients = [...ingredients];

  sortedFlavors.sort(
    (a, b) =>
      a.category.toLowerCase().localeCompare(b.category.toLowerCase()) ||
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
  sortedIngredients.sort(
    (a, b) =>
      a.category.toLowerCase().localeCompare(b.category.toLowerCase()) ||
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );

  return (
    <Card className="my-3">
      <Card.Header>
        <h3>
          <span>{name}</span>
          {link ? (
            <span className="ml-auto">
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            </span>
          ) : null}
          <span> ({code})</span>
          <Badge bg="secondary" className="float-end">
            {flavorCount} flavors
          </Badge>
        </h3>
      </Card.Header>
      <Card.Body>
        {description ? <p>{description}</p> : null}
        {sortedFlavors?.length ? (
          <Fragment>
            <h6 className="my-3">
              Flavors with concerning ingredients ({sortedFlavors.length})
            </h6>
            <ListGroup activeKey="">
              {sortedFlavors.map((flavor) => (
                <ListGroupItem
                  action
                  as={Link}
                  key={`${flavor.name}-${flavor.casNumbers.join('--')}`}
                  to={getFlavorSlug(flavor)}
                  variant={getCategoryVariant(flavor.category)}
                >
                  {flavor.name}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Fragment>
        ) : null}
        {sortedIngredients?.length ? (
          <Fragment>
            <h6 className="my-3">
              Ingredients used by this vendor ({sortedIngredients.length})
            </h6>
            <ListGroup activeKey="">
              {sortedIngredients.map((ingredient) => (
                <ListGroupItem
                  action
                  as={Link}
                  key={ingredient.casNumber}
                  to={getIngredientSlug(ingredient)}
                  variant={getCategoryVariant(ingredient.category)}
                >
                  {ingredient.name}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Fragment>
        ) : null}
      </Card.Body>
    </Card>
  );
}

VendorCard.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  flavorCount: PropTypes.number.isRequired,
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }),
  description: PropTypes.string,
  flavors: PropTypes.arrayOf(PropTypes.object),
  ingredients: PropTypes.arrayOf(PropTypes.object)
};

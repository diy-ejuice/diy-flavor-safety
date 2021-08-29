import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import pick from 'lodash.pick';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import CategoryInfo from '~components/CategoryInfo';
import {
  getCategoryVariant,
  getFlavorSlug,
  getVendorSlug,
  getRelativeTime
} from '~utils';

const propTypes = {
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

const Links = ({ links }) =>
  links?.length ? (
    <Fragment>
      <h6>More Reading</h6>
      <ListGroup className="my-3" activeKey="">
        {links.map((link) => (
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

Links.propTypes = {
  ...pick(propTypes, 'links')
};

const Times = ({ created, updated }) => (
  <Fragment>
    {' '}
    <h6>
      Added <abbr title={created}>{getRelativeTime(created)}</abbr>
    </h6>
    {updated && created !== updated ? (
      <h6>
        Updated <abbr title={updated}></abbr>
        {getRelativeTime(updated)}
      </h6>
    ) : null}
  </Fragment>
);

Times.propTypes = {
  ...pick(propTypes, 'created', 'updated')
};

const Description = ({ description }) =>
  description ? (
    <Fragment>
      <h6>Information / Notes</h6>
      <p>{description}</p>
    </Fragment>
  ) : null;

Description.propTypes = {
  ...pick(propTypes, 'description')
};

const Flavors = ({ flavors }) =>
  flavors?.length ? (
    <Fragment>
      <h6 className="mb-3">Flavors with this ingredient ({flavors.length})</h6>
      <ListGroup>
        {flavors.map((flavor) => (
          <ListGroupItem
            action
            as={Link}
            key={`${flavor.vendor} ${flavor.name}`}
            to={getFlavorSlug(flavor)}
            variant={getCategoryVariant(flavor.category)}
          >
            {flavor.vendor} {flavor.name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Fragment>
  ) : null;

Flavors.propTypes = {
  ...pick(propTypes, 'flavors')
};

const Vendors = ({ vendors }) =>
  vendors?.length ? (
    <Fragment>
      <h6>Vendors using this ingredient ({vendors.length})</h6>
      <ListGroup className="my-3">
        {vendors.map((vendor) => (
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

Vendors.propTypes = {
  ...pick(propTypes, 'vendors')
};

export default function IngredientCard({
  casNumber,
  category,
  created,
  description,
  links,
  name,
  flavors,
  updated,
  vendors
}) {
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
              {casNumber} <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
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
        <Times created={created} updated={updated} />
        <Description description={description} />
        <Links links={links} />
        <Vendors vendors={vendors} />
        <Flavors flavors={flavors} />
      </Card.Body>
    </Card>
  );
}

IngredientCard.propTypes = propTypes;

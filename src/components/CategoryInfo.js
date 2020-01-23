import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { getCategoryVariant } from '~utils';

export default class CategoryInfo extends Component {
  static propTypes = {
    badgeProps: PropTypes.object,
    category: PropTypes.string.isRequired
  };

  static defaultProps = {
    badgeProps: {}
  };

  render() {
    const { badgeProps, category } = this.props;

    const badgeVariant = getCategoryVariant(category);

    let textTooltip =
      'The vape toxicity of this ingredient is currently being researched.';

    if (category === 'Caution') {
      textTooltip =
        'There is evidence that this ingredient can be toxic when vaped.';
    } else if (category === 'Avoid') {
      textTooltip =
        'There is evidence that this ingredient is toxic when vaped.';
    }

    return (
      <OverlayTrigger
        placement="left"
        overlay={props => <Tooltip {...props}>{textTooltip}</Tooltip>}
      >
        <Badge variant={badgeVariant} {...badgeProps}>
          {category}
        </Badge>
      </OverlayTrigger>
    );
  }
}

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export default class CategoryInfo extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired
  };

  render() {
    const { category } = this.props;

    let textColor = 'info';

    let textTooltip =
      'The vape toxicity of this ingredient is currently being researched.';

    if (category === 'Caution') {
      textColor = 'warning';
      textTooltip =
        'There is evidence that this ingredient can be toxic when vaped.';
    } else if (category === 'Avoid') {
      textColor = 'danger';
      textTooltip =
        'There is evidence that this ingredient is toxic when vaped.';
    }

    return (
      <OverlayTrigger
        placement="left"
        overlay={props => <Tooltip {...props}>{textTooltip}</Tooltip>}
      >
        <span className={`text-${textColor}`}>{category}</span>
      </OverlayTrigger>
    );
  }
}

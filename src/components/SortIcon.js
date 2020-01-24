import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSortAlphaDown,
  faSortAlphaUp
} from '@fortawesome/free-solid-svg-icons';

export default class SortIcon extends Component {
  static propTypes = {
    column: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = { direction: false };
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    const { direction } = this.state;
    const { column, onToggle } = this.props;

    this.setState({ direction: !direction });

    if (onToggle) {
      onToggle(column, !direction);
    }
  }

  render() {
    const { direction } = this.state;

    return (
      <FontAwesomeIcon
        className="sort-icon"
        icon={direction ? faSortAlphaDown : faSortAlphaUp}
        onClick={this.onToggle}
      />
    );
  }
}

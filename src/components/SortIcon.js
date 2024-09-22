import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSortAlphaDown,
  faSortAlphaUp
} from '@fortawesome/free-solid-svg-icons';

export default function SortIcon({ column, onToggle }) {
  const [direction, setDirection] = useState(false);
  const handleToggle = useCallback(() => {
    setDirection((dir) => {
      const newDir = !dir;

      if (onToggle) {
        onToggle(column, newDir);
      }

      return newDir;
    });
  }, [setDirection, onToggle, column]);

  return (
    <FontAwesomeIcon
      className="sort-icon"
      icon={direction ? faSortAlphaDown : faSortAlphaUp}
      onClick={handleToggle}
    />
  );
}

SortIcon.propTypes = {
  column: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired
};

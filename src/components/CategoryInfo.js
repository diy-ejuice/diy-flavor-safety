import PropTypes from 'prop-types';
import { Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { getCategoryVariant } from 'utils';

export default function CategoryInfo({ badgeProps, category }) {
  const badgeVariant = getCategoryVariant(category);

  let textTooltip =
    'The vape toxicity of this ingredient is currently being researched.';

  if (category === 'Caution') {
    textTooltip =
      'There is evidence that this ingredient can be toxic when vaped.';
  } else if (category === 'Avoid') {
    textTooltip = 'There is evidence that this ingredient is toxic when vaped.';
  }

  return (
    <OverlayTrigger
      placement="left"
      overlay={(props) => <Tooltip {...props}>{textTooltip}</Tooltip>}
    >
      <Badge bg={badgeVariant} {...badgeProps}>
        {category}
      </Badge>
    </OverlayTrigger>
  );
}

CategoryInfo.propTypes = {
  badgeProps: PropTypes.object,
  category: PropTypes.string.isRequired
};

CategoryInfo.defaultProps = {
  badgeProps: {}
};

import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function SearchForm({
  selected: {
    vendor: selectedVendor,
    flavor: selectedFlavor,
    ingredient: selectedIngredient,
    category: selectedCategory
  },
  onVendorChange,
  onFlavorChange,
  onIngredientChange,
  onCategoryChange
}) {
  const handleChange = useCallback(
    (event) => {
      const {
        target: { name, value }
      } = event;

      switch (name) {
        case 'vendor':
          onVendorChange(value);
          break;
        case 'flavor':
          onFlavorChange(value);
          break;
        case 'ingredient':
          onIngredientChange(value);
          break;
        case 'category':
          onCategoryChange(
            Array.from(event.target.selectedOptions).map(
              (option) => option.value
            )
          );
          break;
      }
    },
    [onVendorChange, onFlavorChange, onIngredientChange, onCategoryChange]
  );

  return (
    <Container>
      <Form>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Vendor (Name/Code)</Form.Label>
            <Form.Control
              name="vendor"
              onChange={handleChange}
              placeholder="Flavorah"
              type="input"
              value={selectedVendor}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Flavor Name</Form.Label>
            <Form.Control
              name="flavor"
              onChange={handleChange}
              placeholder="Cookie Butter"
              type="input"
              value={selectedFlavor}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Ingredient Name</Form.Label>
            <Form.Control
              name="ingredient"
              onChange={handleChange}
              placeholder="Diacetyl"
              type="input"
              value={selectedIngredient}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Ingredient Category</Form.Label>
            <Form.Control
              as="select"
              multiple
              name="category"
              onChange={handleChange}
              value={selectedCategory}
            >
              <option value="Avoid">Avoid</option>
              <option value="Caution">Caution</option>
              <option value="Research">Research</option>
            </Form.Control>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
}

SearchForm.propTypes = {
  selected: PropTypes.shape({
    vendor: PropTypes.string,
    flavor: PropTypes.string,
    ingredient: PropTypes.string,
    category: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  vendors: PropTypes.arrayOf(PropTypes.object),
  flavors: PropTypes.arrayOf(PropTypes.object),
  ingredients: PropTypes.arrayOf(PropTypes.object),
  onVendorChange: PropTypes.func.isRequired,
  onFlavorChange: PropTypes.func.isRequired,
  onIngredientChange: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired
};

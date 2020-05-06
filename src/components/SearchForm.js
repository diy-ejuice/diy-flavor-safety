import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

export default class SearchForm extends Component {
  static propTypes = {
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

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {
      target: { name, value }
    } = event;

    // eslint-disable-next-line default-case
    switch (name) {
      case 'vendor':
        this.props.onVendorChange(value);
        break;
      case 'flavor':
        this.props.onFlavorChange(value);
        break;
      case 'ingredient':
        this.props.onIngredientChange(value);
        break;
      case 'category':
        this.props.onCategoryChange(
          Array.from(event.target.selectedOptions).map((option) => option.value)
        );
        break;
    }
  }

  render() {
    const {
      selected: {
        vendor: selectedVendor,
        flavor: selectedFlavor,
        ingredient: selectedIngredient,
        category: selectedCategory
      }
    } = this.props;

    return (
      <Container>
        <Form>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Vendor (Name/Code)</Form.Label>
              <Form.Control
                name="vendor"
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
}

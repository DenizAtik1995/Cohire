import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.inputTimeout = null;
  }

  onChangeSearch = (event) => {
    const value = event.target.value;

    clearTimeout(this.inputTimeout);
    this.inputTimeout = setTimeout(() => {
      this.props.handleSearch(value);
    }, 200);
  };

  render() {
    return (
      <div className="filter-container">
      <div className="filter-search">
        <div className="input-wrapper">
          <i className="fas fa-search" />
          <input type="text" onChange={this.onChangeSearch} placeholder="Search for Movies"/>
        </div>
        <div className="input-wrapper">
          <img src="../../Images/year-icon.png" className="fas fa-search" />
          <input type="text" onChange={this.onChangeSearch} placeholder="Search for Movies"/>
        </div>

        <div className="filter">
          <img
            className="filtericon"
            alt="Filters"
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJVJREFUeNpiYBgugJEYRfOXr+8HUgVA/AGICxMjAxeQbQnQsPNAyoBKHrgAdIwhiME0mIKrAUjVkxtco2CI5hMiEgQITAAmiMLRfIIvuOYDqQQodwHQ5Yk0cSXQIgMQHk3eVAsKJjwW7AdSoCR9HhrB1Eldwy+fAH0kAKT2I/nqANBVjlTPjFCLwJYALTgw6FMpQIABAJU+PYy1M4/BAAAAAElFTkSuQmCC'
          />
        </div>
      </div>
      </div>
    )
  }
}

Form.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

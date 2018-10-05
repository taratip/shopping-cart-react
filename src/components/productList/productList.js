import React, { Component } from 'react';
import './productList.css';
import ProductItem from '../productItem/productItem.js';

class ProductList extends Component {
  render() {
    return (
      <div className="ProductList">
        <ProductItem />
      </div>
    );
  }
}

export default ProductList;

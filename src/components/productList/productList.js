import React, { Component } from 'react';
import './productList.css';
import ProductItem from '../productItem/productItem.js';

class ProductList extends Component {
  render() {
    const rows = [...Array( Math.ceil(this.props.products.length / 3) )];
    const productRows = rows.map( (row, idx) => this.props.products.slice(idx * 3, idx * 3 + 3) );
    const content = productRows.map((row, idx) => (
        <div className="row" key={idx}>
          { row.map( product => <ProductItem key={product.id} title={product.name} price={product.price.toFixed(2)} description={product.description} id={product.id} product={product} /> )}
        </div> )
    );

    return (
      <div className="ProductList">{content}</div>
    );
  }
}

export default ProductList;

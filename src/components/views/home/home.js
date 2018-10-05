import React, { Component } from 'react';
import './home.css';
import ProductList from '../../productList/productList.js';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container extra-margin">
          <ProductList products={this.props.products} />
        </div>
      </div>
    );
  }
}

export default Home;

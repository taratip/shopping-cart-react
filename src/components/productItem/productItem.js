import React, { Component } from 'react';
import './productItem.css';

class ProductItem extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-img-top">
            <img className="card-img" src="http://placehold.it/250x250" alt="placeholder" />
          </div> {/* ends card img */}
          <div className="card-title">Title</div>
          <div className="card-subtitle">$4.55</div>
          <button className="btn btn-primary">Add To Cart</button>
        </div> {/* ends card */}
      </div> // ends col-4
    );
  }
}

export default ProductItem;

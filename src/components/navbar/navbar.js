import React, { Component } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">Shopping App</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/checkout">Checkout</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="#" className="nav-link">Total: ${this.props.total}<span id="nav-total"></span>
                <i className="fas fa-shopping-cart"></i>
                <span className="badge badge-pill badge-info" id="quantity">{this.props.quantity}</span>
              </NavLink>
            </li>
          </ul>
        </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

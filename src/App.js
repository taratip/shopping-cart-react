import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import { Switch, Route } from 'react-router-dom';
import Home from './components/views/home/home.js';
import Checkout from './components/views/checkout/checkout.js';
import products from './static/data/products.js';
import firebase from './firebase.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      cart: [],
      products: products
    }

    // add products to firebase.
    // firebase.database().ref('products').set(products);
  }

  componentWillMount() {
    // grab products from firebase
    const dbProducts = firebase.database().ref('products');
    dbProducts.on('value', (res) => {
      let items = res.val();
      let newState = [];

      // check if there are products in firebase
      if (items != null) {
        for (let item of items) {
          newState.push(item);
        }
      }
      // set product state
      this.setState({ product: newState });
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Home products={this.state.products} />}></Route>
          <Route exact path="/checkout" render={() => <Checkout />}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

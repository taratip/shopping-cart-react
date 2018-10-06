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
      quantity: 0,
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

    const dbCart = firebase.database().ref('cart');
    dbCart.on('value',(response) => {
      let items = response.val();
      let total = 0;
      let newCart = [];
      // check if there are products in the cloud database first
      if (items != null) {
        for (let index in items) {
          newCart.push(items[index]);
          total += items[index].price;
        }
      }

      this.setState({
        cart: newCart,
        total: total.toFixed(2)
      });
    });
  }

  calcTotal = () => {
    let total = 0;
    let totalQnt = 0;

    // loop through cart in state and add all prices
    for (let i = 0; i < this.state.cart.length; i++) {
      total += this.state.cart[i].price * this.state.cart[i].quantity;
      totalQnt += this.state.cart[i].quantity;
    }

    this.setState({
      total: total.toFixed(2),
      quantity: totalQnt
    });

    // add total to firebase
    firebase.database().ref('total').set(total.toFixed(2));
    firebase.database().ref('quantity').set(totalQnt);
  }

  // add item on button click
  addItem = (id) => {
    // get current cart
    let items = this.state.cart;

    let item = items.find(obj => { return obj.id === id});

    // product is not in cart yet
    if (typeof item === "undefined") {
      // loop through products array to find correct id
      for (let i = 0; i < products.length; i++) {
        // check current product id to id parameter passed
        if (products[i].id === id) {
          // product to global cart
          products[i].quantity = 1;
          items.push(products[i]);
        }
      }
    } else {
      item.quantity += 1;
    }

    // set state to current cart
    this.setState({
      cart: items
    });

    this.calcTotal();

    // add updated cart to cloud
    firebase.database().ref('cart').set(items);
  }

  removeItem = (id) => {
    let items = this.state.cart;

    for (let i = 0;i < items.length; i++) {
      if (items[i].id === id) {
        items[i].quantity -= 1;

        if (items[i].quantity === 0) {
          // splice current product
          items.splice(i, 1);
        }
        break;
      }
    }

    this.setState({ cart: items });
    this.calcTotal();

    // add updated cart to cloud
    firebase.database().ref('cart').set(items);
  }

  render() {
    return (
      <div className="App">
        <Navbar total={this.state.total} quantity={this.state.quantity} />
        <Switch>
          <Route exact path="/" render={() => <Home products={this.state.products} addItem={this.addItem} />}></Route>
          <Route excat path='/checkout' render={() => <Checkout cart={this.state.cart} total={this.state.total} removeItem={this.removeItem} />}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

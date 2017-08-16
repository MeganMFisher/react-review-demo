import React, { Component } from 'react';
import Detail from './components/Detail';
import { getProducts } from './service/productService.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      productImage: '',
      productPrice: '',
      cartTotal: 0
    }
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    getProducts().then((response) => {
      this.setState({
        products: response.data
      })
      console.log(this.state.products)
    })
  }

  handleClick(img, price) {
    this.setState({
      productImage: img,
      productPrice: price
    })
  }

  addToCart(num) {
    var total = this.state.cartTotal + Number(num)
    this.setState({
      cartTotal: total 
    }) 
  }

  render() {
    const products = this.state.products.map((product, i) => {
      return( <div key={i} className='product'>
        <img onClick={ () => this.handleClick(product.image, product.price)} src={ product.image } />
        <h3>{ product.title }</h3>
      </div> )
    })

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <p>CART TOTAL: ${this.state.cartTotal}.00</p>
          <Detail productImage={ this.state.productImage } 
          productPrice={ this.state.productPrice }
          addToCart={ this.addToCart }
          />
          <div>
          { products }
          </div>
      </div>
    );
  }
}

export default App;

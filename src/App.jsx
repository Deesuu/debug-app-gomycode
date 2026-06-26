// src/App.jsx
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProductItem extends Component {
  render() {
    const { name, price, inStock } = this.props.product;
    
    return (
      <div className="col-md-4 mb-3">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Price: ${price}</p>
            <p className="card-text">
              Status: {inStock ? 'In Stock ✅' : 'Out of Stock ❌'}
            </p>
            <button 
              className={`btn ${inStock ? 'btn-primary' : 'btn-secondary'}`}
              disabled={!inStock}
            >
              {inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "Laptop", price: 999, inStock: true },
        { id: 2, name: "Mouse", price: 25, inStock: false },
        { id: 3, name: "Keyboard", price: 75, inStock: true }
      ]
    };
  }

  render() {
    return (
      <div className="container mt-4">
        <h2>Product Catalog</h2>
        <div className="row">
          {this.state.products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "My Store"
    };
  }

  render() {
    return (
      <div>
        <h1 className="text-center mt-3">{this.state.title}</h1>
        <ProductList />
      </div>
    );
  }
}

export default App;
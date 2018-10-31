import React, { Component } from 'react'
import axios from 'axios';

import SingleProduct from './SingleProduct'


export default class ListingProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount(){
    axios.get(`http://5bd9bd610bab79001346a03c.mockapi.io/products`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  }

  render() {
    let products
    if (this.state.products.length !== 0) {
      products = this.state.products.map(product => {
          return (
            <SingleProduct
              key={product.id}
            />
          )
        })
    }

    return (
      <section className="listing-product">
        <h1>All products</h1>
        <div className="card-columns">
          {products}
        </div>
      </section>
    )
  }
}

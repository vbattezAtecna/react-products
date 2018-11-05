import React, { Component, Redirect } from 'react'
import axios from 'axios';

export default class SingleProductPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: []
    }

    this.api = "http://5bd9bd610bab79001346a03c.mockapi.io";
  }

  componentDidMount(){
    axios.get(`${this.api}/products/${this.props.match.params.id}`)
      .then(
        (res) => {
          const product = res.data;
          this.setState({ product });
        },
        (error) => {
          console.log(error);
        }
      )
  }

  render() {
    let product = this.state.product
    console.log(product);
    
    return (
      <section className="single-product__page">
        <h1>{product.title}</h1>
        <div className="card-columns">
        </div>
      </section>
    )
  }
}

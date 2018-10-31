import React from 'react'

export default function SingleProduct() {
  return (
    <article className="card single-product">
      <img className="card-img-top" src=".../100px180/" alt="produit" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/product/1" className="btn btn-primary">Go somewhere</a>
      </div>
    </article>
  )
}

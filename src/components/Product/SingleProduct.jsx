import React from 'react'

export default function SingleProduct(props) {
  return (
    <article className="card single-product">
      <img className="card-img-top" src=".../100px180/" alt="produit" />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.price}</p>
          <a href={`/product/${props.product.id}`} className="btn btn-primary">Go somewhere</a>
      </div>
    </article>
  )
}

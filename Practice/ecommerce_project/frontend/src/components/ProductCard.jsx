import React from 'react'
export default function ProductCard({ product, onAdd }) {
  return (
    <article className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={onAdd} className="btn">Add to cart</button>
    </article>
  )
}

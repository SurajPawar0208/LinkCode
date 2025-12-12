// import './Product.css'

export default function Product({p}) {
  return (
    <div className="product">
      <img className="img" src={p.image} alt={p.name} />
      <h2 className="pname">Product Name: {p.name}</h2>
      <h3 className="price">Price: ${p.price}</h3>
      <p className="desc">{p.description}</p>
    </div>
  )
}
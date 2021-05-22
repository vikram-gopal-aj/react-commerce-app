function Product(props) {
  <div className="product-card">
    <img
      className="product-img"
      alt={product.title}
      src={`/product-images/${product.filename}`}
    />
    <h3 className="product-title">{product.title}</h3>
    <p className="product-desc">{product.description}</p>
    <span className="product-price">{product.price}</span>
    <span className="product-rating">{product.rating}</span>
  </div>;
}

export default Product;
function Product(props) {
  const product = props.product;
  return (
    <div className="product-card">
      <div className="product-img">
        <img alt={product.title} src={`/product-images/${product.filename}`} />
      </div>
      <h3 className="product-title">{product.title}</h3>
      <p className="product-desc">{product.description}</p>
      <span className="product-price">{product.price}</span>
    </div>
  );
}

export default Product;

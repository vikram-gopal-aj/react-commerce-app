function ProductCarousel(props) {
  const products = props.products;
  const productSlides = [];
  products.forEach(function (product) {
    productSlides.push(
      <div key={product.title} class="product-card">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
    );
  });
  return <div className="product-carousel">{productSlides}</div>;
}

export default ProductCarousel;

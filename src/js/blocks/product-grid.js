import Product from "./product";

function ProductGrid(props) {
  const products = [];
  props.products.forEach(function (product) {
    products.push(<Product key={product.title} product={product} />);
  });

  return <div className="product-grid col-2 col-d-4">{products}</div>;
}

export default ProductGrid;

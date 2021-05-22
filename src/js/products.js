import Hero from "./blocks/hero";
import ProductGrid from "./blocks/product-grid";

function Products(props) {
  return (
    <div className="layout-container">
      <Hero
        image="/hero-images/hero3.jpg"
        alt="Product search hero"
        title=""
        leadtext=""
        searchbox="true"
      />
      <ProductGrid products={props.products} />
    </div>
  );
}

export default Products;

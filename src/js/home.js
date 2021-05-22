import Hero from "./blocks/hero";
import ProductCarousel from "./blocks/product-carousel";
import products from "../products.json";

function Home() {
  const productArray = products.products.map(function (product, i) {
    return product;
  });

  return (
    <div className="layout-container">
      <Hero
        image='/hero-images/hero2.jpg'
        alt="Staying Fresh Hero"
        title="Only the fresh"
        leadtext="What you want. We have it all"
      />
      <ProductCarousel products={productArray} />
    </div>
  );
}

export default Home;

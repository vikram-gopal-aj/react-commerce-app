import heroimage from "../imgs/hero2.jpg";
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
        image={heroimage}
        alt="Staying Fresh Hero"
        title="Only the fresh"
        leadtext="What you want. We have it all"
      />
      <ProductCarousel products={productArray} />
    </div>
  );
}

export default Home;

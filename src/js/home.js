import Hero from "./blocks/hero";
import ProductSlider from "./blocks/product-carousel";

function Home(props) {
  return (
    <div className="layout-container">
      <Hero
        image="/hero-images/hero3.jpg"
        alt="Staying Fresh Hero"
        title="Only the fresh"
        leadtext="What you want. We have it all"
      />
      <ProductSlider slidertitle="Featured Products" products={props.products} />
    </div>
  );
}

export default Home;

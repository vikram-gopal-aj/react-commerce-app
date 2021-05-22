import Slider from "react-slick";

function ProductSlide(props) {
  const product = props.product;
  return (
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
    </div>
  );
}

function ProductCarousel(props) {
  const products = props.products;
  const productSlides = [];
  products.forEach(function (product) {
    productSlides.push(<ProductSlide key={product.title} product={product} />);
  });
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="App">
      <Slider {...sliderSettings}>{productSlides}</Slider>
    </div>
  );
}

export default ProductCarousel;

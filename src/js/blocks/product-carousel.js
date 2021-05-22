import Slider from "react-slick";
import Product from "./product";

function ProductSlider(props) {
  const products = props.products;
  const productSlides = [];
  products.forEach(function (product) {
    if (parseInt(product.rating) < 5) {
      return;
    }
    productSlides.push(<Product key={product.title} product={product} />);
  });
  const sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="product-slider">
      <h1>{props.slidertitle}</h1>
      <Slider {...sliderSettings}>{productSlides}</Slider>
    </div>
  );
}

export default ProductSlider;

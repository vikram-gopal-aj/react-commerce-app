function Hero(props) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${props.image}` }}>
      <div className="hero-content">
        <h1 className="hero-title">{props.title}</h1>
        <p className="hero-leadtext">{props.leadtext}</p>
      </div>
    </div>
  );
}

export default Hero;

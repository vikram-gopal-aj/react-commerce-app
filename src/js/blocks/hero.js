function Hero(props) {
  const showSearchBar = props.searchbox;
  return (
    <div className="hero" style={{ backgroundImage: `url(${props.image}` }}>
      <div className="hero-content">
        <h1 className="hero-title">{props.title}</h1>
        <p className="hero-leadtext">{props.leadtext}</p>
        <span>{showSearchBar}</span>
      </div>
    </div>
  );
}

export default Hero;

import "./scss/styles.css";

import Navigation from "./js/navigation";
import Footer from "./js/footer";

function App() {
  return (
    <>
      <header className="layout-header">
        <Navigation />
      </header>
      <section className="layout-container"></section>
      <footer className="layout-footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;

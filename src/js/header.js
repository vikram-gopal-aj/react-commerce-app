import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import products from "../products.json";

import Home from "./home";
import Products from "./products";
import GlobalComponents from "./global";

function Header(props) {
  const productsArray = products.products.map(function (product, i) {
    return product;
  });

  return (
    <Router>
      <header className="layout-header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                activeClassName="is-active"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="is-active"
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="is-active"
                to="/global"
              >
                Global
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="is-active"
                to="/global"
              >
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="is-active"
                to="/global"
              >
                Checkout
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route
          render={(props) => <Home {...props} products={productsArray} />}
          exact
          path="/"
        ></Route>
        <Route
          render={(props) => <Products {...props} products={productsArray} />}
          exact
          path="/products"
        ></Route>
        <Route exact path="/global" component={GlobalComponents}></Route>
      </Switch>
    </Router>
  );
}

export default Header;

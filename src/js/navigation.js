import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./home";
import Products from "./products";
import GlobalComponents from "./global";

function Navigation() {
  return (
    <Router>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink className="nav-link" exact activeClassName="is-active" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="is-active"  to="/products">Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="is-active"  to="/global">Global</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route exact path="/global" component={GlobalComponents}></Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
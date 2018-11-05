import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage     from "../pages/Homepage"
import ProductsPage from "../pages/ProductsPage"

export default function Navbar() {
  return (
    <Router>
      <React.Fragment>

        <nav className="navbar">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/products/">Products</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact    component={HomePage} />
        <Route path="/products/" component={ProductsPage} />
      </React.Fragment>
    </Router>
  )
}
import React, { Component } from 'react';

import HomePage     from "./pages/Homepage"
import ProductsPage from "./pages/ProductsPage"
import SingleProductPage from "./pages/SingleProductPage"
import Error404 from "./errors/Error404"

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            {/* Navigation */}
            <Navbar />

            {/* Pages */}
            <Switch>
              <Route path="/"            exact component={HomePage} />
              <Route path="/products/"   exact component={ProductsPage} />
              <Route path="/product/:id" exact component={SingleProductPage} />
              <Route component={Error404} />
            </Switch>
          </React.Fragment>
        </Router>

        {/* Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

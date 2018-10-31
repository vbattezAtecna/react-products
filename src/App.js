import React, { Component } from 'react';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

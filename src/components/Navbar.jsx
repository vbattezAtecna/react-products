import React from 'react'

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products/" className="nav-link" activeClassName="active">Products</NavLink>
        </li>
      </ul>
    </nav>
  )
}
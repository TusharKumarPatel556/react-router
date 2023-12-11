import React from "react";
import { NavLink } from "react-router-dom";
// import "./header.css";

const Header = () => {
  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? "#000000" : "#ffffff",
      fontWeight: isActive ? "bold" : "",
    };
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={activeLink}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link " to="/about" style={activeLink}>
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  to="/language"
                  style={activeLink}
                >
                  Languages
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/service" style={activeLink}>
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

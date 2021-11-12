import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
         Student information
        </Link>
        <div>
          <Link to="/contacts/add" className="btn btn-light ml-auto">
            Student Management
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

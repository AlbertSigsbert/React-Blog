import React from "react";
import { Link, NavLink } from "react-router-dom";
import { StyledNavbar } from "../styled/Navbar.styled";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <Link to="/" className="logo">AM Blog</Link>
        </li>
        <li>
          <NavLink
            to="/authors"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Authors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tags"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Tags
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <ul>
        {/* <Link ><span>Search</span></Link> */}
        <li>
        <Link to="/search"><FaSearch /></Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;

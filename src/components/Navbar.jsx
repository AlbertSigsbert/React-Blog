import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { StyledNavbar } from "../styled/Navbar.styled";
import { HiMenu, HiX } from "react-icons/hi";
import Search from "./Search";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <StyledNavbar>
      <Link to="/" className="logo">
        AM Blog
      </Link>

   
        <ul className={ open ? "nav-active" : "nav"}>
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
   
    
        <ul className={ open ? "nav-active" : "nav"}>
          <li>
            <Search />
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
     
      <div>
        <Search />

        <Link to="/#" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </Link>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;

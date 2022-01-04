import React from "react";
import { Link } from "react-router-dom";
import { HiSearch } from "react-icons/hi";

function Search(props) {
  return (
      <Link to="/search">
        <HiSearch />
      </Link>
    
  );
}

export default Search;

import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <img
          style={{ width: 60, height: 60 }}
          src="https://image.flaticon.com/icons/png/512/44/44386.png"
          alt="logo"
        ></img>
      </Link>
      <ul className="nav-links">
        <Link className="nav-link" to="/">
          <li>Home</li>
        </Link>
        <Link className="nav-link" to="/countries">
          <li>All Countries</li>
        </Link>
        <Link className="nav-link" to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

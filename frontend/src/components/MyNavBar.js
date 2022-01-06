import React from "react";
import Logo from "../images/logo.png";
import { Routes, Route, NavLink as Link } from "react-router-dom";

const MyNavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img width="60px" height="auto" src={Logo} alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/recipes" activeclassname="active">
            Recipe
          </Link>
        </li>
        <li>
          <Link to="/veges" activeclassname="active">
            Veges
          </Link>
        </li>
        <li>
          <div className="dropdown">
            <Link to="admin" activeclassname="active">
              Admin
            </Link>
            <div className="dropdown-content">
              <Link to="admin/recipe-admin" activeclassname="active">
                Recipe
              </Link>
              <Link to="admin/veges-admin" activeclassname="active">
                Vegetarian
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default MyNavBar;

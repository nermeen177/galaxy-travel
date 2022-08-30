import React, { useState } from "react";
import "./NavStyle.scss";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navigation">
      <h1 className="navigation__logo">GLX TRVL</h1>
      <ul
        className={
          click
            ? "navigation__list navigation__list--active"
            : "navigation__list"
        }
      >
        <li>
          <Link
            to="/"
            className="navigation__list-item navigation__list-item--active"
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/pricing" className="navigation__list-item">
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navigation__list-item">
            Contact
          </Link>
        </li>
      </ul>
      <div className="navigation__icon" onClick={handleClick}>
        <FaBars size={20} />
      </div>
    </div>
  );
};
export default Nav;

import react from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs m-4">
      <li className="nav-item px-4">
        <Link to="/">Home</Link>
      </li>
      <li className="nav nav-tabs px-4">
        <Link to="/about">About Me</Link>
      </li>
      <li className="nav nav-tabs px-4">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="nav nav-tabs px-4">
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li className="nav nav-tabs px-4">
        <Link to="/resume">Resume</Link>
      </li>
    </ul>
  );
}

export default NavTabs;

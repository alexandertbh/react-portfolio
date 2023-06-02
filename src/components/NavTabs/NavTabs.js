import react from "react";
import { Link } from "react-router-dom";
import "./navTab.css";

function NavTabs() {
  return (
    <section id="nav">
      <ul className="nav nav-tabs">
        <li className="nav-item px-4 bs-nav-tabs-border-color: slateGrey">
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
    </section>
  );
}

export default NavTabs;

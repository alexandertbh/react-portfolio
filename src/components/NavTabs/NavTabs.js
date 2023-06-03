import { Link } from "react-router-dom";
import "./navTab.css";

function NavTabs() {
  return (
    <section id="nav" className="bg-secondary">
      <ul className="nav nav-tabs border-0">
        <li className="nav nav-tabs px-4 border-0">
          <Link to="/about">About Me</Link>
        </li>
        <li className="nav nav-tabs px-4 border-0">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav nav-tabs px-4 border-0">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav nav-tabs px-4 border-0">
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </section>
  );
}

export default NavTabs;

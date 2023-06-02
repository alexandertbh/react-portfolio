import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <ul className="list-unstyled d-flex flex-column text-center " id="footer">
        <li>
          <a href="https://github.com/alexandertbh" className="me-4 ">
            Github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alexandertbh" className=" me-4">
            Linkedin
          </a>
        </li>
      </ul>
    </footer>
  );
}

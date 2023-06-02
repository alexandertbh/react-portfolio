import React from "react";
import Projects from "../../Project";
import project1 from "../../assets/Screenshot 2023-05-02 at 7.12.41 PM (1).png";
import project2 from "../../assets/Screenshot 2023-05-13 at 9.12.54 AM.png";
import project3 from "../../assets/Screenshot 2023-05-30 at 1.44.25 PM.png";
import "./portfolio.css";

export default function Portfolio() {
  const projects = [
    {
      title: "@aGlance ",
      link: "https://github.com/Willlasbury/project-2",
      image: project1,
    },
    {
      title: "noSQL Social Media Back End ",
      link: "https://github.com/alexandertbh/no-sql-social-media",
      image: project2,
    },
    {
      title: "Employee Tracker",
      link: "https://github.com/alexandertbh/Employee-Tracker",
      image: project3,
    },
  ];
  return (
    <section id="portfolio">
      <h2 className="d-flex justify-content-center">Portfolio</h2>
      <ul className="container list-unstyled">
        <div className="row">
          <Projects projects={projects} />
        </div>
      </ul>
    </section>
  );
}

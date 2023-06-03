import React from "react";
import "./project.css";

export default function Projects({ projects }) {
  return (
    <section id="project-card">
      {projects.map((project) => (
        <li className="col" id="project">
          <a href={project.link}>
            <h2>{project.title}</h2>
            <img className="w-25 rounded project" src={project.image} alt="Project Image"/>
          </a>
        </li>
      ))}
    </section>
  );
}

import React from "react";

export default function Projects({ projects }) {
  return (
    <>
      {projects.map((project) => (
        <li className="col">
          <h2>{project.title}</h2>
          <a href={project.link}>
            <img className="w-25 rounded" src={project.image} />
          </a>
        </li>
      ))}
    </>
  );
}

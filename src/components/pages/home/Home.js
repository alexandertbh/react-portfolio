import React from "react";
import background from "../../assets/untitled shoot-May 28, 2023-06628.jpg";
import "./home.css";

export default function Home() {
  return (
    <div
      className=" d-flex flex-column text-center "
      Style={{ backgroundImage: background }}
      id="home"
    >
      <h1>Alex Horning</h1>
      <p>Body with other Links</p>
    </div>
  );
}

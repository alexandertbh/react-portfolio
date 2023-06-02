import react from "react";
import image from "../../assets/untitled shoot-May 28, 2023-06735.jpg";
import "./about.css";

export default function About() {
  return (
    <section className="d-flex flex-column text-center ">
      <div className="justify-content-center">
        <h2>About Alex Horning</h2>
        <img src={image} className="w-25 rounded" />
        <p id="content">
          Born and raised in Seattle I spent most of my time playing basketball
          until I got to college where I got heavily invested in Student
          Government. I took an interest in leadership and problem solving which
          lead me to majoring in Human Resources and getting into talent
          acquisition after graduating. I spent two years as a University
          Recruiter at Microsoft and then another two and a half years as a
          Technical Recruiter at Google. Towards the end of my time at Google I
          spent a large portion of my time working on data analysis as well as
          dashboard building using tools such as SQL, PLEX, and App Scripting.
          This was my first introduction into some light coding and I was
          hooked! Unfortunatly, in early 2023 I was a part of a large-scale set
          of layoffs however, this gave me the opportunity to pursue my interest
          in developing a more technical skillset. I sign up for the UW
          Full-Stack Web Development course where I had the opportunity to learn
          REACT, Javascript, Mongo DB, SQL, HTML, and CSS among other things.
        </p>
        <h3>Interests</h3>
        <ul className=" list-unstyled">
          <li>Learning and developing new technical skills</li>
          <li>Cinetography/Videography</li>
          <li>Photography</li>
        </ul>
      </div>
    </section>
  );
}

import React from "react";
import "./contact.css";

export default function ContactMe() {
  // const emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return (
    <section className=" " id="contact">
      <h2 className="d-flex justify-content-center">Contact Me</h2>
      <form className="d-flex justify-content-center">
        <input type="text" placeholder="email" id="email" />
        <input type="text" placeholder="message" id="message" />
      </form>
    </section>
  );
}

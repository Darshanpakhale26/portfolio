import React, { useRef } from "react";
import "./contact.css";
import FacebookIcone from "../../assets/facebook.png";
import TwitterIcone from "../../assets/twitter.png";
import InstagramIcone from "../../assets/instagram.png";
import GithubIcone from "../../assets/github.png";
import LinkedinIcone from "../../assets/linkedin.png";
import Project1 from "../../assets/rps.jpg";
import Project2 from "../../assets/notes.jpeg";
import Project3 from "../../assets/fa.jpg";
import Project4 from "../../assets/cc.jpg";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_y3qc8el", "template_bi0syc6", form.current, {
        publicKey: "SIH9V4VyXC3b7-rVs",
      })
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert("Your message has been sent successfully");

        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Projects</h1>
        <p className="clientsDesc">Check out my portfolio for a quick look at my projects. Each one tells a story about my skills and what I love to create.</p>
        <div className="clientsImgs">
  <div className="client">
    <div className="projectCard">
    <img src={Project1} alt="client1" className="clientsImg" />
    <div className="projectInfo">
      <p>Rock-Paper-Scissors</p>
      <a href="https://darshanpakhale26.github.io/rock-paper-scissor/" target="_blank" rel="noopener noreferrer">Deploy Link</a>
    </div>
  </div>
  </div>
  
  <div className="client">
  <div className="projectCard">
    <img src={Project2} alt="client2" className="clientsImg" />
    <div className="projectInfo">
      <p>Notes-WebApp</p>
      <a href="  https://darshanpakhale26.github.io/notes-app/" target="_blank" rel="noopener noreferrer">Deploy Link</a>
    </div>
  </div>
  </div>

  <div className="client">
  <div className="projectCard">
    <img src={Project3} alt="client3" className="clientsImg" />
    <div className="projectInfo">
      <p>Food-Delivery-App</p>
      <a href="https://darshan-food-delivery-app.netlify.app/" target="_blank" rel="noopener noreferrer">Deploy Link</a>
    </div>
  </div>
  </div>
  

  <div className="client">
  <div className="projectCard">
    <img src={Project4} alt="client4" className="clientsImg" />
    <div className="projectInfo">
      <p>Currency-Converter</p>
      <a href="https://darshanpakhale26.github.io/currency-converter/" target="_blank" rel="noopener noreferrer">Deploy Link</a>
    </div>
  </div>
  </div>
</div>
</div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Have something to share or inquire about? Feel free to fill out the form below.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="text"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Send
          </button>
          <div className="links">
          
          <a href="https://www.github.com/Darshanpakhale26" target="_blank" rel="noopener noreferrer" ><img src={GithubIcone} alt="Instagram" className="Link" /></a>
          <a href="https://www.instagram.com/darshan26_10" target="_blank" rel="noopener noreferrer" ><img src={InstagramIcone} alt="Instagram" className="Link" /></a>
          <a href="https://www.twitter.com/pakhale_darshan" target="_blank" rel="noopener noreferrer" ><img src={TwitterIcone} alt="Twitter" className="Link" /></a>
          <a href="https://www.linkedin.com/in/darshan261002" target="_blank" rel="noopener noreferrer" ><img src={LinkedinIcone} alt="Youtube" className="Link" /></a>
          <a href="https://www.facebook.com/darshan.pakhale.1" target="_blank" rel="noopener noreferrer" ><img src={FacebookIcone} alt="Facebook" className="Link" /></a>
          </div>
        </form>
      </div>
    </section>
  );

};

export default Contact;



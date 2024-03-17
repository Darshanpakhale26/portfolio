import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="abouts">
      <span className="aboutTitle">About Me</span>
      <span className="allAbout">
      <span className="aboutDesc">
        
          I'm Darshan Pakhale, currently in my final year of engineering at
          PVG'sCOET, Pune. <br />
          As a fresher excited to step into the professional world, I
          have strong skills in C++, Java, and front-end development.
          <br /> I am actively exploring opportunities for both full-time
          positions and internships to apply and enhance my skills. I am
          passionate about using technology to solve real-world problems and
          making a positive contribution to any team. 🚀
          </span>

        <span className="Achievements">
          <h2 className="AchievementsTitle">Achievements</h2>
          <ul>
            <li>
              <a href="https://www.holopin.io/@darshanpakhale26#badges">HacktoberFest: Open Source contribution</a>
            </li>
            <li>
              <a href="https://www.hackerrank.com/profile/darshanvp">Five Stars in C++/SQL/Python on Hakkerank</a>
            </li>
            <li>
              <a href="https://www.salesforce.com/trailblazer/darshanvp">Salesforce: Trailhead badges</a>
            </li>
            <li>
              <a href="https://auth.geeksforgeeks.org/user/darshanvpakhale26">Solved 100+ DSA Problems on GFG/Leetcode</a>
            </li>
          </ul>
        </span>
        </span>
      
    </section>
  );
};

export default About;

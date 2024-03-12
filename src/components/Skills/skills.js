import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">About Me</span>
      <span className="skillDesc">
      I'm Darshan Pakhale, currently in my final year of engineering at PVG'sCOET, Pune. As a recent graduate excited to step into the professional world, I have strong skills in C++, Java, and front-end development.

I am actively exploring opportunities for both full-time positions and internships to apply and enhance my skills. I am passionate about using technology to solve real-world problems and making a positive contribution to any team. 🚀
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p></p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p></p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

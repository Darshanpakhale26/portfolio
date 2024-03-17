import React from "react";
import "./skills.css";
import Portfolio1 from "../../assets/cpp.png";
import Portfolio2 from "../../assets/c.png";
import Portfolio3 from "../../assets/java.png";
import Portfolio4 from "../../assets/mysql.png";
import Portfolio5 from "../../assets/react.png";
import Portfolio6 from "../../assets/github.png";

const works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Skills</h2>
      <span className="worksDesc">
      During my engineering studies, I acquired a diverse set of skills and technical knowledge, encompassing the following stack:
      </span>
      <div className="workImgs">
      <img src={Portfolio1} alt="" className="worksImg" />
      <img src={Portfolio2} alt="" className="worksImg" />
      <img src={Portfolio3} alt="" className="worksImg" />
      <img src={Portfolio4} alt="" className="worksImg" />
      <img src={Portfolio5} alt="" className="worksImg" />
      <img src={Portfolio6} alt="" className="worksImg" />
      </div>
      <button className="workBtn">View More</button>
    </section>
  );
};

export default works;

import React from 'react';
import './education.css';
import EduImg from '../../assets/edu.png';

const Education = () => {
  return (
    <section id="edu">
    <span className="eduTitle">Educational Details</span>
    <span className="eduDesc">
    </span>
    <div className="eduBars">
      <div className="eduBar">
        <img src={EduImg} alt="UIDesign" className="eduBarImg" />
        <div className="eduBarText">
          <h2>Bachelor of Engineering </h2> 
          <span>2020-2024</span>
          <p>Electronics & Telecommunications</p>
          <p>Pune Vidyarthi Griha's College of Engineering & Technology, Pune</p>
        </div>
      </div>
      <div className="eduBar">
        <img src={EduImg} alt="WebDesign" className="eduBarImg" />
        <div className="eduBarText">
          <h2>Higher Secondary Certificate</h2>  
          <span>2019-2020</span>
          <p>Jai Hind Junior College, Dhule</p>
        </div>
      </div>
      <div className="eduBar">
        <img src={EduImg} alt="AppDesign" className="skillBarImg" />
        <div className="eduBarText">
          <h2>Secondary School Certificate</h2>   
          <span>2017-2018</span>
          <p>J. R. City High school, Dhule</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Education;


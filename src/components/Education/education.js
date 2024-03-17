import React from 'react';
import './education.css';


const Education = () => {
  return (
    <section id="edu">
    <span className="eduTitle">Educational Details</span>
    <span className="eduDesc">
    </span>
    <div className="eduBars">
      <div className="eduBar">
        
        <div className="eduBarText">
          <h2>Bachelor of Engineering </h2> 
          <span>2020-2024</span>
          <p>Pune Vidyarthi Griha's College of Engineering & Technology, Pune</p>
          <p>Electronics & Telecommunications</p><span>CGPA: 8.46</span>
        </div>
      </div>
      <div className="eduBar">
        
        <div className="eduBarText">
          <h2>Higher Secondary Certificate</h2>  
          <span>2019-2020</span>
          <p>Jai Hind Junior College, Dhule</p>
          <p>Science</p><span>Percentage: 80.62%</span>
        </div>
      </div>
      <div className="eduBar">
        
        <div className="eduBarText">
          <h2>Secondary School Certificate</h2>   
          <span>2017-2018</span>
          <p>J. R. City High school, Dhule</p>
          <p>General</p><span>Percentage: 86.20%</span>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Education;


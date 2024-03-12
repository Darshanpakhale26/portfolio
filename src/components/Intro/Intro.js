import React from 'react';
import './intro.css';
import bg from '../../assets/darshan.png';
import btnImg from '../../assets/hireme.png';  

const Intro = () => {
  return (
    
      <section id="intro">
        <div className="introContent">
          <span className='hello'>Hello 👋,</span>
          <span className='introText'>I'm <span className='introName'>Darshan</span><br/>Frontend Developer</span>
          <p className='introPara'>I am a proficient web developer with experience in crafting visually appealing<br/> and user-friendly websites.</p>
          <a href='https://drive.google.com/file/d/1yCAlT5qKsOlDlr__fmo7vZN16LW16fyg/view?usp=sharing' target='blank'><button className='btn'><img src={btnImg} alt='Hire ME' className='btnImg'/>Resume</button></a>
        </div>
        <img src={bg} alt='Profile' className='bg'/>

       
      </section>
      
   
  )
}

export default Intro;

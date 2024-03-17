// Default code for app.js is
import React from 'react';
import About from './components/Abouts/about';
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/Intro'; 
import Skills from './components/Skills/skills';
import Contact from './components/Contact/contact';
import Education from './components/Education/education';
import Footer from './components/Footer/footer'; // Fix: Added import statement for the Footer component
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Education />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
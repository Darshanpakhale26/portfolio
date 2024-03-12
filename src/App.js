// Default code for app.js is
import React from 'react';
import Skills from './components/Skills/skills';
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/Intro'; // Fix: Changed the import statement to match the casing of the file name
import Works from './components/Works/works';
import Contact from './components/Contact/contact';
import Education from './components/Education/education';
import Footer from './components/Footer/footer'; // Fix: Added import statement for the Footer component
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Education />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import Navbar from "./navbar/Navbar.jsx";
import About from "./About/About.jsx";
import Skills from "./skills/Skills.jsx"
import Projects from "./projects/Projects.jsx"
import Contact from "./contact/Contact.jsx"

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <Navbar />
      <section id="home">
        <About theme={theme} toggleTheme={toggleTheme} />
      </section>
      <section id="skills-section">
        <Skills />
      </section>
      <section id="projects-section">
        <Projects />
      </section>
      <section id="contact-section">
        <Contact />
      </section>
    </div>
  )
}

export default App;
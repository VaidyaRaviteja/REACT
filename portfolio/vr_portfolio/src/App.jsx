import Navbar from "./navbar/Navbar.jsx";
import About from "./About/About.jsx";
import Skills from "./skills/Skills.jsx"
import Projects from "./projects/Projects.jsx"
import Contact from "./contact/Contact.jsx"

function App(){
  return (
    <div>
      <Navbar/>
      <section id="home">
        <About/>
      </section>
      <section id="skills-section">
        <Skills/>
      </section>
      <section id="projects-section">
        <Projects/>
      </section>
      <section id="contact-section">
        <Contact/>
      </section>
    </div>
  )
}

export default App;
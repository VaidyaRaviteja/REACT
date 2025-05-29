import {Navbar} from "./Navbar.jsx";
import {Mainimg} from "./Mainimg.jsx"
import './App.css'
import {Projects} from "./Projects.jsx"
import {About} from "./About.jsx"
import {Contact} from "./Contact.jsx"
import {Footer} from "./Footer.jsx"
export function App(){
  return (<div>
    <Navbar/>
    <Mainimg/>
    <Projects/>
    <About/>
    <Contact/>
    <Footer/>
    </div>)
}



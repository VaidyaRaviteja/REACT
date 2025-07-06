import './Navbar.css'
import { useState } from 'react';

function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsMenuOpen(false); // Close mobile menu after clicking
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return <div id="navbar">
        <div id='name'>Vaidya Raviteja</div>
        
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        
        <div id='options' className={isMenuOpen ? 'active' : ''}>
            <span onClick={() => scrollToSection('home')}>Home</span>
            <span onClick={() => scrollToSection('projects-section')}>My Work</span>
            <span onClick={() => scrollToSection('skills-section')}>Skills</span>
            <span onClick={() => scrollToSection('contact-section')}>Contact</span>
        </div>
    </div>
}

export default Navbar;
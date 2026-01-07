import './About.css';
import image from "../assets/Profile_pic1.jpg";
import whatsapplogo from "../assets/logo_whatsapp.png";

function About({ theme, toggleTheme }) {
    return (
        <div id="about">
            <div id="pic">
                <img src={image} alt="Vaidya Ravi Teja" />
            </div>
            <div id='info'>
                <h1>About Me</h1>
                <p>
                    I’m a Software Developer passionate about building efficient, user-centric solutions.
                    I specialize in crafting seamless web experiences using <b>React, JavaScript, Python, Django, and Firebase</b>,
                    with a focused approach on writing clean, scalable code.
                    Beyond development, I handle <b>database management</b> and cloud-based <b>hosting</b>,
                    leveraging <b>AWS</b> to take projects from local environments to production. I thrive
                    in collaborative teams and am always dedicated to delivering real value through modern technology.
                </p>
            </div>

            {/* Theme Toggle Button */}
            <button
                className="theme-toggle"
                onClick={toggleTheme}
                title={theme === 'light' ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
                <i className={theme === 'light' ? "fas fa-moon" : "fas fa-sun"}></i>
            </button>

            {/* WhatsApp Floating Button */}
            <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
                <a href="https://wa.me/7032438088" target="_blank" rel="noopener noreferrer">
                    <img style={{ width: '100px', height: '100px' }} src={whatsapplogo} alt="whatsapp-button" />
                </a>
            </div>
        </div>
    );
}

export default About;
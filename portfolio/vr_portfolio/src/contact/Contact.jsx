import './Contact.css';
import linkedin_logo from "../assets/linkedin_logo.jpg";
// import image7 from "../assets/linkedin";

function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Get In Touch</h1>
            <div id="contact-icons-row">
                <a
                    className="contact-icon-link"
                    href="mailto:vydyatej@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Email"
                >
                    <span className="icon-only" role="img" aria-label="Email">📧</span>
                </a>
                <a
                    className="contact-icon-link"
                    href="https://github.com/VaidyaRaviteja"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                >
                    <span className="icon-only" role="img" aria-label="Phone">📂</span>
                </a>
                <a
                    className="contact-icon-link"
                    href="https://www.linkedin.com/in/ravitejavaidya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                >
                    <span className="icon-only" role="img" aria-label="LinkedIn">🔗</span>
                </a>
            </div>
            <div className="resume-container">
                <a href="/raviteja_vaidya_resume.pdf" download="raviteja_vaidya_resume.pdf" className="resume-button">
                    <span className="resume-icon">📄</span> Download Resume
                </a>
            </div>
            <footer className="footer">
                <p>© 2025 Vaidya Ravi Teja. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Contact;

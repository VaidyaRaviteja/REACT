import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <div id="contact-icons-row">
                <a
                    className="contact-icon-link"
                    href="https://linkedin.com/in/vaidyaraviteja"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                >
                    <i className="fab fa-linkedin"></i>
                </a>

                <a
                    className="contact-icon-link"
                    href="https://github.com/vaidyaraviteja"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                >
                    <i className="fab fa-github"></i>
                </a>

                <a
                    className="contact-icon-link"
                    href="mailto:vydyatej@gmail.com"
                    title="Email"
                >
                    <i className="fas fa-envelope"></i>
                </a>
            </div>

            <footer className="footer">
                <p>© 2025 Vaidya Ravi Teja. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Contact;

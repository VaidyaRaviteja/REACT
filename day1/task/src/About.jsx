import './About.css';
import image from "./assets/Profile_pic1.jpg";
function About(){
    return <div id="about">
        <div id="pic">
            <img src={image} />
        </div>
        <div id='info'>
            <h1>Bio</h1>
            <p>I’m a dedicated Software Developer skilled in 
                HTML, CSS, JavaScript, React, Python, and SQL, with experience building a
                task management web app using Django and JavaScript for a student organization 
                and optimizing RESTful APIs in open-source GitHub projects using Git. 
                I’m passionate about creating innovative software and thrive in collaborative teams.</p>
        </div>
    </div>
}
export default About;
import './Skills.css';
import image1 from "../assets/HTML_Logo.png";
import image2 from "../assets/Css.png";
import image3 from "../assets/Js.png";
import image4 from "../assets/Python_Logo.jpg";
import image5 from "../assets/react.png";
import image6 from "../assets/django.jpg";
import image7 from "../assets/SQL-logo.png";

function Skills(){
    return <div id='skills'>
        <div id='heading'>
            <h1>Skills</h1>
        </div>
        <div id='skillnames'>
            <div id='html'>
                <img src={image1}/>
            </div>
            <div id='css'>
                <img src={image2}/>

            </div> 
             <div id='js'>
                <img src={image3}/>

            </div>
            <div id='py'>
                <img src={image4}/>

            </div>
            <div id='sql'>
                <img src={image5}/>
            </div>
            <div id='react'>
                <img src={image6}/>
            </div>
            <div id='sql'>
                <img src={image7}/>
            </div>
        </div>
    </div>
}

export default Skills;
import './Contact.css'
import map from './assets/map.jpg'
export function Contact(){
    return (
        <div id="contact">
            <h4 id='contacthead'>Contact</h4>
            <hr/>
            <p id='contactinfo'>
                Lets get in touch and talk about your next project.
            </p>
            <form id='contactform' style={{}}>
                <input placeholder='Name'required  />
                <input placeholder='Email'required  />
                <input placeholder='Subject'required />
                <input placeholder='Contact'required />
            </form>
            <span >SEND MESSAGE</span>
            <div id='mapimg'>
                <img src={map}/>
            </div>
            
        </div> 
    )
}
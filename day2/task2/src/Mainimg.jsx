import './Mainimg.css'
import mainimg from "./assets/mainarchitect.jpg"
export function Mainimg(){
    return (
        <div id="mainimg">
            <img src={mainimg} />
            <p>
                <span>B R</span> Architects
            </p>
            {/* <span id='BR1'><b>B R</b></span>
            <span id='Arch'>Architects</span> */}
        </div>
    )
}  
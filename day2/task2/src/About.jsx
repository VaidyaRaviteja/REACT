import './About.css'
import abt1 from "./assets/abt1.jpg"
import abt2 from "./assets/abt2.jpg"
import abt3 from "./assets/abt3.jpg"
import abt4 from "./assets/abt4.jpg"
export function About(){
    return (
        <div id="about">
            <h3>About</h3>
            <hr/> 
            <p id='abt-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div id="about-cards">
                <div id="abt-card" >
                    <img src={abt1}/>
                    <p id='p1'>John Doe</p> 
                    <p id='p2'>CEO & Founder</p>
                    <p id='p3'>
                        Phasellus eget enim eu lectus faucibus vestibulum. 
                        Suspendisse sodales pellentesque elementum.
                    </p>
                    <span >Contact</span>
                </div>
                <div id="abt-card" >
                    <img src={abt2} />
                    <p id='p1'>John Doe</p>
                    <p id='p2'>Architect</p>
                    <p id='p3' >
                        Phasellus eget enim eu lectus faucibus vestibulum. 
                        Suspendisse sodales pellentesque elementum.
                    </p>
                    <span >Contact</span>
                </div>
                <div id="abt-card" >
                    <img src={abt3} />
                    <p id='p1'>John Doe</p>
                    <p id='p2'>Architect</p>
                    <p id='p3'>
                        Phasellus eget enim eu lectus faucibus vestibulum. 
                        Suspendisse sodales pellentesque elementum.
                    </p>
                    <span >Contact</span>
                </div>
                <div id="abt-card" >
                    <img src={abt4} />
                    <p id='p1'>John Doe</p>
                    <p id='p2'>Architect</p>
                    <p id='p3'>
                        Phasellus eget enim eu lectus faucibus vestibulum. 
                        Suspendisse sodales pellentesque elementum.
                    </p>
                    <span >Contact</span>
                </div>
            </div>
        </div>
    )
}
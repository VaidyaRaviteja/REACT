import card from "./assets/house1.jpg"
import card2 from "./assets/house2.jpg"
import card3 from "./assets/house3.jpg"
import card4 from "./assets/house4.jpg"
import card5 from "./assets/house5.jpg"
import './Projects.css'
export function Projects(){
    return (
        <div id="projects">
            <h3>Projects</h3>
            <hr/>
            <div id="cards">
                <div id="card">
                    <img src={card}/>
                    <span>Summer House</span>
                </div>
                <div id="card">
                    <img src={card2}/> 
                    <span>Brick House</span>

                </div>
                <div id="card">
                    <img src={card3}/>
                    <span>Renovated House</span>

                </div><div id="card">
                    <img src={card4}/>
                    <span>Barn House</span>
                </div>
                <div id="card">
                    <img src={card5}/>
                    <span>Farm House</span>
                </div>
                <div id="card">
                    <img src={card}/>
                    <span>Wood House</span>
                </div>
                <div id="card">
                    <img src={card2}/>
                    <span>Brick House</span>

                </div>
                <div id="card">
                    <img src={card}/>
                    <span>Summer House</span>
                </div>
            </div>
            {/* <div id="cards">
                <div id="card">
                    <img src={card5}/>
                    <span>Farm House</span>
                </div>
                <div id="card">
                    <img src={card}/>
                    <span>Wood House</span>

                </div><div id="card">
                    <img src={card2}/>
                    <span>Brick House</span>

                </div><div id="card">
                    <img src={card}/>
                    <span>Summer House</span>
                </div>
            </div> */}
        </div>
    ) 
}
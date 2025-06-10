import React from "react"
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
  render(){
    // console.log(React,"react")
    return(
      <div id="navbar" style={{display:"flex",backgroundColor:"lightblue",width:"100%", alignItems:"center",justifyContent:"space-evenly"}}>
        <h1>Class Components</h1>
        <div id="navlinks" style={{display:"flex",gap:"30px"}}>
        <Link to={'Randomcolor'}><button>Random Color</button></Link>
        <Link to={'Randomquote'}><button>Random Quote</button></Link>
        <Link to={'Togglelight'}><button>Toggle Theme</button></Link>
        <Link to={'FormToggle'}><button>Toggle Form</button></Link>

        {/* <link to=''>Random Quote</link>
        <link to=''>Toggle Theme</link>
        <link to=''>SignUp/Login</link> */}
        </div>
      </div> 
    )
  }
}

export default Navbar
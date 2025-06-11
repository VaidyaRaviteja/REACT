import React from "react"
import {Link} from 'react-router-dom';
import './Navbar.css'

class Navbar extends React.Component{
  render(){
    // console.log(React,"react")
    return(
      <div id="navbar" >
        <h1>Class Components</h1>
        <div id="navlinks" >
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
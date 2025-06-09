// import React from "react"
// class App extends React.Component{
//   constructor(){
//     super();
//  //by using object
//     this.state={
//       subject:"REACT",
//       name:"Class Based Components",
//       Domain:"Web Developement"

//     }
//   }
//   render(){
//     console.log(React,"react")
//     return(
//       <div style={{textAlign:"center"}}>
//         <h1>Domain {this.state.Domain}</h1>
//         <p> {this.state.subject} Library</p>
//         <p> {this.state.name} Topic</p>

//       </div>
//     )
//   }
// }

// export default App


// import React from "react"
// class App extends React.Component {
//   constructor() {
//     super();
//     // By using Array
//     this.state = [
//       "REACT",
//       "Class Based Components",
//       "Web Developement"

//     ]
//   }
//   render() {
//     console.log(React, "react")
//     return (
//       <div style={{ textAlign: "center" }}>
//         {
//           this.state.map((data)=>{
//             return(
//               <>
//               <h1>{data}</h1>
//               </>
//             )
//           })
//         }
//       </div>
//     )
//   }
// }

// export default App



// import React from "react"
// class App extends React.Component {
//   constructor() {
//     super();
//     // By using Array of Object
//     this.state = [{Domain:"Web Developement",subject:"REACT",name:"Class Based Components"},
//       {name:"PROPS"},
//       {name:"List Rendering"}]
//   }
//   render() {
//     console.log(React, "react")
//     // JS variable will be called 
//     const salary = 60000
//     return (
//       <div style={{ textAlign: "center" }}>
//         {
//           this.state.map((data)=>{
//             return(
//               <>
//               <h1>{data.Domain}</h1>
//               <h1>{data.subject}</h1>
//               <h1>{data.name}</h1>
//               </>
//             )
//           })
//         }
//         <h1>Salary : {salary}</h1>
//       </div>
//     )
//   }
// }

// export default App


// import React from "react";
// import Child from "./child";
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       id:101,employee:"Raju",age:26,experience:4
//     }
//   }
//   render(){
//     return(
//       <div>
//         <Child data={this.state}/>
//       </div>
//     )
//   }
// }
// export default App


// import React from "react";
// import './App.css'
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       Count:0
//     }
//   }
//   OnDecrement=()=>{
//     // alert("Removed One Item From Cart")
//     if(this.state.Count > 0){
//       this.setState({Count:this.state.Count - 1})
//     }
    
//   }
//   OnIncrement=()=>{
//     // alert("One Item Added To Cart")
//     this.setState({Count:this.state.Count + 1})
//   }
//   OnReset=()=>{
//     this.setState({Count:this.state.Count =0})
//   }
//   // disabled={this.state.Count===0}
//   render(){
//     return(
//       <div className="counterPart1">
//         <h1>React Class Based Component</h1>
//         <h3>Counter Application</h3>
//         <div className="counterPart2">
//           <button onClick={this.OnDecrement} >-</button>
//         <h1>{this.state.Count}</h1>
//         <button onClick={this.OnIncrement}>+</button>
//         </div>
//         <button onClick={this.OnReset}>RESET</button>
//       </div>
//     )
//   }
// }
// export default App

import React from "react";
import './App.css'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      Count:0
    }
  }
  OnDecrement=()=>{
    if(this.state.Count > 0){
      this.setState({Count:this.state.Count - 1})
    }
  }
  OnIncrement=()=>{
    this.setState({Count:this.state.Count + 1})
  }
  OnReset=()=>{
    this.setState({Count:this.state.Count =0})
  }
  render(){
    return(
      <div className="counterPart1">
        <h1>React Class Based Component</h1>
        <h3>Counter Application</h3>
        <div className="counterPart2">
          <button onClick={this.OnDecrement} >-</button>
        <h1>{this.state.Count}</h1>
        <button onClick={this.OnIncrement}>+</button>
        </div>
        <button onClick={this.OnReset}>RESET</button>
      </div>
    )
  }
}
export default App
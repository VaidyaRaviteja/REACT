import React from "react";
class Randomcolor extends React.Component{
    constructor(){
        super()
        this.state={
            Rbackgroundcolor:"#ffffff"
        }
    }
    handleRandomColor = ()=>{
        const chars = "abcdef0123456";

        let color = "#"; 

        for(let c=0;c<6;c++){
            const randomchar = Math.floor(Math.random()*chars.length);
            color+=chars[randomchar]
        }
        // console.log(color,"color")
        this.setState({Rbackgroundcolor:color})
    }
    handleReset = ()=>{
        this.setState({Rbackgroundcolor:"#ffffff"});
    }
    render(){
        return(
            <div id="randomcolor" style={{backgroundColor:this.state.Rbackgroundcolor,width:"100%",height:"90vh",display:"flex",justifyContent:"center",gap:"20px",alignItems:"center"}}>
                {/* <h1>Random Color Generation</h1> */}
                <button onClick={this.handleRandomColor}>Generate Random Color</button>
                <button onClick={this.handleReset} >Reset</button>
                
            </div>
        )
    }
}

export default Randomcolor;
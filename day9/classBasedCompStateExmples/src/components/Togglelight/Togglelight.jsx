import React from 'react'

export class Togglelight extends React.Component {
  constructor(){
    super()
    this.state={
      isDark:false,
    }
  }

  handleTheme=()=>{
    this.setState(prevState=>({isDark:!prevState.isDark}))
  }

  render() {
    return (
      <div style={{backgroundColor:this.state.isDark ? "black":"white",display:"flex",height:"90vh",justifyContent:"center",gap:"20px",alignItems:"center"}}>
        <button onClick={this.handleTheme} style={{padding:"10px"}}>{this.state.isDark ? "Light":"Dark"}</button>

      </div>
    )
  }
}

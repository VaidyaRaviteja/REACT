import React from "react"
class Child extends React.Component {
  render() {
    // console.log(React, "react")
    console.log(this.props.data,"this")

    return (
      <div style={{ textAlign: "center" }}>
       <h1><span>{this.props.data.id }</span> {this.props.data.employee}</h1>
      </div>
    )
  }
}

export default Child
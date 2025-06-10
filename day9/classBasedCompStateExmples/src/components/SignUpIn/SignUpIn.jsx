import React from 'react';
import './SignUpIn.css'; // Import the CSS file


export class FormToggle extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: true // Initial state shows the login form
    };
  }


  toggleForm = () => {
    this.setState(prevState => ({ isLogin: !prevState.isLogin }));
  }


  render() {
    return (
      <div className="container" style={{display:"flex",justifyContent:'center',alignItems:'center',height:"100vh"}}>
        <div className="form">
          <h2 className="heading">
            {this.state.isLogin ? 'Login' : 'Sign Up'}
          </h2>


          {/* Login Form */}
          {this.state.isLogin ? (
            <div>
              <input type="text" placeholder="Username" className="input" />
              <input type="password" placeholder="Password" className="input" />
              <button className="button">
                Login
              </button>
            </div>
          ) : (
            // Signup Form
            <div >
              <input type="text" placeholder="Username" className="input" />
              <input type="email" placeholder="Email" className="input" />
              <input type="password" placeholder="Password" className="input" />
              <button className="button">
                Sign Up
              </button>
            </div>
          )}


          {/* Toggle Button */}
          <button
            className="toggle-button"
            onClick={this.toggleForm}
          >
            {this.state.isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
          </button>
        </div>
      </div>
    );
  }
}


// export default FormToggle;

import React from 'react';
import "../Pages/css/login.css"

const LoginSignup = () => {
  return (
    <div>
      
      <div className="login-container">
        
        <form className="login-form">
          
          <div className="input-group">
            <label htmlFor="username">Username</label>  <br />
            <input type="text" id="username" name="username" placeholder="Enter your username" required />
          </div>
          <div className="input-group">
            <label htmlFor="username">Email</label> <br />
            <input type="text" id="username" name="username" placeholder="Enter your username" required />
          </div>
          <div className="input-group"> 
            <label htmlFor="password">Password</label> <br />
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div> <br />
          <button className="login-button" type="submit">Log In</button> <h5>already have an account <span>login</span> </h5>
        </form>
       
      </div>
    </div>
  );
};

export default LoginSignup;

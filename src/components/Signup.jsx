import React from "react";
import "../styles/Doctor.css";

const SignUp = () => {
  return (
    <div>
      <div className="main">
        <div className="card blue lighten-3">
          <div className="card-content">
            <span className="card-title white-text">Hello World</span>
            <p>Hospital login page</p>
            <p>Terms of use</p>
            <p>Privacy</p>
          </div>
        </div>
        <div className="card white">
          <div className="card-content">
            <span className="card-title black-text">Sign Up</span>
            <form action="#">
              <div className="name">
                <div className="name1">
                  <span>First Name *</span>
                  <input type="text" placeholder="Firstname" />
                </div>

                <div className="name2">
                  <span>Last Name *</span>
                  <input type="text" placeholder="Lastname" />
                </div>
              </div>
              <span>Email *</span>
              <input type="email" placeholder="Email" />
              <span>Password *</span>
              <input type="password" placeholder="Password" />
              <a className="btn-small grey darken-2">Sign Up</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;

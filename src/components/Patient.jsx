import React from "react";
import "../styles/Doctor.css";

const Patient = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue">
          <ul>
            <li>
              <a href="#">
                <i className="material-icons">notifications</i>
              </a>
            </li>
            <li className="new">1</li>
            <li>
              <a href="#">
                <i className="material-icons">import_contacts</i>
              </a>
            </li>
          </ul>
          <div className="dropdown">
            <a href="#">
              <i className="material-icons">menu</i>
            </a>
            <div className="dropdown-content">
              <a href="#">Profile</a>
              <a href="#">About</a>
              <a href="#">Logout</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Patient;

import React from "react";
import "../styles/Doctor.css";

const Doctor = () => {
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
                <i className="material-icons">person</i>
              </a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
            <ul className="right">
              <li>
                <a href="#">
                  Doctor's<span className="board">Dashboard</span>
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Doctor;

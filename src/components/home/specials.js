import React, { useState } from "react";
import "../../styles/home/specials.css";
import image1 from "../../images/home/images/11.jpg";
import image2 from "../../images/home/images/07.jpg";
const Specials = () => {
  const [show, setShow] = useState(true);
  return (
    <div id="#specials">
      <div className="container">
        <center>
          <div>
            <h4>HAVE A LOOK AT</h4>
            <h2>Our Hospital Specialists</h2>
            <hr />
          </div>
          <div className="lists">
            <li
              onClick={() => {
                setShow(true);
              }}
              className="li1"
            >
              Primary Health Care
            </li>
            <li
              onClick={() => {
                setShow(false);
              }}
              className="li12"
            >
              All Other Departments
            </li>
          </div>
        </center>
      </div>
      {show ? (
        <div>
          <div className="nav" id="nav1">
            <div className="nav-items">
              <h1>Primary Health Care</h1>
              <li>
                Consectetur lorem ipsum dolor sit amet adipisicing elit sed Do
              </li>
              <li>
                Eiusmod tempor incididunt ut labore et dolore magna Dliqua Ut
              </li>
              <li>
                Enim ad minim veniam quis nostrud exercitation Ullamco laboris
              </li>
              <li>
                Nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
              </li>
              <p>
                Ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor idunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo
              </p>
            </div>
            <img className="image" src={image1} alt="" />
          </div>
        </div>
      ) : (
        <div>
          <div className="nav" id="nav2">
            <div className="nav-items">
              <h1>OUR DEPARTMENT</h1>
              <li>
                Consectetur lorem ipsum dolor sit amet adipisicing elit sed Do
              </li>
              <li>
                Eiusmod tempor incididunt ut labore et dolore magna Dliqua Ut
              </li>
              <li>
                Enim ad minim veniam quis nostrud exercitation Ullamco laboris
              </li>
              <li>
                Nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
              </li>
              <p>
                Ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor idunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo
              </p>
            </div>
            <img className="image1" src={image2} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};
export default Specials;

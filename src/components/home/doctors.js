import React from "react";
import "../../styles/home/doctor.css";
import image1 from "../../images/home/images/team/01.jpg";
import image2 from "../../images/home/images/team/02.jpg";
import image3 from "../../images/home/images/team/03.jpg";
import image4 from "../../images/home/images/team/04.jpg";

const Doctors = () => {
  return (
    <div id="doctors">
      <center>
        <div className="doc-title">
          <h4>MEET OUR SUPERHEROS</h4>
          <h1>Our Hospital Specialists</h1>
          <hr />
        </div>
      </center>
      <div className="doc-container-item">
        <div className="docs">
          <img className="doc-image" src={image1} alt="" />
          <h3>sixtus iwuchukwu</h3>
          <h4>CEO</h4>
          <h3>+(234)8100371154</h3>
          <h4>sixtusiwuchukwu21@gmail.com</h4>
          <div className="doc-media">
            <div className="doc-media-acc">f</div>
            <div className="doc-media-acc">t</div>
            <div className="doc-media-acc">i</div>
            <div className="doc-media-acc">ln</div>
          </div>
        </div>
        <div className="docs">
          <img className="doc-image" src={image2} alt="" />
          <h3>MARTIN SMITH</h3>
          <h4>CEO</h4>
          <h3>+(234)8100371154</h3>
          <h4>sixtusiwuchukwu21@gmail.com</h4>
          <div className="doc-media">
            <div className="doc-media-acc">f</div>
            <div className="doc-media-acc">t</div>
            <div className="doc-media-acc">i</div>
            <div className="doc-media-acc">ln</div>
          </div>
        </div>
        <div className="docs">
          <img className="doc-image" src={image3} alt="" />
          <h3>ANNE SMITH</h3>
          <h4>CEO</h4>
          <h3>+(234)8100371154</h3>
          <h4>sixtusiwuchukwu21@gmail.com</h4>
          <div className="doc-media">
            <div className="doc-media-acc">f</div>
            <div className="doc-media-acc">t</div>
            <div className="doc-media-acc">i</div>
            <div className="doc-media-acc">ln</div>
          </div>
        </div>
        <div className="docs">
          <img className="doc-image" src={image4} alt="" />
          <h3>SARA LISBON</h3>
          <h4>CEO</h4>
          <h3>+(234)8100371154</h3>
          <h4>sixtusiwuchukwu21@gmail.com</h4>
          <div className="doc-media">
            <div className="doc-media-acc">f</div>
            <div className="doc-media-acc">t</div>
            <div className="doc-media-acc">i</div>
            <div className="doc-media-acc">ln</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Doctors;

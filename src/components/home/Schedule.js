import React from "react";
import "../../styles/home/schedule.css";

const Footer = () => {
  return (
    <div className="schedule-container">
      <center>
        <div className="shed-title">
          <h4>OUR SCHEDULES</h4>
          <hr />
        </div>
        <fieldset>
          <legend>OPENING TIME</legend>
          <div className="day">
            <h4>Mon-Friday</h4>
            <h4 className="time">8Am-2PM</h4>
          </div>
          <hr />
          <div className="day">
            <h4>Saturday</h4>
            <h4 className="time">10Am-4PM</h4>
          </div>
          <hr />
          <div className="day">
            <h4>sunday</h4>
            <h4 className="time">10Am-4PM</h4>
          </div>
          <hr />
          <div className="day">
            <h4>On public holidays</h4>
            <h4 className="time">Closed</h4>
          </div>
        </fieldset>
      </center>
    </div>
  );
};

export default Footer;

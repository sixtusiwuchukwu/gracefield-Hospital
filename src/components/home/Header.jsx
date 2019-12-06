import React from "react";
import LOGO from '../../Assets/image/logo.png'

const Header = () => {
  return (
    <>
      <header id="header" class="header transparent">
        <div class="menu">
          <nav id="menu" class="mega-menu">
            <section class="menu-list-items">
              <div class="container">
                <div class="row">
                <div class="col-lg-12 col-md-12">
                
                <ul class="menu-logo">
                <li>
                  <a href="index-medical.html"><img src={LOGO} alt="logo" /> </a>
                </li>
              </ul>


              <div class="menu-bar">
              <ul class="menu-links">
                <li class="active"><a href="javascript:void(0)">Home </a> </li>
                <li><a href="demo-categories/medical/about.html">About Us</a>
                  <ul class="drop-down-multilevel left-side">
                    <li><a href="#">Faq’s</a> </li>
                    <li><a href="#">Contact</a> </li>
                  </ul>
                </li>
                <li><a href="demo-categories/medical/service.html">Service </a> </li>
                <li><a href="demo-categories/medical/doctors.html">Doctors</a> </li>
                <li><a href="demo-categories/medical/schedule.html">Schedule</a> </li>
                <li><a href="demo-categories/medical/appointment.html">Appointment</a> </li>
                <li><a href="demo-categories/medical/contact.html">Contact</a> </li>
                <li><a href="demo-categories/medical/contact.html">Login</a> </li>
                <li><a href="demo-categories/medical/contact.html">Sign Up</a> </li>
              </ul>
              <div class="search-cart">
                <div class="search">
               
                </div>
               
              </div>
            </div>

                </div>
                </div>
              </div>
            </section>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

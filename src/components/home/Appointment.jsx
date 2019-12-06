import React from 'react';
import img1 from '../../Assets/imag/06.jpg'

const Appointment = () => {
    return (
        <>
        <section class="" style={{}}>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="appointment-bg bg-overlay-theme-90 parallax" dataJarallax='{"speed": 0.6}'
                style={{backgroundImage: img1}}>
                <div class="row clearfix">
                  <div class="col-lg-6">
                    <span class="text-white">Need a doctor? </span>
                    <h3 class="text-white mb-20">Make an appointment now! </h3>
                    <p class="text-white">You can also contact the relevant department to choose a convenient date and
                      time by phone or online. </p>
                    <p class="text-white">Department to choose a convenient date and time by phone or online. </p>
                    <div class="contact-box mt-30 sm-mb-30">
                      <div class="contact-icon">
                        <i class="fa fa-plus-square text-white"></i>
                      </div>
                      <div class="contact-info">
                        <h5 class="text-white">+(704) 279-1249</h5>
                        <span class="text-white">Mon-Fri 8:30am-6:30pm</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="contact-form border-form full-width clearfix">
                      <div class="section-field">
                        <input id="name" type="text" placeholder="Name*" class="form-control placeholder"
                          name="frist name"   style={{backgroundColor:  "transparent"}}/>
                      </div>
                      <div class="section-field">
                        <input type="email" placeholder="Email*" class="form-control placeholder" name="email" style={{backgroundColor:  "transparent"}} />
                      </div>
                      <div class="section-field textarea">
                        <textarea class="input-message form-control placeholder" placeholder="Comment*" rows="4"
                          name="message"  style={{backgroundColor:  "transparent"}}></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="contact-form border-form full-width clearfix">
                      <div class="section-field">
                        <input type="text" placeholder="last Name*" class="form-control placeholder" name="last name"   style={{backgroundColor:  "transparent"}}/>
                      </div>
                      <div class="section-field mb-15">
                        <div class="box">
                          <select class="wide fancyselect" >
                            <option value="1">Some option</option>
                            <option value="2">Another option</option>
                            <option value="3">A option</option>
                            <option value="4">Potato</option>
                          </select>
                          </div>
                          </div>
                          </div>
                          <div class="section-field">
                             <a class="button white clearfix" href="#"  style={{backgroundColor:  "white"}}>Submit request </a>
                            <a class="mt-15 text-white float-left" href="#">All fields are required </a>
                          </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
        </>
    );
}

export default Appointment;

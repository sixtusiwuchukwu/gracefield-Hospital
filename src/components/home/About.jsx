import React from 'react';
import img1 from '../../Assets/imag/05.jpg'
const About = () => {
    return (
        <section class="page-section-pt">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-60">
                <h2>We care for your health</h2>
                <p>We work with patients, universities, industry and others to take the best new ideas from cutting-edge
                  science and use them to create tests and treatments that benefit patients more quickly.</p>
                <div class="mt-40">
                  <div class="row">
                    <div class="col-md-6 col-sm-6 xs-mb-30">
                      <ul class="list list-unstyled theme-color">
                        <li><i class="fa fa-plus-square"></i> Speech and language therapy</li>
                        <li><i class="fa fa-plus-square"></i> Clinical and health psychology</li>
                        <li><i class="fa fa-plus-square"></i> Clinical chemistry</li>
                        <li><i class="fa fa-plus-square"></i> Cellular pathology </li>
                        <li><i class="fa fa-plus-square"></i> Interventional radiology</li>
                        <li><i class="fa fa-plus-square"></i> Neuroradiology</li>
                      </ul>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <ul class="list list-unstyled theme-color">
                        <li><i class="fa fa-plus-square"></i> Cancer family history</li>
                        <li><i class="fa fa-plus-square"></i> Occupational therapy</li>
                        <li><i class="fa fa-plus-square"></i> Ear, nose and throat (ENT)</li>
                        <li><i class="fa fa-plus-square"></i> Ophthalmology</li>
                        <li><i class="fa fa-plus-square"></i> Reconstructive surgery</li>
                        <li><i class="fa fa-plus-square"></i> Oral surgery</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="clearfix">
                <img class="bottom-img mx-auto" src={img1} alt="" style={{position: "relative"}} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;

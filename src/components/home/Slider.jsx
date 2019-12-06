import React from "react";
import image1 from "../../Assets/imag/slider-medical/4c806-01.jpg";
import image2 from "../../Assets/imag/slider-medical/569a2-02.jpg";
const Slider = () => {
  return (
    <>
      <section class="rev-slider">
      <section class="slider">
      <div style={{position: "absolute", margin: "200px 280px ", wordSpacing: 4, letterSpacing: 2}}>
      <p style={{fontSize: 40, lineHeight: 0.8, fontFamily: "ubuntu", fontWeight: "bold", color: "#000"}}>We Care</p>
      <p style={{fontSize: 50, lineHeight: 0.8, fontFamily: "ubuntu", fontWeight: "bold", color: "#299be8"}}>For Your Health</p>
      <p style={{fontSize: 20, lineHeight: 0.8, fontFamily: "ubuntu", wordSpacing: 2, letterSpacing: 0}}>Entrust Your Health Our Doctors</p>
      </div>
      <img src={image1} alt="" />
      </section>
      </section>
    </>
  );
};

export default Slider;

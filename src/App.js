import React from "react";
import Specials from "./components/home/specials";
import Article from "./components/home/article";
import Doctors from "./components/home/doctors";
import Schedule from "./components/home/Schedule";
import Header from "./components/home/Header";
import Slider from "./components/home/Slider";
import Appointment from "./components/home/Appointment";
import About from "./components/home/About";
import Feature from "./components/home/Feature";
import "./styles/Home/css/plugins-css.css";
import "./styles/Home/css/medical.css";
import "./styles/Home/css/style.css";
import "./styles/Home/css/typography.css";
import "./styles/Home/css/responsive.css";
import "./styles/Home/css/skins/skin-blue.css";
import "./styles/Home/css/style-customizer.css";
import "./styles/Home/css/slide.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Doctor from "./components/Doctor";
import Patient from "./components/Patient";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Appointment />
      <About />
      <Feature />
      <Specials />
      <Article />
      <Doctors />
      <Schedule />
    </div>
  );
};

const Error = () => {
  return <h1>page not found</h1>;
};
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/doctor" component={Doctor} />
        <Route path="/patient" component={Patient} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

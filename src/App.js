import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Specials from "./components/home/specials";
import Article from "./components/home/article";
import Doctors from "./components/home/doctors";
import Schedule from "./components/home/Schedule";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Doctor from "./components/Doctor";
import Patient from "./components/Patient";

const Home = () => {
  return (
    <div>
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

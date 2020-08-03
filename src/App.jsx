import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// Components
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import NoMatch from "./Components/NoMatch";

export default class App extends Component {
  render() {
    return (
      <>
        <Nav name={"home"} />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </>
    );
  }
}

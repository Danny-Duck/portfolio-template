import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// Components
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import NoMatch from "./Components/NoMatch";
import Connect from "./Components/Connect";
import Login from "./Components/Login";

export default class App extends Component {
  nonNavRoutes = () => (
    <Switch>
      <Route path="/login" component={Login} />
      <Route component={NoMatch} />
    </Switch>
  );

  defaultRoutes = () => (
    <>
      <Nav name={"home"} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/connect" component={Connect} />
      </Switch>
      <Footer />
    </>
  );

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/(home|connect)/" render={this.defaultRoutes} />
          <Route render={this.nonNavRoutes} />
        </Switch>
      </>
    );
  }
}

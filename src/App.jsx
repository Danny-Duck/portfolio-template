import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// Components
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import NoMatch from "./Components/NoMatch";

export default class App extends Component {
  nonNavRoutes = () => (
    <Switch>
      <Route path="/login" render={() => <div>login</div>} />
      <Route component={NoMatch} />
    </Switch>
  );

  defaultRoutes = () => (
    <>
      <Nav name={"home"} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/connect" render={() => <div>connect</div>} />
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

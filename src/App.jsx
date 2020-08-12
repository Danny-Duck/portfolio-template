import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// Context
import { PostProvider } from "./PostContext";
import { ThemeProvider } from "./ThemeContext";
// Components
import Nav from "./Scenes/Common/Nav";
import Home from "./Scenes/Home/Home";
import Footer from "./Scenes/Common/Footer";
import NoMatch from "./Scenes/NoMatch";
import Connect from "./Scenes/Connect/Connect";
import Login from "./Scenes/Login/Login";

export default class App extends Component {
  NonNavbarRoutes = () => (
    <Switch>
      <Route path="/login" component={Login} />
      <Route component={NoMatch} />
    </Switch>
  );

  Routes = () => (
    <>
      <Nav />
      <Switch>
        <Route path="/home">
          <PostProvider>
            <Home />
          </PostProvider>
        </Route>
        <Route path="/connect" component={Connect} />
      </Switch>
      <Footer />
    </>
  );

  render() {
    return (
      <ThemeProvider>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/(home|connect)/" render={this.Routes} />
          <Route render={this.NonNavbarRoutes} />
        </Switch>{" "}
      </ThemeProvider>
    );
  }
}

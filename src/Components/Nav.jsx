import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <>
      <div style={{ height: "8vh" }}></div>
      <Navbar expand="sm" id="nav" fixed={"top"}>
        <p id="header">{window.location.pathname.split("/")}</p>
        <Navbar.Collapse>
          <div id="links">
            <Link to="/home">home</Link>
            <Link to="/home">contact me</Link>
            <Link to="/home">login</Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Nav;

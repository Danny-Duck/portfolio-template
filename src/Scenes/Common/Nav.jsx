import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { ThemeContext } from "../../ThemeContext";

// styled components
const Nav = styled(Toolbar)`
  box-shadow: ${(props) => props.dropshadow};
  background-color: pink;
  justify-content: space-between;
  height: 10vh;
`;

const Header = styled.p`
  font-size: 3em;
  font-family: ${(props) => props.headerFont};
  letter-spacing: 5px;
  margin-top: 0px;
  margin-bottom: 1px;
  margin-left: 8px;
`;

const NavLink = styled(Link)`
  margin: 8px;
  font-family: ${(props) => props.bodyFont};
  text-decoration: none;
  color: ${(props) => props.theme.white};
  outline: 0;
`;

// material ui
const useStyles = makeStyles((theme) => ({
  desktopOnly: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  mobileOnly: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
    },
  },
}));

export default function NavBar() {
  const { white, dropShadow, headerFont, bodyFont } = useContext(ThemeContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const currentLocation = window.location.pathname.split("/");

  const MenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <>
      <div style={{ height: "10vh" }}></div>
      <AppBar>
        <Nav dropshadow={dropShadow}>
          <Header headerFont={headerFont}>{currentLocation}</Header>
          <div className={classes.desktopOnly}>
            <NavLink theme={{ white, bodyFont }} to="/home">
              home
            </NavLink>
            <NavLink theme={{ white, bodyFont }} to="/connect">
              connect
            </NavLink>
            <NavLink theme={{ white, bodyFont }} to="/login">
              login
            </NavLink>
          </div>
          <IconButton className={classes.mobileOnly} onClick={MenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link to="/login">login</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/home">home</Link>
            </MenuItem>
            <MenuItem>
              <Link onClick={handleMenuClose} to="/connect">
                connect
              </Link>
            </MenuItem>
          </Menu>
        </Nav>
      </AppBar>
    </>
  );
}

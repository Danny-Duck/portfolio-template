import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

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
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const MenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <>
      <div style={{  }}></div>
      <AppBar>
        <Toolbar id="nav">
          <p id="header">{window.location.pathname.split("/")}</p>
          <div className={classes.desktopOnly}>
            <Link className={"link"} to="/home">
              home
            </Link>
            <Link className={"link"} to="/connect">
              connect
            </Link>
            <Link className={"link"} to="/login">
              login
            </Link>
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
        </Toolbar>
      </AppBar>
    </>
  );
}

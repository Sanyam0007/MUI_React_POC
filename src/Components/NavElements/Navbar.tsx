import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Products } from "./Products";

import { Profile } from "./Profile";
import { Logout } from "./Logout";
import { About } from "./About";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";

// const pages = [About,Products, Profile, Logout];
// const settings = [Profile, Account, DashBoard, Logout];
type MouseEventProps = {
  Active: MouseEvent;
};

const navStyling = () => {
  return {
    // fontWeight:"bold",
    // textDecoration"none":,
    color: "white",
    fontSize: "large",
  };
};
const homeStyling = () => {
  return {
    color: "black",
    fontSize: "20px",
  };
};

function Navbar() {
  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
  //   null
  // );
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null
  // );

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              //   fontFamily: 'monospace',
              fontWeight: 700,
              //   letterSpacing: '.3rem',
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <NavLink style={homeStyling} to={"/home"}>
              Home
            </NavLink>
          </Typography>
          <Box>
            <Container>
              <Typography>
                <NavLink style={navStyling} to={"/profile"}>
                  Profile
                </NavLink>
              </Typography>
            </Container>
          </Box>
          <Box>
            <Container>
              <Typography>
                <NavLink style={navStyling} to={"/about"}>
                  About
                </NavLink>
              </Typography>
            </Container>
          </Box>
          <Box>
            <Container>
              <Typography>
                <NavLink style={navStyling} to={"/products"}>
                  Products
                </NavLink>
              </Typography>
            </Container>
          </Box>
          <Box>
            <Container>
              <Typography>
                <NavLink style={navStyling} to={"/logout"}>
                  Logout
                </NavLink>
              </Typography>
            </Container>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

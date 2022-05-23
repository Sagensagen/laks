import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import moloenLogo from "../media/moloenLogo.png";
import { Menu, MenuItem } from "@mui/material";

export const HeaderBar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={props.home}>
        <p>Home</p>
      </MenuItem>
      <MenuItem onClick={props.vision}>
        <p>Vision</p>
      </MenuItem>
      <MenuItem onClick={props.sustainability}>
        <p>Sustainability</p>
      </MenuItem>
      <MenuItem onClick={props.contact}>
        <p>Contact Us</p>
      </MenuItem>
    </Menu>
  );
  return (
    <Box>
      <AppBar
        elevation={2}
        position="fixed"
        sx={{
          backgroundColor: "#1c1c1c",
          height: "5vh",
          display: "flex",
        }}
      >
        <Toolbar>
          <img
            src={moloenLogo}
            alt="logo"
            style={{
              height: "50%",
            }}
          />

          <Box
            sx={{
              justifyContent: "center",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              onClick={props.home}
              // onClick={handleCloseNavMenu}
              sx={{
                my: 2,

                display: "block",
              }}
            >
              <Typography variant="h6">Home</Typography>
            </Button>
            <Button
              onClick={props.vision}
              // onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Typography variant="h6">Vision</Typography>
            </Button>
            <Button
              onClick={props.sustainability}
              // onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Typography variant="h6">Sustainability</Typography>
            </Button>
            <Button
              onClick={props.contact}
              // onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Typography variant="h6">Contact us</Typography>
            </Button>
          </Box>
          <Box
            sx={{
              justifyContent: "end",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              color="inherit"
              aria-label="menu"
              sx={{ mr: 4 }}
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon sx={{ fontSize: 48, color: "white" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

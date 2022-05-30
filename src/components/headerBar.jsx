import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import moloenLogo from "../media/moloenLogo.png";
import { Menu, MenuItem, Link, Paper } from "@mui/material";

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
      <Paper>
        <MenuItem onClick={props.home} sx={{ bgcolor: "#2332d" }}>
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
      </Paper>
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
          <a href="https://moloen.no/v4/">
            <Box component="img" src={moloenLogo} width="5rem"></Box>
          </a>

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
              <Typography variant="h6" gutterBottom>
                Home
              </Typography>
            </Button>
            <Button
              onClick={props.vision}
              // onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Typography variant="h6" gutterBottom>
                Vision
              </Typography>
            </Button>
            <Button
              onClick={props.sustainability}
              // onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Typography variant="h6" gutterBottom>
                Sustainability
              </Typography>
            </Button>
            <Button
              onClick={props.contact}
              // onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Typography variant="h6" gutterBottom>
                Contact us
              </Typography>
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
    </Box>
  );
};

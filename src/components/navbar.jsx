import React from "react";
import { Link } from "react-router-dom";
import brandLogo from "../assets/images/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  appBarColor: {
    backgroundColor: "rgb(255, 81, 0)"
  },
  grow: {
    flexGrow: 1
  },
  loginButton: {
    margin: theme.spacing(1),
    color: "white"
  },
  brandLogo: {
    width: "100%",
    maxWidth: "35px",
    height: "40px"
  },
  loginButtonInMenu: {
    margin: theme.spacing(1),
    color: "black !important"
  },
  signupButton: {
    margin: theme.spacing(1),
    backgroundColor: "rgb(0, 151, 25)",
    color: "white"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  removeTextDeco: {
    textDecoration: "none",
    color: "white"
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Button
        className={classes.loginButtonInMenu}
        color="secondary"
        variant="contained"
      >
        <Link to="/login" className={classes.removeTextDeco}>
          Log in
        </Link>
      </Button>
      <br />
      <Button className={classes.signupButton} variant="contained">
        <Link to="/signup" className={classes.removeTextDeco}>
          Sign up
        </Link>
      </Button>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBarColor}>
        <Toolbar>
          <IconButton>
            <Link to="/">
              <img src={brandLogo} alt="logo" className={classes.brandLogo} />
            </Link>
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className={classes.removeTextDeco}>
              Maheshwari Samaj
            </Link>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button className={classes.loginButton}>
              <Link to="/login" className={classes.removeTextDeco}>
                Log in
              </Link>
            </Button>
            <Button className={classes.signupButton} variant="contained">
              <Link to="/signup" className={classes.removeTextDeco}>
                Sign up
              </Link>
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

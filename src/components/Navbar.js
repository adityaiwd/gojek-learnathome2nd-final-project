import React from "react";
import {
  Button,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core";
// import FastfoodRoundedIcon from "@material-ui/icons/FastfoodRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inline",
    },
  },
  title: {
    flexGrow: 1,
    margin:-25,
    color: "black",
    fontFamily: "Nexa",
    fontSize: 25,
    cursor: "pointer",
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navButton: {
    marginLeft: 20,
    marginRight:-25,
    fontFamily: "Nexa",
    textTransform: "none",
    backgroundColor: "#00A7E1",
    "&:hover": {
      backgroundColor: "#007AA3",
      color: "#FFF",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        style={{ backgroundColor: "white", paddingTop: 2, paddingBottom: 2}}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography className={classes.title} variant="h6">
              {/* <FastfoodRoundedIcon
                fontSize="large"
                style={{ marginRight: 10 }}
              /> */}
              gozomato
            </Typography>
            <Typography
              style={{ color: "black", fontFamily: "Nexa", fontSize:17}}
              variant="h6"
              className={classes.sectionDesktop}
            >
              
            </Typography>
            <Button color="inherit" className={classes.navButton}>
              Download
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;

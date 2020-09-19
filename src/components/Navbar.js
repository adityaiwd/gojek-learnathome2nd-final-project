import React from "react";
import {
  Button,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core";
import FastfoodRoundedIcon from "@material-ui/icons/FastfoodRounded";

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
    margin:"15px -15px",
    color: "black",
    fontFamily: "Nexa",
    fontSize: 22,
    cursor: "pointer",
    justifyContent:"center"
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navButton: {
    marginLeft: 20,
    marginRight:-20,
    fontFamily: "Nexa",
    textTransform: "none",
    backgroundColor: "#00A7E1",
    "&:hover": {
      backgroundColor: "#007AA3",
      color: "#FFF",
    },
  },
}));

function Navbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        style={{ backgroundColor: "white", paddingTop: 2, paddingBottom: 2}}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography className={classes.title} variant="h6">
              <FastfoodRoundedIcon
                
                style={{ marginRight: 10,fontSize:25 }}
              />
              gozomato
            </Typography>
            <Typography
              style={{ color: "black", fontFamily: "Nexa", fontSize:17}}
              variant="h6"
              className={classes.sectionDesktop}
            >
              Download the app
            </Typography>
            <Button color="inherit" onClick={() => props.scrollToDownload()} className={classes.navButton}>
              Download
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;

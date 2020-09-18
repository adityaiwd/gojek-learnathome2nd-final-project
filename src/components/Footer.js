import React from 'react';
import {
    makeStyles,
    Typography,
    Container
  } from "@material-ui/core";
  const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: "#EBEBEB",
        padding: "20px 0",
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
function Footer() {
  const classes = useStyles();
    return(
        <div className={classes.root}>
        <Container maxWidth="lg">
            <Typography style={{textAlign:"right"}}>© gozomato.co.id #learnathome goacademy</Typography>
        </Container>
        </div>
    );
}

export default Footer;
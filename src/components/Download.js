import React from "react";
import {
  Button,
  makeStyles,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import FastfoodRoundedIcon from "@material-ui/icons/FastfoodRounded";
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import AppleIcon from '@material-ui/icons/Apple';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#F5F5F5",
    padding: "80px 0",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inline",
    },
  },
  titles: {
    marginBottom: 50,
  },
  title: {
    flexGrow: 1,
    color: "black",
    fontFamily: "NexaBold",
    fontSize: 25,
    cursor: "pointer",
  },
  subtitle: {
    marginTop: 75,
    fontFamily: "Nexa",
    fontSize: 30,
    fontWeight: "bold",
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  download: {
    marginTop: 20,
    padding: "10px 20px",
    fontFamily: "NexaBold",
    textTransform: "none",
    color: "white",
    backgroundColor: "#00171F",
    "&:hover": {
      backgroundColor: "#00171F",
      color: "#FFF",
    },
  },
  cards: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  text: {
    marginTop: 20,
    fontFamily: "NexaLight",
    fontSize: 16,
  },
}));
function Download() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={6}>
            <Typography className={classes.title} variant="h6">
              <FastfoodRoundedIcon
                fontSize="large"
                style={{ marginRight: 10 }}
              />
              gozomato
            </Typography>
            <Typography paragraph className={classes.subtitle}>
            Your favorite food and new culinary results can be directly delivered
            </Typography>
            <Typography paragraph className={classes.text}>
              Download GoZomato to enjoy the services.
            </Typography>
            <div style={{marginBottom:10}}>
              <Button variant="contained" className={classes.download} style={{marginRight:20}}>
                <PlayArrowRoundedIcon style={{marginRight:20}} fontSize="large"/>
                <div style={{flexDirection:"column",alignItems:"left",fontFamily:"Nexa"}}>
                <Typography style={{textAlign:"left",fontFamily:"NexaLight"}}>Download the app at</Typography>
                <Typography style={{alignItems:"left",fontFamily:"NexaBold",fontSize:20}}>Google Play</Typography>
                    
                </div>
              </Button>
              <Button variant="contained" className={classes.download}>
                <AppleIcon style={{marginRight:20}} fontSize="large"/>
                <div style={{flexDirection:"column",alignItems:"left",fontFamily:"Nexa"}}>
                <Typography style={{textAlign:"left",fontFamily:"NexaLight"}}>Download the app at</Typography>
                <Typography style={{alignItems:"left",fontFamily:"NexaBold",fontSize:20}}>App Store</Typography>
                    
                </div>
              </Button>
            </div>
            <Typography paragraph className={classes.text} style={{margin:0}}>* yes, these buttons doesn't work</Typography>
          </Grid>
          <Grid item lg={7}></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Download;

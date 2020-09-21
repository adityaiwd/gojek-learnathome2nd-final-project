import React, { useState } from "react";
import Background from "../assets/jumbotronbg2.jpg";
import {
  makeStyles,
  Typography,
  TextField,
  Container,
  Button
} from "@material-ui/core";
import './font.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  notchedOutline: {
    borderWidth: 1,
    borderColor: "white !important",
    color: "white",
  },
  inputFont: {
    color: "white",
    "&$focusedLabel": {
      color: "white",
    },
    height: 10,
  },
  focusedLabel: {},
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inline",
    },
  },
  title: {
    color: "white",
    fontFamily: "NexaBold,Arial, sans-serif",
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 30,
  },
  subtitle: {
    color: "white",
    fontFamily: "Nexa,Arial, sans-serif",
    fontSize: 20,
    width: "100%",
    display:"inline",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center"
  },
  jumboBg: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "275px",
    padding: "80px 0px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  navButton: {
    width: "auto",
    height: "100%",
    padding: "5px 25px",
    marginTop: 10,
    fontFamily: "NexaBold",
    textTransform: "none",
    backgroundColor: "#00A7E1",
    color: "white",
    "&:hover": {
      backgroundColor: "#007AA3",
    color: "white",

    },
  },
}));

function Jumbotron(props) {
  const classes = useStyles();
  const [term, setTerm] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(term);
    setTerm("");
  };

  return (
    <div className={classes.jumboBg}>
      <Container maxWidth="lg">
        <Typography className={classes.title}>
          Taste a variety of the top restaurants in your city
        </Typography>
        <div className={classes.subtitle}>
          <form onSubmit={onFormSubmit}>
            <TextField
              style={{ padding: "5px 0" }}
              fullWidth
              InputLabelProps={{
                classes: {
                  root: classes.inputFont,
                  focused: classes.focusedLabel,
                },
              }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                  input: classes.inputFont,
                },
                "data-testid": "searchbar",
              }}
              label="Search City"
              variant="outlined"
              placeholder={"current city: " + props.city}
              onChange={(e) => setTerm(e.target.value)}
            />
            <Button color="inherit" onClick={term? onFormSubmit : ""} className={classes.navButton}>
              Change City
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Jumbotron;

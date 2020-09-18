import React,{useState} from "react";
import Background from "../assets/jumbotronbg2.jpg";
import { makeStyles, Typography, TextField, Container} from "@material-ui/core";

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
    fontFamily: "Nexa",
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 30
  },
  subtitle: {
    color: "white",
    fontFamily: "Nexa",
    fontSize: 20,
    width:"100%",
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
    position: "relative",
    width: "100%",
  },
  navButton: {
    width: "100%",
    height: "100%",
    fontFamily: "Nexa",
    textTransform: "none",
    backgroundColor: "white",
    borderRadius:"0 5px 5px 0",
    color: "black",
    "&:hover": {
      backgroundColor: "#E0E0E0",
    },
  },
}));
function Jumbotron(props) {
  const classes = useStyles();
  const [term,setTerm] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(term);
    setTerm("");
  }

  return (
    <div className={classes.jumboBg}>
    <Container maxWidth="lg">

      <Typography className={classes.title}>
      Taste a variety of the top restaurants in your city
      </Typography>
      <div className={classes.subtitle}>
      <form onSubmit={onFormSubmit}>

      
        <TextField
          style={{padding:"5px 0"}}
          fullWidth
          InputLabelProps={{
            classes: { root: classes.inputFont, focused: classes.focusedLabel },
          }}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
              input: classes.inputFont,
            }
          }}
          label="Search City"
          variant="outlined"
          placeholder={"current city: "+props.city}
          onChange={e => setTerm(e.target.value)}
        />

     
        
      
      </form>
      </div>
    </Container>
    </div>
  );
}

export default Jumbotron;

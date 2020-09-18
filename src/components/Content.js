import React, { useState, useEffect } from "react";
import { getCities, searchRestaurants } from "./api";
import { parseCitySuggestions, parseSearchRestaurants } from "./utils";
import FoodCard from "./FoodCard";
import {
  Button,
  makeStyles,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
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
    color: "black",
    fontFamily: "Nexa",
    fontSize: 22.4,
    cursor: "pointer",
  },
  subtitle: {
    fontFamily: "Nexa",
    fontSize: 17.6,
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navButton: {
    padding: "10px 20px",
    fontSize: 17,
    marginBottom: 50,
    fontFamily: "Nexa",
    textTransform: "none",
    color: "white",
    backgroundColor: "#00A7E1",
    "&:hover": {
      backgroundColor: "#007AA3",
      color: "#FFF",
    },
  },
  cards: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
}));

function Content(props) {
  const classes = useStyles();
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const searchRestaurantsFromCity = async () => {
      const cities = parseCitySuggestions(await getCities(props.city));
      setCitySuggestions(cities);
  
      if (cities.length > 0) {
        const restaurants = parseSearchRestaurants(
          await searchRestaurants(cities[0].id)
        );
        setRestaurants(restaurants);
      }
    };
    searchRestaurantsFromCity();
  }, [props.city,JSON.stringify(restaurants)]);


  // if (!restaurants && !cityQuery) return false;

  // useEffect(() => {
  //   const cities = parseCitySuggestions(await getCities(cityQuery));
  //   setCitySuggestions(cities);
  //   setRestaurants(
  //   )
  // }, [cityQuery,restaurants])


  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.titles}>
          <Typography className={classes.title} variant="h6">
           {citySuggestions? "Discover the best food & drinks in "+props.city.charAt(0).toUpperCase() + props.city.slice(1) : "Sorry we couldn't find your city" } 
          </Typography>
          <Typography className={classes.subtitle}>
            {restaurants ? "Have a look at delicious food, choose what you like, some of them can deliver to you." : ""}
          </Typography>
        </div>
        {!restaurants? <SentimentVeryDissatisfiedIcon /> :
        
        <div className={classes.cards}>
          {citySuggestions.length > 0 && (
            <Grid container spacing={3} style={{ marginBottom: 50 }}>
              {restaurants.map((e) => (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <FoodCard key={e.id} data={e} />
                </Grid>
              ))}
            </Grid>
          )}
          <Button
            variant="contained"
            color="inherit"
            className={classes.navButton}
          >
            More
          </Button>
        </div>
        }
      </Container>
    </div>
  );
}

export default Content;

import React, { useState, useEffect } from "react";
import { getCities, searchRestaurants } from "./api";
import { parseCitySuggestions, parseSearchRestaurants } from "./utils";
import FoodCard from "./FoodCard";
import MobileFoodCard from "./MobileFoodCard";
import {
  makeStyles,
  Grid,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import './font.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    },
  },
  titles: {
    marginBottom: 50,
  },
  title: {
    color: "black",
    fontFamily: "NexaBold",
    fontSize: 22.4,
    cursor: "pointer",
  },
  subtitle: {
    fontFamily: "NexaLight",
    fontSize: 17.6,
  },
  sectionMobile: {
    display: "flex",
    justifyContent:"center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  navButton: {
    padding: "10px 20px",
    fontSize: 17,
    marginBottom: 50,
    fontFamily: "NexaBold",
    textTransform: "none",
    color: "white",
    backgroundColor: "#00A7E1",
    "&:hover": {
      backgroundColor: "#007AA3",
      color: "#FFF",
    },
    textAlign:"center"
  },
  moreMobileButton: {
    padding: "10px 20px",
    fontSize: 17,
    marginBottom: 50,
    fontFamily: "NexaBold",
    textTransform: "none",
    color: "white",
    backgroundColor: "#00A7E1",
    "&:hover": {
      backgroundColor: "#007AA3",
      color: "#FFF",
    },
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  cards: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    alignContent:"center"
  },
}));

function Content(props) {
  const classes = useStyles();
  const cityQuery = props.city;
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  let restaurantArray = JSON.stringify(restaurants);

  useEffect(() => {
    const searchRestaurantsFromCity = async () => {
      setLoading(true);
      const cities = parseCitySuggestions(await getCities(cityQuery));
      setCitySuggestions(cities);
  
      if (cities.length > 0) {
        const restaurants = parseSearchRestaurants(
          await searchRestaurants(cities[0].id)
        );
        setLoading(false);
        setRestaurants(restaurants);
      } else {
        setRestaurants([]);
        setLoading(false);
      }
    };
    setLoading(true);
    searchRestaurantsFromCity();
  }, [cityQuery, restaurantArray]);


  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.titles}>
          <Typography className={classes.title} variant="h6">
            {"Displaying food & beverage places in " +
              props.city.charAt(0).toUpperCase() +
              props.city.slice(1)}
          </Typography>
          <Typography className={classes.subtitle}>
            {restaurants.length > 0
              ? "Have a look at delicious food, choose what you like, some of them can deliver to you."
              : ""}
          </Typography>
        </div>
        {loading ? (
          <Grid container alignContent="center">
            <Grid
              item
              xs={12}
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                className={classes.subtitle}
                style={{ textAlign: "center" }}
              >
                Fetching restaurants data...
              </Typography>
              <CircularProgress color="primary" style={{ margin: "50px 0" }} />
            </Grid>
          </Grid>
        ) : restaurants.length === 0 ? (
          <Grid container alignContent="center">
            <Grid
              item
              xs={12}
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                className={classes.subtitle}
                style={{ textAlign: "center" }}
              >
                Sorry we couldn't find any restaurants here
              </Typography>
              <SentimentVeryDissatisfiedIcon
                style={{ margin: "20px 0", fontSize: 50 }}
              />
            </Grid>
          </Grid>
        ) : (
          <div className={classes.cards}>
          <div className={classes.sectionDesktop}>
          {citySuggestions.length > 0 && (
              <Grid container spacing={3} style={{ marginBottom: 50 }}>
                {restaurants.map((e) => (
                  <Grid item lg={3} md={4} sm={6} xs={12}>
                    <FoodCard key={e.id} data={e} />
                  </Grid>
                ))}
              </Grid>
            )}
          </div>
            <div className={classes.sectionMobile}>
            {citySuggestions.length > 0 && (
              <Grid container spacing={3} style={{ marginBottom: 100 }}>
                {restaurants.map((e) => (
                  <Grid item lg={3} md={4} sm={6} xs={12}>

                    <MobileFoodCard key={e.id} data={e} />
                  </Grid>

                ))}
              </Grid>
            )}
            </div>
          </div>
          
        )}
      </Container>
    </div>
  );
}

export default Content;

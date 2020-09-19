import React from "react";
import {
  makeStyles,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  Typography
} from "@material-ui/core";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BrokenImageIcon from "@material-ui/icons/BrokenImage";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    cursor: "pointer",
    position: "relative",
    transitionProperty: "position bottom",
    transitionDuration: "3s",
    "&:hover": {
      bottom: 10,
      position: "relative",
    },
  },
  header: {
    fontFamily: "Nexa",
    textTransform: "none",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  noImage: {
    display: "flex",
    justifyContent: "center",
    margin: "40px 0",
  },
}));

function FoodCard({ data }) {
  const classes = useStyles();
  const { name, picture, cuisines, priceRange, rating } = data;
  const price = priceRange;
  const rangePrice = [...Array(price)];
  const remainderPrice = [...Array(5-rangePrice.length)];
  return (
    <div>
      <Card className={classes.root}>
        {picture ? (
          <CardMedia className={classes.media} image={picture} />
        ) : (
          <div className={classes.noImage}>
            <BrokenImageIcon style={{ fontSize: 70, color: "#858585" }} />
          </div>
        )}
        <CardHeader
          title={
            <Typography
              className={classes.header}
              style={{ fontWeight: "bold", fontSize: 17, marginBottom: 10 }}
            >
              {name}
            </Typography>
          }
          subheader={
            <Typography
              className={classes.header}
              style={{ fontSize: 13, marginBottom: -15 }}
            >
              {cuisines}
            </Typography>
          }
        />
        <CardActions>
          <div style={{ flexGrow: 1, flexDirection: "row" }}>
            <Typography
              style={{
                fontSize: 15,
                fontWeight: "bold",
                fontFamily: "Montserrat",
                display: "flex",
                alignItems: "center",
              }}
            >
              <StarRoundedIcon
                style={{ color: "#ECD907", fontSize: 30, marginRight: 10 }}
              />
              {rating}
            </Typography>
          </div>
          <div style={{ marginRight: 20 }}>
            {rangePrice.map((e) => (
              <AttachMoneyIcon style={{ marginRight: -8, fontSize: 20 }} />
            ))}
            {remainderPrice.map((e) => (
              <AttachMoneyIcon style={{ marginRight: -8, fontSize: 20 ,color:"#999999"}} />
            ))}
          </div>
        </CardActions>
      </Card>
    </div>
  );
}

export default FoodCard;

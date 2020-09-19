import React from "react";
import {
  makeStyles,
  Typography
} from "@material-ui/core";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BrokenImageIcon from "@material-ui/icons/BrokenImage";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: 10,
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
    width: 110,
    height: 110,
    justifyContent: "center",
    marginRight: 20,
  },
  thumbnail: {
    width: 110,
    height: 110,
    borderRadius: 10,
    marginRight: 20,
  },
}));

function MobileFoodCard({ data }) {
  const classes = useStyles();
  const { name, picture, cuisines, priceRange, rating } = data;
  const price = priceRange;
  const rangePrice = [...Array(price)];
  const remainderPrice = [...Array(5 - rangePrice.length)];
  return (
    <div className={classes.root}>
      {picture ? (
        <img src={picture} alt="thumbnail" className={classes.thumbnail} />
      ) : (
        <div className={classes.noImage}>
          <BrokenImageIcon style={{ fontSize: 90, color: "#858585" }} />
        </div>
      )}
      <div style={{display:"flex",alignItems:"left",justifyContent:"center",flexDirection:"column"}}>
        <Typography
          className={classes.header}
          style={{ fontWeight: "bold", fontSize: 15, marginBottom: 7 }}
        >
          {name}
        </Typography>
        <Typography
          className={classes.header}
          style={{ fontSize: 11, marginBottom: 5 }}
        >
          {cuisines}
        </Typography>
        <div style={{}}>
          <div style={{ flexGrow: 1 }}>
            <Typography
              style={{
                fontSize: 12,
                fontWeight: "bold",
                fontFamily: "Montserrat",
                display: "flex",
                alignItems: "center",
              }}
            >
              <StarRoundedIcon
                style={{ color: "#ECD907", fontSize: 25, marginRight: 10 }}
              />
              {rating}
              <div style={{ marginLeft: 10 }}>
                {rangePrice.map((e) => (
                  <AttachMoneyIcon style={{ marginRight: -6, fontSize: 17 }} />
                ))}
                {remainderPrice.map((e) => (
                  <AttachMoneyIcon
                    style={{ marginRight: -6, fontSize: 17, color: "#999999" }}
                  />
                ))}
              </div>
            </Typography>
          </div>
        </div>
      </div>
      {/* <Card className={classes.root}>
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
              <AttachMoneyIcon
                style={{ marginRight: -8, fontSize: 20, color: "#999999" }}
              />
            ))}
          </div>
        </CardActions>
      </Card> */}
    </div>
  );
}

export default MobileFoodCard;

import React from "react";
import { makeStyles,Card,CardHeader,CardMedia,CardActions,Typography,CircularProgress } from "@material-ui/core";
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    cursor:"pointer",
    position: "relative",
    transitionProperty: "position bottom",
    transitionDuration:"3s",
    "&:hover": {
      bottom: 10,
      position: "relative"
    },
  },
  header:{
    fontFamily:"Nexa",
    textTransform: "none"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  
}));

function FoodCard({data}) {
  const classes = useStyles();
  const { name, picture, cuisines, priceRange, rating } = data;
  const price = priceRange;
  const rangePrice = [...Array(price)];

  return (
    <div>
      <Card className={classes.root}>
        {picture? 
        <CardMedia
          className={classes.media}
          image={picture}
        /> :
        <CircularProgress style={{position:"relative", left:"45%", margin:"50px 0"}}/>
        }
        <CardHeader
            
          title= {
           <Typography className={classes.header} style={{fontWeight:"bold",fontSize:17, marginBottom:10}}>
            {name}
           </Typography>   
          }
          subheader={
           <Typography className={classes.header} style={{fontSize:13,marginBottom:-15}}>
            {cuisines}
           </Typography>   
          }
        />
        <CardActions>
            <StarRoundedIcon style={{color:"#ECD907"}}/>
          <Typography>
              {rating}
          </Typography>
          <div style={{marginLeft:30}}>

          {rangePrice.map((e) => (
                <AttachMoneyIcon style={{marginRight:0}} />
              ))}
          </div>
        </CardActions>
      </Card>
    </div>
  );
}

export default FoodCard;

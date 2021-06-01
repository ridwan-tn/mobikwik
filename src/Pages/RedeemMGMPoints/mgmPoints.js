import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import mutualfund53 from "../assets/mutualfund53.png";
import mutualfund200 from "../assets/mutualfund200.png";
import mutualfund201 from "../assets/mutualfund201.png";
import mutualfund202 from "../assets/mutualfund202.png";
import mutualfund203 from "../assets/mutualfund203.png";
import mutualfund247 from "../assets/mutualfund247.png";
import mutualfund248 from "../assets/mutualfund248.png";
import mutualfund249 from "../assets/mutualfund249.png";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import FooterMain from "../FooterMain/footerMain";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#002447",
    color: "white",
  },
  tabContainer: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  imageconatiner: {
    [theme.breakpoints.down("sm")]: {
      justify: "center",
      width: "250px",
      height: "400px",
    },
  },
  hcontainer: {
    paddingLeft: "10px",
    padddingBottem: "10px",
    paddingRight: "10px",
    padddingTop: "10px",
    fontsize: "30px",
    fontWeight: "bolder",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
  },
  hcontainer3: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  h2conatiner: {
    [theme.breakpoints.down("sm")]: {
      fontsize: "10px",
    },
  },
  pcontainer: {
    paddingLeft: "10px",
    paddingRight: "10px",
    fontsize: "25px",
    [theme.breakpoints.down("sm")]: {
      fontsize: "15px",
      paddingLeft: "5px",
      paddingRight: "5px",
    },
    [theme.breakpoints.down("xs")]: {
      fontsize: "15px",
      paddingLeft: "5px",
      paddingRight: "5px",
    },
  },
  buttonContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "10px",
    color: "white",

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
      width: "100%",
      color: "white",
    },

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
      width: "100%",
    },
  },
  bconatiner: {
    paddingLeft: "1em",
    paddingRight: "1em",
    borderRadius: "10px",
    color: "white",
    fontSize: "25px",
    backgroundColor: "rgb(178,178,178)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: "20px",
    },
  },
  media: {
    height: "100%",
    width: "100%",
  },
  paperContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingRight: "10px",
    paddingLeft: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
    width: "100%",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      paddingLeft: "1em",
      paddingRight: "1em",
    },
  },
  imagecontainer: {
    paddingLeft: "10px",
    paddingRight: "10px",
    width: "350px",
    height: "200px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10px",
      paddingRight: "10px",
      width: "200px",
      height: "200px",
    },
  },
  imagecontainer1: {
    paddingLeft: "10px",
    paddingRight: "10px",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10px",
      paddingRight: "10px",
      width: "200px",
    },
  },
  mainDiv: {
    marginLeft: "16.6em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0.3em",
    },
  },
  paper: {
    margin: "",
    width: "100%",
    height: "",
    paddingTop: "10px",
    paddingLeft: "10px",
    paddingBottom: "10px",
    paddingRight: "10px",
    backgroundColor: "#002447",
    borderRadius: "4px",
  },
  footer: {
    marginTop: "-9em",

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));
export default function RadeemMgm() {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      <Grid item container className={classes.paper}>
        <Grid item md={10}>
          <Typography
            variant="h5"
            style={{ color: "white", margin: "10px" }}
            className={classes.hcontainer}
          >
            Spend more. Save more.
          </Typography>
        </Grid>

        <Typography
          variant="h6"
          style={{ color: "white", margin: "5px" }}
          className={classes.hcontainer3}
        >
          Daily savings with Max Get More on MobiKwik!
        </Typography>

        <Paper className={classes.paperContainer}>
          <Grid item container spacing={2}>
            <Grid item md={5} style={{ textAlign: "left" }}>
              <Typography style={{ fontSize: "13px" }}>
                MGM CardNumber
              </Typography>
              <TextField
                id="outlined-basic"
                placeholder="Enter Mgm CardNumber"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item md={5}>
              <Typography style={{ fontSize: "13px", color: "white" }}>
                MGM CardNumber
              </Typography>
              <TextField
                id="outlined-basic"
                placeholder=""
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item md={2}>
              <Typography style={{ fontSize: "13px", color: "white" }}>
                MGM CardNumber
              </Typography>
              <button className={classes.bconatiner}>Redeem</button>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justify="center"
            className={classes.captionContainer}
          ></Grid>
          <Grid item container>
            <Typography style={{ fontsize: "13px" }}>
              {" "}
              Total points available for radeem xxxx
            </Typography>
          </Grid>

          <br />
        </Paper>
      </Grid>

      <Grid item container style={{ marginTop: "20px" }}>
        <Grid item style={{ textAlign: "left" }}>
          <Typography className={classes.hcontainer}>
            {" "}
            What is Max Get More?
          </Typography>
        </Grid>

        <Grid item container style={{ marginTop: "25px" }}>
          <Grid item md={7} className={classes.pcontainer}>
            <Typography variant="p">
              {" "}
              Max Get More is a reward program that has partnered with major
              banks in India. Whenever you shop through a credit or debit card
              of the partnered banks, you earn Max Get More points. Go a step
              further and get additional points by shopping at Max Get More
              partner stores. Multiply your reward point earnings just by
              shopping at the right stores with the right bank card. MGM has
              partnered with all the major Banks in India to ensure that all
              your spends earn you higher rewards.
            </Typography>
          </Grid>

          <Grid md={4}>
            <Card className={classes.imagecontainer}>
              <CardMedia className={classes.media} image={mutualfund53} />
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container style={{ marginTop: "20px" }}>
        <Grid item style={{ textAlign: "left" }}>
          <Typography className={classes.hcontainer}>
            Bank Partners with Max Get More
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.imagecontainer1}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid item md={3}>
          <img src={mutualfund200} />
        </Grid>
        <Grid item md={3}>
          <img src={mutualfund201} />
        </Grid>
        <Grid item md={3}>
          <img src={mutualfund202} />
        </Grid>
        <Grid item md={3}>
          <img src={mutualfund203} />
        </Grid>
      </Grid>
      <Grid item container>
        <Grid
          item
          style={{ textAlign: "left", marginTop: "25px", marginBottom: "25px" }}
        >
          <Typography className={classes.hcontainer}>
            {" "}
            Redeem Points for free shopping
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item>
          <Typography
            variant="p"
            style={{ color: "rgb(107,107,106)", fontsize: "13px" }}
          >
            You can convert these MGM points into MobiKwik cash on the app. You
            can also use these points to recharge your phone or pay your utility
            bills. MGM has also partnered with a lot of merchants to make you
            earn a little extra every time you spend.
          </Typography>
        </Grid>
      </Grid>

      <Grid item container>
        <Grid
          item
          style={{ textAlign: "left", marginTop: "25px", marginBottom: "25px" }}
        >
          <Typography className={classes.hcontainer}>
            {" "}
            How to redeem Max Get More points at MobiKwik app?
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.paper2}
        spacing={2}
        styel={{ justifyContent: "cneter", alignItems: "center" }}
      >
        <Grid md={4} style={{ textAlign: "center" }}>
          <Typography varient="h6">Step1</Typography>
          <img src={mutualfund247} style={{ height: "400px" }} />
          <br />
          <Typography style={{ fontSize: "10px" }}>
            Visit ‘Wallet’ on the MobiKwik App
          </Typography>
        </Grid>
        <Grid md={4} style={{ textAlign: "center" }}>
          <Typography varient="h6">Step2</Typography>
          <img src={mutualfund248} style={{ height: "400px" }} />
          <Typography style={{ fontSize: "10px" }}>
            Find Payback in the Points to Redeem Section
          </Typography>
        </Grid>
        <Grid md={4} style={{ textAlign: "center" }}>
          <Typography varient="h6">Step3</Typography>
          <img src={mutualfund249} style={{ height: "400px" }} />
          <Typography style={{ fontSize: "10px" }}>
            Select your PAYBACK card, enter the required amount and voila!
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.footer}>
          <FooterMain/>
        </div>
    </div>
  );
}

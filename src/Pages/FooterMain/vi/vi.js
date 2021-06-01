import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {
  fade,
  makeStyles,
  rgbToHex,
  withStyles,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import { Autocomplete } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import mutualfund250 from "../../assets/mutualfund250.png";
import { Table } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  main: {
    marginLeft: "16.2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0.1em",
    },
  },
  paper1: {
    height: "",
    width: "",

    paddingLeft: "25px",
    paddingRight: "25px",
    paddingTop: "20px",
    paddingBottom: "20px",
    backgroundColor: "#002447",

    [theme.breakpoints.down("md")]: {
      height: "",
      width: "",
      paddingLeft: "25px",
      paddingRight: "25px",
      paddingTop: "25px",
      paddingBottom: "25px",
      backgroundColor: "#002447",
      marginLeft: "1px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "",
      width: "",
      paddingLeft: "5px",
      paddingRight: "5px",
      paddingTop: "5px",
      paddingBottom: "5px",
      backgroundColor: "#002447",
    },
    [theme.breakpoints.down("xs")]: {
      height: "",
      width: "",
      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "25px",
      paddingBottom: "25px",
      backgroundColor: "#002447",
      marginLeft: "1px",
    },
  },
  Tablefont: {
    fontSize: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "10px",
  },
  Avatar1: {
    [theme.breakpoints.down("md")]: {
      width: "75px",
      height: "75px",
    },
    [theme.breakpoints.down("sm")]: {
      height: 50,
      width: 50,
    },
    [theme.breakpoints.down("xs")]: {
      height: 50,
      width: 50,
    },
  },
  media: {
    width: "350px",
    height: "300px",
    [theme.breakpoints.down("md")]: {
      width: "300px",
      height: "250px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "250px",
      height: "150px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "150px",
      height: "100px",
    },
  },
  paper2: {
    height: "100%",
    position: "fixed",
    width: "200px",
    paddingLeft: "50px",
    paddingRight: "25px",
    paddingTop: "50px",
    paddingBottom: "50px",
    backgroundColor: "#002447",

    [theme.breakpoints.down("md")]: {
      display: "none",
      height: "100%",
      width: "200",
      paddingLeft: "25px",
      paddingRight: "25px",
      paddingTop: "25px",
      paddingBottom: "25px",
      backgroundColor: "#002447",
      marginLeft: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
      height: "",
      width: "",
      paddingLeft: "5px",
      paddingRight: "5px",
      paddingTop: "25px",
      paddingBottom: "25px",
      backgroundColor: "#002447",
      marginLeft: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
      height: "",
      width: "",
      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "25px",
      paddingBottom: "25px",
      backgroundColor: "#002447",
      marginLeft: "10px",
    },
  },
  Header1: {
    fontSize: 25,
    color: "white",

    paddingLeft: "10px",
    paddingRight: "25px",
    paddingTop: "20px",
    paddingBottom: "20px",

    [theme.breakpoints.down("md")]: {
      fontSize: 25,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "10px",
      paddingBottom: "10pxpx",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "10px",
      paddingBottom: "10pxpx",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "10px",
      paddingBottom: "10pxpx",
    },
  },
  Header2: {
    fontSize: 20,
    color: "black",

    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",

    [theme.breakpoints.down("md")]: {
      fontSize: 25,

      color: "black",

      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,

      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,

      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",
    },
  },
  Header4: {
    fontSize: 14,
    color: "rgb(119,119,119)",

    paddingLeft: "20px",
    paddingRight: "10px",
    paddingTop: "20px",
    paddingBottom: "10px",

    [theme.breakpoints.down("md")]: {
      fontSize: 20,

      color: "black",

      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,

      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,

      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",
    },
  },
  Header3: {
    fontSize: 15,
    color: "black",
    fontWeight: "bolder",

    paddingLeft: "40px",
    paddingRight: "10px",
    paddingTop: "20px",
    paddingBottom: "20px",

    [theme.breakpoints.down("md")]: {
      fontSize: 10,

      color: "black",

      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,

      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,

      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",
    },
  },
  caption1: {
    fontSize: 13,

    paddingLeft: "10px",

    [theme.breakpoints.down("md")]: {
      fontSize: 10,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "10px",
      paddingBottom: "10pxpx",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "10px",
      paddingBottom: "10pxpx",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "10px",
      paddingBottom: "10pxpx",
    },
  },
  Header6: {
    fontSize: "13px",

    paddingLeft: "40px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "10px",

    paddingLeft: "10px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "9px",

    paddingLeft: "10px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "9px",

    paddingLeft: "10px",
  },
  card1: {
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "25px",
    paddingBottom: "25px",

    [theme.breakpoints.down("md")]: {
      fontSize: 25,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
    },
  },
  Button1: {
    marginLeft: "20px",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
    width: "50px",
    height: "50px",
    fontSize: "15px",
    color: "white",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "rgb(178,178,178)",
    },
    backgroundColor: "rgb(178,178,178)",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingTop: "20px",
      paddingBottom: "20px",
      width: "100%",
      height: "50px",
      fontSize: "25px",
      color: "white",
      marginTop: "25px",
      "&:hover": {
        backgroundColor: "rgb(178,178,178)",
      },
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "25px",
      paddingRight: "25px",
      paddingTop: "5px",
      paddingBottom: "5px",
      width: "100%",
      height: "50px",
      fontSize: "15px",
      color: "white",
      marginTop: "10px",
      "&:hover": {
        backgroundColor: "rgb(178,178,178)",
      },
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "25px",
      paddingRight: "25px",
      paddingTop: "5px",
      paddingBottom: "5px",
      width: "100%",
      height: "50px",
      fontSize: "15px",
      color: "white",
      marginTop: "10px",
      "&:hover": {
        backgroundColor: "rgb(178,178,178)",
      },
    },
  },
  Text1: {
    paddingLeft: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: 25,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
      width: "100%",
    },
  },
  Select1: {
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingRight: "50px",
    paddingLeft: "50px",
    width: "100%",
    fontSize: 15,
    backgroundColor: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: 25,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
      width: "",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
      width: "",
      marginLeft: "0px",
      marginTop: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
      width: "",
      marginLeft: "0px",
      marginTop: "20px",
    },
  },
  Header5: {
    marginLeft: "45px",
    marginTop: "25px",
    fontSize: "15px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0px",
      marginTop: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      marginTop: "25px",
      fontSize: "5px",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
      marginTop: "25px",
      fontSize: "5px",
    },
  },
  Grid1: {
    paddingTop: "50px",
    paddingBottom: "20px",
    paddingRight: "25px",
    paddingLeft: "25px",

    marginTop: "100px",
    backgroundColor: "rgb(243,243,243)",
    [theme.breakpoints.down("md")]: {
      fontSize: 25,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
      width: "",

      backgroundColor: "rgb(243,243,243)",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
      width: "",
      marginLeft: "0px",
      marginTop: "20px",
      backgroundColor: "rgb(243,243,243)",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
      width: "",
      marginLeft: "0px",
      marginTop: "20px",
      backgroundColor: "rgb(243,243,243)",
    },
  },
  Grid2: {
    paddingLeft: "50px",

    [theme.breakpoints.down("md")]: {
      fontSize: 25,

      paddingLeft: 10,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,

      paddingLeft: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,

      paddingLeft: 10,
    },
  },
  Card3: {
    paddingTop: "50px",
    paddingBottom: "50px",
    [theme.breakpoints.down("md")]: {
      fontSize: 25,
      display: "none",
      marginLeft: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      display: "none",
      marginLeft: "0px",
    },
  },
  Card4: {
    paddingLeft: "10px",

    [theme.breakpoints.down("md")]: {
      fontSize: 25,

      marginLeft: "0px",
      marginLeft: "0px",
      paddingLeft: "1em",
      paddingRight: "1em",
      paddingBottom: "1em",
      paddingTop: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
      marginLeft: "0px",
      marginLeft: "0px",
      paddingLeft: "1em",
      paddingRight: "1em",
      paddingBottom: "1em",
      paddingTop: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      marginLeft: "0px",
      marginLeft: "0px",
      paddingLeft: "1em",
      paddingRight: "1em",
      paddingBottom: "1em",
      paddingTop: "1em",
    },
  },
  imagecontainer: {
    width: "600px",
    height: "",
    paddingTop: "100px",
    marginLeft: "35px",
    [theme.breakpoints.down("md")]: {
      width: "200px",
      height: "150px",
      paddingTop: "50px",
      marginLeft: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "250px",
      height: "100px",
      marginLeft: "0px",
      paddingTop: "25px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "150px",
      height: "100px",
      marginLeft: "0px",
      paddingTop: "10px",
    },
  },
  Text2: {
    fontSize: 13,
    paddingLeft: "45px",
    paddingRight: "40px",

    paddingBottom: "0px",
    color: "rgb(119,119,119)",
    [theme.breakpoints.down("md")]: {
      fontSize: 25,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
      width: "100%",
    },
  },
  List4: {
    fontSize: 15,
    paddingLeft: "100px",
    paddingRight: "40px",
    paddingTop: "25px",
    paddingBottom: "0px",
    color: "rgb(119,119,119)",
    [theme.breakpoints.down("md")]: {
      fontSize: 25,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,

      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
      paddingBottom: "1em",
      width: "100%",
    },
  },
}));

export default function RVi() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <div className={classes.main}>
      <Grid>
        <Paper className={classes.paper1}>
          <Grid container spacing={3}>
            <Grid item>
              <Avatar src={mutualfund250} className={classes.Avatar1}></Avatar>
            </Grid>
            <Grid>
              <Typography className={classes.Header1}>
                Vodafone Idea Prepaid Mobile Recharge
              </Typography>
            </Grid>
          </Grid>
          <Card className={classes.card1} spacing={2}>
            <Grid item container spacing={2}>
              <Grid container>
                <Grid md={3}>
                  <Typography className={classes.caption1}>
                    Mobile Number{" "}
                  </Typography>
                  <TextField
                    className={classes.Text1}
                    id="outlined-basic"
                    placeholder="Consumer Number"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid md={3}>
                  <Typography className={classes.caption1}>Operator</Typography>
                  <Autocomplete
                    id="combo-box-demo"
                    disabled
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        disabled
                        className={classes.Text1}
                        {...params}
                        placeholder="BSNL"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid md={2}>
                  <Typography className={classes.caption1}>Circle</Typography>
                  <Autocomplete
                    id="combo-box-demo"
                    disabled
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        disabled
                        className={classes.Text1}
                        {...params}
                        placeholder="Delhi/NCR"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>

                <Grid md={2}>
                  <Typography className={classes.caption1}>Amount </Typography>
                  <TextField
                    className={classes.Text1}
                    id="outlined-basic"
                    placeholder="Amount"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid md={2}>
                  <Typography style={{ color: "white", fontSize: "10px" }}>
                    Mobile Number{" "}
                  </Typography>
                  <Button
                    variant="contained"
                    className={classes.Button1}
                    variant="outlined"
                  >
                    Go
                  </Button>
                </Grid>

                <Grid md={2}> </Grid>
              </Grid>
            </Grid>
          </Card>
        </Paper>
      </Grid>

      <Card className={classes.Card4}>
        <hr />

        <Grid container>
          <Grid>
            <Typography className={classes.Header3}>
              Related Searches Vodafone Idea Vi Recharge Packs by Region
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Andhra Pradesh
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Assam Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              RechargeVodafone Idea Vi Bihar/Jharkhand Recharge
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Chennai Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Delhi/NCR Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Gujarat Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Haryana Recharge
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Himachal Pradesh Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Jammu and Kashmir Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Karnataka Recharge
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Kerala Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Kolkata Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Maharashtra and Goa (except Mumbai) Recharge
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi MP/Chattisgarh Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Mumbai Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi North East Recharge
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Orissa Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Punjab Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Rajasthan Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Tamilnadu Recharge
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid>
            <Typography className={classes.Header3}>
              Related Searches on Vodafone Idea Vi Recharge Packs by Pack Type
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Full Talktime Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Topup Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Validity Recharge Plans
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Local SMS Pack Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi SMS Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi General SMS Pack Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi 3G Plans
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Data Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Lifetime Validity Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Night Packs Plans
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Unlimited Talktime Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Local Call Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi STD Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi ISD Plans
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Rate Cutter PlansVodafone Idea Vi 4G Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Special Offer Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Jio Phone Plans
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi Smart Phone PlansVodafone
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi MNP Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Vodafone Idea Vi DataAddon Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              Idea Vi InternationalRoaming Plans
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid>
            <Typography className={classes.Header3}>
              Vodafone Recharge Online With MobiKwik
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              Vodafone online recharge is now easier than ever.You can select
              the best suitable vodafone prepaid plan for yourself and complete
              the recharge at a click of button. This can be easily completed by
              downloading the MobiKwik Recharge app or visiting the website.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header5}>
              Why Choose Mobikwik for Vi Recharge:
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              <ol type="1">
                <li>
                  Smooth Transactions: MobiKwik as a platform is fast and easy
                  to use. A user can easily look for Vi recharge plans and
                  complete the recharge in a few clicks. Using the app, a user
                  also gets access to Vodafone Idea new offers in under a
                  minute.
                </li>
                <li>
                  More Savings: The app offers exciting discounts and cashback
                  rewards on Vodafone Idea new prepaid plans. On every Vi
                  recharge, one can save more.
                </li>
                <li>
                  Secured Payments: Safety is the utmost priority. MobiKwik
                  offers end-to-end data protection with each Vodafone idea
                  recharge.
                </li>
              </ol>
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header3}>
              Steps For Vodafone Idea Prepaid Mobile Reacharge
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              Make your Vodafone online recharge easily and simply using your
              MobiKwik digital wallet.Check your Vodafone plans form the
              abovetable and choose full talktime and offers on MobiKwik.Follow
              a few simple steps for Online Vi recharge :-.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              <ol type="1">
                <li>
                  {" "}
                  Enter your Vi mobile phone number you want to carry out the
                  online Vi recharge for
                </li>
                <li>Now click on the prepaid/ postpaid option</li>
                <li>Select ‘Vodafone mobile operator’</li>
                <li>Select the circle (area/place) you belong to</li>
                <li>
                  Check out the exclusive and never seen before offers, Vodafone
                  idea Prepaid Plans or type in the amount you want to recharge
                </li>
                <li>
                  Now enter your mobile number again and fill in the OTP
                  received.
                </li>
                <li>Now make the Vi online recharge payment.</li>
              </ol>
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              Your Vodafone Idea mobile recharge online is all done.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              PS: Make sure your KYC is done to avail this beneficial service.
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              You can also make Mobile Recharge for Airtel Recharge | MTNL
              Recharge | BSNL Recharge and JIO Recharge
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.Header3}>
              Latest Vodafone Recharge Plans & Offers 2021
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Table striped bordered hover>
            <thead>
              <tr
                className={classes.Tablefont}
                style={{ backgroundColor: "rgb(243,243,243)" }}
              >
                <th>Plans </th>
                <th>Data/Day</th>
                <th>Voice </th>
                <th>Validity</th>
              </tr>
            </thead>
            <tbody className={classes.Tablefont}>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs. 1197 </td>
                <td> 1.5 GB</td>
                <td>Unlimited</td>
                <td>180 Days</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs. 699 </td>
                <td>4GB</td>
                <td>Unlimited</td>
                <td>84 Days</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs. 449 </td>
                <td>4GB </td>
                <td>Unlimited </td>
                <td>56 Days</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs. 299 </td>
                <td>4GB </td>
                <td>Unlimited </td>
                <td>28 Days</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs. 249 </td>
                <td>1.5 GB </td>
                <td>Unlimited </td>
                <td>28 Days</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs. 1499 </td>
                <td>24 GB </td>
                <td>Unlimited </td>
                <td>365 Days</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs. 599 </td>
                <td>1.5 GB </td>
                <td>Unlimited </td>
                <td>84 Days</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs. 149 </td>
                <td>3 GB </td>
                <td>Unlimited </td>
                <td>28 Days</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs. 405 </td>
                <td>90 GB</td>
                <td>Unlimited</td>
                <td>28 Days</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs. 2399 </td>
                <td>1.5 GB</td>
                <td>Unlimited</td>
                <td>365 Day</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs. 19 </td>
                <td>200 MB</td>
                <td>Unlimited</td>
                <td>2 Days</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs. 819 </td>
                <td>2 GB</td>
                <td>Unlimited</td>
                <td>84 Days</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs. 269 </td>
                <td>4 GB</td>
                <td>Unlimited</td>
                <td>56 Day</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs. 399 </td>
                <td>1.5 GB </td>
                <td>Unlimited </td>
                <td>56 Days</td>
              </tr>
            </tbody>
          </Table>
        </Grid>

        <Grid container>
          <Grid>
            <Typography className={classes.Header3}>
              About Vodafone Validity Recharge Plans
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              Vodafone validity recharge is a kind of recharge that extends the
              validity of your Vodafone prepaid connection.You can visit
              Vodafone Validity Mobile recharge Plans page to know more.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header6}>
              How do I choose the best value Vi recharge(वी आई रिचार्ज) plan?
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              On MobiKwik, a user can browse all the available Vodafone or Idea
              prepaid recharge plans. After the user types in his/her contact
              number and selects the operator, he/she can click on ‘See Plans’
              and choose the best value recharge plan
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header6}>
              How can I get MobiKwik cashback on Vodafone idea recharge(वोडाफोन
              रिचार्ज )?
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              MobiKwik aims to offer consistent savings to its users. Hence,
              users can easily earn cashback or SuperCash on their online mobile
              recharges. Once a user selects a plan for recharge, he/she can
              click on ‘Apply Coupon’ to see the ongoing cashback or SuperCash
              offers.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header6}>
              How to check Vodafone Idea (Vi) net balance?
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              Dial *111*2*2# to know your internet balance or send an SMS “Data
              Bal” to 144 from your Vodafone or idea mobile number.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header6}>
              How to check Vodafone or Idea balance?
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              Dial *111*2*2# to know your internet balance or send an SMS “Data
              Bal” to 144 from your registered mobile number.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header6}>
              Do I need to get my SIM changed for the new brand VI?
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              No, you can use your existing Vodafone SIM or Idea SIM to continue
              function.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header6}>
              How can I make Vodafone idea recharge for full talk time?
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              On MobiKwik, a user can browse all the available Vi prepaid
              recharge plans by clicking on ‘See Plans’. Users can easily choose
              a full talk time plan from the available vodafone recharge
              plans(वोडाफोन रिचार्ज प्लान) and complete the prepaid recharge.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header6}>
              How can I get Vi unlimited calls to any network?
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              On MobiKwik, a user can browse all the available vodafone prepaid
              recharge plans & offers(वोडाफोन रिचार्ज ऑफर) by clicking on ‘See
              Plans’. Users can browse through all the plans and choose the one
              which offers unlimited calling services to all networks.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header6}>
              Will my existing Vodafone/Idea number be changed due to the
              merger?
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              No, you can continue with the existing number itself and enjoy all
              the services like before.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header6}>
              Will the services get affected after the merger?
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              No, you will continue to enjoy all the recharge services and
              benefits you were getting till now
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header3}>
              About Vodafone Idea Merger
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              On 31 August 2018, Vodafone India merged with Idea Cellular, to
              provide their users with more values & benefits and with more
              network coverage. The new merger is called Vodafone Idea Limited
              (Vi). Vodafone currently holds a 45.1% stake in the combined
              entity and Aditya Birla Group holds a 26% stake. Now you can enjoy
              the benefits & make mobile recharges online on Mobikwik.com
              easily.
            </Typography>
          </Grid>
        </Grid>
        <hr />
      </Card>
    </div>
  );
}

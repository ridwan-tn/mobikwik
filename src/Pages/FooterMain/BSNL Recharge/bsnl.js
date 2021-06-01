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
import CardMedia from "@material-ui/core/CardMedia";
import { Autocomplete } from "@material-ui/lab";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import mutualfund239 from "../../assets/mutualfund239.png";
import mutualfund238 from "../../assets/mutualfund238.png";

import { Table } from "react-bootstrap";
import Footer from "../footerMain";

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
    fontSize: 15,
    color: "rgb(119,119,119)",

    paddingLeft: "50px",
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
    fontSize: 20,
    color: "black",
    fontWeight: "bolder",

    paddingLeft: "40px",
    paddingRight: "10px",
    paddingTop: "40px",
    paddingBottom: "40px",

    [theme.breakpoints.down("md")]: {
      fontSize: 25,

      color: "black",

      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,

      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,

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
  card1: {
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",

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

export default function Rairtel() {
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
              <Avatar src={mutualfund238} className={classes.Avatar1}></Avatar>
            </Grid>
            <Grid>
              <Typography className={classes.Header1}>
                BSNL Prapaid Mobile Reacharge
              </Typography>
            </Grid>
          </Grid>
          <Card className={classes.card1} spacing={2}>
            <Grid item container spacing={2}>
              <Grid container md={11}>
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
                <Grid md={3}>
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
                  <Typography className={classes.caption1}>Type</Typography>
                  <FormControl component="fieldset">
                    <RadioGroup
                      row
                      aria-label="position"
                      name="position"
                      defaultValue="top"
                    >
                      <FormControlLabel
                        className={classes.caption1}
                        value="son"
                        control={<Radio color="primary" />}
                        label="Topup"
                      />
                      <FormControlLabel
                        className={classes.caption1}
                        value="end"
                        control={<Radio color="primary" />}
                        label="Special"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
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
              </Grid>
              <Grid container md={1}>
                <br />
                <Grid>
                  {" "}
                  <Button
                    variant="contained"
                    className={classes.Button1}
                    variant="outlined"
                  >
                    Go
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Paper>
      </Grid>

      <Card className={classes.Grid1}>
        <Grid container>
          <Grid md={4}>
            <Typography className={classes.Header2}>
              {" "}
              Or Select a New BSNL Recharge Plans
            </Typography>
          </Grid>
          <Grid md={2}>
            <Select
              className={classes.Select1}
              native
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: "age",
                id: "filled-age-native-simple",
              }}
            >
              <option value={10}>BSNL</option>
              <option value={20}>Airtel</option>
              <option value={30}>Vodafone</option>
              <option value={40}>MNTL</option>
              <option value={50}>Jio</option>
            </Select>
          </Grid>
          <Grid md={3} className={classes.Grid2}>
            <Select
              className={classes.Select1}
              native
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: "age",
                id: "filled-age-native-simple",
              }}
            >
              <option value={10}>Gujarat</option>
              <option value={20}>Delhi</option>
              <option value={30}>Kerala</option>
              <option value={40}>Karnataka</option>
              <option value={50}>Panjab</option>
            </Select>
          </Grid>
          <Grid md={3} className={classes.Grid2}>
            <Select
              className={classes.Select1}
              native
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: "age",
                id: "filled-age-native-simple",
              }}
            >
              <option value={10}>All Plans</option>
              <option value={20}>Topup</option>
              <option value={30}>Validity</option>
              <option value={40}>Sms</option>
              <option value={50}>Panjab</option>
            </Select>
          </Grid>
        </Grid>
      </Card>
      <Card className={classes.Card3}>
        <Grid container>
          <Grid md={2}>
            <Typography className={classes.caption1}>Mobile Number </Typography>
          </Grid>
          <Grid md={2}>
            <Typography className={classes.caption1}>Validity </Typography>
          </Grid>
          <Grid md={6}>
            <Typography className={classes.caption1}>Description </Typography>
          </Grid>
          <Grid md={2}>
            <Typography className={classes.caption1}>Price </Typography>
          </Grid>
        </Grid>
      </Card>

      <Card className={classes.Card4}>
        <Grid
          container
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <CardMedia
            className={classes.media}
            image={mutualfund239}
            title="Contemplative Reptile"
          />
        </Grid>
        <hr />

        <Grid container>
          <Grid>
            <Typography className={classes.Header3}>
              Related Searches BSNL Recharge Packs by Region
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Andhra Pradesh Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Assam Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Bihar/Jharkhand Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Assam Recharge
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Jammu & Kashmir Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Karnataka Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Kerala Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Kolkatta Recharge
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Delhi/NCR Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Gujarat Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Haryana Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Himanchal Predesh Recharge
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Maharashtra Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL MP Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Mumbai Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL North East Recharge
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Orissa Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Panjab Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Rajasthan Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Tamilnadu Recharge
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL UP Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL West Bengal Recharge
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid>
            <Typography className={classes.Header3}>
              Related Searches on BSNL Recharge Packs by Pack Type
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Full Talktime
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>PlansBSNL Topup</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              PlansBSNL Validity Recharge Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Local SMS Pack Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>BSNL SMS Plans</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL General SMS Pack Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>BSNL 3G Plans</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>BSNL Data Plans</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Lifetime Validity Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Night Packs Plans
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Unlimited Talktime
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              PlansBSNL Local Call
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>PlansBSNL STD</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>PlansBSNL ISD</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              PlansBSNL Rate Cutter Plans
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Special Offer Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>BSNL 4G Plans</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Jio Phone Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL Smart Phone Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>BSNL MNP Plans</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.Header4}>
              BSNL DataAddon Plans
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid>
            <Typography className={classes.Header3}>
              BSNL Recharge Plans & Offers For Prepaid
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid></Grid>
        </Grid>
        <Grid container>
          <Table striped bordered hover className={classes.imagecontainer}>
            <thead>
              <tr
                className={classes.Tablefont}
                style={{ backgroundColor: "rgb(243,243,243)" }}
              >
                <th style={{}}>Plans &nbsp;&nbsp;&nbsp;&nbsp;</th>
                <th>Validity</th>
                <th>RS</th>
              </tr>
            </thead>
            <tbody className={classes.Tablefont}>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>2 GB 3G Data Pack</td>
                <td>1 day</td>
                <td>16</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>2 GB / Day Combo Unlimited 3G Data Pack</td>
                <td>71 days</td>
                <td>395</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>1.3 GB 3G Data Pack</td>
                <td>22 days</td>
                <td>98</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>1 GB / Day Combo Unlimited 3G Data Pack</td>
                <td>71 days</td>
                <td>395</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>2 GB 3G Data Pack</td>
                <td>1 day</td>
                <td>19</td>
              </tr>
            </tbody>
          </Table>
        </Grid>

        <Grid container>
          <Grid>
            <Typography className={classes.Header3}>
              Online BSNL Recharge With MobiKwik
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              BSNL recharge is now a very easy process when powered by MobiKwik.
              Users can select the best suitable BSNL recharge plan(बीएसएनएल
              रिचार्ज प्लान) for themselves and complete the BSNL online
              recharge with just a click of a button. BSNL mobile recharge can
              be easily done by downloading the MobiKwik android / IOS app or
              visiting the official MobiKwik website. MobiKwik is a payments
              app, facilitating and simplifying digital ransactions for millions
              of Indians. Being the leading payments platform of the country,
              the app provides one click access for BSNL prepaid recharge and
              BSNL recharge offers(बीएसएनएल रिचार्ज ऑफर). Along with easy
              payments, users also get to avail offers, great discounts and
              cashback to ensure maximum savings while making BSNL prepaid
              online recharge.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header3}>
              Advantages Of BSNL Recharge With MobiKwik
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              Below mentioned are the major advantages of choosing MobiKwik app
              for BSNL mobile recharge:
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography
              className={classes.Text2}
              style={{ fontWeight: "bolder" }}
            >
              Smooth Transactions:
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              MobiKwik facilitates quick transactions. A user can easily look
              for BSNL plans and complete the BSNL prepaid recharge in a few
              clicks. Using the MobiKwik app, a user also gets access to BSNL
              offers BSNL mobile recharge in under a minute.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography
              className={classes.Text2}
              style={{ fontWeight: "bolder" }}
            >
              More Savings:
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              The app offers exciting discounts and cashback rewards on BSNL
              plans. On every BSNL recharge, one can save more.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography
              className={classes.Text2}
              style={{ fontWeight: "bolder" }}
            >
              Secured Payments:
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              Safety is the utmost priority. MobiKwik offers end-to-end data
              protection on each and every BSNL recharge.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header3}>BSNL Plans</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              BSNL plans are available on MobiKwik. Users can check their
              MobiKwik app and explore the latest BSNL offers and BSNL plans.
              Before completing the BSNL prepaid online recharge, users can
              check the BSNL plans and switch as per the need. BSNL online
              recharge is a simple process using the MobiKwik app. One also
              visit the MobiKwik website to complete their BSNL prepaid
              recharge.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              On MobiKwik customers can explore all the available BSNL top up
              plans, recharge plans, full talktime plans, internet packs for
              1.5GB, 2GB, 3GB, 4GB per day and more. You can also activate BSNL
              special plans like free roaming, extra internet data; monthly,
              quarter or annual plans via the MobiKwik mobile application or
              website. Here are the latest BSNL plans, you can explore.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header3}>
              BSNL Recharge Plans 2021
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Table striped bordered hover className={classes.imagecontainer}>
            <thead>
              <tr
                className={classes.Tablefont}
                style={{ backgroundColor: "rgb(243,243,243)" }}
              >
                <th style={{}}>Rs. </th>
                <th>Plans &nbsp;&nbsp;</th>
                <th>Validity</th>
              </tr>
            </thead>
            <tbody className={classes.Tablefont}>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>485</td>
                <td>1.5GB/Day</td>
                <td>90 Days</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>398</td>
                <td>2.2GB/Day</td>
                <td>90 Days</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>365</td>
                <td>2GB/Day</td>
                <td>365 Days</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>249</td>
                <td>1GB/Day</td>
                <td>60 Days</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>198</td>
                <td>2GB/Day</td>
                <td>54 Days</td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>197</td>
                <td>2GB/Day</td>
                <td>54 Days</td>
              </tr>
            </tbody>
          </Table>
        </Grid>

        <Grid container>
          <Grid>
            <Typography className={classes.Header3}>
              How To Recharge BSNL Prepaid Online Instantly Via MobiKwik?
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              Now you can very easily complete your BSNL online recharge via
              Mobikwik. Along with that, you can also complete your BSNL prepaid
              recharges and BSNL postpaid recharges using MobiKwik.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              Check out your BSNL full talktime offers on MobiKwik. Online BSNL
              recharge is just so easy. You only have to follow a few simple
              following steps to complete your BSNL mobile recharge :-
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              Enter the BSNL phone number you want to carry out the online
              recharge/ BSNL mobile recharge for.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <ol type="1" className={classes.List4}>
              <li>
                Fill in your BSNL mobile number you want to carry out the BSNL
                online recharge for
              </li>
              <li>Tap on the prepaid/ postpaid option</li>
              <li>Select ‘BSNL mobile operator’</li>
              <li>Select the circle (area/place) you belong to.</li>
              <li>
                Check out the exclusive BSNL offers for you, BSNL prepaid plans
                or type in the amount you want to recharge
              </li>
              <li>
                Enter your mobile number again and fill in the OTP received
              </li>
              <li>Now make the BSNL online recharge payment.</li>
            </ol>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              Your BSNL recharge online is all done.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              You can also make Mobile Recharge for Airtel Recharge | Vodafone
              Idea VI Recharge | MTNL Recharge and JIO Recharge
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header3}>
              BSNL Recharge Offers
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              MobiKwik offers endless and unlimited offers on BSNL quick
              recharge. Users can explore the current BSNL recharge(बीएसएनएल
              रिचार्ज) offers and BSNL prepaid recharge plans by using the
              MobiKwik app or visiting the MobiKwik website anytime. MobiKwik
              provides its customers with exclusive BSNL recharge offers, that
              include but are not limited to BSNL net offers, BSNL prepaid
              recharge offers, BSNL kerala data plans and BSNL full ime offers.
              BSNL offers are in the form of Cashback, Supercash and discount
              deals.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              There are several promo codes and coupon codes applicable to get a
              big discount on your BSNL recharge plans when completing via
              MobiKwik.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              Users can simply avail these BSNL offers by simply making their
              BSNL prepaid online recharge via Mobikwik mobile application or
              website. MobiKwik believes in rewarding its customers with money
              saving deals and offers. You can avail all these benefits by
              simply making a transaction via MobiKwik. All the accumulated
              Cashback and SuperCash then can be used for your further
              transactions on MobiKwik platform.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header3}>
              Why Choose MobiKwik For BSNL Prepaid Recharge?
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              Mobikwik is India's no. 1 site for easy online BSNL recharge.
              Mobikwik has never ever charged a customer over any BSNL online
              recharge i.e MobiKwik as a platform, enables free BSNL mobile
              recharge that in turn helps you save your time, effort and money.
              We have always been customer friendly.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              Following are the reasons that make MobiKwik the perfect platform
              for BSNL prepaid online recharge:
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography
              className={classes.Text2}
              style={{ fontWeight: "", color: "black" }}
            >
              No Extra Fee on your BSNL online recharge
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              MobiKwik allows free BSNL online recharge i.e MobiKwik lets you
              complete your free BSNL online recharge.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography
              className={classes.Text2}
              style={{ fontWeight: "", color: "black" }}
            >
              Instant BSNL Prepaid Recharge
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              BSNL mobile recharges via MobiKwik can be done easily and
              instantly in a few simple steps. Online BSNL recharge is a very
              easy and simple procedure.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography
              className={classes.Text2}
              style={{ fontWeight: "", color: "black" }}
            >
              Multiple Options for BSNL Prepaid Recharge Online
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              The customers can complete their online BSNL recharge using the
              MobiKwik website on their laptops. The customers can also use
              their updated MobiKwik mobile phone application to make their BSNL
              recharge online.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography
              className={classes.Text2}
              style={{ fontWeight: "", color: "black" }}
            >
              One-stop destination for all BSNL Prepaid Recharge Plans
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              MobiKwik is your one stop destination when you complete your BSNL
              online recharge. MobiKwik has a list of plans like BSNL Special
              Offer plans, BSNL Topup plans, BSNL Full Talktime plans, BSNL 4G
              plans etc. You can e and opt for the suitable BSNL plan.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header3}>
              BSNL Validity Recharge
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              BSNL is well known for BSNL Validity Recharge plans which gives
              the users to explore so many affordable offers to make their
              recharges. Know more about BSNL Validity recharge,.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header3}>
              Frequently Asked Questions On BSNL Prepaid Recharge
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography
              className={classes.Text2}
              style={{ fontWeight: "", color: "black" }}
            >
              Can I get cashback on BSNL recharge through MobiKwik?
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              Yes! By making your BSNL recharge online on MobiKwik, you get
              exclusive cashback and other offers along with that.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography
              className={classes.Text2}
              style={{ fontWeight: "", color: "black" }}
            >
              How to recharge BSNL 429 plan online?
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              It’s very simple to recharge BSNL Rs 429 plan. All you have to do
              is type in your BSNL prepaid number, select your operator and
              circle and type in the amount. System will automatically fetch the
              plan for you. As soon the payment is done, your recharge will be
              complete.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography
              className={classes.Text2}
              style={{ fontWeight: "", color: "black" }}
            >
              How can I make BSNL prepaid recharge for full talk time?
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              You can make your BSNL prepaid recharge for full talktime on
              MobiKwik. All you have to do is enter your mobile number, and
              select the operator and your desired BSNL full talktime plan. Make
              the payment and your recharge will be successful.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography
              className={classes.Text2}
              style={{ fontWeight: "", color: "black" }}
            >
              What BSNL 99 recharge?
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Text2}>
              BSNL 99 is a special offer. This plan is valid for 22 days. A user
              gets unlimited FUP of 250 minutes/day.
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <Typography className={classes.Header3}>About BSNL</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <ul className={classes.List4}>
              <li>
                Bharat Sanchar Nigam Limited (BSNL), was incorporated on 15th
                september 2000.
              </li>
              <li>
                BSNL took over the business of providing telecom services and
                network management on their shoulders from the Central
                Government Departments of Telecom Services (DTS) and Telecom
                Operations (DTO), with effect from 1st October‘ 2000.
              </li>
              <li>
                BSNL is one of the leading public sector units providing
                comprehensive range of telecom services in India.
              </li>
            </ul>
          </Grid>
        </Grid>
        <hr />
      </Card>
      <div style={{ marginLeft: "-5em",marginTop:'-5em' }}>
                    <Footer/>
              </div>

    </div>
  );
}

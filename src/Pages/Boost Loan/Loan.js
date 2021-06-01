import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import instant from "../assets/instant.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import bag from "../assets/bag.png";
import cross from "../assets/cross.png";
import surprise from "../assets/surprise.png";
import gym from "../assets/gym.png";
import guitar from "../assets/guitar.png";
import loan from "../assets/loan.png";
import withdraw from "../assets/withdraw.png";
import approval from "../assets/approval.png";
import minimal from "../assets/minimal.png";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import download from "../assets/download.png";
import mark from "../assets/mark.png";
import hand from "../assets/hand.png";
import FooterMain from "../FooterMain/footerMain";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const drawerWidth = 225;

const useStyles = makeStyles((theme) => ({
  mainroot: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-5.5em",
    },
  },
  root: {
    display: "flex",
    marginLeft: "15em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0.5em",
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    color: "rgba(29 146 222)",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,

  typo: {
    color: "white",
    fontSize: "14px",
    fontFamily: "Bahnschrift Light",
    marginLeft: "-18px",
  },
  listIcon: {
    color: "white",
    paddingLeft: "1px",
  },
  product: {
    color: "#545661",
    paddingLeft: "15px",
    fontSize: "12px",
    fontWeight: "bolder",
  },
  content: {
    flexGrow: 1,
    backgroundColor: "rgba(255 255 255)",
    padding: theme.spacing(3),
  },

  divider: {
    height: "20px",
    marginTop: "20px",
  },

  paragraphs: {
    display: "flex",
    float: "left",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    padding: "100px",
    color: "black",
  },

  media: {
    marginTop: "2em",
    height: 75,
    width: "25%",
    [theme.breakpoints.down("xs")]: {
      justify: "flex-end",
      width: "30px",
      height: 35,
      marginLeft: "-22em",
      marginTop: "0.5em",
    },
  },
  media1: {
    marginTop: "2em",
    height: 75,
    width: "25%",
    [theme.breakpoints.down("xs")]: {
      justify: "flex-end",
      width: "30px",
      height: 35,
      marginLeft: "-22em",
      marginTop: "0.5em",
    },
  },

  indicator: {
    backgroundColor: "rgba(0 115 207)",
    height: "100px",
    width: "50px",
    textAlign: "left",
    opacity: "0.5",
  },
  tabsWrapper: {
    height: "50px",
    backgroundColor: "rgba(234 235 237)",
    color: "black",
    borderRadius: "5px",
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  gridroot: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    width: "100%",
    height: "380px",
    background: "rgba(240 245 252)",
    marginTop: "-27px",
  },
  buttonloan: {
    marginTop: "5px",
    textAlign: "left",
    marginLeft: "30px",
    background: "rgba(0 115 207)",
    width: "180px",
    height: "45px",
    boxShadow: "none",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      height: "30px",
      width: "175px",
      marginLeft: "25em",
      fontSize: "1px",
      fontWeight: "none",
    },
  },

  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  typo_per: {
    fontSize: "24px",
    fontFamily: "Bahnschrift Light",
    color: "rgba(64 64 64)",
    textAlign: "left",
    marginLeft: "30px",
    fontWeight: "bold",
    marginTop: "30px",
    letterSpacing: "0.9px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2em",
      fontSize: "15px",
      color: "rgba(64 64 64)",
    },
  },
  typo_get: {
    fontSize: "29px",
    fontFamily: "Bahnschrift Light",
    color: "rgba(74 144 226)",
    textAlign: "left",
    marginLeft: "30px",
    fontWeight: "bold",
    marginTop: "10px",
    letterSpacing: "0.9px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0em",
      fontSize: "10px",
      color: "rgba(74 144 226)",
      letterSpacing: "0.9px",
      textAlign: "center",
    },
  },

  paperfirst: {
    padding: theme.spacing(2),
    margin: "auto",
    width: "100%",
    height: "380px",
    background: "rgba(240 245 252)",
    marginTop: "-5em",
    [theme.breakpoints.down("xs")]: {
      height: "580px",
      backgroundColor: "white",
    },
  },

  imggrid: {
    [theme.breakpoints.down("xs")]: {
      width: "10px",
      marginTop: "1em",
      marginLeft: "-16em",
      height: "80px",
    },
  },

  paperimggrid: {
    padding: theme.spacing(2),
    margin: "auto",
    width: "100%",
    height: "380px",
    background: "rgba(240 245 252)",
    marginTop: "-27px",

    [theme.breakpoints.down("xs")]: {
      backgroundColor: "white",
      height: "180px",
      width: "300px",
    },
  },

  imageColumn: {
    paddingTop: "2em",
    paddingLeft: "40px",

    [theme.breakpoints.down("xs")]: {
      width: "200px",
      height: "200px",
      marginTop: "-2em",
      marginLeft: "-3em",
    },
  },

  gridImg: {
    display: "flex",
    flexDirection: "row",
    marginTop: "0em",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },

    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column-reverse",
      direction: "column-reverse",
      justify: "center",
      alignItems: "center",
    },
  },

  paperLoan: {
    padding: theme.spacing(2),
    margin: "auto",
    width: "100%",
    height: "380px",
    background: "rgba(240 245 252)",
    marginTop: "-27px",

    [theme.breakpoints.down("xs")]: {
      height: "270px",
      width: "300px",
      marginLeft: "-3em",
      justify: "center",
      alignItems: "center",
      backgroundColor: "white",
    },
  },

  textfeildgrid: {
    marginTop: "35px",
    marginLeft: "30px",
    color: "black",
    width: "330px",
    background: "white",
    [theme.breakpoints.down("xs")]: {
      width: "115px",
      marginLeft: "0.5em",
    },
  },
  textfeildgrid2: {
    marginTop: "-80px",
    marginLeft: "370px",
    background: "rgba(178 178 178)",
    width: "140px",
    height: "53px",
    boxShadow: "none",
    [theme.breakpoints.down("xs")]: {
      width: "100px",
      marginLeft: "9.5em",
    },
  },
  applynow: {
    color: "white",
    fontFamily: "Bahnschrift Light",
    fontSize: "19px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "11px",
    },
  },

  textlast: {
    paddingLeft: "30px",
    fontFamily: "Bahnschrift Light",
    fontSize: "13px",
    color: "rgba(64 64 64)",
    paddingTop: "1em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "8px",
      marginLeft: "-2.5em",
    },
  },
  paperItem: {
    [theme.breakpoints.down("xs")]: {
      direction: "flex",
      flexDirection: "column",
      fontSize: "10px",
      justify: "center",
      alignItems: "flex-start",
      paddingLeft: "6.8em",
    },
  },
  Header: {
    paddingTop: "1.5em",
    paddingLeft: "0.5em",
    fontWeight: "500",
    fontFamily: "Bahnschrift",
    fontSize: "25px",
    color: "rgba(64 64 64)",
    width: "19em",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "4.5em",
      fontSize: "17px",
      display: "flex",
      textAlign: "justify",
      wordSpacing: "-1px",
      fontFamily: "Bahnschrift Light",
      color: "black",
    },
  },

  Header2: {
    paddingTop: "1.5em",
    paddingLeft: "1.2em",
    fontWeight: "500",
    fontFamily: "Bahnschrift",
    fontSize: "25px",
    color: "rgba(64 64 64)",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "4.5em",
      fontSize: "17px",
      display: "flex",
      wordSpacing: "-1px",
      fontFamily: "Bahnschrift Light",
      color: "black",
    },
  },
  images: {
    [theme.breakpoints.down("xs")]: {
      justify: "flex-end",
      width: "35px",
    },
  },

  paperItems: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
      fontSize: "10px",
      justify: "center",
      alignItems: "center",
      width: "5px",
      paddingLeft: "0.3em",
    },
  },

  paperItems2: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "5.8em",
    [theme.breakpoints.down("xs")]: {
      direction: "flex",
      flexDirection: "row",
      fontSize: "10px",
      justify: "center",
      alignItems: "flex-start",
      width: "5px",
      paddingLeft: "0.3em",
    },
  },
  paperItems2A: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "11.3em",
    [theme.breakpoints.down("xs")]: {
      direction: "flex",
      flexDirection: "row",
      fontSize: "10px",
      justify: "center",
      alignItems: "flex-start",
      width: "5px",
      paddingLeft: "0.3em",
    },
  },
  paperContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
    marginLeft: "-1.5em",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: "-9em",
      marginLeft: "-1em",
    },
  },
  paperContainer2: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
    marginLeft: "-2em",

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: "0em",
      marginLeft: "-1em",
    },
  },
  paperContainer3: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
    marginLeft: "0em",

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: "0em",
      marginLeft: "-1em",
    },
  },
  title: {
    fontSize: "1.1em",
    fontFamily: "Bahnschrift Light",
    paddingLeft: "0em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "-2em",
      marginLeft: "4em",
      width: "250px",
      justify: "center",
      fontSize: "1.1em",
      whiteSpace: "nowrap",
    },
  },

  cardContainer: {
    //  backgroundImage:`url(${wall})`,
    backgroundColor: "rgba(247 247 247)",
    paddingLeft: "5em",
    marginLeft: "-1.5em",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-2em",
      backgroundColor: "white",
      marginTop: "-2.2em",
    },
  },

  Header3: {
    paddingTop: "1.5em",
    marginLeft: "-1.2em",
    fontWeight: "500",
    fontFamily: "Bahnschrift",
    fontSize: "25px",
    color: "rgba(64 64 64)",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "2.5em",
      fontSize: "17px",
      display: "flex",
      wordSpacing: "-1px",
      fontFamily: "Bahnschrift Light",
      color: "black",
    },
  },

  cardItem: {
    marginTop: "2em",
    marginBottom: "2em",
    color: "white",
    marginLeft: "-2.5em",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      direction: "flex",
      flexDirection: "column",
      fontSize: "10px",
      justify: "center",
      alignItems: "flex-start",
      marginLeft: "2em",
    },
  },

  cardItem1: {
    marginTop: "2em",
    marginBottom: "2em",
    color: "white",
    marginLeft: "2.5em",
    [theme.breakpoints.down("xs")]: {
      direction: "flex",
      flexDirection: "column",
      fontSize: "10px",
      justify: "center",
      alignItems: "flex-start",
      marginLeft: "2em",
      marginTop: "-1em",
      boxShadow: "none",
    },
  },

  rootcard: {
    justifyContent: "center",
    backgroundColor: "rgba(255 255 255)",
    width: 300,
    borderRadius: 2,
    height: 270,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
      fontSize: "10px",
      justify: "center",
      alignItems: "center",
      paddingLeft: "-3em",
      height: 50,
      width: "25em",
    },
  },

  titlecard: {
    fontWeight: "bolder",
    fontFamily: "Bahnschrift Light",
    fontSize: "18px",
    color: "rgba(64 64 64)",
    marginTop: "-1em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "-5em",
      marginLeft: "-4.8em",
      width: "250px",
      justify: "center",
      display: "flex",
      fontSize: "1.1em",
      whiteSpace: "nowrap",
      OverFlow: "hidden",
    },
  },
  titlecard1: {
    fontWeight: "bolder",
    fontFamily: "Bahnschrift Light",
    fontSize: "18px",
    color: "rgba(64 64 64)",
    marginTop: "-1em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "-5em",
      marginLeft: "-6em",
      width: "250px",
      justify: "center",
      display: "flex",
      fontSize: "1.1em",
    },
  },
  details: {
    paddingTop: "0.5em",
    paddingLeft: "2em",
    paddingRight: "1em",
    color: "black",
    fontSize: "14px",
    fontFamily: "Bahnschrift Light",
    [theme.breakpoints.down("xs")]: {
      marginTop: "-2em",
      marginLeft: "-1em",
      width: "250px",
      display: "block",
      justify: "center",
      fontSize: "1.1em",
      whiteSpace: "nowrap",
      OverFlow: "hidden",
      paddingRight: "1em",
    },
  },

  contentContainer: {
    //backgroundImage:`url(${ban})`,
    //backgroundColor:"#4a4b61",
    paddingLeft: "4em",
    paddingRight: "4em",
    width: "100%",
    marginLeft: "-2em",

    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      paddingLeft: "2em",
      paddingRight: "1.5em",
    },
  },

  textContainer1: {
    flexDirection: "row",

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },

    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
  },

  textContainer2: {
    display: "flex",
    flexDirection: "row",

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },

    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
  Header4: {
    paddingTop: "0.5em",
    marginLeft: "-1.2em",
    fontWeight: "500",
    fontFamily: "Bahnschrift",
    fontSize: "25px",
    color: "rgba(64 64 64)",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "5em",
      fontSize: "16px",
      wordSpacing: "-1px",
      fontFamily: "Bahnschrift Light",
      color: "black",
    },
  },
  Contenttext: {
    marginLeft: "-2em",
    fontSize: "1em",
    lineHeight: 1.4,
    color: "black",
    paddingTop: "1em",
    fontFamily: "Bahnschrift Light",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7em",
      marginLeft: "6.5em",
      textAlign: "left",
    },
  },
  Contenttext2: {
    marginLeft: "-2.5em",
    fontSize: "1em",
    lineHeight: 1.4,
    color: "black",
    paddingTop: "1em",
    fontFamily: "Bahnschrift Light",

    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
      marginLeft: "-4em",
      textAlign: "left",
    },
  },
  Header5: {
    paddingTop: "0.5em",
    marginLeft: "-1.2em",
    fontWeight: "500",
    fontFamily: "Bahnschrift",
    fontSize: "25px",
    color: "rgba(64 64 64)",

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "5em",
      fontSize: "16px",
      fontFamily: "Bahnschrift Light",
      color: "black",
    },
  },
  Contenttext1head: {
    color: "rgba(64 64 64)",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
      marginLeft: "-3em",
      marginTop: "-1.5em",
    },
  },
  Contenttext1: {
    marginLeft: "-2em",
    fontSize: "1em",
    lineHeight: 1.4,
    color: "black",
    paddingTop: "1em",
    fontFamily: "Bahnschrift Light",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
      marginLeft: "-5em",
      textAlign: "left",
    },
  },
  Contenttext3: {
    marginLeft: "-2em",
    fontSize: "1em",
    color: "black",
    fontFamily: "Bahnschrift Light",
    paddingTop: "-1em",

    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7em",
      marginLeft: "6.5em",
      textAlign: "left",
      lineHeight: "2.5em",
    },
  },
  Headers6: {
    paddingTop: "0.5em",
    marginLeft: "-1.5em",
    fontWeight: "500",
    fontFamily: "Bahnschrift",
    fontSize: "18px",
    color: "rgba(64 64 64)",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "6em",
      fontSize: "14px",
      fontFamily: "Bahnschrift Light",
      color: "black",
    },
  },
  Headers7: {
    paddingTop: "0.5em",
    marginLeft: "-1.6em",
    fontWeight: "500",
    fontFamily: "Bahnschrift",
    fontSize: "18px",
    color: "rgba(64 64 64)",
    textAlign: "left",

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "6.3em",
      fontSize: "14px",
      fontFamily: "Bahnschrift Light",
      color: "black",
    },
  },
  Contenttext5: {
    marginLeft: "-2em",
    fontSize: "1em",
    lineHeight: 1.4,
    color: "black",
    paddingTop: "1em",
    fontFamily: "Bahnschrift Light",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7em",
      marginLeft: "6.5em",
      textAlign: "left",
    },
  },
  parascn: {
    color: "black",
    marginTop: "3em",
    marginLeft: "-29.5em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2em",
      marginLeft: "0.2em",
      textAlign: "left",
      marginTop: "0.5em",
    },
  },
  parascn2: {
    color: "black",
    marginTop: "5em",
    marginLeft: "-41.3em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2em",
      marginLeft: "0.2em",
      textAlign: "left",
      marginTop: "-1em",
    },
  },
  parascn3: {
    marginLeft: "-2.1em",
    fontSize: "1em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
      marginLeft: "5.7em",
      textAlign: "left",
      marginTop: "0.5em",
    },
  },
  Contenttext6: {
    marginLeft: "-2em",
    fontSize: "1em",
    lineHeight: 1.4,
    color: "black",
    paddingTop: "1em",
    marginTop: "-1.8em",
    fontFamily: "Bahnschrift Light",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7em",
      marginLeft: "6.5em",
      textAlign: "left",
      marginTop: "-2em",
    },
  },
  pophead: {
    paddingTop: "0.8em",
    paddingLeft: "-3em",
    fontFamily: "Bahnschrift",
    fontSize: "17px",
    color: "rgba(64 64 64)",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "4.5em",
      fontSize: "17px",
      display: "flex",
      wordSpacing: "-1px",
      fontFamily: "Bahnschrift Light",
      color: "black",
    },
  },

  popular: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "2.5em",
    fontSize: "1em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
      marginLeft: "-1.3em",
      direction: "flex",
      flexDirection: "row",
    },
  },

  popGrid: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: "0em",

    [theme.breakpoints.down("sm")]: {
      marginTop: "0em",
      marginLeft: "-1em",
      display: "flex",
    },
  },

  poptitle: {
    fontSize: "1em",
    fontFamily: "Bahnschrift Light",
    marginLeft: "0em",
    color: "grey",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.6em",
      flexDirection: "column",
      marginLeft: "-2em",
    },
  },

  popcontainer: {
    flexDirection: "row",
    display: "flex",

    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
      marginLeft: "5.5em",
      width: "300px",
    },
  },
  footer: {
    marginTop: "-9em",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

export default function PermanentDrawerLeft(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.mainroot}>
          <Grid container spacing={3}>
            <Grid item xs={12} spacing={3}>
              <Paper className={classes.paperfirst} elevation={0}>
                <Grid container spacing={3} className={classes.gridImg}>
                  <Grid item xs={7} container>
                    <Paper className={classes.paperLoan} elevation={0}>
                      <Button
                        variant="contained"
                        className={classes.buttonloan}
                      >
                        <span
                          style={{
                            color: "white",
                            fontFamily: "Bahnschrift",
                            fontSize: "13px",
                          }}
                        >
                          Loan EMI Calculator
                        </span>
                      </Button>
                      <Typography className={classes.typo_per}>
                        Personal Loan
                      </Typography>
                      <Typography className={classes.typo_get}>
                        Get hassle free loan within 5 minutes
                      </Typography>

                      <div class row>
                        <div class col={8}>
                          <TextField
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Enter Mobile Number"
                            fontFamily="Bahnschrift Light"
                            className={classes.textfeildgrid}
                          />
                        </div>
                        <div class col={4}>
                          <Button
                            variant="contained"
                            className={classes.textfeildgrid2}
                          >
                            <span className={classes.applynow}>Apply Now</span>
                          </Button>
                        </div>

                        <Typography className={classes.textlast}>
                          Please enter your mobile number to check loan
                          eligibility.
                        </Typography>
                      </div>
                    </Paper>
                  </Grid>

                  <Grid item xs={5} container className={classes.imggrid}>
                    <Paper className={classes.paperimggrid} elevation={0}>
                      <img
                        alt="complex"
                        src={instant}
                        className={classes.imageColumn}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          <Grid container className={classes.paperContainer}>
            <Grid item container>
              <Grid item>
                <Typography className={classes.Header}>
                  <p>What you can do with this loan money?</p>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container className={classes.paperItem}>
              <Grid item className={classes.paperItems}>
                <Paper elevation={0}>
                  <img
                    src={bag}
                    alt="bag"
                    style={{ borderRadius: "50%" }}
                    className={classes.images}
                  />
                </Paper>
                <Typography
                  className={classes.title}
                  style={{ color: "black" }}
                >
                  <p style={{ width: "140px" }}>
                    Get cash for your spontaneous trip
                  </p>
                </Typography>
              </Grid>

              <Grid item className={classes.paperItems2}>
                <Paper elevation={0}>
                  <img
                    src={cross}
                    alt="bag"
                    style={{ borderRadius: "50%" }}
                    className={classes.images}
                  />
                </Paper>
                <Typography
                  className={classes.title}
                  style={{ color: "black" }}
                >
                  <p style={{ width: "140px" }}>
                    Get some extra cash for any Medical Emergency
                  </p>
                </Typography>
              </Grid>

              <Grid item className={classes.paperItems2}>
                <Paper elevation={0}>
                  <img
                    src={surprise}
                    alt="bag"
                    style={{ borderRadius: "50%" }}
                    className={classes.images}
                  />
                </Paper>
                <Typography
                  className={classes.title}
                  style={{ color: "black" }}
                >
                  <p style={{ width: "140px" }}>
                    Surprise your Mom with a new phone
                  </p>
                </Typography>
              </Grid>

              <Grid item className={classes.paperItems2}>
                <Paper elevation={0}>
                  <img
                    src={gym}
                    alt="bag"
                    style={{ borderRadius: "50%" }}
                    className={classes.images}
                  />
                </Paper>
                <Typography
                  className={classes.title}
                  style={{ color: "black" }}
                >
                  <p style={{ width: "140px" }}>
                    Don’t wait for salary to pay gym fee
                  </p>
                </Typography>
              </Grid>

              <Grid item className={classes.paperItems2}>
                <Paper elevation={0}>
                  <img
                    src={guitar}
                    alt="bag"
                    style={{ borderRadius: "50%" }}
                    className={classes.images}
                  />
                </Paper>
                <Typography
                  className={classes.title}
                  style={{ color: "black" }}
                >
                  <p style={{ width: "140px" }}>
                    Buy your favourite guitar before it goes OFF Discount
                  </p>
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid container className={classes.paperContainer2}>
            <Grid item container>
              <Grid item>
                <Typography className={classes.Header2}>
                  <p>Why Boost Loan?</p>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container className={classes.paperItem}>
              <Grid item className={classes.paperItems}>
                <Paper elevation={0}>
                  <img
                    src={loan}
                    alt="bag"
                    style={{ borderRadius: "50%" }}
                    className={classes.images}
                  />
                </Paper>
                <Typography
                  className={classes.title}
                  style={{ color: "black" }}
                >
                  <p style={{ width: "140px" }}>
                    Loan approval on the go through mobile app
                  </p>
                </Typography>
              </Grid>

              <Grid item className={classes.paperItems2A}>
                <Paper elevation={0}>
                  <img
                    src={withdraw}
                    alt="bag"
                    style={{ borderRadius: "50%" }}
                    className={classes.images}
                  />
                </Paper>
                <Typography
                  className={classes.title}
                  style={{ color: "black" }}
                >
                  <p style={{ width: "140px" }}>
                    Withdraw any amount at any point from the approved loan
                    amount
                  </p>
                </Typography>
              </Grid>

              <Grid item className={classes.paperItems2A}>
                <Paper elevation={0}>
                  <img
                    src={approval}
                    alt="bag"
                    style={{ borderRadius: "50%" }}
                    className={classes.images}
                  />
                </Paper>
                <Typography
                  className={classes.title}
                  style={{ color: "black" }}
                >
                  <p style={{ width: "140px" }}>
                    Instant approval and disbursal
                  </p>
                </Typography>
              </Grid>

              <Grid item className={classes.paperItems2A}>
                <Paper elevation={0}>
                  <img
                    src={minimal}
                    alt="bag"
                    style={{ borderRadius: "50%" }}
                    className={classes.images}
                  />
                </Paper>
                <Typography
                  className={classes.title}
                  style={{ color: "black" }}
                >
                  <p style={{ width: "140px" }}>
                    Minimal documentation required
                  </p>
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <br></br>
          <br></br>

          <Grid container className={classes.cardContainer}>
            <Grid item container>
              <Grid item>
                <Typography className={classes.Header3}>
                  How it works
                </Typography>
              </Grid>
            </Grid>
            <Grid item className={classes.cardItem} align="center">
              <Card elevation={2} className={classes.rootcard}>
                <CardActionArea>
                  <img
                    className={classes.media}
                    src={download}
                    alt="e"
                    title=""
                  />

                  <CardContent style={{ paddingTop: "2em" }}>
                    <Typography className={classes.titlecard} align="center">
                      <p style={{ width: "140px", marginLeft: "3.5em" }}>
                        DOWNLOAD & APPLY
                      </p>
                    </Typography>
                    <Typography className={classes.details}>
                      <p style={{ width: "200px" }}>
                        Download MobiKwik app and apply for loan through the app
                      </p>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item className={classes.cardItem1} align="center">
              <Card elevation={2} className={classes.rootcard}>
                <CardActionArea>
                  <CardMedia className={classes.media1} image={hand} title="" />

                  <CardContent style={{ paddingTop: "2em" }}>
                    <Typography className={classes.titlecard1} align="center">
                      <p style={{ width: "170px", marginLeft: "3em" }}>
                        INSTANT APPROVAL
                      </p>{" "}
                    </Typography>
                    <Typography className={classes.details}>
                      <p style={{ width: "200px" }}>
                        Fill in your details and get instant approval on the
                        loan amount
                      </p>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item className={classes.cardItem1} align="center">
              <Card elevation={2} className={classes.rootcard}>
                <CardActionArea>
                  <CardMedia className={classes.media1} image={mark} title="" />

                  <CardContent style={{ paddingTop: "2em" }}>
                    <Typography
                      gutterBottom
                      className={classes.titlecard}
                      align="center"
                    >
                      <p style={{ width: "180px", marginLeft: "2.5em" }}>
                        BOOST YOUR FINANCES
                      </p>{" "}
                    </Typography>
                    <Typography className={classes.details}>
                      <p style={{ width: "200px" }}>
                        The amount will be credited to your wallet in less than
                        5 minutes
                      </p>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>

          <Divider
            style={{ width: "96%", marginLeft: "20px", marginTop: "5%" }}
          />

          <br></br>

          <Grid
            container
            className={classes.contentContainer}
            style={{ backgroundColor: "white" }}
          >
            <Grid item className={classes.textContainer1}>
              <Grid item container>
                <Typography className={classes.Header4}>
                  WHAT IS A PERSONAL LOAN?
                </Typography>
                <Typography className={classes.Contenttext}>
                  <p style={{ width: "100%", color: "grey" }}>
                    Buy everything and anything you ever desired with just a
                    click. Personal loan is a blessing in disguise to get an
                    instant loan for travel, wedding expenses, home renovation,
                    etc. A personal loan is an unsecured loan that can be used
                    for a variety of personal end uses or any other urgent
                    financial requirement. The major benefit of an unsecured
                    loan is that the users do not require pledging of any
                    collateral or asset to avail of your
                    <span style={{ color: "rgba(29 146 222)" }}>
                      instant personal loan.
                    </span>
                    With the MobiKwik app, the process is made a lot easier, one
                    can download the
                    <span style={{ color: "rgba(29 146 222)" }}>
                      MobiKwik App
                    </span>
                    or website to get access to an online loan.
                  </p>
                </Typography>
              </Grid>

              <Grid item container>
                <Typography
                  className={classes.Header4}
                  style={{ fontSize: "18px", marginLeft: "-1.5em" }}
                >
                  About Instant Personal Loan
                </Typography>
                <Typography className={classes.Contenttext}>
                  <p style={{ width: "100%", color: "grey" }}>
                    Now nothing can stop you from fulfilling the things on your
                    bucket list with an Instant Personal Loan. As it can be
                    availed for plenty of purposes! It could be planning for a
                    dream wedding for yourself or planning for a vacation. With
                    quick approvals on Personal Loans, one can make their wishes
                    come true with the blink of an eye. To avail of a personal
                    loan online apply with the most trusted platforms of all
                    which is
                    <span style={{ color: "rgba(29 146 222)" }}>
                      MobiKwik .
                    </span>
                    The MobiKwik app allows the users to avail themselves of an
                    instant personal loan without the requirement of any
                    collateral or assets, making the process smooth and easy.
                    So, no hustling anymore, get your desires fulfilled within a
                    click with MobiKwik.
                  </p>
                </Typography>
              </Grid>

              <Grid item container>
                <Typography
                  className={classes.Header5}
                  style={{ fontSize: "18px", marginLeft: "-1.5em" }}
                >
                  Benefits of Instant Loan
                </Typography>
                <Typography className={classes.Contenttext}>
                  <p style={{ width: "100%", color: "grey" }}>
                    Personal loans are just not limited to fulfilling your
                    desires but it also offers a lot of benefits over other
                    types of loans. With the MobiKwik app or website, the
                    journey becomes easier. Mentioned below are the benefits of
                    availing instant Personal Loan:
                  </p>
                </Typography>

                <Typography className={classes.Contenttext}>
                  <ol>
                    <li className={classes.Contenttext1head}>
                      Nominal Documentation:
                    </li>
                    <Typography
                      className={classes.Contenttext1}
                      style={{ paddingLeft: "2em", paddingTop: "5px" }}
                    >
                      <p style={{ width: "100%", color: "grey" }}>
                        Easy loans are bliss. The process of availing of a
                        personal loan has been simplified with minimal
                        documentation as compared to other loans. Apply for a
                        quick loan online with the MobiKwik app and avail of
                        instant cash loans with minimum requirements and
                        documentation.
                      </p>
                    </Typography>

                    <li className={classes.Contenttext1head}>No Collateral:</li>
                    <Typography
                      className={classes.Contenttext1}
                      style={{ paddingLeft: "2em", paddingTop: "5px" }}
                    >
                      <p style={{ width: "100%", color: "grey" }}>
                        Personal loans are unsecured in nature which means one
                        doesn’t have to pledge any collateral or asset to avail
                        of a personal loan. MobiKwik helps you through the
                        process in a click.
                      </p>
                    </Typography>
                    <li className={classes.Contenttext1head}>Quick Access:</li>
                    <Typography
                      className={classes.Contenttext1}
                      style={{ paddingLeft: "2em", paddingTop: "5px" }}
                    >
                      <p style={{ width: "100%", color: "grey" }}>
                        It is no rocket science to avail Personal loan, It is
                        truly simple and easy to get an instant personal loan
                        online. To avail of low-interest instant loans and easy
                        loans, the MobiKwik app or website is the best platform
                        to be chosen. One gets instant money via a loan in just
                        a few simple steps with MobiKwik.
                      </p>
                    </Typography>
                    <li className={classes.Contenttext1head}>
                      Spend anywhere you want:
                    </li>
                    <Typography
                      className={classes.Contenttext1}
                      style={{ paddingLeft: "2em", paddingTop: "5px" }}
                    >
                      <p style={{ width: "100%", color: "grey" }}>
                        There are no restrictions on the criteria of where to
                        spend your personal loan. It could for your travel plans
                        or the renovation of your new house. It is accessible to
                        anyone and everyone. With MobiKwik your instant loan
                        online is just a tap away.
                      </p>
                    </Typography>
                  </ol>
                </Typography>
              </Grid>

              <Grid item container>
                <Typography
                  className={classes.Header5}
                  style={{ fontSize: "18px", marginLeft: "-1.5em" }}
                >
                  Types of Personal loan
                </Typography>
                <Typography className={classes.Contenttext}>
                  <p style={{ width: "100%", color: "grey" }}>
                    The past few years have experienced tremendous growth in
                    Personal loans but there are multiple types of personal
                    loans available. Mentioned below are some to give an
                    overview:
                  </p>
                </Typography>

                <Typography className={classes.Contenttext}>
                  <ul>
                    <li className={classes.Contenttext1head}>Wedding Loan:</li>
                    <Typography
                      className={classes.Contenttext1}
                      style={{ paddingLeft: "2em", paddingTop: "5px" }}
                    >
                      <p style={{ width: "100%", color: "grey" }}>
                        A wedding is an event that comes with a long list of
                        expenses and each one of us plans to make it memorable,
                        many lenders have started offering personal loans for
                        the wedding which can be customized as per the
                        individuals needs.
                      </p>
                    </Typography>

                    <li className={classes.Contenttext1head}>Travel Loan:</li>
                    <Typography
                      className={classes.Contenttext1}
                      style={{ paddingLeft: "2em", paddingTop: "5px" }}
                    >
                      <p style={{ width: "100%", color: "grey" }}>
                        People who love vacations can always opt for this loan
                        as with this loan one can go around the world, and pay
                        their bills later with holiday loans.
                      </p>
                    </Typography>
                    <li className={classes.Contenttext1head}>
                      Home Renovation Loan:
                    </li>
                    <Typography
                      className={classes.Contenttext1}
                      style={{ paddingLeft: "2em", paddingTop: "5px" }}
                    >
                      <p style={{ width: "100%", color: "grey" }}>
                        One always dreams of a beautiful house for themselves
                        which also includes renovating it as per our wish. Thus
                        identifying this need, home improvement loans are
                        offered, which help us take care of repairing costs,
                        buying new material, laborer’s charges, etc.
                      </p>
                    </Typography>
                    <li className={classes.Contenttext1head}>Pension Loan:</li>
                    <Typography
                      className={classes.Contenttext1}
                      style={{ paddingLeft: "2em", paddingTop: "5px" }}
                    >
                      <p style={{ width: "100%", color: "grey" }}>
                        For the retired personnel is a special category of loans
                        which is known as Pension loans. Pensioners are allowed
                        to borrow for any kind of expenses like medical bills or
                        personal requirements.
                      </p>
                    </Typography>

                    <li className={classes.Contenttext1head}>
                      Education Loan:
                    </li>
                    <Typography
                      className={classes.Contenttext1}
                      style={{ paddingLeft: "2em", paddingTop: "5px" }}
                    >
                      <p style={{ width: "100%", color: "grey" }}>
                        To pursue further education sometimes parents opt for
                        education loans and their kids then take over and pay it
                        up. which could be a loan for paying as mere as tuition
                        fees, or a big academic requirement like going abroad.
                      </p>
                    </Typography>

                    <Typography className={classes.Contenttext2}>
                      <p style={{ width: "100%", color: "grey" }}>
                        Some of the other personal loans to be mentioned are
                        Festival Loan, Consumer Durable Loan, and Computers &
                        Mobile Phones Loan.
                      </p>
                    </Typography>
                  </ul>
                </Typography>
              </Grid>

              <Grid item container>
                <Typography className={classes.Headers6}>
                  How To Apply For an Instant Personal Loan
                </Typography>
                <Typography className={classes.Contenttext}>
                  <p style={{ width: "100%", color: "grey" }}>
                    To get your instant personal loan on MobiKwik, one needs to
                    follow some steps. It requires basic details and
                    documentation to grant a personal loan with MobiKwik. Just
                    follow the below-mentioned steps and get your personal loan
                    instantly:
                  </p>
                </Typography>

                <Typography className={classes.Contenttext3}>
                  <ol>
                    <li
                      className={classes.Contenttext1head}
                      style={{ color: "grey" }}
                    >
                      Open the MobiKwik app and click on Boost loan
                    </li>

                    <li
                      className={classes.Contenttext1head}
                      style={{ color: "grey" }}
                    >
                      The instant cash loan page will appear on the page. Click
                      on ‘I am interested’.
                    </li>

                    <li
                      className={classes.Contenttext1head}
                      style={{ color: "grey" }}
                    >
                      Type in your personal details i.e. Aadhar card number and
                      PAN number as the next step.
                    </li>

                    <li
                      className={classes.Contenttext1head}
                      style={{ color: "grey" }}
                    >
                      MobiKwik will check your eligibility for an instant loan
                      online. The amount you are eligible for will be reflected
                      on the screen.
                    </li>

                    <li
                      className={classes.Contenttext1head}
                      style={{ color: "grey" }}
                    >
                      You can type the amount you want to withdraw and click on
                      ‘boost credit’.
                    </li>
                    <li
                      className={classes.Contenttext1head}
                      style={{ color: "grey" }}
                    >
                      The amount will instantly reflect in your wallet as an
                      instant loan online i.e small loan.
                    </li>

                    <Typography className={classes.Contenttext2}>
                      <p style={{ width: "100%", color: "grey" }}>
                        With these few easy steps, an instant payday loan will
                        be granted to the users.
                      </p>
                    </Typography>
                  </ol>
                </Typography>
              </Grid>

              <Grid item container>
                <Typography className={classes.Headers7}>
                  Applying Personal Loan Online - Eligibility And Criteria
                </Typography>
                <Typography className={classes.Contenttext}>
                  <p style={{ width: "100%", color: "grey" }}>
                    To avail a quick cash loan, MobiKwik is the most trusted
                    platform amongst all to choose as a medium to apply for a
                    personal loan. It offers easy cash loans that can be used
                    for a variety of purposes. Personal loan rates can be viewed
                    on the app itself. For personal loan eligibility, all one
                    needs is his or her Aadhar Card and Pan Card. Availing a
                    personal loan is just three simple steps away with low
                    personal loan interest on the Mobikwik app.
                  </p>
                </Typography>

                <Typography className={classes.Contenttext3}>
                  <ol>
                    <li
                      className={classes.Contenttext1head}
                      style={{ color: "grey" }}
                    >
                      Download the MobiKwik app and apply for the loan by
                      filling in an online loan application.
                    </li>

                    <li
                      className={classes.Contenttext1head}
                      style={{ color: "grey" }}
                    >
                      Fill in the details and instant loan approval will be
                      received shortly.
                    </li>

                    <li
                      className={classes.Contenttext1head}
                      style={{ color: "grey" }}
                    >
                      The amount will reflect in the wallet instantly.
                    </li>

                    <Typography className={classes.Contenttext2}>
                      <p style={{ width: "100%", color: "grey" }}>
                        MobiKwik offers secured loans and instant money
                        transfers. So, small personal loans topped with
                        low-interest loans can be easily availed on MobiKwik
                        which provides quick loans online.
                      </p>
                    </Typography>
                  </ol>
                </Typography>
              </Grid>

              <Grid item container>
                <Typography className={classes.Headers7}>
                  Frequently Asked Questions (FAQs) for Personal Loan
                </Typography>
                <Grid item>
                  <Typography
                    className={classes.Contenttext5}
                    style={{ display: "flex" }}
                  >
                    <p className={classes.parascn}>
                      How to get instant personal loan?
                    </p>
                  </Typography>
                </Grid>

                <Typography
                  className={classes.Contenttext5}
                  style={{ marginTop: "-2em" }}
                >
                  <p style={{ color: "grey", width: "100%" }}>
                    Just visit the MobiKwik App or website and get your instant
                    personal loan in just three steps:
                  </p>
                </Typography>

                <Typography className={classes.Contenttext3}>
                  <ol>
                    <li
                      className={classes.Contenttext1head}
                      style={{ color: "grey" }}
                    >
                      Download the MobiKwik app and apply for the loan by
                      filling in an online loan application.
                    </li>

                    <li
                      className={classes.Contenttext1head}
                      style={{ color: "grey" }}
                    >
                      Fill in the details and instant loan approval will be
                      received shortly.
                    </li>

                    <li
                      className={classes.Contenttext1head}
                      style={{ color: "grey" }}
                    >
                      The amount will reflect in the wallet instantly.
                    </li>
                  </ol>
                </Typography>

                <Grid item>
                  <Typography
                    className={classes.Contenttext5}
                    style={{ display: "flex" }}
                  >
                    <p className={classes.parascn2}>
                      How can I apply for a Personal Loan?
                    </p>
                  </Typography>
                </Grid>

                <Typography
                  className={classes.Contenttext5}
                  style={{ marginTop: "-2em" }}
                >
                  <p style={{ color: "grey", width: "100%" }}>
                    To get instant personal loan follow the given steps on the
                    MobiKwik app:
                  </p>
                </Typography>

                <Typography className={classes.Contenttext3}>
                  <ol>
                    <li
                      className={classes.Contenttext1head}
                      style={{ color: "grey" }}
                    >
                      Open the MobiKwik app and click on Boost loan
                    </li>

                    <li
                      className={classes.Contenttext1head}
                      style={{ color: "grey" }}
                    >
                      The instant cash loan page will appear on the page. Click
                      on ‘I am interested’.
                    </li>

                    <li
                      className={classes.Contenttext1head}
                      style={{ color: "grey" }}
                    >
                      Type in your personal details i.e. Aadhar card number and
                      PAN number as the next step.
                    </li>

                    <li
                      className={classes.Contenttext1head}
                      style={{ color: "grey" }}
                    >
                      MobiKwik will check your eligibility for an instant loan
                      online. The amount you are eligible for will be reflected
                      on the screen.
                    </li>
                    <li
                      className={classes.Contenttext1head}
                      style={{ color: "grey" }}
                    >
                      You can type the amount you want to withdraw and click on
                      ‘boost credit’.
                    </li>
                    <li
                      className={classes.Contenttext1head}
                      style={{ color: "grey" }}
                    >
                      The amount will instantly reflect in your wallet as an
                      instant loan online i.e small loan.
                    </li>
                  </ol>
                </Typography>

                <Grid item>
                  <Typography className={classes.parascn3}>
                    <p style={{ width: "100%" }}>
                      What is a home credit personal loan?
                    </p>
                  </Typography>

                  <Typography className={classes.Contenttext6}>
                    <p style={{ color: "grey" }}>
                      Home Credit India provides online personal loans to
                      salaried & self-employed individuals in India with just
                      two documents. Their instant personal loans are unsecured
                      provided to individuals based on their credit history. You
                      can get a loan via Home Credit on the Home Credit Money
                      App, powered by MobiKwik.
                    </p>
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography className={classes.parascn3}>
                    <p style={{ width: "100%" }}>
                      Where can I get an instant loan online?
                    </p>
                  </Typography>

                  <Typography className={classes.Contenttext6}>
                    <p style={{ color: "grey" }}>
                      Get an instant loan online with MobiKwik. Just download
                      the app on Android or IOS via the play store or log in to
                      the website and get started
                    </p>
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography className={classes.parascn3}>
                    <p style={{ width: "100%" }}>
                      Can I get an instant loan without documents?
                    </p>
                  </Typography>

                  <Typography className={classes.Contenttext6}>
                    <p style={{ color: "grey" }}>
                      The process of availing of a personal loan has been
                      simplified with minimal documentation as compared to other
                      loans. Apply for a quick loan online with the MobiKwik app
                      and avail of instant cash loans with minimum requirements
                      and documentation.
                    </p>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container className={classes.popGrid}>
            <Grid item container>
              <Grid item>
                <Typography className={classes.pophead}>
                  <p>Popular Searches on MobiKwik</p>
                </Typography>
              </Grid>
            </Grid>

            <Grid item container className={classes.popcontainer}>
              <Grid item xs={2}>
                <Typography className={classes.poptitle}>
                  <p>Online Recharge </p>
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography className={classes.poptitle}>
                  <p>Electricity Bill Payments </p>
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography className={classes.poptitle}>
                  <p>DTH Recharge </p>
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography className={classes.poptitle}>
                  <p>Data card Recharge </p>
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography className={classes.poptitle}>
                  <p>Gas Booking </p>
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography className={classes.poptitle}>
                  <p>Broadband Bill Payments </p>
                </Typography>
              </Grid>
            </Grid>

            <Grid item container className={classes.popcontainer}>
              <Grid item xs={2}>
                <Typography className={classes.poptitle}>
                  <p>Postpaid Bill Payments </p>
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography className={classes.poptitle}>
                  <p>Instant Personal Loans </p>
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography className={classes.poptitle}>
                  <p>Money Transfer </p>
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography className={classes.poptitle}>
                  <p>Mutual Funds </p>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className={classes.footer}>
          <FooterMain/>
        </div>
      </main>
    </div>
  );
}

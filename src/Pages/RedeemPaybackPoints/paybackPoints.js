import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import mutualfund247 from "../assets/mutualfund247.png";
import mutualfund248 from "../assets/mutualfund248.png";
import mutualfund249 from "../assets/mutualfund249.png";
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  button1: {
    width: "100px",
    height: "50px",
    fontSize: "20px",
    color: "white",
    borderRadius: "10px",
    backgroundColor: "rgb(178,178,178)",
    [theme.breakpoints.down("md")]: {
      width: "100px",
      height: "30px",
      fontSize: "15px",
      borderRadius: "5px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100px",
      height: "35px",
      fontSize: "15px",
      borderRadius: "5px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "35px",
      fontSize: "15px",
      borderRadius: "5px",
    },
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
    },
    mainDiv: {
        marginLeft: "16.6em",
        [theme.breakpoints.down("md")]: {
            marginLeft:"1em"
          },
  },

  paper: {
    paddingTop: "30px",
    paddingLeft: "25px",
    paddingBottom: "15px",
    paddingRight: "30px",

    width: "100%",
    height: "",
    textAlign: "center",

    backgroundColor: "#002447",
    borderRadius: "4px",
  },

  paperContainer: {
    backgroundColor: "#002447",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  tabs: {
    borderRadius: "4px",
    backgroundColor: "#002447",
    color: "white",
    indicator: {
      color: "white",
    },
  },
  paper1: {
    paddingRight: "20px",
    paddingLeft: "20px",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  tabpanel1: {
    margin: "2px",
    backgroundColor: "white",
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    width: "100%",
    height: "150px",
  },
  H1: {
    color: "white",
    fontSize: 25,
    [theme.breakpoints.down("md")]: {
      color: "white",
      fontSize: 25,
    },
    [theme.breakpoints.down("sm")]: {
      color: "white",
      fontSize: 20,
    },
    [theme.breakpoints.down("xs")]: {
      color: "white",
      fontSize: 20,
    },
  },
  footer: {
    marginTop: "-9em",

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

export default function Simple() {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.mainDiv}>
      <Grid item container>
        <Paper className={classes.paper}>
          <Grid item container>
            <Grid item md={6} style={{ textAlign: "left" }}>
              <Typography className={classes.H1}>
                The best reward for loyalty? Money.
              </Typography>
            </Grid>

            <Grid item container>
              <Grid item md={4}>
                <Typography
                  varient="body"
                  style={{ color: "white", margin: "1em" }}
                >
                  Redeem your Payback Points at MobiKwik!
                </Typography>
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Paper
                className={classes.paper1}
                style={{
                  background: "white",
                  height: "",
                  width: "100%",
                  margin: "2px",
                }}
              >
                <Grid item container spacing={2}>
                  <Grid item md={5} style={{ textAlign: "left" }}>
                    <Typography style={{ fontSize: "10px" }}>
                      {" "}
                      Payback CardNumber
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      label=" Payback CardNumber"
                      placeholder="Payback CardNumber"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>

                  <Grid item md={5}>
                    <Typography style={{ fontSize: "10px", color: "white" }}>
                      {" "}
                      Payback CardNumber
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      label=""
                      placeholder=""
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item md={2}>
                    <Typography style={{ fontSize: "10px", color: "white" }}>
                      {" "}
                      Payback CardNumber
                    </Typography>
                    <button className={classes.button1}>Redeem</button>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item md={4} style={{ float: "" }}>
                    <Typography style={{ fontSize: "10px" }}>
                      {" "}
                      Total points available for radeem xxxx
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item container>
        <Grid itms md={3}>
          <Typography style={{ marginTop: "25px", fontSize: "15px" }}>
            What Is Payback?
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid>
          <Typography
            color="textSecondary"
            component="p"
            style={{ marginTop: "25px", fontSize: "15px" }}
          >
            PAYBACK is India’s largest multi-brand loyalty program with 100+
            online and offline partners and a member base of over 100 million.
            You earn PAYBACK Points from your day-to-day activities and then
            redeem them for exciting rewards and maximize on your daily spends
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid itms md={3}>
          <Typography style={{ marginTop: "25px", fontSize: "15px" }}>
            Earn PAYBACK Points Through MobiKwik
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid>
          <Typography
            color="textSecondary"
            component="p"
            style={{ marginTop: "25px", fontSize: "15px" }}
          >
            Buy apparels or groceries, fuel your vehicle, book flights and
            hotels or simply shop online earn PAYBACK points or everything you
            do. Make seamless payments through MobiKwik across multiple partner
            platforms and earn points on each and every transaction.
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid itms md={6}>
          <Typography style={{ marginTop: "25px", fontSize: "15px" }}>
            Redeem PAYBACK Points On MobiKwik
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid>
          <Typography
            color="textSecondary"
            component="p"
            style={{ marginTop: "25px", fontSize: "15px" }}
          >
            The points that you earn can be redeemed for various purposes like
            shopping, mobile recharges, etc. MobiKwik is he only place where you
            can convert your PAYBACK points into cash. Redeem your PAYBACK
            points on MobiKwik to earn wallet balance and use it to recharge
            your mobile, pay your bills and much more! You get Re. 1 for every 4
            Payback points.
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid itms md={6}>
          <Typography style={{ marginTop: "25px", fontSize: "15px" }}>
            How To Redeem Payback Points At MobiKwik App?
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid>
          <Typography
            color="textSecondary"
            component="p"
            style={{
              marginTop: "25px",
              fontSize: "15px",
              marginBottom: "50px",
            }}
          >
            Redeeming PAYBACK points on MobiKwik is as simple as the click of a
            button!
            <br />
            Follow the following steps to convert upto 400 points into cash in a
            calendar month:
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

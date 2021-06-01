import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import phone from "../assets/phone.png";
import shop from "../assets/shop.png";
import bill from "../assets/bill.png";
import finance from "../assets/finance.png";
import transfer from "../assets/transfer.png";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Tabresponse from "./responsive4";
import FooterMain from "../FooterMain/footerMain";

//import Trial from './Trial';

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

const drawerWidth = 225;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginLeft: "15em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0em",
      marginTop: "-4em",
    },
  },

  toolbar: theme.mixins.toolbar,

  typo: {
    color: "white",
    fontSize: "14px",
    fontFamily: "Bahnschrift Light",
    marginLeft: "-18px",
  },

  content: {
    flexGrow: 1,
    backgroundColor: "rgba(255 255 255)",
    padding: theme.spacing(3),
  },

  divider: {
    height: "20px",
    marginTop: "-3em",
  },

  paperroot: {
    flexGrow: 1,
    marginTop: "-10px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },

  paper: {
    color: "white",
    backgroundColor: "rgba(0 36 71)",
    fontFamily: "Bahnschrift Light",
    marginLeft: "0em",

    [theme.breakpoints.down("xs")]: {
      marginLeft: "-1em",
      width: "55%",
      height: "200px",
    },
  },
  paperItem: {
    marginLeft: "-1em",

    [theme.breakpoints.down("xs")]: {
      direction: "flex",
      flexDirection: "column",
      fontSize: "10px",
      justify: "center",
      alignItems: "flex-start",
      paddingLeft: "6.8em",
    },
  },
  paperItems: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "0em",
    margin: theme.spacing(5),
    marginLeft: "-0.5em",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
      fontSize: "1em",
      marginLeft: "-8em",
      marginTop: "0em",
      width: "500px",
    },
  },
  paperItems1: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-4em",
    margin: theme.spacing(5),
    marginLeft: "-0.5em",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
      fontSize: "1em",
      marginLeft: "-8em",
      marginTop: "-5.5em",
      width: "500px",
    },
  },
  images: {
    margin: theme.spacing(2),

    [theme.breakpoints.down("xs")]: {
      justify: "flex-end",
      width: "50px",
      marginLeft: "0.3em",
    },
  },

  paraheading: {
    fontFamily: "Bahnschrift Light",
    fontSize: "1em",
    width: "250px",
    color: "black",
    margin: theme.spacing(3),
    marginTop: "-0.5em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "-5em",
      marginLeft: "5em",
      justify: "center",
      fontSize: "1.2em",
    },
  },

  paracontent: {
    fontFamily: "Bahnschrift Light",
    fontSize: "0.9em",
    color: "grey",
    wordSpacing: "-.2ch",
    width: "250px",
    margin: theme.spacing(3),
    marginTop: "-1.5em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "-2.5em",
      marginLeft: "5.5em",
      justify: "center",
      fontSize: "1.1em",
      textAlign: "left",
      maxWidth: 500,
      height: "3.5em",
      whiteSpace: "nowrap",
    },
  },

  paracontent2: {
    fontFamily: "Bahnschrift Light",
    fontSize: "13.5px",
    color: "grey",
    textAlign: "justify",
    wordSpacing: "120",
    paddingLeft: "10px",
    marginTop: "-1em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7em",
      width: "350px",
      marginLeft: "-2em",
    },
  },

  paper1: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "white",
    marginTop: "2em",

    [theme.breakpoints.down("md")]: {
      marginTop: "-2em",
    },
  },

  para: {
    display: "flex",
  },

  titlepara: {
    textAlign: "left",
    color: "black",
    fontFamily: "Bahnschrift Light",
    fontSize: "1.5em",
    marginLeft: "0em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9em",
      marginLeft: "-1em",
    },
  },
  titlepara1: {
    textAlign: "left",
    color: "grey",
    fontFamily: "Bahnschrift Light",
    fontSize: "1em",
    marginLeft: "0em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
      marginLeft: "-0.7em",
    },
  },
  titlepara2: {
    textAlign: "left",
    color: "black",
    fontFamily: "Bahnschrift Light",
    fontSize: "1.3em",
    paddingLeft: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9em",
      marginLeft: "-1.5em",
    },
  },

  rootcard: {
    maxWidth: 345,
    [theme.breakpoints.down("xs")]: {
      width: "400px",
    },
  },
  rootcard1: {
    maxWidth: 345,
    [theme.breakpoints.down("xs")]: {
      width: "400px",
      marginTop: "-7em",
    },
  },
  rootcard2: {
    maxWidth: 345,
    [theme.breakpoints.down("xs")]: {
      width: "400px",
      marginTop: "-2em",
    },
  },
  rootcard3: {
    maxWidth: 345,
    [theme.breakpoints.down("xs")]: {
      width: "400px",
      marginTop: "-7em",
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
  const [value, setValue] = React.useState(0);

  const { window } = props;
  const theme = useTheme();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Tabresponse />

        <Grid container style={{ marginTop: "2em" }}>
          <Grid item container>
            <Grid item>
              <Typography className={classes.titlepara}>What We Do</Typography>
              <Typography className={classes.titlepara1}>
                Simple, fast and Hassle Free payments
              </Typography>
            </Grid>
          </Grid>
          <Grid item container className={classes.paperItem}>
            <Grid item className={classes.paperItems}>
              <Card className={classes.rootcard} elevation={0}>
                <img
                  src={phone}
                  alt="logo"
                  style={{ borderRadius: "50%" }}
                  className={classes.images}
                />
                <Typography className={classes.paraheading}>
                  Phone Recharge & DTH
                </Typography>
                <Typography className={classes.paracontent}>
                  With money loaded in your MobiKwik <br />
                  wallet, it takes seconds to make phone and DTH recharges!
                </Typography>
              </Card>
            </Grid>

            <Grid item className={classes.paperItems}>
              <Card className={classes.rootcard1} elevation={0}>
                <img
                  src={bill}
                  alt="logo"
                  style={{ borderRadius: "50%" }}
                  className={classes.images}
                />
                <Typography className={classes.paraheading}>
                  Bill Payments
                </Typography>
                <Typography className={classes.paracontent}>
                  Pay all your bills across categories via MobiKwik in seconds
                  and avoid late <br />
                  payment charges.
                </Typography>
              </Card>
            </Grid>

            <Grid item className={classes.paperItems}>
              <Card className={classes.rootcard3} elevation={0}>
                <img
                  src={shop}
                  alt="logo"
                  style={{ borderRadius: "50%" }}
                  className={classes.images}
                />
                <Typography className={classes.paraheading}>
                  Shopping in Local Stores
                </Typography>
                <Typography className={classes.paracontent}>
                  With MobiKwik on your phone, enjoy over 2,50,000+ shopping
                  options and earn big cashbacks and discounts in the process!
                </Typography>
              </Card>
            </Grid>

            <Grid item className={classes.paperItems1}>
              <Card className={classes.rootcard2} elevation={0}>
                <img
                  src={finance}
                  alt="logo"
                  style={{ borderRadius: "50%" }}
                  className={classes.images}
                />
                <Typography className={classes.paraheading}>
                  Boost your finances with MobiKwik!
                </Typography>
                <Typography className={classes.paracontent}>
                  Get an instant ₹5,00,000 credit in your wallet in less than 5
                  Minutes.
                </Typography>
              </Card>
            </Grid>

            <Grid item className={classes.paperItems1}>
              <Card className={classes.rootcard2} elevation={0}>
                <img
                  src={transfer}
                  alt="logo"
                  style={{ borderRadius: "50%" }}
                  className={classes.images}
                />
                <Typography className={classes.paraheading}>
                  Transfer money to Bank
                </Typography>
                <Typography className={classes.paracontent}>
                  You can transfer money from Credit card to any Bank account.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Divider className={classes.divider} />

        <div className={classes.paperroot}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper1} elevation={0}>
                <Grid item container display="row">
                  <Grid item>
                    <Typography className={classes.titlepara2}>
                      About MobiKwik
                    </Typography>
                  </Grid>
                </Grid>
                <br></br>
                <div>
                  <Typography className={classes.paracontent2}>
                    MobiKwik is India's largest digital payments platform,
                    serving 12 crore+ users with quick transactions, money
                    transfer, credit services & much more. The platform enables
                    better engagement of businesses with individuals through
                    multiple options of
                    <span style={{ color: "rgba(29 146 222)" }}>
                      online bill payment
                    </span>
                    modes. It has grown over the years to build a smooth, safe &
                    secure platform for a hassle-free experience for Users.
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className={classes.paperroot}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper1} elevation={0}>
                <Grid item container display="row">
                  <Grid item>
                    <Typography className={classes.titlepara2}>
                      Online Recharge & Bill Payments At MobiKwik
                    </Typography>
                  </Grid>
                </Grid>
                <br></br>
                <div>
                  <Typography className={classes.paracontent2}>
                    Now make instant bill payments or recharges instantly with
                    MobiKwik. With money loaded in the MobiKwik wallet, it takes
                    seconds to do your
                    <span style={{ color: "rgba(29 146 222)" }}>
                      mobile recharge
                    </span>
                    , data plan or
                    <span style={{ color: "rgba(29 146 222)" }}>
                      DTH recharges
                    </span>
                    ! MobiKwik covers all the top operators in India like
                    Airtel, Jio, MTNL, Vi, Dish TV, Tata Sky & more. Just not
                    that, but you can also pay all your utility bills like
                    <span style={{ color: "rgba(29 146 222)" }}>
                      electricity bills
                    </span>
                    , gas, water, insurance premium, cable etc, from anywhere,
                    anytime.
                    <br></br>
                    Make instant transactions with MobiKwik today to get the
                    best discount and cashback offers everytime you pay. So,
                    just download the MobiKwik app and rest will be taken care
                    of.
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className={classes.paperroot}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper1} elevation={0}>
                <Grid item container display="row">
                  <Grid item>
                    <Typography className={classes.titlepara2}>
                      Other Services
                    </Typography>
                  </Grid>
                </Grid>
                <br></br>
                <div>
                  <Typography className={classes.paracontent2}>
                    MobiKwik not only enables their users to pay & save on
                    online transactions, but also takes care of wealth
                    management & credit facilities for their users. One can opt
                    for Mutual funds, Digital Gold,
                    <span style={{ color: "rgba(29 146 222)" }}>
                      Instant Loans
                    </span>
                    , Money Transfers, Pay later & more services. With MobiKwik,
                    users can invest in the right Mutual Fund starting at just
                    ₹100 giving them the liberty to start small and build their
                    investment portfolio with several investment options. Also
                    with MobiKwik’s spend now, pay later service - ZIP, one can
                    get a credit up to ₹30,000 at ZERO cost to shop, pay bills
                    and much more, making it easier for the users to manage cash
                    crunch.
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <div className={classes.footer}>
          <FooterMain />
        </div>
      </main>
    </div>
  );
}

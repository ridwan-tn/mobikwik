import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import logo2 from "./assets/logo2.png";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import money from "./assets/money.png";
import logo from "./assets/logo.png";
import flash from "./assets/flash.png";
import offer from "./assets/offer.png";
import boost from "./assets/boost.png";
import local from "./assets/local.png";
import redeem1 from "./assets/redeem1.png";
import redeem2 from "./assets/redeem2.png";
import wallet from "./assets/wallet.png";
import partner from "./assets/partner.png";
import payment from "./assets/payment.png";
import mutual from "./assets/payment.png";
import signup from "./assets/signup.png";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import phone from "./assets/phone.png";
import shop from "./assets/shop.png";
import bill from "./assets/bill.png";
import finance from "./assets/finance.png";
import transfer from "./assets/transfer.png";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import airtel from "./assets/airtel.png";
import bsnl from "./assets/bsnl.png";
import jio from "./assets/jio.png";
import mtnl from "./assets/mtnl.png";
import vi from "./assets/vi.png";
import docomo from "./assets/docomo.png";
import airteltv from "./assets/airteltv.png";
import dish from "./assets/dish.png";
import sundirect from "./assets/sundirect.png";
import tatasky from "./assets/tatasky.png";
import d2h from "./assets/d2h.png";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import caro1 from "./assets/caro1.png";
import caro2 from "./assets/caro2.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

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
  },
  appBar: {
    backgroundColor: "white",
    boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.1)",
    height: "60px",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(0 36 71)",
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
  appbarTypo: {
    marginLeft: "auto",
    marginRight: 11,
    color: "rgba(29 146 222)",
    fontFamily: "Bahnschrift Light",
    fontSize: "14px",
  },
  appbarTypo2: {
    marginRight: "20",
    paddingLeft: "15px",
    paddingRight: "15px",

    color: "rgba(29 146 222)",
    fontFamily: "Bahnschrift Light ",
    fontSize: "14px",
  },
  divider: {
    height: "20px",
    marginTop: "20px",
  },
  divider1: {
    marginTop: "-2em",
  },
  paperroot: {
    flexGrow: 1,
    marginTop: "-10px",
  },

  onlinetypo: {
    fontSize: "2em",
    fontFamily: "Bahnschrift Light",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
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
  paperItem:

  {
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
      maxWidth: 400,
      height: "3.5em",
      whiteSpace: "nowrap",
    },
  },


  doul: {
    background: "rgba(234 235 237)" ,
    width: "75em",
    position: "static",
    [theme.breakpoints.down("xs")]: {
     width:"20em"
    },
  },

  dotype: {
    fontSize: "0.9em",
    fontFamily: "Bahnschrift Light",


  },










  paracontent2: {
    fontFamily: "Bahnschrift Light",
    fontSize: "13.5px",
    color: "grey",
    textAlign: "justify",
    wordSpacing: "120",
    paddingLeft: "10px",
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
  paper1: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "white",
  },

  para: {
    display: "flex",
  },

  col: {
    flex: 1,
    padding: "1em",
    textAlign: "justify",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
    },
  },
  titlepara: {
    textAlign: "left",
    color: "black",
    fontFamily: "Bahnschrift Light",
    fontSize: "1.5em",
    marginLeft: "0em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5em",
      marginLeft: "-0.5em",
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
    fontSize: "20px",
    paddingLeft: "10px",
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  rootcard: {
    maxWidth: 345,
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  rootcard1: {
    maxWidth: 345,
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      marginTop: "-7em",
    },
  },
  rootcard2: {
    maxWidth: 345,
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      marginTop: "-2em",
    },
  },
  rootcard3: {
    maxWidth: 345,
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      marginTop: "-7em",
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
  tabCards: {
    width: "100%",
    fontFamily: "Bahnschrift Light",
  },
  tabTypo: {
    textAlign: "left",
    color: "black",
    fontFamily: "Bahnschrift Light",
    fontSize: "13px",
  },
  paras: {
    display: "flex",
    flexWrap: "wrap",
  },

  cols: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    margin: " 0 0 1em 0",
    padding: "1em",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  carodiv: {},
}));

export default function PermanentDrawerLeft(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [open, setOpen] = React.useState(false);

  const [open2, setOpen2] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const drawer = (
    <div>
      <List>
        <Link to="/">
          <img src={logo} alt="logo" style={{ paddingLeft: "10px" }} />
        </Link>
        <br></br>
        <br></br>

        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={flash} alt="logo" />
          </ListItemIcon>
          <Typography variant="h6" noWrap className={classes.typo}>
            Recharge & Bill Pay
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={money} alt="logo" />
          </ListItemIcon>
          <Typography variant="h6" noWrap className={classes.typo}>
            Transfer To Bank
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={offer} alt="logo" />
          </ListItemIcon>
          <Typography variant="h6" noWrap className={classes.typo}>
            Offers & Deals
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={boost} alt="logo" />
          </ListItemIcon>
          <Link to="/loan">
            <Typography variant="h6" noWrap className={classes.typo}>
              Boost Loan
            </Typography>
          </Link>
        </ListItem>

        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={local} alt="logo" />
          </ListItemIcon>
          <Typography variant="h6" noWrap className={classes.typo}>
            Local Stores
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={redeem1} alt="logo" />
          </ListItemIcon>
          <Typography variant="h6" noWrap className={classes.typo}>
            Reedem Payback Points
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={redeem2} alt="logo" />
          </ListItemIcon>
          <Typography variant="h6" noWrap className={classes.typo}>
            Reedem MGM Points
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={wallet} alt="logo" />
          </ListItemIcon>
          <Typography variant="h6" noWrap className={classes.typo}>
            Wallet Transfer
          </Typography>
        </ListItem>
      </List>
      <div>
        <Typography className={classes.product}>
          Products______________________
        </Typography>
      </div>

      <List>
        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={partner} alt="logo" />
          </ListItemIcon>
          <Typography variant="h6" noWrap className={classes.typo}>
            Become a partner
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={payment} alt="logo" />
          </ListItemIcon>
          <Typography variant="h6" noWrap className={classes.typo}>
            Payment Gateway
          </Typography>
        </ListItem>

        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={mutual} alt="logo" />
          </ListItemIcon>
          <Typography variant="h6" noWrap className={classes.typo}>
            Mutual Funds
          </Typography>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
            <img src={logo2} alt="logo" style={{ paddingLeft: "10px" }} />
          </IconButton>
          <Typography variant="h8" noWrap className={classes.appbarTypo}>
            What we do?
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />

          <Typography variant="h8" noWrap className={classes.appbarTypo2}>
            Help?
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />

          <Typography
            variant="h8"
            noWrap
            className={classes.appbarTypo2}
            style={{ cursor: "pointer" }}
            onClick={handleOpen}
          >
            Login?
          </Typography>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Paper style={{ height: "85%", width: "63%", outline: "none" }}>
                <div className={classes.carodiv}>
                  <div style={{ float: "left", width: "43%" }}>
                    <Carousel style={{}}>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={caro1}
                          alt="First slide"
                          height="563px"
                          width="1000px"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={caro2}
                          alt="Second slide"
                          height="563px"
                        />
                      </Carousel.Item>
                    </Carousel>
                    ;
                  </div>

                  <div>
                    <div>
                      <CloseIcon
                        style={{ marginLeft: "50%", marginTop: "3%" }}
                      />
                    </div>
                    <h3
                      style={{
                        marginLeft: "48%",
                        paddingTop: "8%",
                        fontFamily: "Bahnschrift",
                      }}
                    >
                      Login
                    </h3>
                    <br></br>
                    <h6 style={{ marginLeft: "48%", fontSize: "12px" }}>
                      Enter Mobile Number
                    </h6>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      placeholder="Enter Mobile Number"
                      style={{
                        marginLeft: "5%",
                        color: "black",
                        width: "45%",
                        borderColor: "blue",
                      }}
                    />

                    <br></br>
                    <Button
                      variant="contained"
                      color=""
                      style={{
                        marginTop: "50px",
                        marginLeft: "5%",
                        background: "rgba(178 178 178)",
                        width: "25%",
                        height: "47px",
                        boxShadow: "none",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          fontFamily: "Bahnschrift Light",
                          fontSize: "19px",
                        }}
                      >
                        Get OTP
                      </span>
                    </Button>
                    <div style={{ marginTop: "18%" }}>
                      <Divider style={{ width: "46%", marginLeft: "48%" }} />
                      <br></br>
                      <Typography
                        style={{
                          marginLeft: "48%",
                          fontFamily: "Bahnschrift Light",
                          fontSize: "14px",
                        }}
                      >
                        New to MobiKwik?{" "}
                        <span
                          style={{
                            color: "rgba(29 146 222)",
                            fontFamily: "Bahnschrift",
                            fontSize: "16px",
                          }}
                        >
                          Create Wallet
                        </span>
                      </Typography>
                    </div>
                  </div>
                </div>
              </Paper>
            </Fade>
          </Modal>

          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />

          <Typography
            variant="h8"
            noWrap
            className={classes.appbarTypo2}
            onClick={handleOpen2}
            style={{ cursor: "pointer" }}
          >
            Signup
          </Typography>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open2}
            onClose={handleClose2}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open2}>
              <Paper style={{ height: "85%", width: "63%", outline: "none" }}>
                <div className={classes.carodiv}>
                  <div style={{ float: "left", width: "43%" }}>
                    <Carousel style={{}}>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={caro1}
                          alt="First slide"
                          height="563px"
                          width="1000px"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={caro2}
                          alt="Second slide"
                          height="563px"
                        />
                      </Carousel.Item>
                    </Carousel>
                    ;
                  </div>

                  <div>
                    <h3
                      style={{
                        marginLeft: "48%",
                        paddingTop: "8%",
                        fontFamily: "Bahnschrift",
                      }}
                    >
                      Sign Up
                    </h3>
                    <br></br>
                    <h6 style={{ marginLeft: "48%", fontSize: "12px" }}>
                      Enter Mobile Number
                    </h6>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      placeholder="Enter Mobile Number"
                      style={{
                        marginLeft: "5%",
                        color: "black",
                        width: "45%",
                        borderColor: "blue",
                      }}
                    />
                    <br></br>
                    <div>
                      <div style={{ float: "left" }}>
                        <FormControlLabel
                          control={<Checkbox name="checkedC" color="primary" />}
                          style={{ marginLeft: "58%" }}
                        />
                      </div>
                      <div>
                        <Typography
                          style={{
                            paddingTop: "10px",
                            marginLeft: "51%",
                            fontFamily: "Bahnschrift Light",
                            fontSize: "15px",
                          }}
                        >
                          I agree to the{" "}
                          <span
                            style={{
                              color: "rgba(29 146 222)",
                              fontFamily: "Bahnschrift",
                              fontSize: "15px",
                            }}
                          >
                            Terms & Conditions
                          </span>
                        </Typography>
                      </div>
                    </div>

                    <Button
                      variant="contained"
                      color=""
                      style={{
                        marginTop: "25px",
                        marginLeft: "-2%",
                        background: "rgba(178 178 178)",
                        width: "25%",
                        height: "47px",
                        boxShadow: "none",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          fontFamily: "Bahnschrift Light",
                          fontSize: "19px",
                        }}
                      >
                        Get OTP
                      </span>
                    </Button>
                    <div style={{ marginTop: "23%" }}>
                      <Divider style={{ width: "46%", marginLeft: "48%" }} />
                      <Typography
                        style={{
                          marginLeft: "48%",
                          fontFamily: "Bahnschrift Light",
                          fontSize: "14px",
                          marginTop: "10px",
                        }}
                      >
                        Already have a MobiKwik Wallet?
                        <span
                          style={{
                            color: "rgba(29 146 222)",
                            fontFamily: "Bahnschrift",
                            fontSize: "16px",
                          }}
                        >
                          Login Now
                        </span>
                      </Typography>
                    </div>
                  </div>
                </div>
              </Paper>
            </Fade>
          </Modal>

          <>
            <img src={signup} alt="logo" />
          </>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smDown implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography className={classes.onlinetypo}>
                Online Mobile Recharge
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container style={{ marginTop: "2em" }}>
          <Grid item container>
            <Grid item>
              <Typography className={classes.titlepara}>What We Do</Typography>
              <Typography
                className={classes.titlepara1}
              >
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

        
        <Divider className={classes.divider1} />





        <Grid container>
          <Grid item container>
            <Grid item>
              <Typography className={classes.titlepara}>Do Recharge & Bill Payments at MobiKwik</Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item>
              <div className={classes.doul}>
                  <ul class="nav nav-pills mb-3 " id="pills-tab" role="tablist" >
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><Typography className={classes.dotype}>Home</Typography></button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><Typography className={classes.dotype}>Home</Typography></button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><Typography className={classes.dotype}>Home</Typography></button>
                    </li>
                </ul>
                </div>
                  <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">Placeholder content for the tab panel. This one relates to the contact tab. Her love is like a drug. All my girls vintage Chanel baby. Got a motel and built a fort out of sheets. 'Cause she's the muse and the artist. (This is how we do) So you wanna play with magic. So just be sure before you give it all to me. I'm walking, I'm walking on air (tonight). Skip the talk, heard it all, time to walk the walk. Catch her if you can. Stinging like a bee I earned my stripes.

                  </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">scsacascasccccccccccccccccccccc</div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">.scascascassacas.</div>
                  </div>

            </Grid>
          </Grid>
        </Grid>




















        <br></br>
        <br></br>
        <br></br>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper1} elevation={0}>
                <Typography className={classes.titlepara}>
                  Do Recharge & Bill Payments at MobiKwik
                </Typography>
                <br />

                <Paper
                  className={classes.paper1}
                  style={{ backgroundColor: "rgba(234 235 237)" }}
                  elevation={0}
                >
                  <div className={classes.tabroot}>
                    <AppBar
                      position="static"
                      style={{ borderRadius: "10px", boxShadow: "none" }}
                    >
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        className={classes.tabsWrapper}
                        classes={{ indicator: classes.indicator }}
                      >
                        <Tab
                          label="Prepaid"
                          {...a11yProps(0)}
                          style={{
                            fontFamily: "Bahnschrift Light",
                            fontSize: "12px",
                            fontVariant: "titling-caps",
                          }}
                        />

                        <Tab
                          label="Postpaid"
                          {...a11yProps(1)}
                          style={{
                            fontFamily: "Bahnschrift Light",
                            fontSize: "12px",
                            fontVariant: "titling-caps",
                          }}
                        />

                        <Tab
                          label="Dth"
                          {...a11yProps(2)}
                          style={{
                            fontFamily: "Bahnschrift Light",
                            fontSize: "12px",
                            fontVariant: "titling-caps",
                          }}
                        />

                        <Tab
                          label="Electricity"
                          {...a11yProps(3)}
                          style={{
                            fontFamily: "Bahnschrift Light",
                            fontSize: "12px",
                            fontVariant: "titling-caps",
                          }}
                        />

                        <Tab
                          label="Credit Card Bill "
                          {...a11yProps(4)}
                          style={{
                            fontFamily: "Bahnschrift Light",
                            fontSize: "12px",
                            fontVariant: "titling-caps",
                          }}
                        />

                        <Tab
                          label="emi Payments"
                          {...a11yProps(5)}
                          style={{
                            fontFamily: "Bahnschrift Light",
                            fontSize: "12px",
                            fontVariant: "titling-caps",
                          }}
                        />
                      </Tabs>
                    </AppBar>
                    <TabPanel
                      value={value}
                      index={0}
                      style={{
                        textAlign: "left",
                        backgroundColor: "rgba(255 255 255)",
                      }}
                    >
                      <div className={classes.paras}>
                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={airtel} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Airtel Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={bsnl} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              BSNL Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={jio} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Jio Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={mtnl} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              MTNL Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={vi} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Vodafone Idea Vi Recharge
                            </Typography>
                          </Card>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel
                      value={value}
                      index={1}
                      style={{
                        textAlign: "left",
                        backgroundColor: "rgba(255 255 255)",
                      }}
                    >
                      <div className={classes.paras}>
                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={airtel} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Airtel Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={bsnl} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              BSNL Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={jio} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Jio Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={vi} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Vodafone Idea Vi Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={docomo} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Tata Docomo CDMA Bill Payment
                            </Typography>
                          </Card>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel
                      value={value}
                      index={2}
                      style={{
                        textAlign: "left",
                        backgroundColor: "rgba(255 255 255)",
                      }}
                    >
                      <div className={classes.paras}>
                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={airteltv} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Airtel DTH Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={dish} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Dish TV Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={sundirect} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Sun Direct Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={tatasky} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Tata Sky Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={d2h} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Videocon D2H Recharge
                            </Typography>
                          </Card>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel
                      value={value}
                      index={3}
                      style={{
                        textAlign: "left",
                        backgroundColor: "rgba(255 255 255)",
                      }}
                    >
                      <div className={classes.paras}>
                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={airtel} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Airtel Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={bsnl} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              BSNL Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={jio} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Jio Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={vi} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Vodafone Idea Vi Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={docomo} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Tata Docomo CDMA Bill Payment
                            </Typography>
                          </Card>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel
                      value={value}
                      index={4}
                      style={{
                        textAlign: "left",
                        backgroundColor: "rgba(255 255 255)",
                      }}
                    >
                      <div className={classes.paras}>
                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={airtel} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Airtel Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={bsnl} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              BSNL Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={jio} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Jio Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={vi} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Vodafone Idea Vi Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={docomo} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Tata Docomo CDMA Bill Payment
                            </Typography>
                          </Card>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel
                      value={value}
                      index={5}
                      style={{
                        textAlign: "left",
                        backgroundColor: "rgba(255 255 255)",
                      }}
                    >
                      <div className={classes.paras}>
                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={airtel} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Airtel Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={bsnl} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              BSNL Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={jio} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Jio Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={vi} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Vodafone Idea Vi Recharge
                            </Typography>
                          </Card>
                        </div>

                        <div className={classes.cols}>
                          <Card className={classes.tabCards} elevation={0}>
                            <img src={docomo} alt="logo" />
                            <Typography className={classes.tabTypo}>
                              Tata Docomo CDMA Bill Payment
                            </Typography>
                          </Card>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </Paper>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <Divider />






        <div className={classes.paperroot}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper1} elevation={0}>
                <Typography className={classes.titlepara2}>
                  Mobile Recharge & Bill Payment
                </Typography>
                <br></br>

                <div>
                  <Typography className={classes.paracontent2}>
                    Mobile phones are an intrinsic part of our lives and with
                    association so is mobile recharge. Online mobile recharge
                    gives you the liberty to recharge your mobile phone number
                    anytime and from anywhere - be it from home, office,
                    restaurant or holiday and all you need is internet access.
                    When you think of easy recharge options, MobiKwik is the
                    best.
                  </Typography>

                  <br></br>

                  <Typography
                    className={classes.paracontent2}
                    style={{ fontSize: "14px", fontFamily: "Bahnschrift" }}
                  >
                    Prepaid Recharge
                  </Typography>
                  <Typography className={classes.paracontent2}>
                    Mobikwik is Indias No. 1 Prepaid Online Recharge site for
                    Airtel, Vodafone, Idea, Tata Indicom,Reliance, Bsnl, Aircel,
                    Tata Docomo. Mobikwik does not charge you over any online
                    mobile recharges done and you can save your time, effort and
                    money. Browse for the cheapest talk time & data plans using
                    Mobikwik.com. Log in to your Mobikwik account for exciting
                    cashback and offers on
                    <span style={{ color: "rgba(29 146 222)" }}>
                      Airtel Recharge , Jio Recharge , MTNL Recharge , BSNL
                      Recharge , Vodafone Idea(Vi) Recharge
                    </span>
                  </Typography>

                  <br></br>

                  <Typography
                    className={classes.paracontent2}
                    style={{ fontSize: "14px", fontFamily: "Bahnschrift" }}
                  >
                    Postpaid Bill Payments
                  </Typography>
                  <Typography className={classes.paracontent2}>
                    You can also do postpaid bill payments for any number,
                    recharge for your friends and family with ease using
                    MobiKwik. Recharge through Net Banking, Debit Card, Credit
                    Card, Visa or Mastercard and MobiKwik wallet. Mobikwik
                    Indias leading platform for mobile bill payment of
                    <span style={{ color: "rgba(29 146 222)" }}>
                      Airtel Bill Payment , Tata Docomo Bill Payment , BSNL Bill
                      Payment , Jio Bill Payment and Vodafone Idea (Vi) Bill
                      Payment etc.
                    </span>
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className={classes.paperroot} style={{ paddingTop: "25px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper1} elevation={0}>
                <Typography className={classes.titlepara2}>
                  Data Card
                </Typography>
                <br></br>
                <div>
                  <Typography className={classes.paracontent2}>
                    Get special offers & discounts on
                    <span style={{ color: "rgba(29 146 222)" }}>
                      Jio Data Card Recharge , Idea Data Card Recharge
                    </span>
                    and
                    <span style={{ color: "rgba(29 146 222)" }}>
                      Tata Photon Data Card Recharge
                    </span>
                    now on Mobikwik.com. Find all the latest Data Card Recharge
                    plans today on Mobikwik.com.
                  </Typography>

                  <br></br>

                  <Typography
                    className={classes.paracontent2}
                    style={{ fontSize: "14px", fontFamily: "Bahnschrift" }}
                  >
                    DTH Recharge
                  </Typography>
                  <Typography className={classes.paracontent2}>
                    DTH recharge with MobiKwik is quick and easy and you can
                    even browse for subscription plans.With MobiKwik, you can
                    stay connected and make your online recharge at any time of
                    the day.You can also use the MobiKwik portal to shop, pay
                    your bills, and recharge both mobile and DTH connections on
                    the go. You can make online
                    <span style={{ color: "rgba(29 146 222)" }}>
                      DTH Recharge
                    </span>
                    via MobiKwik across various operators such as
                    <span style={{ color: "rgba(29 146 222)" }}>
                      Videocon d2h , Tata Sky Recharge , Airtel DTH , Dish TV
                      Recharge and Sun Direct Recharge
                    </span>
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className={classes.paperroot} style={{ paddingTop: "25px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper1} elevation={0}>
                <Typography className={classes.titlepara2}>
                  Electricity Bill Payments
                </Typography>
                <br></br>
                <div>
                  <Typography className={classes.paracontent2}>
                    Pay your
                    <span style={{ color: "rgba(29 146 222)" }}>
                      electricity bills online
                    </span>
                    on Mobikwik and avoid waiting in the queues.Pay electricity
                    bills for all the states across India. For example, you can
                    easily pay electricity bills for
                    <span style={{ color: "rgba(29 146 222)" }}>
                      BESCOM , TNEB , MSEB , BSES Rajdhani , Punjab state power
                      , WESCO ,DHBVN ,KESCO ,NBPDCL , CESC Kolkata , HESCOM
                      ,UPPCL ,JVVNL , UHBVN , West Bengal , SBPDCL , Torrent
                      power
                    </span>
                    & <span style={{ color: "rgba(29 146 222)" }}>More.</span>
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className={classes.paperroot} style={{ paddingTop: "25px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper1} elevation={0}>
                <Typography className={classes.titlepara2}>
                  Water Bill Payment
                </Typography>
                <br></br>
                <div>
                  <Typography className={classes.paracontent2}>
                    At Mobikwik we help people make easy online water payments
                    and paying water bills is one of those valuable services
                    offered by the company. You can Pay water bills of
                    <span style={{ color: "rgba(29 146 222)" }}>
                      Bangalore Water Supply and Sewerage Board , Delhi Jal
                      Board , Municipal Corporation Gurugram , Urban Improvement
                      Trust (UIT) - Bhiwadi , Uttarakhand Jal Sansthan
                    </span>
                    anywhere & anytime.
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className={classes.paperroot} style={{ paddingTop: "25px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper1} elevation={0}>
                <Typography className={classes.titlepara2}>
                  Gas Booking and Gas Bill Payment
                </Typography>
                <br></br>
                <div>
                  <Typography className={classes.paracontent2}>
                    Avoid waiting in the queues for hours and book your gas
                    online instantly at Mobikwik. Now
                    <span style={{ color: "rgba(29 146 222)" }}>
                      book LPG Gas
                    </span>
                    cylinder online and pay
                    <span style={{ color: "rgba(29 146 222)" }}>
                      gas bill online
                    </span>
                    at Mobikwik within seconds. Log in to your Mobikwik account
                    for major gas providers like
                    <span style={{ color: "rgba(29 146 222)" }}>
                      HP Gas , Bharat Gas
                    </span>
                    and
                    <span style={{ color: "rgba(29 146 222)" }}>
                      Indane Gas
                    </span>
                    . Pay gas bills of
                    <span style={{ color: "rgba(29 146 222)" }}>
                      Mahanagar Gas Limited , Indraprastha Gas Limited , Gujarat
                      Gas Ltd , Adani Gas Limited , Haryana City Gas , Sabarmati
                      Gas Limited , Tripura Natural Gas , Unique Central Piped
                      Gas Ltd , Vadodara Gas Ltd , Maharashtra Natural Gas
                      Limited , SITI Energy Limited , Charotar Gas Limited ,
                      Aavantika Gas Ltd , Central UP Gas Limited , Indian
                      Oil-Adani Gas Private Limited, GAIL Gas Limited,Indian
                      Oil-Adani Gas Private Limited , Green Gas Ltd ,
                      Bhagyanagar Gas Ltd , Assam Gas Ltd , Sanwariya Gas Ltd.
                    </span>
                    <br></br>
                    <br />
                    Book LPG Gas cylinder online and pay gas bill online at
                    Mobikwik within seconds. Log in to your Mobikwik account for
                    major gas providers like HP Gas , Bharat Gas and Indane Gas.
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className={classes.paperroot} style={{ paddingTop: "25px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper1} elevation={0}>
                <Typography className={classes.titlepara2}>
                  Landline And Broadband Bill Payment
                </Typography>
                <br></br>
                <div>
                  <Typography className={classes.paracontent2}>
                    Pay landline bills instantly of
                    <span style={{ color: "rgba(29 146 222)" }}>
                      Airtel , MTNL , TATA
                    </span>
                    and
                    <span style={{ color: "rgba(29 146 222)" }}>
                      Tikona online at Mobikwik.
                    </span>
                    <br></br>
                    <br />
                    Pay Broadband bill for major operators like
                    <span style={{ color: "rgba(29 146 222)" }}>
                      Act Fibernet, Airtel, Asianet, BSNL, Comway, Connect
                      Broadband, DEN, Flash Fibernet, FusionNet, Hathway,
                      Instanet, M-Net Fiber fast, Netplus, Nextra, Spectra,
                      Tikona, Timble, TTN Broadband, Vfibernet
                    </span>
                    and More.
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className={classes.paperroot} style={{ paddingTop: "25px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper1} elevation={0}>
                <Typography className={classes.titlepara2}>
                  Loan EMI and Credit Card Bill Payment
                </Typography>
                <br></br>
                <div>
                  <Typography className={classes.paracontent2}>
                    With us, your
                    <span style={{ color: "rgba(29 146 222)" }}>
                      loan EMI payment
                    </span>
                    online can be really convenient.pay all your estimated
                    monthly installments (EMIs) easily at Mobikwik Now.At
                    Mobikwik, you can also make your
                    <span style={{ color: "rgba(29 146 222)" }}>
                      credit card bill payment
                    </span>
                    instantly & safe with existing cashback offers. Pay your
                    credit card bills of American Express, Andhra Bank, Axis
                    Bank, Bank Of Baroda, Canara Bank,CITI Bank, City Union
                    Bank, HDFC Bank Ltd, ICICI Bank Ltd, IDBI Ltd,Indusind Bank
                    Ltd,Ratnakar Bank Ltd (RBL),Standard Chartered Bank
                    Ltd,State Bank Of India,Syndicate Bank,United Bank Of India
                    and Yes Bank.
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className={classes.paperroot} style={{ paddingTop: "25px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper1} elevation={0}>
                <Typography className={classes.titlepara2}>
                  Instant Loans at Mobikwik
                </Typography>
                <br></br>
                <div>
                  <Typography className={classes.paracontent2}>
                    Personal loans are small unsecured loans taken for personal
                    uses such as funding a vacation,household repairs, tuition
                    fees etc. By Unsecured, we mean that loans are available
                    without any collateral or security. A user can avail
                    <span style={{ color: "rgba(29 146 222)" }}>
                      instant personal loans
                    </span>
                    online via MobiKwik. MobiKwik offer instant personal loan
                    and the instant loan online can be availed without pledging
                    any security. A user has to provide only a few basic details
                    to avail the instant personal loan online. Personal loan
                    online on MobiKwik comes with various benefits.
                    <br />
                    <ol>
                      <li>Minimal documentation</li>
                      <li>No collateral required</li>
                      <li>Simple and quick process</li>
                      <li>Bank transfer option available</li>
                    </ol>
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className={classes.paperroot} style={{ paddingTop: "25px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper1} elevation={0}>
                <Typography className={classes.titlepara2}>
                  BHIM UPI Payment with MobiKwik
                </Typography>
                <br></br>
                <div>
                  <Typography className={classes.paracontent2}>
                    Two easy steps and you are all set to make your money
                    transfer directly into a bank account in less than a minute.
                    Make your
                    <span style={{ color: "rgba(29 146 222)" }}>BHIM UPI</span>
                    handle and link your bank account to enable UPI, that’s all
                    you need. There’s no need to open a separate account or ask
                    for IFSC codes. A BHIM UPI handle is more than enough to get
                    you going. You can also Download MobiKwik for
                    <span style={{ color: "rgba(29 146 222)" }}>UPI Pay</span>
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className={classes.paperroot} style={{ paddingTop: "25px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper1} elevation={0}>
                <Typography className={classes.titlepara2}>
                  Why You Should Use MobiKwik?
                </Typography>
                <br></br>
                <div>
                  <Typography className={classes.paracontent2}>
                    MobiKwik is India's largest issuer-independent digital
                    financial services platform, leveraging a sophisticated
                    product and merchant acquisition capabilities. It is the
                    undisputed No.2 player in the mobile wallet space in India
                    and amongst the top 3 players in the payment gateway
                    industry in the country. It has a network of over 3 million
                    direct merchants, 140+ billers and 107 million-plus users.
                    It records over 1 million transactions/ day.
                    <br /> <br />
                    Founded in 2009 by Bipin Preet Singh & Upasana Taku,
                    MobiKwik is backed by marquee investors including Sequoia
                    Capital, American Express, Tree Line Asia, MediaTek, GMO
                    Payment Gateway, Cisco Investments, Net1 and Bajaj Finance.
                    <br /> <br />
                    MobiKwik has grown by leaps and bounds over the past few
                    years. The company has clocked a 4x growth in transactions
                    on YoY basis. The brand vision is to enable a billion
                    Indians with one tap access to digital payments, loans,
                    investments and insurance by the year 2022.
                    <br /> <br />
                    The MobiKwik wallet can be used across a host of payments
                    services, including bill recharges, utility bill payments,
                    cab bookings, ticket bookings, payments for groceries, as
                    well as payments to online digital and offline retail
                    stores. MobiKwik bridges the digital divide between
                    consumers and companies via swift recharges and bill
                    payments at no extra cost for its online transactions. Be it
                    prepaid, postpaid, DTH, data card, electricity, life
                    insurance, landlines, gas, water, broadband, cable,
                    municipality or Metro payments and traffic challans,
                    MobiKwik is best for one and all. The app also offers
                    instant money transfer to family and friends with ease.
                    <br /> <br />
                    MobiKwik is well known for its product innovation and
                    cutting-edge technology. Earlier this year, it rolled out
                    the first-of-its-kind instant credit product called 'Boost'
                    that ensures loan disbursal in a matter of 90 seconds.
                    MobiKwik is the first in the industry to give loans in a
                    mobile wallet. It will be adding new products in its lending
                    portfolio in the near future. With an extensive range of
                    offerings in lending, MobiKwik is on track to become one of
                    India's largest lenders, in the times to come.
                    <br /> <br />
                    MobiKwik also announced its foray in wealth management with
                    100% acquisition of Clearfunds, one of India's leading new
                    age wealth management platforms. It has also recently
                    launched the digital gold category on its platform. The
                    company will also be rolling out other financial services
                    like insurance, as it targets to achieve a four-fold growth
                    in FY 18-19.
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className={classes.paperroot} style={{ paddingTop: "25px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper1} elevation={0}>
                <Typography className={classes.titlepara2}>
                  Popular Searches on MobiKwik
                </Typography>
                <br></br>
                <div>
                  <Typography
                    className={classes.paracontent2}
                    style={{ fontSize: "15px", lineHeight: "2.6" }}
                  >
                    <span style={{ color: "rgba(29 146 222)" }}>
                      {" "}
                      Online Recharge &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    Electricity Bill Payments&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DTH
                    Recharge&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Data card
                    Recharge&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Gas
                    Booking&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Broadband Bill
                    Payments <br />
                    Postpaid Bill Payments&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Instant
                    Personal Loans &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Money Transfer
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mutual Funds
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </main>
    </div>
  );
}

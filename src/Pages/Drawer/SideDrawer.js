import React, { useRef } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import logo2 from "../assets/logo2.png";
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
import money from "../assets/money.png";
import logo from "../assets/logo.png";
import flash from "../assets/flash.png";
import offer from "../assets/offer.png";
import boost from "../assets/boost.png";
import local from "../assets/local.png";
import redeem1 from "../assets/redeem1.png";
import redeem2 from "../assets/redeem2.png";
import wallets from "../assets/wallets.png";
import partner from "../assets/partner.png";
import payment from "../assets/payment.png";
import mutual from "../assets/payment.png";
import signup from "../assets/signup.png";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import caro1 from "../assets/caro1.png";
import caro2 from "../assets/caro2.png";
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

const drawerWidth = 225;

const useStyles = makeStyles((theme) => ({
  mainroot: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-5.5em",
    },
  },
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
  product: {
    color: "#545661",
    paddingLeft: "15px",
    fontSize: "12px",
    fontWeight: "bolder",
  },
}));

export default function PermanentDrawerLeft(props) {
  //const [partner, setPartner] = React.useState(false);
  const classes = useStyles();
  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const DrawerComponent = useRef();

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

  const [close, setClose] = React.useState(true);
  

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
          <Link to="/">
            <Typography variant="h6" noWrap className={classes.typo}>
              Recharge & Bill Pay
            </Typography>
          </Link>
        </ListItem>

        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={money} alt="logo" />
          </ListItemIcon>
          <Link to="/transfer">
            <Typography variant="h6" noWrap className={classes.typo}>
              Transfer To Bank
            </Typography>
          </Link>
        </ListItem>

        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={offer} alt="logo" />
          </ListItemIcon>
          <Link to="/offers">
            <Typography variant="h6" noWrap className={classes.typo}>
              Offers & Deals
            </Typography>
          </Link>
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
          <Link to="/local">
            <Typography variant="h6" noWrap className={classes.typo}>
              Local Stores
            </Typography>
          </Link>
        </ListItem>

        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={redeem1} alt="logo" />
          </ListItemIcon>
          <Link to="/payback">
            <Typography variant="h6" noWrap className={classes.typo}>
              Reedem Payback Points
            </Typography>
          </Link>
        </ListItem>

        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={redeem2} alt="logo" />
          </ListItemIcon>
          <Link to="/mgm">
            <Typography variant="h6" noWrap className={classes.typo}>
              Reedem MGM Points
            </Typography>
          </Link>
        </ListItem>

        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={wallets} alt="logo" />
          </ListItemIcon>
          <Link to="/wallet">
            <Typography variant="h6" noWrap className={classes.typo}>
              Wallet Transfer
            </Typography>
          </Link>
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
          <Link target={"_blank"} to="/partner">
            <Typography variant="h6" noWrap className={classes.typo}>
              Become a partner
            </Typography>
          </Link>
        </ListItem>

        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={payment} alt="logo" />
          </ListItemIcon>
          <Link target={"_blank"} to="/zaakpay">
            <Typography variant="h6" noWrap className={classes.typo}>
              Payment Gateway
            </Typography>
          </Link>
        </ListItem>

        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <img src={mutual} alt="logo" />
          </ListItemIcon>
          <Link to="/mutual"  target={"_blank"}>

          <Typography variant="h6" noWrap className={classes.typo}>
              Mutual Funds
          </Typography>
            </Link>
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
      <nav
        className={classes.drawer}
        aria-label="mailbox folders"
        ref={DrawerComponent}
      >
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
        
      </main>
    </div>

  );
}

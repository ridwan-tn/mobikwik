import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Menu from "@material-ui/core/Menu";
import TextField from "@material-ui/core/TextField";
import m2 from "../assets/m2.png";
import m4 from "../assets/m4.png";

import landline from "../assets/landline.jpg";
import { Autocomplete } from "@material-ui/lab";
import dcard from "../assets/p1.svg";
import broadband from "../assets/broadband.png";
import gas from "../assets/PP.jpg";
import Metro from "../assets/Metro.png";
import water1 from "../assets/water1.jpg";
import Muncipality from "../assets/Muncipality.jfif";
import Emi from "../assets/Emi.webp";
import challan from "../assets/challan.jfif";
import housing from "../assets/housing.jpg";
import cylinder from "../assets/gas.png";
import googleplay from "../assets/googleplay.png";
import cable from "../assets/cable.png";
import insurance from "../assets/insurance.jfif";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import Link from "@material-ui/core/Link";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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
  backgroundColor: "green",
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#002447",
    color: "white",
    maxWidth: 345,
  },
  media: {
    height: "150%",
  },
  tabContainer: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-5em",
    
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    margin: "1px",
    width: "100%",
    height: "325px",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#002447",
    borderRadius: "4px",
  },
  tabs: {
    borderRadius: "4px",
    backgroundColor: "#002447",
    color: "white",
    indicator: {
      color: "white",
    },
  },
  paperContainer: {
    backgroundColor: "#002447",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  PaperContainer: {
    alignItems: "center",
    justifyContent: "center",
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
  tabpanel: {
    margin: "1em",
    backgroundColor: "white",
    color: "black",
    borderRadius: "4px",
  },
  Textcaption: {
    fontSize: "10px",
    color: "rgb(119,119,119)",
  },
}));
const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "",
  },
})(Tabs);
const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#FFFFF",
    minWidth: 72,
    fontWeight: 20,

    "&:hover": {
      color: "#FFFFFF",
      opacity: 1,
    },
    "&$selected": {
      color: "#FFFFFF",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#FFFFFF",
    },
  },
}))((props) => <Tab disableRipple {...props} />);
const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  style: { width: "7rem", height: "2rem" },
  borderColor: "text.primary",
};

export default function ScrollableTabsButtonForce() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [name, setName] = useState("Online prepaid mobile recharge");
  const [num, setSonet] = useState(0);
  const [age, setAge] = React.useState("");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const preventDefault = (event) => event.preventDefault();

  const handle = (event) => {
    <p>Hello</p>;
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  var a = 10;
  var b = 20;

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setValue1(newValue);
  };
  const hand = () => {
    <div
      style={{
        width: "100",
        height: "100",
        backgroundColor: "greenyellow",
        color: "white",
      }}
    >
      sonet
    </div>;
  };

  const handleClickmobile = () => setName("Online Prepaid Mobile Recharge");
  const sonet = () => setName();
  const handleClickdth = () => setName("DTH Reacharge");
  const handleClickelectricity = () => setName("Electricity Bill Payment");
  const handleClickcreditcard = () => setName("Credit Card Bill Payment");
  const handleClickdatacard = () => setName("Data Card Payment");
  const handleClicklandline = () => setName("Online Landline Bill Payment");
  const handleClickbroadband = () => setName("Broadband Bill Payment");
  const handleClickpipedgas = () => setName("Online Gas Bill Payment");
  const handleClickinsurance = () =>
    setName("Online Life Insurance Premium Payment");
  const handleClickmetro = () => setName("Online Metro Card Recharge");
  const handleClickgoogleplay = () => setName("Online Google Play Recharge");
  const handleClickwater = () => setName("Online Water Bill Payment");
  const handleClickmuncipality = () =>
    setName("Online Municipal Property Tax Payment");
  const handleClickcable = () => setName("Online Cable Bill Payment");
  const handleClickemi = () => setName("Online Loan EMI Payment");
  const handleClickchallan = () => setName("Online Traffic Challan Payment");
  const handleClickgas = () => setName("Online Gas Booking");
  const handleClickhousing = () =>
    setName("Online Housing Society Electricity Bill Payment");
  const userType = "1";
  return (
    <div>
      <Grid container className={classes.tabContainer}>
        <Grid item container>
          <Paper className={classes.paper}>
            <Grid item container>
              <Grid item md={6} xs={6} style={{ float: "left" }}>
                <Typography
                  variant="h6"
                  style={{ color: "white", margin: "1em",marginLeft:"-3em",fontSize:"2em" }}
                >
                  {name}
                </Typography>
              </Grid>
              <Grid item md={6} xs={6} style={{ float: "right" }}>
                <Typography
                  variant="body2"
                  style={{ color: "white", marginTop: "2em" }}
                >
                  <Link href="#" onClick={preventDefault}>
                    How it works ?
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid></Grid>
            <Tabs
              className={classes.tabs}
              aria-label="simple tabs example"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="white"
              fontSize="1%"
              backgroundColor="rgb(0,36,71)"
              aria-label="scrollable force tabs example"
            >
              <AntTab
                label="Mobile"
                icon={
                  <Avatar
                    style={{
                      color: "rgb(38,157,228)",
                      backgroundColor: "white",
                    }}
                    alt="test avatar"
                  >
                    <PhoneAndroidIcon />
                  </Avatar>
                }
                {...a11yProps(0)}
                style={{ color: "white", fontSize: "10px" }}
                onClick={handleClickmobile}
              />

              <AntTab
                label="DTH"
                icon={
                  <Avatar
                    style={{
                      backgroundColor: "white",
                      size: "4px",
                      color: "blue",
                    }}
                    alt="test avatar"
                    src={m2}
                  />
                }
                {...a11yProps(1)}
                style={{ color: "white", fontSize: "10px" }}
                onClick={handleClickdth}
              />
              <AntTab
                label="Electricity"
                icon={
                  <Avatar
                    style={{
                      backgroundColor: "white",
                      padding: "3px",
                      color: "white",
                    }}
                    alt="test avatar"
                    src={m4}
                  />
                }
                {...a11yProps(2)}
                style={{ color: "white", fontSize: "10px" }}
                onClick={handleClickelectricity}
              />

              <AntTab
                label="Credit Card"
                icon={
                  <Avatar
                    style={{
                      color: "rgb(38,157,228)",
                      backgroundColor: "white",
                    }}
                    alt="test avatar"
                  >
                    <CreditCardIcon />
                  </Avatar>
                }
                {...a11yProps(3)}
                style={{ color: "white", fontSize: "10px" }}
                onClick={handleClickcreditcard}
              />
              <AntTab
                label="Data Card"
                icon={
                  <Avatar
                    style={{
                      color: "rgb(38,157,228)",
                      backgroundColor: "white",
                    }}
                    alt="test avatar"
                    src={dcard}
                  ></Avatar>
                }
                {...a11yProps(4)}
                style={{ color: "white", fontSize: "10px" }}
                onClick={handleClickdatacard}
              />
              <AntTab
                label="Landline"
                icon={
                  <Avatar
                    style={{
                      color: "rgb(38,157,228)",
                      backgroundColor: "white",
                    }}
                    alt="test avatar"
                    src={landline}
                  ></Avatar>
                }
                {...a11yProps(5)}
                style={{ color: "white", fontSize: "10px" }}
                onClick={handleClicklandline}
              />
              <AntTab
                label="Broadband"
                icon={
                  <Avatar
                    style={{
                      color: "rgb(38,157,228)",
                      backgroundColor: "white",
                    }}
                    alt="test avatar"
                    src={broadband}
                  ></Avatar>
                }
                {...a11yProps(6)}
                style={{ color: "white", fontSize: "10px" }}
                onClick={handleClickbroadband}
              />
              <AntTab
                label="Piped gas"
                icon={
                  <Avatar
                    style={{
                      color: "rgb(38,157,228)",
                      backgroundColor: "white",
                    }}
                    alt="test avatar"
                    src={gas}
                  ></Avatar>
                }
                {...a11yProps(7)}
                style={{ color: "white", fontSize: "10px" }}
                onClick={handleClickpipedgas}
              />

              <AntTab
                label="Insurance"
                icon={
                  <Avatar
                    style={{
                      color: "rgb(38,157,228)",
                      backgroundColor: "white",
                    }}
                    alt="test avatar"
                    src={insurance}
                  ></Avatar>
                }
                {...a11yProps(8)}
                style={{ color: "white", fontSize: "10px" }}
                onClick={handleClickinsurance}
              />
              {(() => {
                switch (name) {
                  case "Online Google Play Recharge":
                    return (
                      <AntTab
                        label="Google play"
                        icon={
                          <Avatar
                            style={{
                              color: "rgb(38,157,228)",
                              backgroundColor: "rgb(231,240,253)",
                            }}
                            alt="test avatar"
                            src={googleplay}
                          ></Avatar>
                        }
                        {...a11yProps(12)}
                        style={{ color: "white", fontSize: "10px" }}
                        disabled
                      />
                    );
                  case "Online Metro Card Recharge":
                    return (
                      <AntTab
                        label="Metro"
                        id="1"
                        icon={
                          <Avatar
                            style={{
                              color: "rgb(38,157,228)",
                              backgroundColor: "rgb(253,240,253)",
                            }}
                            alt="test avatar"
                            src={Metro}
                          ></Avatar>
                        }
                        {...a11yProps(10)}
                        style={{ color: "white", fontSize: "10px" }}
                        disabled
                      />
                    );
                  case "Online Water Bill Payment":
                    return (
                      <AntTab
                        label="Water"
                        icon={
                          <Avatar
                            style={{
                              color: "rgb(38,157,228)",
                              backgroundColor: "rgb(231,240,253)",
                            }}
                            alt="test avatar"
                            src={water1}
                          ></Avatar>
                        }
                        {...a11yProps(11)}
                        style={{ color: "white", fontSize: "10px" }}
                        disabled
                      />
                    );
                  case "Online Municipal Property Tax Payment":
                    return (
                      <AntTab
                        label="Muncipality"
                        icon={
                          <Avatar
                            style={{
                              color: "rgb(38,157,228)",
                              backgroundColor: "rgb(231,240,253)",
                            }}
                            alt="test avatar"
                            src={Muncipality}
                          ></Avatar>
                        }
                        {...a11yProps(14)}
                        style={{ color: "white", fontSize: "10px" }}
                        disabled
                      />
                    );
                  case "Online Cable Bill Payment":
                    return (
                      <AntTab
                        label="Cable"
                        icon={
                          <Avatar
                            style={{
                              color: "rgb(38,157,228)",
                              backgroundColor: "rgb(231,240,253)",
                            }}
                            alt="test avatar"
                            src={cable}
                          ></Avatar>
                        }
                        {...a11yProps(13)}
                        style={{ color: "white", fontSize: "10px" }}
                        disabled
                      />
                    );
                  case "Online Loan EMI Payment":
                    return (
                      <AntTab
                        label="EMI"
                        icon={
                          <Avatar
                            style={{
                              color: "rgb(38,157,228)",
                              backgroundColor: "rgb(231,240,253)",
                            }}
                            alt="test avatar"
                            src={Emi}
                          ></Avatar>
                        }
                        {...a11yProps(15)}
                        style={{ color: "white", fontSize: "10px" }}
                        disabled
                      />
                    );
                  case "Online Loan EMI Payment":
                    return (
                      <AntTab
                        label="EMI"
                        icon={
                          <Avatar
                            style={{
                              color: "rgb(38,157,228)",
                              backgroundColor: "rgb(231,240,253)",
                            }}
                            alt="test avatar"
                            src={Emi}
                          ></Avatar>
                        }
                        {...a11yProps(15)}
                        style={{ color: "white", fontSize: "10px" }}
                        disabled
                      />
                    );
                  case "Online Traffic Challan Payment":
                    return (
                      <AntTab
                        label="Challan"
                        icon={
                          <Avatar
                            style={{
                              color: "rgb(38,157,228)",
                              backgroundColor: "rgb(231,240,253)",
                            }}
                            alt="test avatar"
                            src={challan}
                          ></Avatar>
                        }
                        {...a11yProps(16)}
                        style={{ color: "white", fontSize: "10px" }}
                        disabled
                      />
                    );
                  case "Online Gas Booking":
                    return (
                      <AntTab
                        label="Gas Booking"
                        icon={
                          <Avatar
                            style={{
                              color: "rgb(38,157,228)",
                              backgroundColor: "rgb(231,240,253)",
                            }}
                            alt="test avatar"
                            src={cylinder}
                          ></Avatar>
                        }
                        {...a11yProps(18)}
                        style={{ color: "white", fontSize: "10px" }}
                        disabled
                      />
                    );
                  case "Online Housing Society Electricity Bill Payment":
                    return (
                      <AntTab
                        label="Housing"
                        icon={
                          <Avatar
                            style={{
                              color: "rgb(38,157,228)",
                              backgroundColor: "rgb(231,240,253)",
                            }}
                            alt="test avatar"
                            src={housing}
                          ></Avatar>
                        }
                        {...a11yProps(17)}
                        style={{ color: "white", fontSize: "10px" }}
                        disabled
                      />
                    );
                  default:
                    return <div></div>;
                }
              })()}
              <AntTab
                label="more"
                id="0"
                icon={
                  <Avatar
                    style={{
                      color: "rgb(38,157,228)",
                      backgroundColor: "white",
                    }}
                    alt="test avatar"
                    text="+9"
                  >
                    +9
                  </Avatar>
                }
                {...a11yProps(9)}
                style={{ color: "white", fontSize: "10px" }}
                onClick={handleClick}
              />
            </Tabs>

            <TabPanel value={value} className={classes.tabpanel} index={0}>
              {/*MOBILE*/}
              <Grid item container style={{ textAlign: "left" }} spacing={2}>
                <Grid item md={4} style={{ float: "left" }}>
                  <Typography className={classes.Textcaption}>
                    Mobile Number
                  </Typography>
                </Grid>
                <Grid item md={2} xs={2} style={{ float: "left" }}>
                  <Typography className={classes.Textcaption}>
                    {" "}
                    Select Operator
                  </Typography>
                </Grid>
                <Grid item md={2} xs={2} style={{ float: "left" }}>
                  <Typography className={classes.Textcaption}>
                    Select Circle
                  </Typography>
                </Grid>
                <Grid item md={2} xs={2} style={{ float: "right" }}>
                  <Typography className={classes.Textcaption}>
                    {" "}
                    ₹ Amount{" "}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                container
                style={{ justifyContent: "left", alignItems: "left" }}
                spacing={2}
              >
                <Grid item md={4} xs={1}>
                  <TextField
                    id="outlined-basic"
                    style={{ width: "100%" }}
                    label=" ₹    Mobile Number"
                    placeholder="  ₹  Amount"
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={2} xs={1}>
                  <Autocomplete
                    id="combo-box-demo"
                    disabled
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        disabled
                        {...params}
                        label="Select Operator"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>

                <Grid item md={2} xs={1}>
                  <Autocomplete
                    id="combo-box-demo"
                    disabled
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        style={{ width: "100%" }}
                        {...params}
                        label="Select Circle"
                        variant="outlined"
                      />
                    )}
                  />{" "}
                </Grid>

                <Grid item md={2} xs={1}>
                  <TextField
                    id="outlined-basic"
                    style={{ width: "100%" }}
                    label=" ₹    Amount"
                    placeholder="  ₹  Amount"
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={1} xs={1}>
                  <button
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      width: "75px",
                      height: "60px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel
              value={value}
              className={classes.tabpanel}
              style={{ marginRight: "10px" }}
              index={1}
            >
              {/*DTH*/}
              <Grid item container style={{ textAlign: "left" }} spacing={2}>
                <Grid item md={3}>
                  <Typography className={classes.Textcaption}>
                    {" "}
                    Operator
                  </Typography>
                </Grid>

                <Grid item md={3}>
                  <Typography className={classes.Textcaption}>
                    Mobile Number./Consumer Number
                  </Typography>
                </Grid>
                <Grid item md={3}>
                  <Typography className={classes.Textcaption}>
                    Amount
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                style={{ justifyContent: "left", alignItems: "left" }}
                spacing={2}
              >
                <Grid item md={3}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={top100}
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Airtel TV"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item md={3}>
                  <TextField
                    id="outlined-basic"
                    placeholder="Mobile Number./Consumer Number"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={3} xs={2}>
                  <TextField
                    id="outlined-basic"
                    label=" ₹    Amount"
                    placeholder="  ₹  Amount"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={2} xs={2}>
                  <button
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      width: "100px",
                      height: "60px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel
              value={value}
              className={classes.tabpanel}
              style={{ marginRight: "10px" }}
              index={2}
            >
              {/*ELECTRICITY*/}
              <Grid item container spacing={2} style={{ textAlign: "left" }}>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    {" "}
                    Operator
                  </Typography>
                </Grid>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    Consumer Number
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item md={5}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Adani Electricity Mumbai Limited"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item md={5}>
                  <TextField
                    id="outlined-basic"
                    label="Consumer Number "
                    placeholder="Consumer Number"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={2} xs={2} style={{ float: "left" }}>
                  <button
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      width: "75%",
                      height: "55px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={3}>
              {/*CREDITCARD*/}

              <Grid item container spacing={2} style={{ textAlign: "left" }}>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    Credit Card Number
                  </Typography>
                </Grid>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    Bill Amount
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                style={{ justifyContent: "left", alignItems: "left" }}
                spacing={2}
              >
                <Grid item md={5} style={{ float: "left" }}>
                  <TextField
                    id="outlined-basic"
                    label=" Credit Card Number"
                    placeholder="Credit Card Number"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={5} xs={6} style={{ float: "left" }}>
                  <TextField
                    id="outlined-basic"
                    label=" ₹ Bill Amount"
                    placeholder="Bill Amount"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={2} xs={2} style={{ float: "left" }}>
                  <button
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      width: "100px",
                      height: "60px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={4}>
              {/*DATACARD*/}
              <Grid item container style={{ textAlign: "left" }}>
                <Grid item md={3}>
                  <Typography className={classes.Textcaption}>
                    Data Card Number
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.Textcaption}>
                    Operator
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.Textcaption}>
                    Circle
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.Textcaption}>
                    Amount
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                style={{ justifyContent: "left", alignItems: "left" }}
                spacing={2}
              >
                <Grid item md={3}>
                  <TextField
                    id="outlined-basic"
                    placeholder="Data Card Number "
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={2}>
                  <Autocomplete
                    id="combo-box-demo"
                    disabled
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Idea Netsetter"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item md={2}>
                  <Autocomplete
                    id="combo-box-demo"
                    disabled
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Circle"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item md={3}>
                  <TextField
                    id="outlined-basic"
                    label=" ₹    Amount"
                    placeholder="  ₹  Amount"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={2}>
                  <button
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      width: "100px",
                      height: "60px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={5}>
              {/*LANDLINE*/}
              <Grid item container style={{ textAlign: "left" }}>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    {" "}
                    Operator
                  </Typography>
                </Grid>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    Landline Number (with STD Code)
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                style={{ justifyContent: "left", alignItems: "left" }}
                spacing={2}
              >
                <Grid item md={5}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={top10}
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Airtel Landline"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item md={5}>
                  <TextField
                    id="outlined-basic"
                    label=" Landline Number (with STD Code) "
                    placeholder=" Landline Number (with Std code)"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={2}>
                  <button
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      width: "100px",
                      height: "50px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={6}>
              {/*BROADBAND*/}
              <Grid item container style={{ textAlign: "left" }} spacing={2}>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    {" "}
                    Operator
                  </Typography>
                </Grid>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    Account Number/User Name
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item md={5}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={topland}
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Act Fibernat"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item md={5}>
                  <TextField
                    id="outlined-basic"
                    label=" Account Number/User Name "
                    placeholder=" Landline Number (with Std code)"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={2}>
                  <button
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      width: "100px",
                      height: "50px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={7}>
              {/*PIPED GAS*/}
              <Grid item container style={{ textAlign: "left" }}>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    {" "}
                    Operator
                  </Typography>
                </Grid>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    {" "}
                    Customer ID
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item md={5}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={toppipe}
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Adani Gas"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item md={5}>
                  <TextField
                    id="outlined-basic"
                    label=" Customer ID "
                    placeholder="Customer ID "
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={2} xs={2} style={{ float: "left" }}>
                  <button
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      width: "100px",
                      height: "50px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={8}>
              {/*INSURANCE*/}
              <Grid item container style={{ textAlign: "left" }} spacing={2}>
                <Grid item md={3}>
                  <Typography className={classes.Textcaption}>
                    {" "}
                    Operator
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.Textcaption}>
                    {" "}
                    POLICY NO
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.Textcaption}>
                    {" "}
                    Date Of Birth
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.Textcaption}>
                    Mobile Number
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item md={3}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={insurance1}
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label=" Insurance Coperations"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item md={2}>
                  <TextField
                    id="outlined-basic"
                    placeholder="POLICY No "
                    variant="outlined"
                    rowsMax="20"
                    style={{ width: "100%" }}
                  />
                  &nbsp;&nbsp;
                </Grid>
                <Grid item md={2}>
                  <TextField
                    id="outlined-basic"
                    placeholder="Date Of Birth "
                    variant="outlined"
                    rowsMax="20"
                    style={{ width: "100%" }}
                  />
                  &nbsp;&nbsp;
                </Grid>
                <Grid item md={2}>
                  <TextField
                    id="outlined-basic"
                    label="Mobile Number"
                    placeholder=" Mobile Number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={2}>
                  <button
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      width: "100px",
                      height: "50px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value1} className={classes.tabpanel} index={10}>
              {/*METRO*/}
              <Grid item container style={{ textAlign: "left" }} spacing={2}>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    Operator
                  </Typography>
                </Grid>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    Card Number
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item md={5}>
                  <TextField
                    id="outlined-basic"
                    label=" Mumbai Metro "
                    placeholder="Mumbai Metro "
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={5}>
                  <TextField
                    id="outlined-basic"
                    label=" Card Number"
                    placeholder="Card Number"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={2}>
                  <button
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      width: "100px",
                      height: "60px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value1} className={classes.tabpanel} index={11}>
              {/**Water */}
              <Grid item container style={{ textAlign: "left" }} spacing={2}>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    Operator
                  </Typography>
                </Grid>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    Loan Number
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item md={5}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={topwater}
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="AAVAS FINANCIERS LIMITED"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item md={5}>
                  <TextField
                    id="outlined-basic"
                    label="Loan Number"
                    placeholder="Loan Number"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={2}>
                  <button
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      width: "100px",
                      height: "50px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value={value} className={classes.tabpanel} index={12}>
              {/*Google Play */}
              <Grid item container style={{ textAlign: "left" }} spacing={2}>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    {" "}
                    Operator
                  </Typography>
                </Grid>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    {" "}
                    Amount( ₹100- ₹1500)
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item md={5}>
                  <TextField
                    id="outlined-basic"
                    label=" Google Play Reacharge Code"
                    placeholder="Google Play Reacharge Code "
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={5}>
                  <TextField
                    id="outlined-basic"
                    label=" ₹Amount( ₹100- ₹1500)"
                    placeholder="₹Amount( ₹100- ₹1500)"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={2}>
                  <button
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      width: "100px",
                      height: "60px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item md={4} xs={4} style={{ float: "" }}>
                  <Typography className={classes.Textcaption}>
                    {" "}
                    Read Google Play Terms And Conditions
                  </Typography>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={13}>
              {/*cable */}
              <Grid item container style={{ textAlign: "left" }} spacing={2}>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    {" "}
                    Operator
                  </Typography>
                </Grid>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    Subscriber Code
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item md={5}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={topcable}
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Asianet Digital"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item md={5}>
                  <TextField
                    id="outlined-basic"
                    label=" Subscriber Code"
                    placeholder="Subscriber Code"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={2}>
                  <button
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      width: "100px",
                      height: "60px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={14}>
              {/*muncipality */}
              <Grid item container spacing={2} style={{ textAlign: "left" }}>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    Operator
                  </Typography>
                </Grid>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    Tenement No
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item md={5}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={topmuncipality}
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Ahamedabad Muncipal Corporation"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item md={5}>
                  <TextField
                    id="outlined-basic"
                    label=" Tenament No"
                    placeholder="Tenament No"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={2}>
                  <button
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      width: "100px",
                      height: "55px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={15}>
              {/*Emi*/}
              <Grid item container style={{ textAlign: "left" }}>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    Operator
                  </Typography>
                </Grid>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    {" "}
                    Loan Number
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item md={5}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={topemi}
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="AAVAS FINANCIERS LIMITED"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item md={5}>
                  <TextField
                    id="outlined-basic"
                    label=" Tenament No"
                    placeholder="Loan Number"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={2}>
                  <button
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      width: "100px",
                      height: "60px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={16}>
              {/*Challan*/}

              <Grid item container style={{ textAlign: "left" }} spacing={2}>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    Operator
                  </Typography>
                </Grid>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    RC/DL/Challan Number
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item md={5}>
                  <TextField
                    id="outlined-basic"
                    label=" AndraPradesh Traffic POlice"
                    placeholder="AndraPradesh Traffic POlice"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={4} xs={4} style={{ float: "left" }}>
                  <TextField
                    id="outlined-basic"
                    label=" RC/DL/Challan Number"
                    placeholder="RC/DL/Challan Number"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={3} xs={3} style={{ float: "left" }}>
                  <button
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      width: "100px",
                      height: "55px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={17}>
              {/*Housing */}
              <Grid item container style={{ textAlign: "left" }} spacing={2}>
                <Grid item md={3}>
                  <Typography className={classes.Textcaption}>City</Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.Textcaption}>
                    Society Name
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.Textcaption}>
                    Service Type
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography className={classes.Textcaption}>
                    Amount
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item md={3}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={topcity}
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField {...params} label="City" variant="outlined" />
                    )}
                  />
                </Grid>
                <Grid item md={2}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={topsociety}
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Society Name"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item md={2}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={topservice}
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Service Type"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item md={2}>
                  <TextField
                    id="outlined-basic"
                    label=" ₹    Amount"
                    placeholder="  ₹  Amount"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={2}>
                  <button
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      width: "100px",
                      height: "60px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={18}>
              {/*Gas Booking*/}
              <Grid item container style={{ textAlign: "left" }} spacing={2}>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    {" "}
                    Operator
                  </Typography>
                </Grid>
                <Grid item md={5}>
                  <Typography className={classes.Textcaption}>
                    Registerd Contact Number
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item md={5}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={toplpg}
                    getOptionLabel={(option) => option.title}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Bharath Petrolium Coperation Limited(BPCL)"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item md={5}>
                  <TextField
                    id="outlined-basic"
                    label=" Registered Contact Number"
                    placeholder=" Registered Contact Number"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item md={2}>
                  <button
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      width: "100px",
                      height: "60px",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>

            <br />
            <br />

            <p></p>
            <div>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClick={handleClose}
              >
                <Tabs
                  style={{
                    backgroundColor: "white",
                    textTransform: "lowercase",
                    justifyContent: "",
                  }}
                  value={value1}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="on"
                  indicatorColor="white"
                  textColor="white"
                  fontSize="1%"
                  backgroundColor="rgb(0,36,71)"
                  aria-label="scrollable force tabs example"
                >
                  <TabPanel></TabPanel> <TabPanel></TabPanel>{" "}
                  <TabPanel></TabPanel> <TabPanel></TabPanel>{" "}
                  <TabPanel></TabPanel>
                  <TabPanel></TabPanel> <TabPanel></TabPanel>{" "}
                  <TabPanel></TabPanel> <TabPanel></TabPanel>
                  <TabPanel></TabPanel>
                  <AntTab
                    label="Metro"
                    id="1"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "rgb(253,240,253)",
                        }}
                        alt="test avatar"
                        src={Metro}
                      ></Avatar>
                    }
                    {...a11yProps(10)}
                    style={{ color: "black", fontSize: "14px" }}
                    onClick={handleClickmetro}
                  />
                  <AntTab
                    label="Water"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "rgb(231,240,253)",
                        }}
                        alt="test avatar"
                        src={water1}
                      ></Avatar>
                    }
                    {...a11yProps(11)}
                    style={{ color: "black", fontSize: "14px" }}
                    onClick={handleClickwater}
                  />
                  <AntTab
                    label="Google play"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "rgb(231,240,253)",
                        }}
                        alt="test avatar"
                        src={googleplay}
                      ></Avatar>
                    }
                    {...a11yProps(12)}
                    style={{ color: "black", fontSize: "14px" }}
                    onClick={handleClickgoogleplay}
                  />
                </Tabs>
                <Tabs
                  style={{
                    backgroundColor: "white",
                    textTransform: "lowercase",
                    justifyContent: "",
                  }}
                  value={value1}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="on"
                  indicatorColor="primary"
                  textColor="white"
                  fontSize="1%"
                  backgroundColor="rgb(0,36,71)"
                  aria-label="scrollable force tabs example"
                >
                  <TabPanel></TabPanel> <TabPanel></TabPanel>{" "}
                  <TabPanel></TabPanel> <TabPanel></TabPanel>{" "}
                  <TabPanel></TabPanel>
                  <TabPanel></TabPanel> <TabPanel></TabPanel>{" "}
                  <TabPanel></TabPanel> <TabPanel></TabPanel>
                  <TabPanel></TabPanel>
                  <TabPanel></TabPanel>
                  <TabPanel></TabPanel>
                  <TabPanel></TabPanel>
                  <AntTab
                    label="Cable"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "rgb(231,240,253)",
                        }}
                        alt="test avatar"
                        src={cable}
                      ></Avatar>
                    }
                    {...a11yProps(13)}
                    style={{ color: "black", fontSize: "14px" }}
                    onClick={handleClickcable}
                  />
                  <AntTab
                    label="Muncipality"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "rgb(231,240,253)",
                        }}
                        alt="test avatar"
                        src={Muncipality}
                      ></Avatar>
                    }
                    {...a11yProps(14)}
                    style={{ color: "black", fontSize: "14px" }}
                    onClick={handleClickmuncipality}
                  />
                  <AntTab
                    label="EMI"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "rgb(231,240,253)",
                        }}
                        alt="test avatar"
                        src={Emi}
                      ></Avatar>
                    }
                    {...a11yProps(15)}
                    style={{ color: "black", fontSize: "14px" }}
                    onClick={handleClickemi}
                  />
                </Tabs>
                <Tabs
                  style={{
                    backgroundColor: "white",
                    textTransform: "lowercase",
                    justifyContent: "",
                  }}
                  value={value1}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="on"
                  indicatorColor="primary"
                  textColor="white"
                  fontSize="1%"
                  backgroundColor="rgb(0,36,71)"
                  aria-label="scrollable force tabs example"
                >
                  <TabPanel></TabPanel> <TabPanel></TabPanel>{" "}
                  <TabPanel></TabPanel> <TabPanel></TabPanel>{" "}
                  <TabPanel></TabPanel>
                  <TabPanel></TabPanel> <TabPanel></TabPanel>{" "}
                  <TabPanel></TabPanel> <TabPanel></TabPanel>
                  <TabPanel></TabPanel>
                  <TabPanel></TabPanel>
                  <TabPanel></TabPanel>
                  <TabPanel></TabPanel>
                  <TabPanel></TabPanel>
                  <TabPanel></TabPanel>
                  <br />{" "}
                  <AntTab
                    label="Challan"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "rgb(231,240,253)",
                        }}
                        alt="test avatar"
                        src={challan}
                      ></Avatar>
                    }
                    {...a11yProps(16)}
                    style={{ color: "black", fontSize: "14px" }}
                    onClick={handleClickchallan}
                  />
                  <AntTab
                    label="Housing"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "rgb(231,240,253)",
                        }}
                        alt="test avatar"
                        src={housing}
                      ></Avatar>
                    }
                    {...a11yProps(17)}
                    style={{ color: "black", fontSize: "14px" }}
                    onClick={handleClickhousing}
                  />
                  <AntTab
                    label="Gas Booking"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "rgb(231,240,253)",
                        }}
                        alt="test avatar"
                        src={cylinder}
                      ></Avatar>
                    }
                    {...a11yProps(18)}
                    style={{ color: "black", fontSize: "14px" }}
                    onClick={handleClickgas}
                  />
                </Tabs>
              </Menu>
            </div>
          </Paper>
        </Grid>
      </Grid>
      {/*
   <Grid item container>
     <Grid item xs={12}>
       <Typography varient="h1" style={{fontSize:"30px"}}>What We Do</Typography>
       
     </Grid>
     <Grid item xs={12} style={{color:"rgb(107,107,106)",fontSize:"20px"}}>
     Simple, fast and Hassle Free payments
     </Grid>
     <Grid item xs={2}>
       <Avatar style={{backgroundColor:"rgb(231,240,253)"}}><PhoneAndroidIcon style={{color:"blue"}}/></Avatar>
       <Typography style={{fontSize:"20px",fontWeight:"bolder"}}>Phone Recharge & DTH</Typography>
       <Typography style={{color:"rgb(107,107,106)",fontSize:"20px"}}>
       With money loaded in your MobiKwik wallet, it takes seconds to make phone and DTH recharges!
       </Typography>
     </Grid>
     <Grid item xs={2}>
       <Avatar style={{backgroundColor:"rgb(231,240,253)"}} src={mutualfund58}></Avatar>
       <Typography style={{fontSize:"20px",fontWeight:"bolder"}}>Bill Payments</Typography>
       <Typography style={{color:"rgb(107,107,106)",fontSize:"20px"}}>
       Pay all your bills across categories via MobiKwik in seconds and avoid late payment charges.
       </Typography>
     </Grid>
     <Grid item xs={2}>
       <Avatar style={{backgroundColor:"rgb(231,240,253)"}} src={mutualfund59}></Avatar>
       <Typography style={{fontSize:"20px",fontWeight:"bolder"}}>Shopping in Local Stores</Typography>
       <Typography style={{color:"rgb(107,107,106)",fontSize:"20px"}}>
       Pay all your bills across categories via MobiKwik in seconds and avoid late payment charges.
       </Typography>
     </Grid>
   </Grid>
   <Grid item container style={{marginTop:"50px"}}>
   <Grid item xs={2}>
       <Avatar style={{backgroundColor:"rgb(231,240,253)"}} src={mutualfund60}></Avatar>
       <Typography style={{fontSize:"20px",fontWeight:"bolder"}}>Boost your finances with MobiKwik!</Typography>
       <Typography style={{color:"rgb(107,107,106)",fontSize:"20px"}}>
       Get an instant ₹5,00,000 credit in your wallet in less than 5 Minutes.
       </Typography>
     </Grid>
     <Grid item xs={2}>
       <Avatar style={{backgroundColor:"rgb(231,240,253)"}} src={mutualfund61}></Avatar>
       <Typography style={{fontSize:"20px",fontWeight:"bolder"}}>Transfer money to Bank</Typography>
       <Typography style={{color:"rgb(107,107,106)",fontSize:"20px"}}>
       You can transfer money from Credit card to any Bank account.
       </Typography>
     </Grid>
   </Grid>
   <Grid item container style={{marginTop:"50px"}}>
     <Grid item xs={6}>
       <Typography style={{fontWeight:"bolder",fontSize:"35px"}}>Do Recharge & Bill Payments at MobiKwik</Typography>
     </Grid>
   </Grid>
    */}
    </div>
  );
}
const top100Films = [
  { title: "Ajmer Vidyut Vitran Nagar Limited (AVVNC)" },
  { title: "Assam Power Distribution Company Ltd (NON-RAPOR)" },
  { title: "Assam Power Distribution Company Ltd (RAPOR)" },
  { title: "Banglore Electricity Suppley Ltd (BESCOM)" },
  { title: "B.E.S.T Mumbai" },
  { title: "Bagalpur Electricty Distribution Company Ltd " },
  { title: "Bharathpur Electricity Service Limited" },
];
const top100 = [
  { title: "Airtel DTH" },
  { title: "Sun Direct" },
  { title: "Tata Sky" },
  { title: "d2h" },
  { title: "Dish Tv" },
];
const toplpg = [
  { title: "Bharath Petrolium Corporation Limited" },
  { title: "Indian Oil" },
  { title: "Hindhustan Petrolium Corporation Limited" },
];
const topcity = [
  { title: "Thiruvanthapuram" },
  { title: "Bengluru" },
  { title: "Chennai" },
  { title: "Mysoore" },
  { title: "Baroda" },
];
const topsociety = [
  { title: "Airtel DTH" },
  { title: "Sun Direct" },
  { title: "Tata Sky" },
  { title: "d2h" },
  { title: "Dish Tv" },
];
const topservice = [
  { title: "Airtel DTH" },
  { title: "Sun Direct" },
  { title: "Tata Sky" },
  { title: "d2h" },
  { title: "Dish Tv" },
];
const topmuncipality = [
  { title: "Ahemadabad Muncipal Corpration" },
  { title: " Chennai Muncipal Corpration" },
  { title: "Muncipal Corpration Of Gurgagon" },
  { title: "Kattappan Muncipal Corpration" },
  { title: "Thodupuzha Muncipal Corpration" },
];
const topemi = [
  { title: "AAVAS FINANCIERS LIMITED" },
  { title: "Ambani Housing Finance" },
  { title: "Adithya Birla Housing Finance Limited" },
  { title: "Axis Finance Limited" },
  { title: "DMI Finance" },
];
const top10 = [
  { title: "Airtel Landline" },
  { title: "BSNL Landline-Corperate" },
  { title: "MTNL Delhi" },
  { title: "BSNL Landline-Individual" },
  { title: "MTNL Mumbai" },
  { title: "Tikona Infinate Private Limited" },
];
const topland = [
  { title: "Act Fibernet" },
  { title: "Airtel Broadband" },
  { title: "Allaince Broadband" },
  { title: "ASIANET Braodband(ASIANET)" },
  { title: "BSNL Broadband" },
  { title: "Comway Broadband" },
];
const toppipe = [
  { title: "Adani Gas" },
  { title: "Avanthika Gas Ltd" },
  { title: "Assam Gas Company Ltd" },
  { title: "Bhagyanagar Gas Ltd" },
  { title: "Gail Gas Ltd" },
  { title: "Indai Oil-Adani Gas Private Limited" },
  { title: "Gujarat Gas Private Limited" },
];
const topwater = [
  { title: "Adani Capital Pvt Ltd" },
  { title: "Adhani Housing Finance" },
  { title: "Adithya Birla Housing Limited" },
  { title: "AU Bank Loan Repayment" },
  { title: "Gail Gas Ltd" },
  { title: "Bajaj Auto Finance" },
  { title: "IIFL Home Finance" },
];
const topcable = [
  { title: "Asianet Digital" },
  { title: "Hathway Digital" },
  { title: "Incable Digital" },
  { title: "Idukkivision Digital" },
  { title: "Festoon Digital Tv" },
];
const insurance1 = [
  { title: "Adithya Birla Self Insurance Co Limited", year: 1994 },
  { title: "Life Insurance Coperation Of Indai", year: 1994 },
  { title: "Bajaj Allinaze Life Insurance Coperation", year: 1994 },
  { title: "HDFC Life Insurance Copertaion" },
  { title: "Max Life Insurance" },
  { title: "PNB Meta Life" },
  { title: "SBI Life Insurance" },
  { title: "SBI General Insurance" },
  { title: "The Shawshank Redemption", year: 1994 },
];

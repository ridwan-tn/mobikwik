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
import mutualfund58 from "../assets/mutualfund58.png";
import mutualfund59 from "../assets/mutualfund59.png";
import mutualfund60 from "../assets/mutualfund60.png";
import mutualfund61 from "../assets/mutualfund61.png";
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
  backgroundColor: "",
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
  tabContainer: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textfield: {
    paddingLeft: "1.5em",
    paddingRight: "1.5em",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      paddingLeft: ".5em",
      paddingRight: ".5em",
      paddingTop: "",
      paddingBottem: "1.5em",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      paddingLeft: ".5em",
      paddingRight: ".5em",
      paddingTop: "",
      paddingBottem: "1.5em",
    },

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      paddingLeft: ".5em",
      paddingRight: ".5em",
      paddingTop: "",
      paddingBottem: "1.5em",
    },
  },
  tabbutton: {
    paddingLeft: "1.5em",
    paddingRight: "1.5em",

    [theme.breakpoints.down("md")]: {
      width: "80%",
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
      paddingTop: "1em",
      fontSize: "25px",
      paddingBottem: "1.5em",
      borderRadius: "8px",
      height: "50px",
    },

    [theme.breakpoints.down("sm")]: {
      width: "80%",
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
      paddingTop: "1em",
      fontSize: "15px",
      paddingBottem: "1.5em",
      borderRadius: "8px",
      height: "50px",
    },

    [theme.breakpoints.down("xs")]: {
      width: "80%",
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
      paddingTop: "1em",
      fontSize: "15px",
      paddingBottem: "1.5em",
      borderRadius: "8px",
      height: "50px",
    },
  },
  textcaption: {
    paddingLeft: "1.5em",
    paddingRight: "1.5em",

    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
      paddingTop: "",
      paddingBottem: "1.5em",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
      paddingTop: "",
      paddingBottem: "1.5em",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
      paddingTop: "",
      paddingBottem: "1.5em",
    },
  },
  paper: {
    width: "100%",
    height: "",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#002447",
    marginLeft:"-1em",
    [theme.breakpoints.down("xs")]: {
    width:"25em"
    },
  },

  tabs: {
    borderRadius: "0px",
    backgroundColor: "#002447",
    color: "white",
    indicator: {
      color: "white",
    },
  },
  Head: {
    fontSize: 15,
    color: "white",
    marginTop: "50px",
    marginLeft: "25px",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",

      paddingRight: "1.5em",
      paddingTop: "",
      color: "white",
      paddingBottem: "1.5em",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",

      paddingRight: "1.5em",
      paddingTop: "",
      paddingBottem: "1.5em",
      color: "white",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",

      paddingRight: "1.5em",
      paddingTop: "",
      paddingBottem: "1.5em",
      color: "white",
    },
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
    marginLeft: "10px",
    marginTop: "10px",
    marginRight: "10px",
    paddingLeft: "1em",
    backgroundColor: "white",
    color: "black",
    borderRadius: "10px",
  },
}));
const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {},
})(Tabs);
const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#FFFFF",
    minWidth: 2,
    fontWeight: 5,

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

export default function Tabres() {
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
              <Grid style={{ float: "left" }}>
                <Typography variant="h4" className={classes.Head}>
                  {name}
                </Typography>
              </Grid>
              {/*
                       <Grid item md={6} xs={6} style={{float:"right"}}>
                       <Typography variant="body2" style={{color:"white",marginTop:"2em"}}>
                       <Link href="#" onClick={preventDefault}>
                               How it works ?
                       </Link></Typography>

                       </Grid>
                       */}
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
              marginLeft="0px"
              aria-label="scrollable force tabs example"
            >
              <AntTab
                label="Mobile"
                icon={
                  <Avatar
                    style={{
                      color: "rgb(38,157,228)",
                      backgroundColor: "white",
                      width: "35px",
                      height: "35px",
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
                label="Dth"
                icon={
                  <Avatar
                    style={{
                      backgroundColor: "white",
                      size: "4px",
                      color: "blue",
                      width: "35px",
                      height: "35px",
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
                      width: "35px",
                      height: "35px",
                    }}
                    alt="test avatar"
                    src={m4}
                  />
                }
                {...a11yProps(2)}
                style={{ color: "white", fontSize: "10px" }}
                onClick={handleClickelectricity}
              />

              {/*
          
          {(() => {
  
  switch (name) {
     case 'Online Google Play Recharge':
         return (
          <AntTab label="Google play"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)",
          width:"50px",height:"50px"}}  
          alt="test avatar" src={googleplay}></Avatar>}{...a11yProps(12)}  style={{color:"white",fontSize:"15px"}}
          />
         )
     case 'Online Metro Card Recharge':
         return (
          <AntTab label="Metro" id="1"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(253,240,253)"
        ,width:"50px",height:"50px"}}  
          alt="test avatar" src={Metro}></Avatar>}{...a11yProps(10)}  style={{color:"white",fontSize:"15px"}} 
          />
         )
         case 'Online Water Bill Payment':
         return (
           <AntTab label="Water"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)"
          ,width:"50px",height:"50px"}}  
          alt="test avatar" src={water1}></Avatar>}{...a11yProps(11)}  style={{color:"white",fontSize:"15px"}} 
          />
         )
         case 'Online Municipal Property Tax Payment':
         return (
          <AntTab label="Muncipality"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)"
          ,width:"50px",height:"50px"}}  
          alt="test avatar" src={Muncipality}></Avatar>}{...a11yProps(14)}  style={{color:"white",fontSize:"15px"}} 
          />
         )
         case 'Online Cable Bill Payment':
         return (
          <AntTab label="Cable"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)",
          width:"50px",height:"50px"}}  
          alt="test avatar" src={cable}></Avatar>}{...a11yProps(13)}  style={{color:"white",fontSize:"15px"}} 
          />
         )
         case 'Online Loan EMI Payment':
         return (
          <AntTab label="EMI"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)",
          width:"50px",height:"50px"}}  
          alt="test avatar" src={Emi}></Avatar>}{...a11yProps(15)}  style={{color:"white",fontSize:"14px"}} 
          />
         )
         case 'Online Loan EMI Payment':
         return (
          <AntTab label="EMI"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)",
          width:"50px",height:"50px"}}  
          alt="test avatar" src={Emi}></Avatar>}{...a11yProps(15)}  style={{color:"white",fontSize:"15px"}} 
          />
         )
         case 'Online Traffic Challan Payment':
         return (
          <AntTab label="Challan"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)",
          width:"50px",height:"50px"}}  
          alt="test avatar" src={challan}></Avatar>}{...a11yProps(16)}  style={{color:"white",fontSize:"15px"}} 
          />
         )
         case 'Online Gas Booking':
         return (
          <AntTab label="Gas Booking"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)",
          width:"50px",height:"50px"}}  
          alt="test avatar" src={cylinder}></Avatar>}{...a11yProps(18)}  style={{color:"white",fontSize:"14px"}} 
          />
         )
         case 'Online Housing Society Electricity Bill Payment':
         return (
          <AntTab label="Housing"  icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(231,240,253)",
          width:"50px",height:"50px"}}  
          alt="test avatar" src={housing}></Avatar>}{...a11yProps(17)}  style={{color:"white",fontSize:"14px"}}
          disabled/>
         )
     default:
         return (
           <div></div>
         )
  }

})()}
 */}
              <AntTab
                label="More"
                id="0"
                icon={
                  <Avatar
                    style={{
                      color: "rgb(38,157,228)",
                      backgroundColor: "white",
                      width: "35px",
                      height: "35px",
                    }}
                    alt="test avatar"
                    text="+15"
                  >
                    +15
                  </Avatar>
                }
                {...a11yProps(9)}
                style={{ color: "white", fontSize: "10px" }}
                onClick={handleClick}
              />
            </Tabs>

            <TabPanel value={value} className={classes.tabpanel} index={0}>
              {/*MOBILE*/}
              <Grid
                item
                container
                justify="center"
                style={{ display: "block" }}
              >
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    Mobile Number
                  </Typography>
                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    placeholder="Mobile Number "
                    variant="outlined"
                  />
                  &nbsp;&nbsp;
                </Grid>
                <Grid style={{ display: "none" }}>
                  Select Operator
                  <Autocomplete
                    id="combo-box-demo"
                    getOptionLabel={(option) => option.title}
                    style={{ width: 250 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Operator"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>

                <Grid style={{ display: "none" }}>
                  Select Circle
                  <Autocomplete
                    id="combo-box-demo"
                    getOptionLabel={(option) => option.title}
                    style={{ width: 250 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Circle"
                        variant="outlined"
                      />
                    )}
                  />{" "}
                  &nbsp;&nbsp;
                </Grid>
                <Grid style={{ display: "none" }}>
                  ₹ Amount
                  <br />
                  <TextField
                    id="outlined-basic"
                    label=" ₹    Amount"
                    placeholder="  ₹  Amount"
                    variant="outlined"
                    rowsMax="20"
                    style={{ width: "80%" }}
                  />
                </Grid>
                <Grid>
                  <button
                    className={classes.tabbutton}
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      color: "white",
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
              <Grid
                item
                container
                justify="center"
                style={{ display: "block" }}
              >
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    Operator
                  </Typography>
                  <Autocomplete
                    id="combo-box-demo"
                    options={top100}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        className={classes.textfield}
                        {...params}
                        placeholder="Airtel TV"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    Mobile Number./Consumer Number
                  </Typography>
                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    placeholder="Mobile Number./Consumer Number"
                    variant="outlined"
                  />
                </Grid>
                <Grid style={{ textAlign: "left" }}>
                  <br />
                  <Typography className={classes.textcaption}>
                    {" "}
                    Amount
                  </Typography>

                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    placeholder="  ₹  Amount"
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid>
                  <button
                    className={classes.tabbutton}
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      color: "white",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item md={3} xs={3}></Grid>
                <Grid item md={2} xs={2}></Grid>
                <Grid item md={2} xs={2}></Grid>
              </Grid>
            </TabPanel>
            <TabPanel
              value={value}
              className={classes.tabpanel}
              style={{ marginRight: "10px" }}
              index={2}
            >
              {/*ELECTRICITY*/}
              <Grid
                item
                container
                justify="center"
                style={{ display: "block" }}
              >
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Operator
                  </Typography>
                  <Autocomplete
                    id="combo-box-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        className={classes.textfield}
                        {...params}
                        placeholder="Adani Electricity Mumbai Limited"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Consumer Number
                  </Typography>
                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    placeholder="Consumer Number"
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid>
                  <button
                    className={classes.tabbutton}
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      color: "white",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={3}>
              {/*CREDITCARD*/}

              <Grid
                item
                container
                justify="center"
                style={{ display: "block" }}
              >
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Credit Card Number
                  </Typography>

                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    placeholder="Credit Card Number"
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Bill Amount
                  </Typography>
                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    placeholder="Bill Amount"
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid>
                  <button
                    className={classes.tabbutton}
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      color: "white",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={4}>
              {/*DATACARD*/}
              <Grid
                item
                container
                justify="center"
                style={{ display: "block" }}
              >
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Data Card Number
                  </Typography>
                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    placeholder="Data Card Number "
                    variant="outlined"
                  />
                  &nbsp;&nbsp;
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Operator
                  </Typography>

                  <Autocomplete
                    id="combo-box-demo"
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        className={classes.textfield}
                        {...params}
                        placeholder="Idea Netsetter"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Circle
                  </Typography>

                  <Autocomplete
                    id="combo-box-demo"
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        className={classes.textfield}
                        {...params}
                        placeholder="Select Circle"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Amount{" "}
                  </Typography>
                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    placeholder="  ₹  Amount"
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid>
                  <button
                    className={classes.tabbutton}
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      color: "white",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={5}>
              {/*LANDLINE*/}
              <Grid
                item
                container
                justify="center"
                style={{ display: "block" }}
              >
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Operator
                  </Typography>
                  <Autocomplete
                    id="combo-box-demo"
                    options={top10}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        className={classes.textfield}
                        {...params}
                        placeholder="Airtel Landline"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Landline Number (with STD Code)
                  </Typography>

                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    placeholder=" Landline Number (with Std code)"
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid>
                  <button
                    className={classes.tabbutton}
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      color: "white",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={6}>
              {/*BROADBAND*/}
              <Grid
                item
                container
                justify="center"
                style={{ display: "block" }}
              >
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Operator
                  </Typography>

                  <Autocomplete
                    id="combo-box-demo"
                    options={topland}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        className={classes.textfield}
                        {...params}
                        placeholder="Act Fibernat"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Account Number/User Name
                  </Typography>

                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    label=" Account Number/User Name "
                    placeholder=" Landline Number (with Std code)"
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid>
                  <button
                    className={classes.tabbutton}
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      color: "white",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={7}>
              {/*PIPED GAS*/}
              <Grid
                item
                container
                justify="center"
                style={{ display: "block" }}
              >
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Operator
                  </Typography>
                  <Autocomplete
                    id="combo-box-demo"
                    options={toppipe}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        className={classes.textfield}
                        {...params}
                        placeholder="Adani Gas"
                        label="Adani Gas"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Customer ID
                  </Typography>

                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    label=" Customer ID "
                    placeholder="Customer ID "
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid>
                  <button
                    className={classes.tabbutton}
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      color: "white",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={8}>
              {/*INSURANCE*/}
              <Grid
                item
                container
                justify="center"
                style={{ display: "block" }}
              >
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Operator
                  </Typography>

                  <Autocomplete
                    id="combo-box-demo"
                    options={insurance1}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        className={classes.textfield}
                        {...params}
                        placeholder=" Insurance Coperations"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    POLICY NO
                  </Typography>
                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    placeholder="POLICY No "
                    variant="outlined"
                  />
                  &nbsp;&nbsp;
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Date Of Birth
                  </Typography>
                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    placeholder="Date Of Birth "
                    variant="outlined"
                  />
                  &nbsp;&nbsp;
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Mobile Number
                  </Typography>

                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    label="Mobile Number"
                    placeholder=" Mobile Number"
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid>
                  <button
                    className={classes.tabbutton}
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      color: "white",
                    }}
                  >
                    Go
                  </button>
                </Grid>
                <Grid></Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value1} className={classes.tabpanel} index={10}>
              {/*METRO*/}
              <Grid
                item
                container
                justify="center"
                style={{ display: "block" }}
              >
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Operator
                  </Typography>
                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    label=" Mumbai Metro "
                    placeholder="Mumbai Metro "
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Card Number
                  </Typography>

                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    label=" Card Number"
                    placeholder="Card Number"
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid>
                  <button
                    className={classes.tabbutton}
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      color: "white",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value1} className={classes.tabpanel} index={11}>
              {/**Water */}
              <Grid
                item
                container
                justify="center"
                style={{ display: "block" }}
              >
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Operator
                  </Typography>
                  <Autocomplete
                    id="combo-box-demo"
                    options={topwater}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        className={classes.textfield}
                        {...params}
                        placeholder=" Panchayat Water Resources"
                        label="Panchayat Water Resources"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Connection ID
                  </Typography>

                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    label="Connection ID"
                    placeholder="Connection ID"
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid>
                  <button
                    className={classes.tabbutton}
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      color: "white",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value={value} className={classes.tabpanel} index={12}>
              {/*Google Play */}
              <Grid
                item
                container
                justify="center"
                style={{ display: "block" }}
              >
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Operator
                  </Typography>
                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    label=" Google Play Reacharge Code"
                    placeholder="Google Play Reacharge Code "
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    Amount( ₹100- ₹1500)
                  </Typography>

                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    label=" ₹Amount( ₹100- ₹1500)"
                    placeholder="₹Amount( ₹100- ₹1500)"
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid>
                  <button
                    className={classes.tabbutton}
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      color: "white",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
              <br />
              <Grid
                item
                container
                justify="center"
                style={{ display: "block" }}
              >
                <Grid style={{ textAlign: "center" }}>
                  <Typography
                    style={{ color: "black" }}
                    className={classes.textcaption}
                  >
                    Read Google Play Terms And Conditions
                  </Typography>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={13}>
              {/*cable */}
              <Grid
                item
                container
                justify="center"
                style={{ display: "block" }}
              >
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Operator
                  </Typography>

                  <Autocomplete
                    id="combo-box-demo"
                    options={topcable}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        className={classes.textfield}
                        {...params}
                        label="Asianet Digital"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Subscriber Code
                  </Typography>

                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    label=" Subscriber Code"
                    placeholder="Subscriber Code"
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid>
                  <button
                    className={classes.tabbutton}
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      color: "white",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={14}>
              {/*muncipality */}
              <Grid
                item
                container
                justify="center"
                style={{ display: "block" }}
              >
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Operator
                  </Typography>

                  <Autocomplete
                    id="combo-box-demo"
                    options={topmuncipality}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        className={classes.textfield}
                        {...params}
                        label="Ahamedabad Muncipal Corporation"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Tenement No
                  </Typography>

                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    label=" Tenament No"
                    placeholder="Tenament No"
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid>
                  <button
                    className={classes.tabbutton}
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      color: "white",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={15}>
              {/*Emi*/}
              <Grid
                item
                container
                justify="center"
                style={{ display: "block" }}
              >
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Operator
                  </Typography>

                  <Autocomplete
                    id="combo-box-demo"
                    options={topemi}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        className={classes.textfield}
                        {...params}
                        label="AAVAS FINANCIERS LIMITED"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Application ID
                  </Typography>

                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    label=" Application ID"
                    placeholder="Application ID"
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid>
                  <button
                    className={classes.tabbutton}
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      color: "white",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={16}>
              {/*Challan*/}

              <Grid
                item
                container
                justify="center"
                style={{ display: "block" }}
              >
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Operator
                  </Typography>

                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    label=" AndraPradesh Traffic POlice"
                    placeholder="AndraPradesh Traffic POlice"
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    RC/DL/Challan Number
                  </Typography>

                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    label=" RC/DL/Challan Number"
                    placeholder="RC/DL/Challan Number"
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid>
                  <button
                    className={classes.tabbutton}
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      color: "white",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={17}>
              {/*Housing */}
              <Grid
                item
                container
                justify="center"
                style={{ display: "block" }}
              >
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}> City</Typography>

                  <Autocomplete
                    id="combo-box-demo"
                    options={topcity}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        className={classes.textfield}
                        {...params}
                        label="City"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    Society Name
                  </Typography>

                  <Autocomplete
                    id="combo-box-demo"
                    options={topsociety}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        className={classes.textfield}
                        {...params}
                        label="Society Name"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    Service Type
                  </Typography>

                  <Autocomplete
                    id="combo-box-demo"
                    options={topservice}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        className={classes.textfield}
                        {...params}
                        label="Service Type"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Amount{" "}
                  </Typography>

                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    label=" ₹    Amount"
                    placeholder="  ₹  Amount"
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid>
                  <button
                    className={classes.tabbutton}
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      color: "white",
                    }}
                  >
                    Go
                  </button>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} className={classes.tabpanel} index={18}>
              {/*Gas Booking*/}
              <Grid
                item
                container
                justify="center"
                style={{ display: "block" }}
              >
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Operator
                  </Typography>

                  <Autocomplete
                    id="combo-box-demo"
                    options={toplpg}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        className={classes.textfield}
                        {...params}
                        label="Bharath Petrolium Coperation Limited(BPCL)"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <br />
                <Grid style={{ textAlign: "left" }}>
                  <Typography className={classes.textcaption}>
                    {" "}
                    Registerd Contact Number
                  </Typography>

                  <TextField
                    className={classes.textfield}
                    id="outlined-basic"
                    label=" Registered Contact Number"
                    placeholder=" Registered Contact Number"
                    variant="outlined"
                  />
                </Grid>
                <br />
                <Grid>
                  <button
                    className={classes.tabbutton}
                    style={{
                      backgroundColor: "rgb(178,178,178)",
                      color: "white",
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
                justify="center"
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
                  <AntTab
                    label="Metro"
                    id="1"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "rgb(253,240,253)",
                          width: "35px",
                          height: "35px",
                        }}
                        alt="test avatar"
                        src={Metro}
                      ></Avatar>
                    }
                    {...a11yProps(10)}
                    style={{ color: "black", fontSize: "10px" }}
                    onClick={handleClickmetro}
                  />
                  <AntTab
                    label="Water"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "rgb(231,240,253)",
                          width: "35px",
                          height: "35px",
                        }}
                        alt="test avatar"
                        src={water1}
                      ></Avatar>
                    }
                    {...a11yProps(11)}
                    style={{ color: "black", fontSize: "10px" }}
                    onClick={handleClickwater}
                  />
                  <AntTab
                    label="Google play"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "rgb(231,240,253)",
                          width: "35px",
                          height: "35px",
                        }}
                        alt="test avatar"
                        src={googleplay}
                      ></Avatar>
                    }
                    {...a11yProps(12)}
                    style={{ color: "black", fontSize: "10px" }}
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
                          width: "35px",
                          height: "35px",
                        }}
                        alt="test avatar"
                        src={cable}
                      ></Avatar>
                    }
                    {...a11yProps(13)}
                    style={{ color: "black", fontSize: "10px" }}
                    onClick={handleClickcable}
                  />
                  <AntTab
                    label="Muncipality"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "rgb(231,240,253)",
                          width: "35px",
                          height: "35px",
                        }}
                        alt="test avatar"
                        src={Muncipality}
                      ></Avatar>
                    }
                    {...a11yProps(14)}
                    style={{ color: "black", fontSize: "10px" }}
                    onClick={handleClickmuncipality}
                  />
                  <AntTab
                    label="EMI"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "rgb(231,240,253)",
                          width: "35px",
                          height: "35px",
                        }}
                        alt="test avatar"
                        src={Emi}
                      ></Avatar>
                    }
                    {...a11yProps(15)}
                    style={{ color: "black", fontSize: "10px" }}
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
                          width: "35px",
                          height: "35px",
                        }}
                        alt="test avatar"
                        src={challan}
                      ></Avatar>
                    }
                    {...a11yProps(16)}
                    style={{ color: "black", fontSize: "10px" }}
                    onClick={handleClickchallan}
                  />
                  <AntTab
                    label="Housing"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "rgb(231,240,253)",
                          width: "35px",
                          height: "35px",
                        }}
                        alt="test avatar"
                        src={housing}
                      ></Avatar>
                    }
                    {...a11yProps(17)}
                    style={{ color: "black", fontSize: "10px" }}
                    onClick={handleClickhousing}
                  />
                  <AntTab
                    label="Gas Booking"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "rgb(231,240,253)",
                          width: "35px",
                          height: "35px",
                        }}
                        alt="test avatar"
                        src={cylinder}
                      ></Avatar>
                    }
                    {...a11yProps(18)}
                    style={{ color: "black", fontSize: "10px" }}
                    onClick={handleClickgas}
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
                  indicatorColor="white"
                  textColor="white"
                  fontSize="1%"
                  backgroundColor="rgb(0,36,71)"
                  aria-label="scrollable force tabs example"
                >
                  <br />
                  <TabPanel></TabPanel> <TabPanel></TabPanel>
                  <AntTab
                    label="Credit Card"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "white",
                          width: "35px",
                          height: "35px",
                        }}
                        alt="test avatar"
                      >
                        <CreditCardIcon />
                      </Avatar>
                    }
                    {...a11yProps(3)}
                    style={{ color: "black", fontSize: "10px" }}
                    onClick={handleClickcreditcard}
                  />
                  <AntTab
                    label="Data Card"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "white",
                          width: "35px",
                          height: "35px",
                        }}
                        alt="test avatar"
                        src={dcard}
                      ></Avatar>
                    }
                    {...a11yProps(4)}
                    style={{ color: "black", fontSize: "10px" }}
                    onClick={handleClickdatacard}
                  />
                  <AntTab
                    label="Landline"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "white",
                          width: "35px",
                          height: "35px",
                        }}
                        alt="test avatar"
                        src={landline}
                      ></Avatar>
                    }
                    {...a11yProps(5)}
                    style={{ color: "black", fontSize: "10px" }}
                    onClick={handleClicklandline}
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
                  <TabPanel></TabPanel> <TabPanel></TabPanel>
                  <TabPanel></TabPanel>
                  <br />
                  <AntTab
                    label="Broadband"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "white",
                          width: "35px",
                          height: "35px",
                        }}
                        alt="test avatar"
                        src={broadband}
                      ></Avatar>
                    }
                    {...a11yProps(6)}
                    style={{ color: "black", fontSize: "10px" }}
                    onClick={handleClickbroadband}
                  />
                  <AntTab
                    label="Piped gas"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "white",
                          width: "35px",
                          height: "35px",
                        }}
                        alt="test avatar"
                        src={gas}
                      ></Avatar>
                    }
                    {...a11yProps(7)}
                    style={{ color: "black", fontSize: "10px" }}
                    onClick={handleClickpipedgas}
                  />
                  <AntTab
                    label="Insurance"
                    icon={
                      <Avatar
                        style={{
                          color: "rgb(38,157,228)",
                          backgroundColor: "white",
                          width: "35px",
                          height: "35px",
                        }}
                        alt="test avatar"
                        src={insurance}
                      ></Avatar>
                    }
                    {...a11yProps(8)}
                    style={{ color: "black", fontSize: "10px" }}
                    onClick={handleClickinsurance}
                  />
                </Tabs>
              </Menu>
            </div>
          </Paper>
        </Grid>
      </Grid>
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
  { title: "Adhar Housing Finance" },
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
  { title: "Bhopal Muncipal Cooperation" },
  { title: "Panchayat Water Connection" },
  { title: "Adithya Birla Water" },
  { title: "AU Water" },
  { title: "Gail Water Suppley" },
  { title: "Bajaj Water Suppley" },
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
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings: The Two Towers", year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
];

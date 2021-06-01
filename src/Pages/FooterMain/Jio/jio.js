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
import mutualfund252 from "../../assets/mutualfund252.png";
import { Autocomplete } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Table } from "react-bootstrap";
const useStyles = makeStyles((theme) => ({
  main: {
    marginLeft: "16.2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0.1em",
    },
  },

  paper1: {
    padding: "25px",
    background: "#002447",
    width: "",
    height: "",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      padding: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
  },
  Tablefont: {
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "10px",
  },
  Header1: {
    color: "white",
    fontSize: "25px",
    [theme.breakpoints.down("md")]: {
      color: "white",
      fontSize: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
      fontSize: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
      fontSize: "20px",
    },
  },
  Button2: {
    borderColor: "blue",
    color: "blue",
  },
  caption1: {
    padding: "10px",
    fontSize: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
      fontSize: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
      fontSize: "10px",
    },
  },
  Header4: {
    fontSize: "15px",
    fontWeight: "bolder",
    paddingTop: "25px",
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
      paddingTop: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      paddingTop: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      paddingTop: "10px",
    },
  },
  Text4: {
    fontSize: "13px",
    padding: "10px",
    color: "rgb(119,119,119)",
    [theme.breakpoints.down("md")]: {
      fontSize: "9px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "9px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "9px",
    },
  },
  paper2: {
    padding: "25px",
    background: "white",
    margin: "10px",
    width: "",
    height: "",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      padding: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
  },
  Button1: {
    padding: "10px",
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
  Grid1: {
    paddingTop: "50px",
    paddingBottom: "20px",
    paddingRight: "25px",
    paddingLeft: "25px",

    marginTop: "50px",
    backgroundColor: "rgb(243,243,243)",
    [theme.breakpoints.down("md")]: {
      fontSize: 25,

      padding: "1em",
      width: "",

      backgroundColor: "rgb(243,243,243)",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,

      padding: "1em",
      width: "",
      marginLeft: "0px",
      marginTop: "20px",
      backgroundColor: "rgb(243,243,243)",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,

      padding: "1em",
      width: "",
      marginLeft: "0px",
      marginTop: "20px",
      backgroundColor: "rgb(243,243,243)",
    },
  },
  text3: {
    color: "rgb(119,119,119)",
    fontSize: "15px",
    paddingTop: "10px",
    paddingRight: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
      paddingTop: "10px",
      paddingRight: "5px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      paddingTop: "10px",
      paddingRight: "5px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      paddingTop: "10px",
      paddingRight: "5px",
    },
  },
  card2: {
    padding: "20px",
    [theme.breakpoints.down("md")]: {
      padding: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
  },
}));
export default function Rji() {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
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
      <Paper className={classes.paper1}>
        <Grid container spacing={3}>
          <Grid item>
            <Avatar src={mutualfund252} className={classes.Avatar1}></Avatar>
          </Grid>
          <Grid>
            <Typography
              className={classes.Header1}
              style={{ paddingTop: "10px" }}
            >
              Jio Prepaid Mobile Recharge
            </Typography>
          </Grid>
        </Grid>
        <Paper className={classes.paper2}>
          <Grid item container spacing={2}>
            <Grid container>
              <Grid md={3}>
                <Typography className={classes.caption1}>
                  Mobile Number{" "}
                </Typography>
                <TextField
                  className={classes.caption1}
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
                      className={classes.caption1}
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
                      className={classes.caption1}
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
                  className={classes.caption1}
                  id="outlined-basic"
                  placeholder="Amount"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid md={2}>
                <Typography style={{ color: "white", fontSize: "23px" }}>
                  Mobile{" "}
                </Typography>
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
        </Paper>
      </Paper>
      <Card className={classes.Grid1}>
        <Grid container>
          <Grid md={4}>
            <Typography className={classes.Header2}>
              {" "}
              Or Select a New Jio Recharge Plans
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
              <option value={10}>Jio</option>
              <option value={20}>Airtel</option>
              <option value={30}>Vodafone</option>
              <option value={40}>BSNL</option>
              <option value={50}>MNTL</option>
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
      <Card className={classes.card2}>
        <Grid item container>
          <TableBody>
            <TableRow>
              <TableCell align="right">Talktime</TableCell>
              <TableCell align="right">Validity</TableCell>
              <TableCell align="left">Discription</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">7.470000</TableCell>
              <TableCell align="right">NA days</TableCell>
              <TableCell align="left">
                Talktime: Rs 7.47 Validity: Unlimited
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.margin}
                >
                  ₹10
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">14.950000</TableCell>
              <TableCell align="right">NA days</TableCell>
              <TableCell align="left">
                Talktime: Rs 14.95 Validity: Unlimited
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.margin}
                >
                  ₹20
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">39.370000</TableCell>
              <TableCell align="right">NA days</TableCell>
              <TableCell align="left">
                {" "}
                Talktime: Rs 39.37 Validity: Unlimited
              </TableCell>
              <TableCell align="right">
                {" "}
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.margin}
                >
                  ₹50
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">0</TableCell>
              <TableCell align="right">14 days</TableCell>
              <TableCell align="left">
                {" "}
                Data: 1.5 GB/day Voice: Unlimited Voice Calls , For Prime
                Customers only
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.margin}
                >
                  ₹98
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">0</TableCell>
              <TableCell align="right">14 days</TableCell>
              <TableCell align="left">
                {" "}
                Data: 1.5 GB/day Voice: Unlimited Voice Calls , For Prime
                Customers only
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.margin}
                >
                  ₹98
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">81.750000</TableCell>
              <TableCell align="right">NA days</TableCell>
              <TableCell align="left">
                Talktime: Rs 81.75 Validity: Unlimited
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.margin}
                >
                  ₹100
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">0</TableCell>
              <TableCell align="right">14 days</TableCell>
              <TableCell align="left">
                1.5 GB data per day - Unlimited Calls (Local+STD) on any n/w in
                home n/w & National Roaming n/w - 100 SMS per day
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.margin}
                >
                  ₹82
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">844.460000</TableCell>
              <TableCell align="right">NA days</TableCell>
              <TableCell align="left">
                <Typography className={classes.Text4}>
                  {" "}
                  Talktime: Rs 844.46 Validity: Unlimited
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.margin}
                >
                  ₹1000
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.Header4}>
              Related Searches Jio Recharge Packs by Region
            </Typography>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid>
            <Typography className={classes.text3}>
              Jio Andhra Pradesh Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Assam Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Bihar/Jharkhand Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Chennai Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Delhi/NCR Recharge
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.text3}>
              Jio Gujarat Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Haryana Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Himachal Pradesh Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Jammu and Kashmir Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Karnataka Recharge
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.text3}>
              Jio Kerala Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Kolkata Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Maharashtra and Goa (except Mumbai) Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio MP/Chattisgarh Recharge
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.text3}>
              Jio Mumbai Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio North East Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Orissa Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Punjab Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Rajasthan Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Tamilnadu Recharge
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.text3}>
              Jio UP(EAST) Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio UP(WEST)/Uttarakhand Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio West Bengal Recharge
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.Header4}>
              Related Searches on Jio Recharge Packs by Pack Type
            </Typography>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid>
            <Typography className={classes.text3}>
              Jio Full Talktime Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>Jio Topup Plans</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Validity Recharge Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Local SMS Pack Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>Jio SMS Plans</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio General SMS Pack Plans
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.text3}>Jio 3G Plans</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>Jio Data Plans</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Lifetime Validity Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Night Packs Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Unlimited Talktime Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Local Call Plans
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.text3}>Jio STD Plans</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>Jio ISD Plans</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Rate Cutter Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Special Offer Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Jio Phone Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>Jio 4G Plans</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio Smart Phone Plans
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.text3}>Jio MNP Plans</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio DataAddon Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              Jio InternationalRoaming Plans
            </Typography>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid>
            <Typography className={classes.Header4}>
              How To Make Jio Recharge Online Instantly Via Mobikwik?
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.Text4}>
              It’s time to complete your Jio online recharge including Jio
              prepaid and postpaid recharges using MobiKwik. Online Jio
              recharges can be easily and simply done via the MobiKwik digital
              wallet.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography>Steps to Recharge Your Jio Number</Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.Text4}>
              Making a Jio recharge online is an easy and quick process. Follow
              the following steps to do it:
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.Text4}>
              <ol type="1">
                <li>
                  Enter the Jio mobile number you want to do the online recharge
                  for.
                </li>
                <li>Click on the prepaid/ postpaid option.</li>
                <li>Select ‘Jio mobile operator’</li>
                <li>Select the circle (area/place) you belong to.</li>
                <li>
                  Check out the exclusive Jio deals, Jio Prepaid Plans or fill
                  in the amount you want to recharge
                </li>

                <li>
                  Enter your mobile number again and fill in the OTP received.
                </li>
                <li>Now make the Jio online recharge payment.</li>
              </ol>
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.Text4}>
              Your Jio sim recharge is all done. You can also make Mobile
              Recharge for Vodafone Idea VI Recharge | MTNL Recharge | BSNL
              Recharge and JIO Recharge
            </Typography>
            <Typography className={classes.Header4}>
              Why Choose MobiKwik For Reliance Jio Online Recharge?
            </Typography>
            <Typography className={classes.Text4}>
              Mobikwik is India's no. 1 site for online Jio recharge. Mobikwik
              does not charge you over any Jio online recharge i.e MobiKwik,
              enables free Jio recharge and helps you save your time, effort,
              and money.
            </Typography>
            <Typography className={classes.Text4}>
              Following are the reasons that make MobiKwik the perfect platform
              for Jio prepaid online recharge:
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <ul>
              <li>
                <Typography>
                  No Extra Cash on your Jio Online Recharge Prepaid
                </Typography>
                <Typography className={classes.Text4}>
                  MobiKwik enables free Jio online recharge i.e there are no
                  charges for Jio online recharge. MobiKwik has never charged
                  it’s customers any extra fee for using the platform to
                  recharge their Jio mobile number.
                </Typography>
              </li>
              <li>
                <Typography>Safe & Secure Jio Sim Recharge</Typography>
                <Typography className={classes.Text4}>
                  Jio prepaid online recharges are safe and seamless. There is
                  no fear of fraudulent or unsafe payments when using MobiKwik.
                </Typography>
              </li>
              <li>
                <Typography>
                  Multiple Options for Jio Prepaid Recharge
                </Typography>
                <Typography className={classes.Text4}>
                  You can now complete your online Jio recharge using the
                  MobiKwik website on your laptops. The customers can also use
                  their MobiKwik mobile application to make their airtel
                  recharge online.
                </Typography>
              </li>
              <li>
                <Typography>
                  One-Stop Destination for all Jio Prepaid Recharge Packs
                </Typography>
                <Typography className={classes.Text4}>
                  MobiKwik is your one-stop destination when you complete your
                  Jio online recharge. MobiKwik has a list of plans like Jio
                  Special Offer plans , Jio Topup plans, Jio Full Talktime
                  plans, Jio 4G plans , etc. MobiKwik gives you full liberty to
                  choose your desired Jio recharge pack.
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.Header4}>
              Jio Recharge Plans 2021
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
                <th>Jio Prepaid Plans </th>
                <th>Data Benefit</th>
                <th>Validity </th>
                <th>Jio to Jio calls</th>
                <th>Jio-to non-Jio calls</th>
                <th>SMS</th>
              </tr>
            </thead>
            <tbody className={classes.Tablefont}>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs 98 </td>
                <td> 2GB</td>
                <td>28 Days</td>
                <td>Unlimited</td>
                <td>IUC 6 paise/min</td>
                <td>300 </td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs 129 </td>
                <td>2GB </td>
                <td>28 Days</td>
                <td>Unlimited</td>
                <td>1000 min</td>
                <td>300 </td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs 149 </td>
                <td> 1GB per Day</td>
                <td>24 Days</td>
                <td>Unlimited</td>
                <td>300 min</td>
                <td>100/Day </td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs 199 </td>
                <td> 1.5GB per Day</td>
                <td>28 Days</td>
                <td>Unlimited</td>
                <td> 1000 min</td>
                <td>100/Day </td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs 249 </td>
                <td> 2GB per Day</td>
                <td>28 Days</td>
                <td>Unlimited </td>
                <td>1000 min</td>
                <td>100/Day </td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs 329 </td>
                <td> 6GB</td>
                <td>84 Days </td>
                <td>Unlimited</td>
                <td>3000 min</td>
                <td>100/Day </td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs 349 </td>
                <td> 3GB per Day</td>
                <td>28 Days</td>
                <td>Unlimited</td>
                <td>1000 min</td>
                <td>100/Day </td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs 399 </td>
                <td> 1.5Gb per Day</td>
                <td>56 Days </td>
                <td>Unlimited</td>
                <td>2000 min</td>
                <td>100/Day </td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs 444 </td>
                <td> 2GB per Day</td>
                <td>56 Days</td>
                <td>Unlimited</td>
                <td>2000 min</td>
                <td>100/Day </td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs 555 </td>
                <td> 1.5GB per Day</td>
                <td>28 Days</td>
                <td>84 Days</td>
                <td>3000 min</td>
                <td> 100/Day </td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs 599 </td>
                <td> 2GB per Day</td>
                <td>84 Days</td>
                <td>Unlimited</td>
                <td> 3000 min</td>
                <td>100/Day </td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs 1299 </td>
                <td> 24GB</td>
                <td>336 Days</td>
                <td>Unlimited</td>
                <td>12,000 min</td>
                <td>100/Day </td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs 2121 </td>
                <td> 1.5GB per Day</td>
                <td>336 Days</td>
                <td>Unlimited</td>
                <td>12,000 min</td>
                <td>100/Day </td>
              </tr>
              <tr style={{ color: "rgb(119,119,119)" }}>
                <td>Rs 4999 </td>
                <td>350GB</td>
                <td>360 Days</td>
                <td>Unlimited</td>
                <td>12,000 min</td>
                <td> 100/Day </td>
              </tr>
            </tbody>
          </Table>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.Header4}>
              Jio Recharge Offers At MobiKwik
            </Typography>
            <Typography className={classes.Text4}>
              Pay using Mobikwik upi on MyJio App & Get 5% cashback offer upto
              Rs.50 on recharge/bill payment of INR 300 and above. Click here to
              know more.
            </Typography>
            <Typography className={classes.Header4}>
              FAQ’s On Jio Prepaid Mobile Recharge
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography style={{ fontSize: "15px" }}>
              How to Make a Jio Online Mobile Recharge?
            </Typography>
            <Typography className={classes.Text4}>
              Jio mobile recharge can be easily done online, in a few simple
              steps, using the MobiKwik app. The user must go to the app, click
              on “Mobile'' in recharges and bill payments section, enter the
              number, select ‘JIO’ as operator and enter the amount of recharge
              or select the plan. On confirming payment, JIO recharge online
              process would be complete.
            </Typography>
            <Typography style={{ fontSize: "15px" }}>
              How to Get Cashback on Jio Recharge?
            </Typography>
            <Typography className={classes.Text4}>
              While making the JIO recharge online, a user can earn cashback or
              SuperCash on the MobiKwik app and ensure guaranteed savings.
              Before confirming payment, a user can browse through offers
              available on the JIO prepaid recharge and get cash back or
              SuperCash.
            </Typography>
            <Typography style={{ fontSize: "15px" }}>
              How Can I Find Jio Recharge Plans for Prime Members?
            </Typography>
            <Typography className={classes.Text4}>
              Once a user starts the process of JIO recharge online, on the
              MobiKwik app, he/she can browse through all the available plans.
              After putting in the mobile number and operator name, the user
              must click ‘See Plans’ to find JIO recharge plans for prime
              members
            </Typography>
            <Typography style={{ fontSize: "15px" }}>
              Where Can I Find Jio Recharge for Non-prime Members?
            </Typography>
            <Typography className={classes.Text4}>
              All JIO recharge plans available to a user can be seen on the
              MobiKwik app. After putting in the mobile number for prepaid
              recharge and selecting the mobile operator, a user must click on
              ‘See Plans’ to check the Jio recharge non-prime member plans.
            </Typography>
            <Typography style={{ fontSize: "15px" }}>
              What is Rs 149 Jio Recharge Plan?
            </Typography>
            <Typography className={classes.Text4}>
              JIO recharge for Rs 149 is a 24-day plan which offers the user 24
              GB data (1GB per day). It is also offered with Jio to Jio
              unlimited voice calls and 300 FUP minutes for non-Jio calls. Users
              can also get 100 free SMSes per day. It is also bundled with a
              complimentary subscription to Jio Apps.
            </Typography>
            <Typography style={{ fontSize: "15px" }}>
              Which is the Best Jio Recharge?
            </Typography>
            <Typography className={classes.Text4}>
              JIO offers a wide variety of plans for prime and non-prime users.
              These JIO recharge plans offer a comprehensive combination of
              mobile data, calling, SMS at different prices. A user must browse
              through all the plans and select the plan that is most suited to
              their needs.
            </Typography>
            <Typography style={{ fontSize: "15px" }}>
              What is jio recharge 399?
            </Typography>
            <Typography className={classes.Text4}>
              Rs 399 plan of Jio prepaid recharge offers 1.5GB data per day and
              2,000 minutes of free calls from Jio to non-Jio users.
            </Typography>
            <Typography style={{ fontSize: "15px" }}>
              What is Rs 444 Jio Recharge Plan?
            </Typography>
            <Typography className={classes.Text4}>
              Rs 444 JIO recharge plan is a 56 days plan that offers 2GB data/
              day and unlimited voice calling from Jio to non Jio users
            </Typography>
            <Typography style={{ fontSize: "15px" }}>
              Can I recharge Jio online?
            </Typography>
            <Typography className={classes.Text4}>
              Yes, You can recharge jio online just by downloading mobikwik app
              or visiting mobikwik visit.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.Header4}>About Jio</Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <ul>
              <li>
                <Typography className={classes.Text4}>
                  It was in 2002 that Reliance entered the Infocomm and
                  telecommunication business.
                </Typography>
              </li>
              <li>
                <Typography className={classes.Text4}>
                  They brought about a major revolution in the mobile telephony
                  in India.
                </Typography>
              </li>
              <li>
                <Typography className={classes.Text4}>
                  In 2005, Reliance made a strategic decision to reorganize its
                  businesses through a demerger.
                </Typography>
              </li>
              <li>
                <Typography className={classes.Text4}>
                  Reliance Jio Infocomm Limited, ushered in a pan-India digital
                  revolution through state-of-the-art wireless broadband 4G
                  services, promising to bridge the digital divide.
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

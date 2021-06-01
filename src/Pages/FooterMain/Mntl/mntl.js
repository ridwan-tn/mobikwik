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
import mutualfund251 from "../../assets/mutualfund251.png";

import { Autocomplete } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import TableRow from "@material-ui/core/TableRow";
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
export default function Rmntl() {
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
            <Avatar src={mutualfund251} className={classes.Avatar1}></Avatar>
          </Grid>
          <Grid>
            <Typography className={classes.Header1}>
              MTNL Prepaid Mobile Recharge
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
              <option value={10}>MNTL</option>
              <option value={20}>Airtel</option>
              <option value={30}>Vodafone</option>
              <option value={40}>BSNL</option>
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
              <TableCell align="right">0</TableCell>
              <TableCell align="right">30 days</TableCell>
              <TableCell align="left">
                Local Onnet Mobile @ Rs. 0.01/2 sec - Local Offnet Mobile @ Rs.
                0.01/sec - Local Landline @ Rs. 0.01/sec - STD @ Rs. 0.01/sec
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.margin}
                >
                  ₹11
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">0</TableCell>
              <TableCell align="right">1 days</TableCell>
              <TableCell align="left">50 Local min free</TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.margin}
                >
                  ₹14
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">0</TableCell>
              <TableCell align="right">90 days</TableCell>
              <TableCell align="left">
                {" "}
                Roaming Incoming Free - Roaming Outgoing Local @ Rs. 0.05/4 sec
                - Roaming Outgoing STD @ Rs. 0.05/3 sec
              </TableCell>
              <TableCell align="right">
                {" "}
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.margin}
                >
                  ₹43
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">0</TableCell>
              <TableCell align="right">4 days</TableCell>
              <TableCell align="left">
                {" "}
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
                  ₹44
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">0.41</TableCell>
              <TableCell align="right">91 days</TableCell>
              <TableCell align="left">
                {" "}
                Normal Talktime Rs. 0.41 - 30 Local min free - Local Onnet
                Mobile @ Rs. 0.01/2 sec - Local Offnet Mobile @ Rs. 0.01/sec -
                Local Landline @ Rs. 0.01/sec - 30 STD min free - STD @ Rs.
                0.01/sec - Free min valid for 30 day(s)
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.margin}
                >
                  ₹45
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">0</TableCell>
              <TableCell align="right">28 days</TableCell>
              <TableCell align="left">
                Free Calls on MTNL Network (Mobile + Landline) from home network
                and MTNL Mumbai network - Free 200 minutes (local + STD) on
                other network + 100 SMS (Local + STD) in Home Network & MTNL
                Mumbai network - 1 GB of 2G/3G data (Home network + Roaming
                network) - After the consumption of free data benefit, data will
                be charged @ 3p/MB - After consumption of free 200 minutes
                (local + STD) on other network, Local & STD calls will be
                charged @1/2p/sec - w.e.f 20.09.2018
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.margin}
                >
                  ₹52
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
              <TableCell align="right">0</TableCell>
              <TableCell align="right">28 days</TableCell>
              <TableCell align="left">
                <Typography className={classes.Text4}>
                  {" "}
                  2 GB of 2G/3G data (Home network + Roaming network) +
                  Unlimited Local and STD calls from home network and MTNL
                  Mumbai network + 100 SMS (Local + STD) in Home Network and
                  MTNL Mumbai network w.e.f 05-Sep-2018
                </Typography>
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
          </TableBody>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.Header4}>
              Related Searches MTNL Recharge Packs by Region
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.text3}>
              MTNL Delhi/NCR Recharge
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              MTNL Mumbai Recharge
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.Header4}>
              Related Searches on MTNL Recharge Packs by Pack Type
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.text3}>
              MTNL Full Talktime Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>MTNL Topup Plans</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              MTNL Validity Recharge Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              MTNL Local SMS Pack Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>MTNL SMS Plans</Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.text3}>
              MTNL General SMS Pack Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>MTNL 3G Plans</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>MTNL Data Plans</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              MTNL Lifetime Validity Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              MTNL Night Packs Plans
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.text3}>
              MTNL Unlimited Talktime Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              MTNL Local Call Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>MTNL STD Plans</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>MTNL ISD Plans</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              MTNL Rate Cutter Plans
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.text3}>
              MTNL Special Offer Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>MTNL 4G Plans</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              MTNL Jio Phone Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              MTNL Smart Phone Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>MTNL MNP Plans</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              MTNL DataAddon Plans
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.text3}>
              MTNL InternationalRoaming Plans
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.Header4}>
              How To Recharge MTNL Prepaid Mobile Instantly Via MobiKwik?
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.Text4}>
              MTNL online recharges are quick and easy when done via MobiKwik.
              In order to get the MTNL recharge done quickly and easily, the
              user must follow a few simple steps, as mentioned below.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.Text4}>
              <ol type="1">
                <li>
                  Enter your MTNL number, for which you want to make the online
                  MTNL online recharge.
                </li>
                <li>Select ‘MTNL mobile operator’</li>
                <li>Select the particular location you belong to.</li>
                <li>
                  Check the MTNL prepaid plans or type in the amount you want to
                  recharge
                </li>
                <li>
                  Enter your mobile number again and fill in the OTP sent to you
                  via SMS. .
                </li>

                <li>Make the online MTNL recharge payment.</li>
              </ol>
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.Text4}>
              With this, your MTNL mobile recharge is done!
            </Typography>
            <Typography className={classes.Text4}>
              A user can get MTNL online prepaid recharges and for any number,
              using MobiKwik. Online MTNL recharges can be done through
              MobiKwik’s digital wallet. MTNL online recharge is an easy and
              quick procedure and can be done in a few simple steps. Recharge
              MTNL now!
            </Typography>
            <Typography className={classes.Text4}>
              You can also make Mobile Recharge for Airtel Recharge | Vodafone
              Idea VI Recharge | BSNL Recharge and JIO Recharge
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>
            <Typography className={classes.Header4}>
              Why Choose MobiKwik For MTNL Recharge?
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Typography className={classes.Text4}>
            MobiKwik enables easy, quick and profitable MTNL recharges including
            MTNL dolphin recharge, MTNL trump recharge, MTNL prepaid online
            recharge, MTNL dolphin prepaid recharge and much more. MobiKwik
            offers a huge number of offers, thereby acting as the best platform
            for MTNL recharge online. The following list of benefits offered by
            MobiKwik on MTNL online recharges are the greatest point of
            attraction for users to make their MTNL online recharge on MobiKwik.
          </Typography>
          <Grid item container>
            <Typography style={{ fontSize: "15px" }}>
              Free Of Cost on Mtnl prepaid online recharge
            </Typography>
          </Grid>
          <Typography className={classes.Text4} style={{ textAlign: "left" }}>
            MobiKwik does not charge any fee for online MTNL mobile recharge. It
            enables free online MTNL prepaid recharge.
          </Typography>
          <Typography style={{ fontSize: "15px" }}>
            Transactions are safe and secure for Mtnl prepaid recharge
          </Typography>
          <Typography className={classes.Text4}>
            MTNL prepaid online recharges via MobiKwik are safe and secure. All
            you need to do is follow the above mentioned steps and the recharge
            will reflect in users’ orders instantly. The data provided will be
            kept confidential.
          </Typography>
          <Typography style={{ fontSize: "15px" }}>
            Quick and simple way for online mtnl recharge
          </Typography>
          <Typography className={classes.Text4}>
            MTNl prepaid recharges can be done easily and instantly in a few
            simple steps. The user only needs to provide the basic details such
            as the number, location, plan, etc and the MTNL recharge is done
            instantly.
          </Typography>
          <Typography style={{ fontSize: "15px" }}>
            MobiKwik provide irresistible benefits and offers on mtnl prepaid
            recharge
          </Typography>
          <Typography className={classes.Text4}>
            MobiKwik offers attractive deals such as SuperCash, Cashbacks,
            discounts and more on MTNL prepaid online recharges. Such deals and
            offers make MobiKwik an ideal platform to undertake the online
            Recharge MTNL.
          </Typography>
          <Typography style={{ fontSize: "15px" }}>
            Variety of options for MTNL recharges
          </Typography>
          <Typography className={classes.Text4}>
            MTNL recharges including MTNL dolphin recharge, MTNL trump recharge,
            MTNL prepaid online recharge, MTNL dolphin prepaid recharge and much
            more.
          </Typography>
          <Typography style={{ fontSize: "15px" }}>
            One-stop destination for all MTNL Prepaid Recharge Plans
          </Typography>
          <Typography className={classes.Text4}>
            MobiKwik is your one stop destination when you complete your MTNL
            online recharge. MobiKwik has a list of plans like MTNL Special
            Offer plans, MTNL Topup plans, MTNL Full Talktime plans, MTNL 4G
            plans etc. You can choose and opt for the suitable MTNL plan.
          </Typography>
          <Typography className={classes.Text4}>
            Without a shadow of doubt, Mobikwik is India's best site for online
            easy MTNL recharges. Mobikwik does not charge you over any online
            recharge of MTNL i.e MobiKwik, enables free mobile recharge and
            helps you save your time, effort and money. Besides enabling free
            online mobile recharges, it also ensures easy idea prepaid recharge
            online. The app also offers instant and easy MTNL prepaid online
            recharges for family and friends. The process for online recharges
            of MTNL Via MobiKwik is simple and seamless. Therefore, MobiKwik is
            the best platform of all to undertake MTNL recharges online. . . So
            wait no more! Make your MTNL mobile recharge online viia MobiKwik
            and avail all the benefits.
          </Typography>
          <Grid item container>
            <Typography className={classes.Header4}>
              Frequently Asked Questions On MTNL Recharge
            </Typography>
          </Grid>
          <Typography style={{ fontSize: "15px" }}>
            Can I recharge my prepaid MTNL number online?
          </Typography>
          <Typography className={classes.Text4}>
            Yes you can recharge your MTNL number online. All you have to do is
            log on to your MobiKwik app or website. You will also find a lot of
            plans for MTNL mobile recharge.
          </Typography>
          <Typography style={{ fontSize: "15px" }}>
            Can I recharge my prepaid MTNL number online?
          </Typography>
          <Grid item container>
            <Typography className={classes.Header4}>About MTNL</Typography>
          </Grid>
          <Typography className={classes.Text4}>
            MTNL was set-up on 1st April, 1986. MTNL was inaugurated by the
            Government of India. The purpose was to upgrade quality of telecom
            services, expand the telecom network, introduce new services and
            raise revenue for telecom development needs of the metropolitan
            cities of India namely Delhi and Mumbai. MTNL is a leading provider
            of fixed-line telecommunication service in the two Metropolitan
            Cities of Delhi and Mumbai. Its services covers Delhi, four
            peripheral towns Noida, Gurgaon, Faridabad & Gaziabad and the Mumbai
            city along with the areas falling under the Mumbai Municipal
            Corporation, New Mumbai Corporation and Thane Municipal Corporation.
            It has been a leading telecom service provider for more than two
            decades and there has been all-round development & growth in
            operational efficiency. MTNL provides a plethora of telecom services
            which include fixed telephone service, GSM (including 3G services) &
            CDMA based Mobile service, Internet, Broadband, ISDN and Leased Line
            services. Besides enjoying the reputation of an old, reliable and
            succesfull brand, MTNL has been the first to launch some of the
            latest telecom technologies in the country like ADSL2+ & VDSL2 in
            broadband, IPTV on MPEG4 technology, VOIP and 3G Mobile service.
          </Typography>
        </Grid>
      </Card>
    </div>
  );
}

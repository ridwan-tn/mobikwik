import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import mutualfund244 from "../assets/mutualfund244.png";
import mutualfund245 from "../assets/mutualfund245.png";
import mutualfund246 from "../assets/mutualfund246.png";
import TextField from "@material-ui/core/TextField";
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



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#002447",
    color: "white",
  },
  mainDiv: {
    marginLeft: "17em",
    [theme.breakpoints.down("sm")]: {
    marginLeft:"2em"
    },
  },

  tabContainer: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontWeight: "bolder",
    fontSize: "15px",
    paddingTop: "25px",

    paddingRight: "25px",
    paddingBottom: "30px",
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
      fontSize: "15px",
      paddingTop: "30px",
      paddingLeft: "15px",
      paddingRight: "15px",
      paddingBottom: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      fontSize: "15px",
      paddingTop: "15px",
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingBottom: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "5px",
      fontSize: "15px",
      paddingTop: "15px",
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingBottom: "10px",
    },
  },
  button1: {
    fontWeight: "bolder",
    fontSize: "20px",
    paddingTop: "5px",
    width: "100%",
    height: "50px",
    paddingRight: "5px",
    paddingBottom: "5px",
    paddingLeft: "5px",
    color: "white",
    borderRadius: "10px",
    backgroundColor: "rgb(178,178,178)",
    [theme.breakpoints.down("md")]: {
      fontWeight: "bolder",
      fontSize: "15px",
      paddingTop: "5px",
      width: "50px",
      height: "25px",
      paddingRight: "5px",
      paddingBottom: "5px",
      paddingLeft: "5px",
      borderRadius: "5px",
    },
    [theme.breakpoints.down("sm")]: {
      fontWeight: "bolder",
      fontSize: "15px",
      paddingTop: "5px",
      width: "100%",
      height: "40px",
      paddingRight: "5px",
      paddingBottom: "5px",
      paddingLeft: "5px",
      borderRadius: "5px",
    },
    [theme.breakpoints.down("xs")]: {
      fontWeight: "bolder",
      fontSize: "15px",
      paddingTop: "5px",
      width: "150px",
      height: "40px",
      paddingRight: "5px",
      paddingBottom: "5px",
      paddingLeft: "5px",
      borderRadius: "5px",
    },
  },
  paper2: {
    backgroundColor: "rgb(241,241,241)",
    marginTop: "50px",
    marginBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "5px",
      marginBottom: "5px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "5px",
      marginBottom: "5px",
    },
  },
  paperContainer: {
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
  paper: {
    width: "100%",
    height: "",
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingTop: "25px",
    paddingBottom: "25px",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#002447",
    borderRadius: "4px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",
    },
  },

 
  tabs: {
    borderRadius: "4px",
    backgroundColor: "#002447",
    color: "white",
    indicator: {
      color: "white",
    },
  },
  tabpanel1: {
    margin: "1px",
    backgroundColor: "white",
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",

    width: "",
    height: "",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  textcaption: {
    color: "rgb(119,119,119)",
    fontSize: 10,
  },
  footer: {
    marginTop: "-9em",

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();

 
  return (
    
    <div className={classes.mainDiv} >
      <Grid container className={classes.tabContainer}>
        <Grid item container>
          <Paper className={classes.paper}>
            <Grid item container>
              <Grid item style={{ textAlign: "left" }}>
                <Typography variant="h6" style={{ color: "white" }}>
                  Online Money Transfer
                </Typography>
              </Grid>
            </Grid>

            <br />
            <Grid item conatiner>
              <Paper
                style={{ alignItems: "center" }}
                className={classes.tabpanel1}
              >
                <br />
                <Grid item container style={{ textAlign: "left" }} spacing={2}>
                  <Grid item md={3}>
                    <Typography className={classes.textcaption}>
                      Beneficiary Name
                    </Typography>

                    <TextField
                      id="outlined-basic"
                      placeholder="Name On Bank Account"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item md={2}>
                    <Typography className={classes.textcaption}>
                      Account Number
                    </Typography>

                    <TextField
                      id="outlined-basic"
                      placeholder="Account Number"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item md={2}>
                    <Typography className={classes.textcaption}>
                      IFSC Code
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      label=" ₹    Amount"
                      placeholder="  ₹  IFSC"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item md={3}>
                    <Typography className={classes.textcaption}>
                      {" "}
                      Amount
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      label=" ₹    Amount"
                      placeholder="  ₹  Amount"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item md={1}>
                    <br />
                    <button className={classes.button1}>Go</button>
                  </Grid>
                </Grid>
              </Paper>

              <div className={classes.root}></div>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid itme container>
        <Grid item md={6}>
          <Typography className={classes.h1}>
            What is Money Transfer Online?
          </Typography>
        </Grid>
      </Grid>
      <Grid itme container>
        <Grid item xs={12}>
          <p style={{ fontSize: "13px", color: "rgb(106,106,106)" }}>
            Online money transfers have now become a medium to save oneself from
            any cash shortage related problems. A long list of requirements and
            legal formalities is no longer needed since the money can be
            transferred online through a digital wallet without any hassle.
            Hence, transferring money online has become easier than before with
            MobiKwik . Just make instant money transfer with the 'Wallet to
            Bank' feature on MobiKwik, from credit cards to any bank account
            through MobiKwik's digital wallet. Now, transfer money from credit
            cards of ICICI, HDFC, Citibank, SBI, and more to any bank account,
            and the amount will reflect in the bank accounts instantly.
          </p>
        </Grid>
      </Grid>
      <Grid itme container>
        <Grid item md={12}>
          <Typography className={classes.h1}>
            How to transfer money from debit/credit cards of any bank viz;
            ICICI, HDFC, Citibank, SBI and more to any bank accounts in three
            simple steps.
          </Typography>
        </Grid>
        <Grid item md={12}>
          <ol type="1" style={{ fontSize: "13px", color: "rgb(106,106,106)" }}>
            <li>
              Add money to you digital wallet on the MobiKwik app using your
              credit or debit card.
              <br />
            </li>
            <li>
              Tap on ‘Transfer money’ feature on the app. Find ‘wallet to bank’
              in transfer money. <br />
            </li>
            <li>
              Add beneficiary name, account number and IFSC code and click
              continue. <br />
            </li>
          </ol>
        </Grid>
        <Grid item md={12}>
          <p style={{ fontSize: "13px", color: "rgb(106,106,106)" }}>
            The amount transferred will reflect in the bank account instantly.
          </p>{" "}
        </Grid>
        <Grid item md={12}>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bolder",
              color: "rgb(106,106,106)",
            }}
          >
            Please note:
          </p>{" "}
        </Grid>
        <Grid item md={12}>
          <p style={{ fontSize: "13px", color: "rgb(106,106,106)" }}>
            According to the RBI guidelines, the user must complete KYC to use
            the online money transfer service. However, KYC process on MobiKwik
            is rather simple and quick and can be done within minutes on the app
            itself.
          </p>{" "}
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
          <img src={mutualfund244} style={{ height: "400px" }} alt="qq" />
          <br />
          <Typography style={{ fontSize: "10px" }}>
            Tap on 'Transer Money' on the MobiKwik App
          </Typography>
        </Grid>
        <Grid md={4} style={{ textAlign: "center" }}>
          <Typography varient="h6">Step2</Typography>
          <img src={mutualfund245} style={{ height: "400px" }} />
          <Typography style={{ fontSize: "10px" }}>
            Find 'Wallet to Bank' in Transfer Money
          </Typography>
        </Grid>
        <Grid md={4} style={{ textAlign: "center" }}>
          <Typography varient="h6">Step3</Typography>
          <img src={mutualfund246} style={{ height: "400px" }} />
          <Typography style={{ fontSize: "10px" }}>
            Add Beneficiary, Account Number and IFSC Code and select 'Continue'
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item md={6}>
          <Typography className={classes.h1}>
            Factors to Consider for Money Transfer Online
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item md={8}>
          <p style={{ fontSize: "13px", color: "rgb(106,106,106)" }}>
            While transferring money from card to bank one must consider the
            following factors before making the transactions:
          </p>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid item container>
        <Grid item md={12}>
          <ul style={{ fontSize: "13px", color: "rgb(106,106,106)" }}>
            <li>
              Secure platform - The platform that the user chooses to transfer
              their money should be 100% secure. On MobiKwik the user data is
              end to end encrypted hence making the data and transaction super
              safe.
            </li>
            <br />
            <li>
              Charges involved - The charges for making a transfer from a credit
              card to a bank account varies from bank to bank. MobiKwik helps
              you complete the transactions in quick steps and with minimal
              extra charges.
            </li>
            <br />
            <li>
              Correct beneficiary details - The user needs to make sure that the
              beneficiary's details are accurate such as account number, branch,
              etc. After entering the correct details the transaction is super
              quick with MobiKwik.
            </li>
            <li>
              <br />
              Risk factors - Follow the do’s and don'ts of safe online banking
              practices shared by the bank. Don’t fall prey to any of the online
              banking scams and use MobiKwik for the secure credit card to bank
              transfers.
            </li>
            <br />
          </ul>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item md={6}>
          <Typography className={classes.h1}>
            How Online Money Transfers Benefit you?
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item md={12}>
          <p style={{ fontSize: "13px", color: "rgb(106,106,106)" }}>
            Everyone wants their money transfers to be quick and easy. Hence, to
            save on time and effort with the online money transfers MobiKwik
            ‘Wallet to Bank’ feature is the best solution. Here are some
            benefits to consider to do online fund transfer:
          </p>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid item container>
        <Grid item md={12}>
          <ul style={{ fontSize: "13px", color: "rgb(106,106,106)" }}>
            <li>
              Transfer to any bank account: MobiKwik's digital wallet makes the
              money transfers hassle-free, just transfer money from the credit
              cards of any bank to any bank account. For instance, Transfer
              money from your HSBC credit card by adding money to your wallet
              and transfer the amount added to the ICICI bank account.
            </li>
            <br />
            <li>
              Swift Transactions: For the quick and simple procedure of
              transferring money, choose MobiKwik wallet. Ensuring smooth money
              transfer services. With the online{" "}
              <a href="#">money transfer app</a>
              transactions are simplified as compared to bank services.
            </li>
            <br />
            <li>
              Minimum Charges - With bare minimum charges the money can be
              transferred from credit cards to any bank account instantly with
              the MobiKwik app
            </li>
            <li>
              <br />
              KYC required: To maintain end to end secure transactions, KYC is
              mandatory. With MobiKwik it becomes easy to do KYC within minutes.
              It is done quickly on the app itself and the user need not go
              through any physical verification.
            </li>
            <br />
          </ul>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item md={6}>
          <Typography classnName={classes.h1}>
            How to Transfer Money From Credit Card to Bank Account
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item md={12}>
          <p style={{ fontSize: "13px", color: "rgb(106,106,106)" }}>
            With the <a href="#">MobiKwik money transfer app</a> and website
            transferring money to a bank account has become a seamless
            procedure. To do an online money transfer just download the{" "}
            <a href="#">android & ios mobile app </a> from the play store or log
            in to the website and follow the given steps:
          </p>
        </Grid>
      </Grid>
      <br />
      <Grid item container>
        <Grid item md={12}>
          <ul style={{ fontSize: "13px", color: "rgb(106,106,106)" }}>
            <li>
              Add money to your digital wallet on the MobiKwik app using your
              credit card.
            </li>
            <br />
            <li>
              Tap on the ‘Transfer money’ feature on the app. Find the ‘Wallet
              to Bank’ option in order to transfer money.
            </li>
            <br />
            <li>
              Add a beneficiary name, account number, and IFSC code and that’s
              it
            </li>

            <br />
          </ul>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item md={12}>
          <Typography className={classes.h1}>
            FAQ's of Instant Money Transfer
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item md={12}>
          <ol type="1" className={classes.h1}>
            <li>How online money transfer works</li>
            <p style={{ fontSize: "13px", color: "rgb(106,106,106)" }}>
              There are a number of ways to transfer money online. One can opt
              for online bank transfer methods through net banking such as NEFT,
              RTFS, UPI and IMPS.
            </p>
            <li>
              How to transfer money from the bank account to another bank
              account online
            </li>
            <p style={{ fontSize: "13px", color: "rgb(106,106,106)" }}>
              Just transfer your money directly from credit card to bank with
              MobiKwik's "Wallet to Bank" feature or
            </p>
            <Grid item container>
              <Grid item md={12}>
                <ul>
                  <li style={{ fontSize: "13px", color: "rgb(106,106,106)" }}>
                    Open your bank’s website
                  </li>
                  <br />
                  <li style={{ fontSize: "13px", color: "rgb(106,106,106)" }}>
                    Log in to your credit card account
                  </li>
                  <br />
                  <li style={{ fontSize: "13px", color: "rgb(106,106,106)" }}>
                    Select the transfer option
                  </li>

                  <li style={{ fontSize: "13px", color: "rgb(106,106,106)" }}>
                    Enter the amount you want to transfer
                  </li>
                  <br />
                  <li style={{ fontSize: "13px", color: "rgb(106,106,106)" }}>
                    Enter the required details mentioned in the form
                  </li>
                  <br />
                  <li style={{ fontSize: "13px", color: "rgb(106,106,106)" }}>
                    Follow the prompts to complete transactions
                  </li>
                </ul>
              </Grid>
            </Grid>
            <li>Can we transfer money from credit card to bank account?</li>
            <p style={{ fontSize: "13px", color: "rgb(119,119,119)" }}>
              Yes, we can transfer money from a credit card to a bank account.
              Do a quick money transfer online, just download the MobiKwik app
              or log in to the website and transfer your money securely.
            </p>
            <li style={{ fontSize: "13px", color: "rgb(119,119,119)" }}>
              How long does it take for money to transfer from credit card to
              bank account?
            </li>
            <p style={{ fontSize: "20px", color: "rgb(106,106,106)" }}>
              With the MobiKwik app, the online money transfer is done within a
              fraction of minutes.
            </p>
            <li>Do I need a KYC for a money transfer?</li>
            <p style={{ fontSize: "13px", color: "rgb(119,119,119)" }}>
              To maintain end to end secure transactions, KYC is mandatory. With
              MobiKwik it becomes easy to do KYC within minutes. It is done
              quickly on the app itself and the user need not go through any
              physical verification.
            </p>
            <li>
              How to transfer money from MobiKwik to the bank without charges?
            </li>
            <p style={{ fontSize: "13px", color: "rgb(119,119,119)" }}>
              MobiKwik app is the safest of all the platforms to transfer your
              money from credit card to bank account with bare minimum
              charges.Do a quick online money transfer with MobiKwik, just
              download the app or log in to the website and follow the given
              steps.
            </p>
            <ul style={{ fontSize: "13px", color: "rgb(119,119,119)" }}>
              <li>
                Add money to your digital wallet on the MobiKwik app using your
                credit card.
              </li>
              <br />
              <li>
                Tap on the ‘Transfer money’ feature on the app. Find the ‘Wallet
                to Bank’ option in order to transfer money.
              </li>
              <br />
              <li>
                Add a beneficiary name, account number, and IFSC code and that’s
                it!
              </li>

              <br />
            </ul>
            <li>
              Can I transfer money from the MobiKwik wallet to a bank without
              KYC?
            </li>
            <p style={{ fontSize: "13px", color: "rgb(119,119,119)" }}>
              No, as the user data is of utmost importance for MobiKwik so doing
              KYC before transferring money from MobiKwik wallet to the bank is
              mandatory.
            </p>
          </ol>
        </Grid>
      </Grid>
      <Typography className={classes.h1}>
        Popular Searches on MobiKwik
      </Typography>
      <Grid
        item
        container
        className="classes.paperContainer"
        style={{ fontSize: "13px" }}
      >
        <a href="#" style={{ color: "rgb(106,106,106)" }}>
          Online Reacharge
        </a>

        <a href="#" style={{ color: "rgb(106,106,106)" }}>
          DTH Reacharge
        </a>

        <a href="#" style={{ color: "rgb(106,106,106)" }}>
          Data card Reacharge
        </a>

        <a href="#" style={{ color: "rgb(106,106,106)" }}>
          Gas Booking
        </a>

        <a href="#" style={{ color: "rgb(106,106,106)" }}>
          BroadBand Bill Payment
        </a>

        <a href="#" style={{ color: "rgb(106,106,106)" }}>
          Electricity Bill Payments
        </a>

        <a href="#" style={{ color: "rgb(106,106,106)" }}>
          Post Paid Billpayment
        </a>

        <a href="#" style={{ color: "rgb(106,106,106)" }}>
          Instant Personal Loan
        </a>

        <a href="#" style={{ color: "rgb(106,106,106)" }}>
          Money Transfer
        </a>

        <a href="#" style={{ color: "rgb(106,106,106)" }}>
          Mutual Fund
        </a>
      </Grid>
      <div className={classes.footer}>
          <FooterMain/>
        </div>
      </div>
  );
}

import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {  fade,makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import mutualfund219 from '../assets/mutualfund219.png'
const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
     
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    
  }));
  
export default function Mfundcompare(){
    const classes=useStyles();
    return(
         <div >
        <Grid container style={{justifyContent:"center",alignItems:"center",marginTop:"200px"}}>
          <Typography style={{fontSize:"30px",fontWeight:"bolder"}}>Compare Mutual Funds</Typography>
        </Grid>
         <Grid container style={{justifyContent:"center",alignItems:"center",marginTop:"100px"}}>
       
            <Grid  md={3} xs={3}>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon  />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
            <InputBase style={{fontSize:"15px",fontStyle:"italic"}}
              placeholder="Find A Mutual Fund......"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              
            />
            <hr style={{borderWidth:"5px",backgroundColor:"black"}}sonet/>
          </div>
          </Grid>
          <Grid  md={3} xs={3}>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
            <InputBase style={{fontSize:"15px",fontStyle:"italic"}}
              placeholder="Find A Mutual Fund......"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              
            />
            <hr style={{borderWidth:"5px",backgroundColor:"black"}}sonet/>
          </div>
          
          
            </Grid>
            
            <Grid  md={3} xs={3}>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon  />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
            <InputBase style={{fontSize:"15px",fontStyle:"italic"}}
              placeholder="Find A Mutual Fund..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              
            />
            <hr style={{borderWidth:"5px",backgroundColor:"black"}}sonet/>
          </div>
          </Grid>
       </Grid>
              
       <Grid  container style={{justifyContent:"center",alignItems:"center",marginTop:"100px",marginBottom:"1000px"}}>
       <Grid item md={10} >
      
       <List  style={{height:"100px"}}component="nav" aria-label="secondary mailbox folders">
        <ListItem button style={{backgroundColor:"rgb(0,115,207)",height:"50px"}}>
          <Typography style={{fontSize:"20px",color:"white",fontWeight:"bolder"}}>FUND NAME</Typography>
        </ListItem>
        <Divider/>
        <ListItem button style={{height:"50px"}}>
          <Typography style={{fontSize:"15px",color:"black",fontWeight:"bolder"}}>FUND CATEGORY</Typography>
        </ListItem>
        <Divider/>
        <ListItem button style={{height:"50px"}}>
          <Typography style={{fontSize:"15px",color:"black",fontWeight:"bolder"}}>RETURNS (6M)</Typography>
        </ListItem>
        <Divider/>
        <ListItem button style={{height:"50px"}}>
          <Typography style={{fontSize:"15px",color:"black",fontWeight:"bolder"}}>RETURNS (1Y)</Typography>
        </ListItem>
        <Divider/>
        <ListItem button style={{height:"50px"}}>
          <Typography style={{fontSize:"15px",color:"black",fontWeight:"bolder"}}>RETURNS (3Y)</Typography>
        </ListItem>
        <Divider/>
        <ListItem button style={{height:"50px"}}>
          <Typography style={{fontSize:"15px",color:"black",fontWeight:"bolder"}}>MORNING STAR RATING</Typography>
        </ListItem>
        <Divider/>
        <ListItem button style={{height:"50px"}}>
          <Typography style={{fontSize:"15px",color:"black",fontWeight:"bolder"}}>MOBIKWIK RECOMMENDS</Typography>
        </ListItem>
        <Divider/>
        <ListItem button style={{height:"50px"}}>
          <Typography style={{fontSize:"15px",color:"black",fontWeight:"bolder"}}>LATEST NAV</Typography>
        </ListItem>
        <Divider/>
        <ListItem button style={{height:"50px"}}>
          <Typography style={{fontSize:"15px",color:"black",fontWeight:"bolder"}}>MIN. INITIAL INVESTMENT</Typography>
        </ListItem>
        <Divider/>
        <ListItem button style={{height:"50px"}}>
          <Typography style={{fontSize:"15px",color:"black",fontWeight:"bolder"}}>MIN. ADDITIONAL INVESTMENT</Typography>
        </ListItem>
        <Divider/>
        <ListItem button style={{height:"50px"}}>
          <Typography style={{fontSize:"15px",color:"black",fontWeight:"bolder"}}>TOTAL ASSETS</Typography>
        </ListItem>
        <Divider/>
        <ListItem button style={{height:"50px"}}>
          <Typography style={{fontSize:"15px",color:"black",fontWeight:"bolder"}}>AVAILABLE FOR PURCHASE</Typography>
        </ListItem>
        <Divider/>
        <ListItem button style={{height:"50px"}}>
          <Typography style={{fontSize:"15px",color:"black",fontWeight:"bolder"}}>EXIT LOADS</Typography>
        </ListItem>
        <Divider/>
        <ListItem button style={{height:"50px"}}>
          <Typography style={{fontSize:"15px",color:"black",fontWeight:"bolder"}}>LAUNCH DATE</Typography>
        </ListItem>
        <Divider/>
        <ListItem button style={{height:"50px"}}>
          <Typography style={{fontSize:"15px",color:"black",fontWeight:"bolder"}}>EXPENSE RATIO</Typography>
        </ListItem>
        <Divider/>
        <ListItem button  style={{height:"50px"}}>
          <Typography style={{fontSize:"15px",color:"black",fontWeight:"bolder"}}>FUND MANAGERS</Typography>
        </ListItem>
        <Divider/>
        <ListItem button style={{height:"50px"}}>
          <Typography style={{fontSize:"15px",color:"black",fontWeight:"bolder"}}>REGISTRAR</Typography>
        </ListItem>
        <Divider/>
        
      
        </List>
        </Grid>
        </Grid>
        <br/>
        
      <Grid container style={{marginTop:"px"}}>
        <Grid item md={12} >
      <Paper style={{marginTop:'',alignItems:"center",backgroundColor:"rgb(247,247,247)" ,justifyContent:"center"}}>
                 
                 <Grid item container style={{}}>
      
       <img src={mutualfund219} className={classes.imagecontainer1}/>
      
      
      
      <Grid item md={10} xs={10}style={{float:"left",fontSize:"15px",fontWeight:"bolder",textAlign:"right"}}>
      <FacebookIcon style={{width:"50px",height:'50px'}}/>
      <TwitterIcon style={{width:"50px",height:'50px'}}/>
      <Grid style={{color:"rgb(189,189,189)"}}>
        Terms of Services
      </Grid>
      <Grid style={{color:"rgb(189,189,189)"}}>
       Privacy Policy
      </Grid>
      <Grid style={{color:"rgb(189,189,189)"}}>
       Grievancs
      </Grid>

       
      </Grid>
      </Grid>
      <Grid item conatiner >
        <Grid>
          <Typography variant="h6" >
          Fund Houses
          </Typography>
        
          <br/>
      <Typography variant="" className={classes.caption1}>
      ICICI Mutual Fund | HDFC Mutual Fund | Aditya Birla Sun Life Mutual Fund | Nippon India Mutual Fund | SBI Mutual Fund |
      </Typography>
      <br/> 
      <Typography variant="" className={classes.caption1}>
      UTI Mutual Fund | Kotak Mahindra Mutual Fund | Franklin Templeton Mutual Fund | DSP Mutual Fund | IDFC Mutual Fund |
      </Typography>
      <br/> 
      <Typography variant="" className={classes.caption1}>
      BNP Paribhas Mutual Fund | Canara Robeco Mutual Fund | PGIM India Mutual Fund | Edelweiss Mutual Fund | HSBC Mutual Fund | Union Mutual Fund |
      </Typography>
      <br/> 
      <Typography variant="" className={classes.caption1}>
      Indiabulls Mutual Fund | L&T Mutual Fund | LIC Mutual Fund | Principal Mutual Fund | IIFL Mutual Fund | Sundaram Mutual Fund |
      </Typography>
      <br/> 
      <Typography variant="" className={classes.caption1}>
      Quantum Mutual Fund | Taurus Mutual Fund | Mirae Asset Mutual Fund | Essel Mutual Fund | PPFAS Mutual Fund | Axis Mutual Fund |
      </Typography>
      <br/>
      <Typography variant="" className={classes.caption1}>
      IDBI Mutual Fund | Baroda Pioneer Mutual Fund | Tata Mutual Fund | JM financial Mutual Fund | Mahindra Mutual Fund | Motilal Oswal Mutual Fund | Invesco Mutual Fund
      </Typography>
      <br/>
      <Typography variant="h6">
          Fund categories
          </Typography>
          <br/>
          <Typography variant="" className={classes.caption1}>
          Balanced | Debt | ELSS-Tax-Saving | Equity | Index | Liquid
      </Typography>
      <br/>
      <Typography variant="" className={classes.header2}>
      Calculators
          </Typography>
          <br/>
          <Typography variant="" className={classes.caption1}>
          Lumpsum Calculator | SIP Calculator | Direct vs Regular returns Calculator
      </Typography>
      <Typography variant="h6">
      Lumpsum
          </Typography>
          <Typography variant="" className={classes.caption1}>
          HDFC Mutual Fund Calculator | SBI Mutual Fund Calculator | ICICI Pru Mutual Fund Calculator | Franklin Templeton Mutual Fund Calculator | Nippon India Mutual Fund calculator
           | L&T Mutual Fund Calculator |
      </Typography>
      <Typography variant="" className={classes.caption1}>
      Kotak Mutual Fund Calculator | Aditya Birla Mutual Fund Calculator | DSP Mutual Fund Calculator | Axis Mutual Fund Calculator | IDFC Mutual Fund Calculator | UTI Mutual Fund Calculator


      </Typography>
          <Typography variant="" className={classes.header2}>
          SIP
          </Typography>
          <Typography variant="" className={classes.caption1}>
          HDFC SIP Calculator | SBI SIP Calculator | ICICI Pru SIP Calculator | Franklin Templeton SIP Calculator | Nippon India SIP calculator | L&T SIP Calculator | Kotak SIP Calculator | 
          Aditya Birla SIP Calculator | DSP SIP
      </Typography>
      <Typography  variant="" className={classes.caption1}>
      Calculator | Axis SIP Calculator | IDFC SIP Calculator | UTI SIP Calculator
      </Typography>
      <br/>
      <Grid item md={10} xs={10}>
      <Typography variant="" className={classes.caption1}>
      Name of Investment Adviser- Harvest Fintech Private Limited | Address- 206, Natwar Chambers, 94, Nagindas Master
       Road, Fort , Mumbai. Phone – 022- 22622060 | Type of Registration- Non-Individual | Registration number- 
       INA 000004773 valid till 23.05.2021 | Principal Officer- Mr. Pradeep Bhasin | Email id- mutualfunds@mobikwik.com
       Phone- 011-61266390 | Corresponding SEBI Local Office Address - Securities and Exchange Board of India, Investment Management Department, 
      Bandra-Kurla Complex Bandra, Mumbai 400051.
      </Typography>
      </Grid>
      <br/>
      <Typography  variant="" className={classes.caption1}>
      Investing involves risks & investments may sometimes lose value. Past performance does not guarantee future returns.
      </Typography>
      <br/>
      <Typography variant="" className={classes.caption1}>
      © 2021 One Mobikwik System Pvt Ltd, India | All rights reserved. | 2.0.619
      </Typography>
        </Grid>
      </Grid>

                </Paper>
                </Grid>
                </Grid>
       </div>
    )
}
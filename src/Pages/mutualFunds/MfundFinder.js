import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import mutualfund219 from '../assets/mutualfund219.png'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles=makeStyles(theme=>({
    header1:{
        fontWeight:800,
        fontSize:"40px",
        marginLeft:"200px",
        marginTop:"150px",
        [theme.breakpoints.down("md")]:{
          fontSize:"25px",
          textalign:"center",
          marginLeft:"20px",
          marginTop:"25px"
         },
     
         [theme.breakpoints.down("sm")]:{
           paddingLeft:"1.5em",
           paddingRight:"1.5em",
           fontSize:15,
           textalign:"center",
           marginTop:"25px"
         },
     
         [theme.breakpoints.down("xs")]:{
           paddingLeft:"1em",
           paddingRight:"1em",
           fontSize:15,
           textalign:"center",
           marginTop:"25px"
         },
        },
         caption:{
            fontWeight:250,
            fontSize:"20px",
            marginLeft:"200px",
           
            [theme.breakpoints.down("md")]:{
              fontSize:"15px",
             
              marginLeft:"20px",
              
             },
         
             [theme.breakpoints.down("sm")]:{
               paddingLeft:"1.5em",
               paddingRight:"1.5em",
               fontSize:15,
               marginLeft:"0",
               
             },
         
             [theme.breakpoints.down("xs")]:{
               paddingLeft:"1em",
               paddingRight:"1em",
               fontSize:15,
               
             },
      },
      imagecontainer3:{
        width:200,
        height:100,
       
        [theme.breakpoints.down("md")]:{
          width:100,
          height:50,
          
         },
     
         [theme.breakpoints.down("sm")]:{
          
           width:100,
          height:50,
           
         },
     
         [theme.breakpoints.down("xs")]:{
          
           width:100,
          height:50,
           
         },
  },
      button1:{
        fontWeight:600,
        fontSize:"25px",
        marginLeft:"50px",
        color:"rgb(238,92,92)",
        backgroundColor:"white",
        width:"140px",
        height:"75px",
        borderRadius:"75px",
        [theme.breakpoints.down("md")]:{
          fontSize:"30px",
          width:"75px",
          height:"50px",
          marginLeft:"20px",
          
         },
     
         [theme.breakpoints.down("sm")]:{
           paddingLeft:"1.5em",
           paddingRight:"1.5em",
           fontSize:15,
           marginLeft:"0",
           width:"75px",
          height:"50px",
           
         },
     
         [theme.breakpoints.down("xs")]:{
           paddingLeft:"1em",
           paddingRight:"1em",
           fontSize:15,
           width:"75px",
          height:"50px",
           
         },
  },
  caption3:{
       
    color:"rgb(119,119,119)",
    [theme.breakpoints.down("md")]:{
      fontSize:"15px",
      textalign:"center"
     },
 
     [theme.breakpoints.down("sm")]:{
       paddingLeft:"1.5em",
       paddingRight:"1.5em",
       fontSize:15,
       textalign:"center"
     },
 
     [theme.breakpoints.down("xs")]:{
       paddingLeft:"1em",
       paddingRight:"1em",
       fontSize:15,
       textalign:"center"
     },
 
  },

  cardcontainer:{
    
    marginTop:"200px" ,
   
    
    [theme.breakpoints.down("md")]:{
     
      marginTop:"20px" ,
     
      
     },
 
     [theme.breakpoints.down("sm")]:{
       
      marginTop:"20px" ,
       
     },
 
     [theme.breakpoints.down("xs")]:{
       
      marginTop:"20px" ,
       
     },
},
  card1:{
    
   
    width:"350px",
    height:"400px",
    
    [theme.breakpoints.down("md")]:{
     
      width:"",
      height:"",
     
      
     },
 
     [theme.breakpoints.down("sm")]:{
      height:"",
       marginLeft:"0",
       width:"350px",
      height:"250px",
       
     },
 
     [theme.breakpoints.down("xs")]:{
      height:"",
       width:"350px",
      height:"250px",
       
     },
},
card2:{
    
   
  width:"350px",
  height:"400px",
  
  [theme.breakpoints.down("md")]:{
   
    width:"350px",
    height:"",
    marginTop:"25px" ,
    
   },

   [theme.breakpoints.down("sm")]:{
     
     marginLeft:"0",
     width:"350px",
     height:"",
    marginTop:"25px" ,
   },

   [theme.breakpoints.down("xs")]:{
     
     width:"350px",
     height:"",
    marginTop:"25px" ,
   },
},
      caption1:{
        fontWeight:600,
        fontSize:"30px",
        marginLeft:"40px",
        color:"white",
        marginTop:"50px" ,
        [theme.breakpoints.down("md")]:{
          fontSize:"30px",
          fontWeight:250,
          marginLeft:"20px",
          marginTop:"25px" ,
         },
     
         [theme.breakpoints.down("sm")]:{
           paddingLeft:"1.5em",
           paddingRight:"1.5em",
           fontSize:15,
           fontWeight:250,
           marginLeft:"0",
           marginTop:"25px" ,
         },
     
         [theme.breakpoints.down("xs")]:{
           paddingLeft:"1em",
           paddingRight:"1em",
           fontSize:15,
           marginTop:"25px" ,
         },
  },
  caption2:{
    fontWeight:600,
    fontSize:"20px",
    paddingTop:"1em",
    paddingBottom:"2em",
    paddingLeft:"2em",
    paddingRight:"2em",
   color:"white",
    [theme.breakpoints.down("md")]:{
      fontSize:"10px",
     
      marginLeft:"20px",
      
     },
 
     [theme.breakpoints.down("sm")]:{
       paddingLeft:"1.5em",
       paddingRight:"1.5em",
       fontSize:10,
       marginLeft:"0",
       
     },
 
     [theme.breakpoints.down("xs")]:{
       paddingLeft:"1em",
       paddingRight:"1em",
       fontSize:10,
       
     },
},
}))
export default function MfundFinder(){
    const classes=useStyles();
    return(
        <div>
       <Grid item container style={{}}>
         <Grid >
         <h1 className={classes.header1}>Fund Finder</h1>
         </Grid>
        
        </Grid>
        <Grid item container style={{marginTop:"25px"}}>
         <Grid >
         <Typography variant="h4" className={classes.caption}>Use the Fund Finder Tool to help you pick the direct mutual fund that's 
         just right for you in just 3 clicks.</Typography>
         </Grid>
        
        </Grid>
        <Grid  container className={classes.cardcontainer} style={{justifyContent:'center',alignItems:"center"}}>
        
         <Card className={classes.card2}style={{backgroundColor:"rgb(238,92,92)"}}>
             <h2 className={classes.caption1}>Equity Funds</h2>
             <h4 className={classes.caption2}>Invest mainly in Company shares. Holdings vary by the size (market cap) of the companies
                  it invests in and the fund’s investment style.</h4>
                  <button className={classes.button1} style={{color:""}}>Select</button>
         </Card>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Card className={classes.card1}style={{backgroundColor:"rgb(137,100,201)"}}>
             <h2 className={classes.caption1}>Hybrid Funds</h2>
             <h4 className={classes.caption2}>Invest your money in a mix of stocks, bonds and cash in different proportions.</h4>
                  <br/><br/>
                  <button className={classes.button1} style={{color:"rgb(137,100,201)"}}>Select</button>
         </Card>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Card className={classes.card1}style={{backgroundColor:"rgb(5,164,205)"}}>
             <h2 className={classes.caption1}>Debt Funds</h2>
             <h4 className={classes.caption2}>Invest primarily in bonds.
Holdings can include corporate debt, government debt or a combination of the two.</h4>
                  <button className={classes.button1} style={{color:"rgb(5,164,205)"}}>Select</button>
         </Card>
         
        
        </Grid>
        <Paper style={{marginTop:'100px',alignItems:"center",backgroundColor:"rgb(247,247,247)" ,justifyContent:"center"}}>
                 
                 <Grid item container style={{}}>
      
       <img className={classes.imagecontainer3}src={mutualfund219} />
      
      
      
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
          <Typography  variant="h6" className={classes.header2}>
          Fund Houses
          </Typography>
          <br/>
          <br/>
      <Typography variant="" className={classes.caption3}>
      ICICI Mutual Fund | HDFC Mutual Fund | Aditya Birla Sun Life Mutual Fund | Nippon India Mutual Fund | SBI Mutual Fund |
      </Typography>
      <br/> <br/>
      <Typography variant="" className={classes.caption3}>
      UTI Mutual Fund | Kotak Mahindra Mutual Fund | Franklin Templeton Mutual Fund | DSP Mutual Fund | IDFC Mutual Fund |
      </Typography>
      <br/> <br/>
      <Typography variant="" className={classes.caption3}>
      BNP Paribhas Mutual Fund | Canara Robeco Mutual Fund | PGIM India Mutual Fund | Edelweiss Mutual Fund | HSBC Mutual Fund | Union Mutual Fund |
      </Typography>
      <br/> <br/>
      <Typography variant="" className={classes.caption3}>
      Indiabulls Mutual Fund | L&T Mutual Fund | LIC Mutual Fund | Principal Mutual Fund | IIFL Mutual Fund | Sundaram Mutual Fund |
      </Typography>
      <br/> <br/>
      <Typography variant="" className={classes.caption3}>
      Quantum Mutual Fund | Taurus Mutual Fund | Mirae Asset Mutual Fund | Essel Mutual Fund | PPFAS Mutual Fund | Axis Mutual Fund |
      </Typography>
      <br/>
      <Typography variant="" className={classes.caption3}>
      IDBI Mutual Fund | Baroda Pioneer Mutual Fund | Tata Mutual Fund | JM financial Mutual Fund | Mahindra Mutual Fund | Motilal Oswal Mutual Fund | Invesco Mutual Fund
      </Typography>
      <br/>
      <Typography variant="h6" className={classes.header2}>
          Fund categories
          </Typography>
          <br/>
          <Typography variant="" className={classes.caption3}>
          Balanced | Debt | ELSS-Tax-Saving | Equity | Index | Liquid
      </Typography>
      <br/>
      <Typography variant="h6" className={classes.header2}>
      Calculators
          </Typography>
          <br/>
          <Typography variant="" className={classes.caption3}>
          Lumpsum Calculator | SIP Calculator | Direct vs Regular returns Calculator
      </Typography>
      <Typography variant="h6" className={classes.header2}>
      Lumpsum
          </Typography>
          <Typography variant="" className={classes.caption3}>
          HDFC Mutual Fund Calculator | SBI Mutual Fund Calculator | ICICI Pru Mutual Fund Calculator | Franklin Templeton Mutual Fund Calculator | Nippon India Mutual Fund calculator
           | L&T Mutual Fund Calculator |
      </Typography>
      <Typography variant="" className={classes.caption3}>
      Kotak Mutual Fund Calculator | Aditya Birla Mutual Fund Calculator | DSP Mutual Fund Calculator | Axis Mutual Fund Calculator | IDFC Mutual Fund Calculator | UTI Mutual Fund Calculator


      </Typography>
          <Typography variant="h6" className={classes.header2}>
          SIP
          </Typography>
          <Typography variant="" className={classes.caption3}>
          HDFC SIP Calculator | SBI SIP Calculator | ICICI Pru SIP Calculator | Franklin Templeton SIP Calculator | Nippon India SIP calculator | L&T SIP Calculator | Kotak SIP Calculator | 
          Aditya Birla SIP Calculator | DSP SIP
      </Typography>
      <Typography  variant="" className={classes.caption3}>
      Calculator | Axis SIP Calculator | IDFC SIP Calculator | UTI SIP Calculator
      </Typography>
      <br/>
      <Grid item md={10} xs={10}>
      <Typography variant="" className={classes.caption3}>
      Name of Investment Adviser- Harvest Fintech Private Limited | Address- 206, Natwar Chambers, 94, Nagindas Master
       Road, Fort , Mumbai. Phone – 022- 22622060 | Type of Registration- Non-Individual | Registration number- 
       INA 000004773 valid till 23.05.2021 | Principal Officer- Mr. Pradeep Bhasin | Email id- mutualfunds@mobikwik.com
       Phone- 011-61266390 | Corresponding SEBI Local Office Address - Securities and Exchange Board of India, Investment Management Department, 
      Bandra-Kurla Complex Bandra, Mumbai 400051.
      </Typography>
      </Grid>
      <br/>
      <Typography  variant="" className={classes.caption3}>
      Investing involves risks & investments may sometimes lose value. Past performance does not guarantee future returns.
      </Typography>
      <br/>
      <Typography variant="" className={classes.caption3}>
      © 2021 One Mobikwik System Pvt Ltd, India | All rights reserved. | 2.0.619
      </Typography>
        </Grid>
      </Grid>

                </Paper>
            </div>
    )
}
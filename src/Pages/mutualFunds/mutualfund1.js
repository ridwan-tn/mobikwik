import React,{ Component, useState } from "react";
import { makeStyles,withStyles } from '@material-ui/core/styles';
import bootstrap from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import mutualfund6 from '../assets/mutualfund6.png'
import sonet from '../assets/mutualfund.png'
import mutualfund4 from '../assets/mutualfund4.png'
import sonet1 from '../assets/mutualfund3.png'
import mutualfund7 from '../assets/mutualfund7.png'
import mutualfund8 from '../assets/mutualfund8.png'
import mutualfund9 from '../assets/mutualfund11.png'
import mutualfund12 from '../assets/mutualfund13.png'
import mutualfund14 from '../assets/mutualfund14.png'
import mutualfund15 from '../assets/mutualfund15.png'
import mutualfund16 from '../assets/mutualfund16.png'
import mutualfund17 from '../assets/mutualfund17.png'
import mutualfund18 from '../assets/mutualfund18.png'
import mutualfund19 from '../assets/mutualfund19.jpg'
import mutualfund20 from '../assets/mutualfund20.jpg'
import mutualfund21 from '../assets/mutualfund21.png'
import mutualfund29 from '../assets/mutualfund29.png'
import mutualfund25 from '../assets/mutualfund25.png'
import mutualfund27 from '../assets/mutualfund27.png'
import mutualfund30 from '../assets/mutualfund30.png'
import mutualfund31 from '../assets/mutualfund31.png'
import mutualfund32 from '../assets/mutualfund32.png'
import mutualfund33 from '../assets/mutualfund33.png'
import mutualfund34 from '../assets/mutualfund34.png'
import mutualfund35 from '../assets/mutualfund35.png'
import mutualfund36 from '../assets/mutualfund36.png'
import mutualfund37 from '../assets/mutualfund37.png'
import mutualfund38 from '../assets/mutualfund38.png'
import mutualfund39 from '../assets/mutualfund39.png'
import mutualfund50 from '../assets/mutualfund50.png'
import mutualfund28 from '../assets/mutualfund28.png'
import mutualfund24 from '../assets/mutualfund24.jpg'
import mutualfund22 from '../assets/mutualfund22.jpeg'
import mutualfund23 from '../assets/mutualfund23.jpeg'
import mutualfund219 from '../assets/mutualfund219.png'
import { Paper } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import sonet2 from '../assets/mutualfund2.png'
import Carousel from 'react-bootstrap/Carousel';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import TwitterIcon from '@material-ui/icons/Twitter';
import "bootstrap/dist/css/bootstrap.css";
import Avatar from '@material-ui/core/Avatar';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FacebookIcon from '@material-ui/icons/Facebook';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    height:350,
    marginTop:100,
  },
  imageconatiner:{
    width:"100px",
    height:"100px",
    [theme.breakpoints.down("sm")]:{
      justify:"center",
      width:"150px",
      height:"150px",
    },
    
    [theme.breakpoints.down("md")]:{
      justify:"center",
      width:"400px",
      height:"500px",
    }
    },
    imageconatiner1:{
      width:150,
      height:100,
     
      alignItems:"center",
      justifyContent:"center",
      display:'flex',
      [theme.breakpoints.down("sm")]:{
        justify:"center",
        
        height:"100px",
        width:"100px",
      },
    },
    imageconatiner4:{
      width:350,
      height:175,
      marginTop:50,
      alignItems:"center",
      justifyContent:"center",
      display:'flex',
      [theme.breakpoints.down("sm")]:{
        justify:"center",
        marginTop:50,
        height:"100px",
        width:"200px",
      },
    },
    imageconatiner2:{
      width:400,
      height:250,
     
      alignItems:"center",
      justifyContent:"center",
      display:'flex',
      [theme.breakpoints.down("sm")]:{
        justify:"center",
        
        height:"100px",
        width:"150px",
      },
    },
    imageconatiner6:{
      width:600,
      height:450,
     
      alignItems:"center",
      justifyContent:"center",
      display:'flex',
      [theme.breakpoints.down("sm")]:{
        justify:"center",
        
        height:"100px",
        width:"150px",
      },
    },
    imageconatiner3:{
      width:400,
      height:400,
     color:"black",
     fontsize:"100px",
     textAlign:"center",
     
      alignItems:"center",
      justifyContent:"center",
      display:'flex',
      [theme.breakpoints.down("sm")]:{
        justify:"center",
        color:"black",
        height:"200px",
        width:"200px",
        fontsize:"40px",
      },
    },
    missionContainer:{
      
      marginTop:50,
      fontSize:45,
      fontweight:'bolder',
      color:'black',
      justify:'center',
      justifyItems:'center',
  
      [theme.breakpoints.down("md")]:{
        color:'black',
       
        fontSize:20,
       
      },
  
      [theme.breakpoints.down("sm")]:{
        paddingLeft:"1.5em",
       paddingRight:"1.5em",
        alignItems:'center',
       
        justifyContent:'center',
        fontSize:20,
       
        color:'black',
        
        
        
      },
     
    },
    PaperContainer:{
      alignItems:"center",
      justifyContent:"center",
            textAlign:"center",
    
       [theme.breakpoints.down("sm")]:{
       textAlign:"center",
       alignItems:"center",
       justifyContent:"center",
       paddingLeft:"1.5em",
       paddingRight:"1.5em",
       width:'100%'
       },
       [theme.breakpoints.down("xs")]:{
       textAlign:"center",
       paddingLeft:"1em",
       paddingRight:"1em"
       }
     },
    h11:{
        fontsize:60,
        fontweight:"bolder",
        [theme.breakpoints.down("md")]:{
          fontsize:20
        }
    },
paper1:{
    alignItems:"center",
   justifyContent :"center",
    backgroundColor:"white",
   
},
media: {
  height: 150,
},
space:{
Paddding:"50px",
[theme.breakpoints.down("sm")]:{
  Paddding:'5px',
}
},
Content:{
  alignItems:"center",
  justifyContent:"center",
  textAlign:"justify",
  fontSize:"15px",
  
  lineHeight:1,
  width:"100%",
  color:"white",
 
  paddingTop:"2em",
  
  [theme.breakpoints.down("sm")]:{
  width:"100%",
  paddingLeft:"1.5em",
  paddingRight:"1.5em",
  },
  
  [theme.breakpoints.down("xs")]:{
  width:"100%",
  paddingLeft:"1em",
  paddingRight:"1em",
      },
},

p2:{
    alignItems:"center",
   justifyContent :"center",
    backgroundColor:"white",
    
    marginLeft:"",
    marginTop:"50px",
    marginRight:"200px",
    [theme.breakpoints.down("sm")]:{
      justify:"center",
      width:"400px",
      height:"400px",
    },
}
}));
export default function Mutualfund1(){
  const[name,setName]=useState();
    const classes=useStyles();
    const handleClickmobile = () => setName({mutualfund50})
    return(
        <div className={classes.paper1}>
  <Paper className={classes.paper1}>
 
<Grid itme container justify="center">
    
<Carousel fade style={{width:"60%",height:"",marginTop:"50px"}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={sonet1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={sonet}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={sonet2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p>.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</Grid>
</Paper>
<Paper style={{backgroundColor:"rgb(249,249,247)",height:""}}>
    
    <Grid item container justify="center">
<Typography className={classes.missionContainer}>More for you,less for your banker</Typography>
</Grid>
<Grid item container justify="center">
<Grid item justify="center" style={{alignItems:"center",justifyContent:"center"}}>
  
    <Typography variant="h6" gutterBottom style={{color:"rgb(207,207,205)"}}>
    Stop paying 1% every single year!
      </Typography>
      <Typography variant="h6" gutterBottom style={{textAlign:"",color:"rgb(207,207,205)"}}>
   Buy direct mutual fund at no fees and zero commission
      </Typography>
      <br/>
      <br/>
      
    </Grid>
    </Grid>
    <Grid item container style={{justifyContent:"center",alignItems:"center"}}>
      <Grid>
      <Button varient="primary" style={{borderRadius:"25px",fontSize:"15px",fontweight:"bolder"}}>Open an account</Button>
      </Grid>
    </Grid>
    <Grid item container style={{alignItems:"center",justifyItems:"center"}}>
      <Grid item md={1}>
        </Grid>
<Grid item  md={1}className={classes.PaperContainer}>
    
            <img style={{alignItems:"right",justifyItems:"right"}} className={classes.imageconatiner1}
      
      src={mutualfund4}
      alt="Second slide"
      
      alignItems="center"
      
    />
    
          
    </Grid>
    <Grid item md={1}>
      </Grid>
    <Grid item md={3} >
    <h5 style={{fontWeight:"bolder"}}>Invest in direct fund for free</h5>
    <Typography varient=""gutterBottom className={classes.Content}style={{textAlign:"",color:"rgb(207,207,205)"}}>
        Mutual fund distributors make you invest in "Regular" 
        Plans — and regularly take 1% each year from your investments. 
        Ten years later, 1% + 1% + 1% ... will add up to 10% of your savings.</Typography>
        
    </Grid>
    <Grid item className={classes.PaperContainer} justify="center">
    
            <img className={classes.imageconatiner1}
      
      src={mutualfund6}
      alt="Second slide"
     
      alignItems="center"
      
    />
    
          
    </Grid>
    <Grid item md={3}>
      <br/>
    <h5 style={{fontWeight:"bolder"}}>No fees or charges</h5>
    <Typography varient="h4"gutterBottom className={classes.Content} style={{textAlign:"",color:"rgb(207,207,205)"}}>
    At MobiKwik, you can invest in over 3,000 mutual fund schemes for free. 
    Say goodbye to hidden commissions by investing in Direct Plans at MobiKwik.</Typography>
    <p style={{color:"blue",fontSize:"15px",paddingBottom:"50px"}}>Learn more →</p>
    </Grid>
       </Grid>
      
</Paper>
<hr style={{color:"black",borderWidth:"10px",width:"50px"}}></hr>
<Paper style={{backgroundcolor:"white"}}>
  <Grid item container>
    <Grid item xs={6} md={6}></Grid>
    <Grid item xs={6} md={6}style={{wordSpacing:"25px"}}>
    
      <Button style={{color:"rgb(207,207,205)",backgroundColor:"white",borderRadius:"25px"
      ,fontSize:"15px",width:"70px",height:"30px",borderColor:"black",alignContent:"center"}}onClick={handleClickmobile}>5yrs</Button>&nbsp;
      <Button style={{color:"rgb(207,207,205)",backgroundColor:"white",borderRadius:"25px"
      ,fontSize:"15px",width:"70px",height:"30px",borderColor:"black"}}>10yrs</Button>&nbsp;
      <Button style={{color:"rgb(207,207,205)",backgroundColor:"white",borderRadius:"25px"
      ,fontSize:"15px",width:"70px",height:"30px",borderColor:"black"}}>15yrs</Button>&nbsp;
     <Button style={{color:"rgb(207,207,205)",backgroundColor:"white",borderRadius:"25px"
      ,fontSize:"15px",width:"70px",height:"30px",borderColor:"black"}}>20yrs</Button>&nbsp;
      <Button style={{color:"rgb(207,207,205)",backgroundColor:"white",borderRadius:"25px"
      ,fontSize:"15px",width:"70px",height:"30px",borderColor:"black"}}>25yrs</Button>&nbsp;
      <Button style={{color:"rgb(207,207,205)",backgroundColor:"white",borderRadius:"25px"
      ,fontSize:"15px",width:"70px",height:"30px",borderColor:"black"}}>30yrs</Button>&nbsp;
      <Button style={{color:"rgb(207,207,205)",backgroundColor:"white",borderRadius:"25px"
      ,fontSize:"15px",width:"70px",height:"30px",borderColor:"black"}}>35yrs</Button>&nbsp;
     
    </Grid>
    
  </Grid>
  <Grid item container justify="center">
  <Grid item md={6}>
  <h4 style={{textAlign:"center",fontWeight:"bold",marginTop:"20px"}}>Make more with MobiKwik</h4>
  <Typography varient="h4"gutterBottom style={{textAlign:"center",color:"rgb(207,207,205)",fontSize:"25px"}}>
  See how much 1% a year in costs adds up to.</Typography>
  <br/><br/>
  <h2 style={{textAlign:"center",fontWeight:"bold"}}>I am <u style={{textDecorationColor:"blue",fontSize:"50px"}}>31</u> years old.</h2>
  <br/>
  
  <h2 style={{textAlign:"center",fontWeight:"bold"}}>
  I can invest
<u style={{textDecorationColor:"blue",fontSize:"50px"}}>  ₹500000
</u> now</h2>
<br/>
  <h2 style={{textAlign:"center",fontWeight:"bold"}}>and
 <u style={{textDecorationColor:"blue",fontSize:"50px"}}>  ₹10000
</u> every month.</h2>
  <br/>
  <br/>
  <Typography varient="h4"gutterBottom style={{textAlign:"center",color:"rgb(207,207,205)",fontSize:"25px"}}>
  How does it work</Typography>
  </Grid>
  <Grid item  md={6}>
    <img src={mutualfund50}className={classes.imageconatiner6} />
  </Grid>
  </Grid>
</Paper>
<Paper style={{backgroundColor:"black",height:""}}>
  <Grid item container>

    <Grid item  md={6} style={{marginTop:"30px"}}>
    <br/><br/>
    <Typography varient="h4"gutterBottom style={{textAlign:"center",color:"rgb(207,207,205)",fontSize:"25px",fontWeight:"bold"}}>
    Get started today for free</Typography>
    <Typography varient="h4"gutterBottom style={{textAlign:"center",color:"rgb(207,207,205)",fontSize:"15px",fontWeight:"bold"}}>
    It's simple and takes less than 5 minutes</Typography>
      </Grid>
      <Grid item  md={6}style={{marginTop:"30px"}}>
      <br/><br/>
        <Button varient="primary" style={{borderRadius:"25px",fontSize:"25px"}}>Open an account</Button>
      </Grid>
      <br/><br/><br/>
  </Grid>
  </Paper>
  <Paper style={{backgroundColor:"blue"}}>
  <Grid item container >
  <br/><br/>
  <Grid item  md={3}></Grid>
    <Grid justify="center">
    <br/><br/>
    

    <h5 style={{textAlign:"",fontWeight:"bold",color:"white"}}>Investing doesn't have to be expensive</h5>
    <br/>
    <Typography varient="h6"gutterBottom style={{textAlign:"",color:"rgb(207,207,205)",fontSize:"15px",fontWeight:"bold"}}>
    Mutual Fund Companies pay commissions to your bank, 
    <br/>broker, or distributor every single year.<br/> 
    This commission comes out of your savings, <br/>even though you never write a cheque for it.</Typography>
    <br/>
    <Typography varient="h4"gutterBottom style={{textAlign:"",color:"rgb(207,207,205)",fontSize:"15px",fontWeight:"bold"}}>
    At MobiKwik, we only invest in Direct 
    <br/>Mutual Funds for you. We make no hidden commissions -- the <br/>
    commissions you save come back to you in the form of higher returns.</Typography>
    </Grid>
    <Grid item  md={4}>
     
    
   
   
        <Avatar className={classes.imageconatiner3}>
     
     <img style={{alignItems:"center"}}src={mutualfund7}/>

      </Avatar>
     
      </Grid>
   
    </Grid>
  </Paper>
  <Paper style={{background:"white",height:"",alignItems:"center",alignContent:"center"}}>
    <Grid item container >
    <Grid item  md={3}>
      </Grid>
    <Grid item  md={3}>
      
      <Typography variant="h5" gutterBottom>
      Data analysis is complex.<br/>
We do the math and recommend funds.
      </Typography>
      <Typography varient="h6"gutterBottom style={{textAlign:"",color:"rgb(119,119,119)",fontSize:"15px"}}>
      Our sophisticated statistical algorithm uses big-data tools to crunch millions of data points with one 
      goal - to recommend the best performing funds for you.</Typography>
    <br/>
    <Button varient="primary" style={{borderRadius:"15px",fontSize:"15px"}}>View best funds</Button>
   
      </Grid>
      <Grid item >
        <img className={classes.imageconatiner6} src={mutualfund8}/>
      </Grid>
      </Grid>
  </Paper>
  <Paper style={{height:"",backgroundColor:"rgb(247,247,249)",justifyContent:"center",alignItems:"center"}}>
    <Grid item container className={classes.PaperContainer}>
    
      <Grid item style={{justifyContent:"center",alignItems:"center"}}>
        <img src={mutualfund9} className={classes.imageconatiner4}/>
      </Grid>
     
      <Typography varient="h6"gutterBottom style={{textAlign:"",color:"rgb(119,119,119)",fontSize:"15px",marginTop:"100px"}}>
      Our sophisticated statistical algorithm uses big-data tools to crunch millions of <br/>data points with one 
      goal - to recommend the best performing funds for you.</Typography>
    
    </Grid>
  </Paper>
  <Paper >
    <Grid item container spacing={2} justify="center">      
       <Grid item className={classes.PaperContainer}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={mutualfund12}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography variant="h4" gutterBottom style={{textAlign:"center"}}>
      Safe
      </Typography>
          <Typography variant="h6" color="textSecondary" component="p"style={{textAlign:"center",fontSize:"15px"}}>
          Your money never passes through our bank account — even during fund transfers. 
          MobiKwik is regulated by SEBI as a Registered Investment Adviser.


          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
      
</Grid>
       <Grid item>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={mutualfund14}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography variant="h4" gutterBottom style={{textAlign:"center"}}>
        Unbiased advice
      </Typography>
          <Typography variant="h6" color="textSecondary" component="p"style={{textAlign:"center",fontSize:"15px"}}>
          We work for you, not the Mutual Fund Company. We receive no commissions or kick-backs.


          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
      
      </Grid>
      <Grid item>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={mutualfund15}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography variant="h4" gutterBottom style={{textAlign:"center"}}>
        Bank Grade Security
      </Typography>
          <Typography variant="h6" color="textSecondary" component="p"style={{textAlign:"center",fontSize:"15px"}}>
          We deploy state of the art encryption and security 
          protocols so your sensitive personal information is safe.


          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
      
</Grid>
     
      </Grid>

      <Grid item container spacing={8} justify="center">
      
        <Grid item >
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={mutualfund16}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography variant="h4" gutterBottom style={{textAlign:"center"}}>
        Easy Account Opening
      </Typography>
          <Typography variant="h6" color="textSecondary" component="p"style={{textAlign:"center",fontSize:"15px"}}>
          No paperwork hassles. Just keep your PAN number and bank 
          account details handy to set up your account.


          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
        </Grid>

        <Grid item >
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={mutualfund17}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography variant="h4" gutterBottom style={{textAlign:"center"}}>
        Smart Notifications
      </Typography>
          <Typography variant="h6" color="textSecondary" component="p"style={{textAlign:"center",fontSize:"15px"}}>
          We notify you in advance of scheduled events like SIPs,
           so you can get up-to-date information at the right time.


          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
        </Grid>
        <Grid item >
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={mutualfund18}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography variant="h3" gutterBottom style={{textAlign:"center"}}>
        Invest Online
      </Typography>
          <Typography variant="h6" color="textSecondary" component="p"style={{textAlign:"center",fontSize:"15px"}}>
          No need for a demat account. Your investments are always 
          held in your name at the Mutual Fund Company.

          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
        </Grid>
      
      </Grid>
      <hr style={{color:"rgb(0,0,0)",borderWidth:"",width:"96%"}}></hr>
      <Grid item container justify="center" spacing={5}>
      
        <Grid item >
        <Typography variant="h5" gutterBottom style={{textAlign:"center",marginTop:"10px",fontWeight:"bolder"}}>
        36 Fund Houses
One platform
      </Typography>
          </Grid>
          <Grid item >
          <Typography variant="h6" color="textSecondary" component="p"style={{marginTop:"10px",fontSize:"15px"}}>
          We've set up partnerships with the largest Mutual Fund
           Companies to give you the freedom to choose <br/>the investment that's
            right for you. No need for multiple forms and messy paperwork. Register just once and transact with all 36 AMCs.



          </Typography>
          <Button varient="primary" style={{borderRadius:"15px",fontSize:"15px",fontweight:"bolder",marginTop:"30px"}}>View all fund houses</Button>
          </Grid>
      </Grid>
      <Grid item container style={{marginTop:"50px"}} justify="center" spacing={10}>
        
        <Grid item >
          <img style={{height:"200px",width:"200px",}}src={mutualfund19}/>
         
        </Grid>
        <Grid item >
          <img style={{height:"200px",width:"200px"}}src={mutualfund20}/>
        </Grid>
        <Grid item >
          <img style={{height:"200px",width:"200px",}}src={mutualfund21}/>
         
        </Grid>
        <Grid item >
          <img style={{height:"200px",width:"200px",}}src={mutualfund22}/>
         
        </Grid>
        <Grid item >
          <img style={{height:"200px",width:"200px",}}src={mutualfund23}/>
         
        </Grid>
      </Grid>
      <Grid item container style={{marginTop:"50px"}} justify="center" spacing={10}>
      
        <Grid item >
          <img style={{height:"200px",width:"200px",}}src={mutualfund24}/>
         
        </Grid>
        <Grid item >
          <img style={{height:"200px",width:"200px"}}src={mutualfund25}/>
        </Grid>
        <Grid item >
          <img style={{height:"200px",width:"200px",}}src={mutualfund27}/>
         
        </Grid>
        <Grid item >
          <img style={{height:"200px",width:"200px",}}src={mutualfund28}/>
         
        </Grid>
        <Grid item >
          <img style={{height:"200px",width:"200px",}}src={mutualfund29}/>
         
        </Grid>
      </Grid>
      <Grid item container style={{marginTop:"50px"}} justify="center" spacing={10}>
      
        <Grid item >
          <img style={{height:"200px",width:"200px",}}src={mutualfund30}/>
         
        </Grid>
        <Grid item >
          <img style={{height:"200px",width:"200px"}}src={mutualfund31}/>
        </Grid>
        <Grid item >
          <img style={{height:"200px",width:"200px",}}src={mutualfund32}/>
         
        </Grid>
        <Grid item >
          <img style={{height:"200px",width:"200px",}}src={mutualfund33}/>
         
        </Grid>
        <Grid item >
          <img style={{height:"200px",width:"200px",}}src={mutualfund34}/>
         
        </Grid>
      </Grid>
      <Grid item container style={{marginTop:"50px"}} justify="center" spacing={10}>
     
        <Grid item >
          <img style={{height:"200px",width:"200px",}}src={mutualfund35}/>
         
        </Grid>
        <Grid item >
          <img style={{height:"200px",width:"200px"}}src={mutualfund36}/>
        </Grid>
        <Grid item >
          <img style={{height:"200px",width:"200px",}}src={mutualfund37}/>
         
        </Grid>
        <Grid item >
          <img style={{height:"200px",width:"200px",}}src={mutualfund38}/>
         
        </Grid>
        <Grid item >
          <img style={{height:"200px",width:"200px",}}src={mutualfund39}/>
         
        </Grid>
      </Grid>
  </Paper>
  <Paper backgroundColor="rgb(247,247,247)" style={{marginTop:'100px'}}>
                 
                 <Grid item container>
      <Grid item md={6} xs={6}style={{float:"left",fontSize:"25px"}}>
       <img src={mutualfund219} className={classes.imageconatiner1}/>
      
      </Grid>
      <Grid item md={2} >
     			
       
      </Grid>
      <Grid item md={1} >
     			
       
      </Grid>
      <Grid item md={1} >
      
       
      </Grid>
      <Grid item md={1} xs={1}style={{float:"left",fontSize:"15px",fontWeight:"bolder"}}>
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
          <Typography variant="h5" gutterBottom style={{fontWeight:'bolder'}}>
          Fund Houses
          </Typography>
          
      <Typography variant="" gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      ICICI Mutual Fund | HDFC Mutual Fund | Aditya Birla Sun Life Mutual Fund | Nippon India Mutual Fund | SBI Mutual Fund |
      </Typography>
           
      <Typography  gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      UTI Mutual Fund | Kotak Mahindra Mutual Fund | Franklin Templeton Mutual Fund | DSP Mutual Fund | IDFC Mutual Fund |
      </Typography>
      <Typography  gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      BNP Paribhas Mutual Fund | Canara Robeco Mutual Fund | PGIM India Mutual Fund | Edelweiss Mutual Fund | HSBC Mutual Fund | Union Mutual Fund |
      </Typography>
      <Typography  gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      Indiabulls Mutual Fund | L&T Mutual Fund | LIC Mutual Fund | Principal Mutual Fund | IIFL Mutual Fund | Sundaram Mutual Fund |
      </Typography>
      <Typography gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      Quantum Mutual Fund | Taurus Mutual Fund | Mirae Asset Mutual Fund | Essel Mutual Fund | PPFAS Mutual Fund | Axis Mutual Fund |
      </Typography>
      <Typography  gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      IDBI Mutual Fund | Baroda Pioneer Mutual Fund | Tata Mutual Fund | JM financial Mutual Fund | Mahindra Mutual Fund | Motilal Oswal Mutual Fund | Invesco Mutual Fund
      </Typography>
      <Typography variant="h5" gutterBottom style={{fontWeight:'bolder',marginTop:"25px"}}>
          Fund Houses
          </Typography>
          <Typography gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
          Balanced | Debt | ELSS-Tax-Saving | Equity | Index | Liquid
      </Typography>
      <Typography variant="h5" gutterBottom style={{fontWeight:'bolder',marginTop:"25px"}}>
      Calculators
          </Typography>
          <Typography  gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
          Lumpsum Calculator | SIP Calculator | Direct vs Regular returns Calculator
      </Typography>
      <Typography variant="h5" gutterBottom style={{fontWeight:'bolder',marginTop:"25px"}}>
      Lumpsum
          </Typography>
          <Typography  gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
          HDFC Mutual Fund Calculator | SBI Mutual Fund Calculator | ICICI Pru Mutual Fund Calculator | Franklin Templeton Mutual Fund Calculator | Nippon India Mutual Fund calculator
           | L&T Mutual Fund Calculator |
      </Typography>
      <Typography  gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      Kotak Mutual Fund Calculator | Aditya Birla Mutual Fund Calculator | DSP Mutual Fund Calculator | Axis Mutual Fund Calculator | IDFC Mutual Fund Calculator | UTI Mutual Fund Calculator


      </Typography>
          <Typography variant="h5" gutterBottom style={{fontWeight:'bolder',marginTop:"25px"}}>
          SIP
          </Typography>
          <Typography  gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
          HDFC SIP Calculator | SBI SIP Calculator | ICICI Pru SIP Calculator | Franklin Templeton SIP Calculator | Nippon India SIP calculator | L&T SIP Calculator | Kotak SIP Calculator | 
          Aditya Birla SIP Calculator | DSP SIP
      </Typography>
      <Typography  gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      Calculator | Axis SIP Calculator | IDFC SIP Calculator | UTI SIP Calculator
      </Typography>
      <Grid item md={10} xs={10}>
      <Typography  gutterBottom style ={{marginTop:'60px',color:"rgb(189,189,189)"}}>
      Name of Investment Adviser- Harvest Fintech Private Limited | Address- 206, Natwar Chambers, 94, Nagindas Master
       Road, Fort , Mumbai. Phone – 022- 22622060 | Type of Registration- Non-Individual | Registration number- 
       INA 000004773 valid till 23.05.2021 | Principal Officer- Mr. Pradeep Bhasin | Email id- mutualfunds@mobikwik.com
       Phone- 011-61266390 | Corresponding SEBI Local Office Address - Securities and Exchange Board of India, Investment Management Department, 
      Bandra-Kurla Complex Bandra, Mumbai 400051.
      </Typography>
      </Grid>
      <Typography  gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      Investing involves risks & investments may sometimes lose value. Past performance does not guarantee future returns.
      </Typography>
      <Typography  gutterBottom style ={{marginTop:'30px',color:"rgb(189,189,189)"}}>
      © 2021 One Mobikwik System Pvt Ltd, India | All rights reserved. | 2.0.619
      </Typography>
        </Grid>
      </Grid>

                </Paper>
 
</div>
  
    )
}

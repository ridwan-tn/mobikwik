import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Mutualfund5 from './mutualfund5';
import mutualfund221 from '../assets/mutualfund221.png'
import mutualfund222 from '../assets/mutualfund222.png'
import mutualfund223 from '../assets/mutualfund223.png'
import mutualfund224 from '../assets/mutualfund224.png'
import mutualfund225 from '../assets/mutualfund225.png'
import mutualfund226 from '../assets/mutualfund226.png'
import mutualfund227 from '../assets/mutualfund227.png'
import mutualfund228 from '../assets/mutualfund228.png'
import mutualfund229 from '../assets/mutualfund229.png'
import mutualfund230 from '../assets/mutualfund230.png'
import mutualfund231 from '../assets/mutualfund231.png'
import mutualfund232 from '../assets/mutualfund232.png'
import mutualfund233 from '../assets/mutualfund233.png'
import mutualfund234 from '../assets/mutualfund234.png'
import mutualfund235 from '../assets/mutualfund235.png'
import mutualfund219 from '../assets/mutualfund219.png'
import mutualfund237 from '../assets/mutualfund237.png'
import StarIcon from '@material-ui/icons/Star';
const useStyles=makeStyles(theme=>({
  root: {
    width: '100%',
    fontSize:50,
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
  },
    imagecontainer:{
        
        [theme.breakpoints.down("md")]:{
            width:'100%',
           },
       
           [theme.breakpoints.down("sm")]:{
             paddingLeft:"1.5em",
             paddingRight:"1.5em",
             width:250,
           },
       
           [theme.breakpoints.down("xs")]:{
             paddingLeft:"1em",
             paddingRight:"1em",
             width:150,
           },
       

    },
    paper1:{
        width:375,
        height:220,
        backgroundColor:"rgb(28,111,192)",
        [theme.breakpoints.down("md")]:{
           
            width:200,
            height:100,
           },
       
           [theme.breakpoints.down("sm")]:{
             paddingLeft:"1.5em",
             paddingRight:"1.5em",
             width:200,
             height:200,
           },
       
           [theme.breakpoints.down("xs")]:{
             paddingLeft:"1em",
             paddingRight:"1em",
             width:200,
             height:200,
           },
       

    },
    link4:{
      backgroundColor:"white",
      color:"rgb(119,119,119)",
      fontWeight:"bolder",
      fontSize:"20px",
     '&:hover': {
        backgroundColor:"blue",
     },
    },
    link5:{
      backgroundColor:"white",
      color:"rgb(119,119,119)",
      fontWeight:"bolder",
      fontSize:"20px",
     '&:hover': {
        color:"blue",
     },
    },
    header1:{
        fontWeight:800,
        fontSize:"30px",
        [theme.breakpoints.down("md")]:{
          fontSize:"25px",
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
      list2:{
        fontSize:15,
    color:"black",
      },
      header2:{
        fontWeight:700,
        fontSize:"15px",
        [theme.breakpoints.down("md")]:{
          fontSize:"25px",
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
     textField :{
      fontsize:'20px',
     },
      caption2:{
       
        marginTop:"50px",
        marginLeft:"50px",
        fontSize:"20px",
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
      caption1:{
       
        color:"rgb(119,119,119)",
        [theme.breakpoints.down("md")]:{
          fontSize:"30px",
          textalign:"center",
          fontWeight:"bolder",

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
     
      }
    
}))
export default function Fundexplore(){
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title,
        fontSize: 50,
        
        color:"white",
      };
    const classes=useStyles();
    return(
    <div>
        <Grid item container style={{justifyContent:"center",alignItems:"center",marginTop:"150px"}}>
         <Grid >
         <h5 className={classes.header1}>Mutual Fund Explorer</h5>
         </Grid>
        
        </Grid>
       
        <Grid item container style={{justifyContent:"center",alignItems:"center",marginTop:"50px"}}>
         
        <Grid >
         <Typography variant="h6" className={classes.caption1}>Find any direct Mutual Fund you want 
         using the Category, family, Morningstar ratings filter.</Typography>
         </Grid>
        </Grid>
        <Grid item container style={{justifyContent:"center",alignItems:"center"}}>
          <Grid item md={2}>
          </Grid>
         <Grid item md={6}>
         <h6 className={classes.header1}  style={{textalign:"left"}}>825 Mutual Fund schemes found.

           </h6>
           
           
        </Grid>
        <Grid md={4}>
         <Paper className={classes.paper1 } style={{marginTop:"50px"}}>
         <Typography varient="" style={{color:"white"}} className={classes.caption2}>
             help me choose the perfect fund scheme
         </Typography>
         <button style={{borderRadius:"25px",fontWeight:"bolder"}} className={classes.caption2}>Launch Find Finder</button>
         </Paper>
         
         </Grid>
        </Grid>
        <Grid item container style={{justifyContent:"center",alignItems:"center",marginTop:"50px",contentSpacing:'100px'}}>
            <Grid item md={10} >
                <Typography variant="" style={{color:"rgb(119,119,119)"}}>Reset Filters  </Typography>
                </Grid>
            </Grid>
            <Grid  container  style={{justifyContent:"center",alignItems:"center",marginTop:"50px",fontSize:20}}>
            <Grid>
           <Typography variant="" className={classes.caption1}> Fund Categories</Typography>
           <Autocomplete 
            size="large"
        {...defaultProps}
        id="debug"
        debug
        renderInput={(params) => <TextField style={{width:"250px",height:"50px"}}{...params} label="Debud"
         margin="normal" />}
      />&nbsp;&nbsp;&nbsp;
           </Grid>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
           
           <Grid>
             
           <Typography variant="" className={classes.caption1}> Fund Family</Typography>
           <Autocomplete 
            size="large"
        {...defaultProps}
        id="debug"
        debug
        renderInput={(params) => <TextField style={{width:"250px",height:"50px"}}{...params} label="Debud"
         margin="normal" />}
      />&nbsp;&nbsp;&nbsp;
           </Grid>
           &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
           <Grid>
           <Typography variant="" className={classes.caption1}> Plan Options</Typography>
           <Autocomplete 
          
            size="large"
        {...defaultProps}
        id="debug"
        debug
        renderInput={(params) => <TextField style={{width:"250px",height:"50px",fontsize:"50px"}}{...params} label="Debug"
         margin="normal" />}
      />&nbsp;&nbsp;&nbsp;
           </Grid>
           &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
           <Grid>
           <Typography variant="" className={classes.caption1}> Mornigstar Ratings</Typography>
           <Autocomplete 
           style={{color:'green'}}
          
        {...defaultProps}
        id="debug"
        debug
        renderInput={(params) => <TextField  style={{color:'green'}}  {...params} placeholder=""
         margin="normal" />}
      />&nbsp;&nbsp;&nbsp;
           </Grid>
     
            </Grid>
            <Grid item container style={{justifyContent:"center",alignItems:"center",marginTop:"25px",contentSpacing:'100px'}}>
            <Grid item md={10} xs={10}>
                
                <hr style={{borderWidth:"2px",backgroundColor:"black"}}sonet/>
                
            </Grid>
            </Grid>
            <Grid item container style={{justifyContent:"center",alignItems:"center",marginTop:"25px",contentSpacing:'100px'}}>
            <Grid item md={2} xs={2} style={{aligntext:"left"}}>
            <h6 style={{fontWeight:'bolder'}}>FUND SCHEME</h6>
            
            </Grid>
            <Grid item md={2} xs={2}>
            <h6 style={{fontWeight:'bolder'}}></h6>
            
            </Grid>
            <Grid item md={1} xs={1} style={{aligntext:"left"}}>
            <h6 style={{fontWeight:'bolder'}}>NAV</h6>
            
            </Grid>
            <Grid item md={1} xs={1}>
            <h6 style={{fontWeight:'bolder'}}>CATEGORY</h6>
            
            </Grid>
            <Grid item md={2} xs={2}>
            <h6 style={{fontWeight:'bolder'}}>RETURNS  <ArrowUpwardIcon style={{fontWeight:"bolder",width:"50px",height:
          "50px"}}/></h6>
            
            </Grid>
            <Grid item md={1} xs={1}>
            <h6 style={{fontWeight:'bolder'}}>ASSET (CR) ⇅</h6>
            
            </Grid>
            <Grid item md={1} xs={1}>
            <h6 style={{fontWeight:'bolder'}}>EXPENSE RATIO (CR) ⇅</h6>
            
            </Grid>
            </Grid>
            <Grid item container style={{justifyContent:"center",alignItems:"center",marginTop:"25px",contentSpacing:'100px'}}>
            <Grid item xs={6} md={6}>
                <hr style={{borderWidth:"2px",backgroundColor:"black"}}/>
                </Grid>
                
                <Avatar style={{color:"black",fontWeight:"bolder"}}>1Y</Avatar>
                <Grid>
                    
                <hr style={{borderWidth:"2px",backgroundColor:"black",width:"25px"}}/>
                </Grid>
                <Avatar style={{backgroundColor:"black"}}>3Y</Avatar>
                <Grid>
                    
                    <hr style={{borderWidth:"2px",backgroundColor:"black",width:"25px"}}/>
                    </Grid>
                    <Avatar style={{color:"black",fontWeight:"bolder"}}>5Y</Avatar>
                    <Grid>
                    
                    <hr style={{borderWidth:"2px",backgroundColor:"black",width:"850px"}}/>
                    </Grid>
            </Grid>
            <Grid item container style={{justifyContent:"center",alignItems:"center",marginTop:"25px",contentSpacing:'100px'}}>
           <Grid item md={10} xs={10}>
            <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders" className={classes.list2} >
      <ListItem
      style={{height:"125px"}}
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          className={classes.list2}
        >
          <ListItemIcon ></ListItemIcon>
          <Grid >
          <img src={mutualfund221}/>
          </Grid>
             &nbsp; &nbsp; &nbsp; &nbsp; 
             <Grid item md={2} xs={2}>
             <Typography  variant="" style={{fontsize:"20px"}}><a href="#" > Axis Midcap Dir Gr
            
            </a><br/> <Typography ><StarIcon style={{color:"black"}}/>
                        <StarIcon style={{color:"black"}}/>
                        <StarIcon style={{color:"black"}}/>
                        <StarIcon style={{color:"black"}}/>
                        <StarIcon style={{color:"black"}}/>
              </Typography></Typography>
        </Grid>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
         <Grid item md={1} xs={1} >
         <Typography variant="">₹62.070</Typography>
        </Grid>
         <Grid item md={2} xs={2}>
         <Typography variant="">Equity<br/> <Typography style={{color:"rgb(119,119,119)"}}>Mid-Cap</Typography></Typography>
        
        </Grid>
        <Grid item xs={2} md={2}>
        <Typography variant="" style={{fontWeight:"bolder",color:"rgb(78,184,114)"}}>18.23%</Typography>
         </Grid>
         <Grid item xs={2} md={2}>
         <Typography variant="">₹10,432</Typography>
        </Grid>
        <Grid item xs={1} md={1}>

        </Grid>
        <Grid item xs={2} md={2}>
        <Typography variant="">0.50%</Typography>
         </Grid> 
        </ListItem>
 <Divider />
        <ListItem
        style={{height:"125px"}}
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          className={classes.list2}
        >
          <ListItemIcon ></ListItemIcon>
          <Grid >
          <img src={mutualfund223}/>
          </Grid>
             &nbsp; &nbsp; &nbsp; &nbsp; 
            <Grid item md={2} xs={2}>
            <Typography  variant="" style={{fontsize:"30px"}}><a href="#" > Canara Robeco Equity Taxsaver Dir Gr</a><br/> <Typography ><StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
              
              
              
              </Typography></Typography>
        </Grid>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
         <Grid item md={1} xs={1} >
         <Typography variant="">₹101.410</Typography>
        </Grid>
         <Grid item md={2} xs={2}>
         <Typography variant="">Equity<br/> <Typography style={{color:"rgb(119,119,119)"}}>Global - Other</Typography></Typography>
        
        </Grid>
        <Grid item xs={2} md={2}>
        <Typography variant="" style={{fontWeight:"bolder",color:"rgb(78,184,114)"}}>19.43%</Typography>
         </Grid>
         <Grid item xs={2} md={2}>
         <Typography variant="">₹2,044</Typography>
        </Grid>
        <Grid item xs={1} md={1}>

        </Grid>
        <Grid item xs={2} md={2}>
        <Typography variant="">1.04%</Typography>
         </Grid>
  </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
      <ListItem
      style={{height:"125px"}}
          button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
          className={classes.list2}
        >
          <ListItemIcon ></ListItemIcon>
          <Grid >
          <img src={mutualfund228}/>
          </Grid>
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Grid item md={2} xs={2}>
            <Typography  variant="" style={{fontsize:"30px"}}><a href="#" > Tata India Pharma & Healthcare Dir Gr

            
        
         
</a><br/> <Typography ><StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
              
              
              
              </Typography></Typography>
        </Grid>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
         <Grid item md={1} xs={1} >
         <Typography variant=""style={{textalign:"center"}}>₹62.070</Typography>
        </Grid>
         <Grid item md={2} xs={2}>
         <Typography variant="">Equity<br/> <Typography style={{color:"rgb(119,119,119)"}}>Small-Cap</Typography></Typography>
        
        </Grid>
        <Grid item xs={2} md={2}>
         <Typography variant="" style={{fontWeight:"bolder",color:"rgb(78,184,114)"}}>18.23%</Typography>
         </Grid>
         <Grid item xs={2} md={2}>
         <Typography variant="">₹10,432</Typography>
        </Grid>
        <Grid item xs={1} md={1}>

        </Grid>
        <Grid item xs={2} md={2}>
         <Typography variant="">0.50%</Typography>
         </Grid>
        </ListItem>
      
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
      <ListItem
      style={{height:"125px"}}
          button
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
          className={classes.list2}
        >
          <ListItemIcon ></ListItemIcon>
          <Grid >
          <img src={mutualfund226}/>
          </Grid>
             &nbsp; &nbsp;&nbsp;
            <Grid item md={2} xs={2}>
            <Typography  variant="" style={{fontsize:"30px"}}><a href="#" > Parag Parikh Flexi Cap Dir Gr


            
        
         
</a><br/> <Typography ><StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
              
              
              
              </Typography></Typography>
        </Grid>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
         <Grid item md={1} xs={1} >
         <Typography variant=""style={{textalign:"center"}}>₹42.175</Typography>
        </Grid>
         <Grid item md={2} xs={2}>
         <Typography variant="">Equity<br/> <Typography style={{color:"rgb(119,119,119)"}}>Flexi-Cap</Typography></Typography>
        
        </Grid>
        <Grid item xs={2} md={2}>
         <Typography variant="" style={{fontWeight:"bolder",color:"rgb(78,184,114)"}}>20.98%</Typography>
         </Grid>
         <Grid item xs={2} md={2}>
         <Typography variant="">₹8,182</Typography>
        </Grid>
        <Grid item xs={1} md={1}>

        </Grid>
        <Grid item xs={2} md={2}>
         <Typography variant="">0.95%</Typography>
         </Grid>
        </ListItem>
        </List>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folder">
      <ListItem
      style={{height:"125px"}}
          button
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
          className={classes.list2}
        >
          <ListItemIcon ></ListItemIcon>
          <Grid >
          <img src={mutualfund222}/>
          </Grid>
             &nbsp; &nbsp;&nbsp;&nbsp;
            <Grid item md={2} xs={2}>
            <Typography  variant="" style={{fontsize:"30px"}}><a href="#" > Mirae Asset Emerging Bluechip Dir Gr
</a><br/> <Typography ><StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
              
              
              
              </Typography></Typography>
        </Grid>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
         <Grid item md={1} xs={1} >
         <Typography variant=""style={{textalign:"center"}}>₹87.576</Typography>
        </Grid>
         <Grid item md={2} xs={2}>
         <Typography variant="">Equity<br/> <Typography style={{color:"rgb(119,119,119)"}}>Large & Mid-Cap</Typography></Typography>
        
        </Grid>
        <Grid item xs={2} md={2}>
         <Typography variant="" style={{fontWeight:"bolder",color:"rgb(78,184,114)"}}>18.53%</Typography>
         </Grid>
         <Grid item xs={2} md={2}>
         <Typography variant="">₹16,190</Typography>
        </Grid>
        <Grid item xs={1} md={1}>

        </Grid>
        <Grid item xs={2} md={2}>
         <Typography variant="">0.64%</Typography>
         </Grid>
        </ListItem>
        </List>
        <Divider/>
        <List component="nav" aria-label="secondary mailbox folder">
      <ListItem
      style={{height:"125px"}}
          button
          selected={selectedIndex === 8}
          onClick={(event) => handleListItemClick(event, 8)}
          className={classes.list2}
        >
          <ListItemIcon ></ListItemIcon>
          <Grid >
          <img src={mutualfund230}/>
          </Grid>
             &nbsp; &nbsp;&nbsp;&nbsp;
            <Grid item md={2} xs={2}>
            <Typography  variant="" style={{fontsize:"30px"}}><a href="#" > SBI Magnum Comma Dir Gr

</a><br/> <Typography ><StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
              
              
              
              </Typography></Typography>
        </Grid>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
         <Grid item md={1} xs={1} >
         <Typography variant=""style={{textalign:"center"}}>₹65.037</Typography>
        </Grid>
         <Grid item md={2} xs={2}>
         <Typography variant="">Equity<br/> <Typography style={{color:"rgb(119,119,119)"}}>Equity - Other</Typography></Typography>
        
        </Grid>
        <Grid item xs={2} md={2}>
         <Typography variant="" style={{fontWeight:"bolder",color:"rgb(78,184,114)"}}>17.08%</Typography>
         </Grid>
         <Grid item xs={2} md={2}>
         <Typography variant="">₹320</Typography>
        </Grid>
        <Grid item xs={1} md={1}>

        </Grid>
        <Grid item xs={2} md={2}>
         <Typography variant="">2.01%</Typography>
         </Grid>
        </ListItem>
        </List>
        <Divider/>
        <List component="nav" aria-label="secondary mailbox folder">
      <ListItem
      style={{height:"125px"}}
          button
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
          className={classes.list2}
        >
          <ListItemIcon ></ListItemIcon>
          <Grid >
          <img src={mutualfund237}/>
          </Grid>
             &nbsp; &nbsp;&nbsp;&nbsp;
            <Grid item md={2} xs={2}>
            <Typography  variant="" style={{fontsize:"30px"}}><a href="#" > Edelweiss US Value Equity Offshore Dr Gr


</a><br/> <Typography ><StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
            <StarIcon style={{color:"black"}}/>
              
              
              
              </Typography></Typography>
        </Grid>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
         <Grid item md={1} xs={1} >
         <Typography variant=""style={{textalign:"center"}}>₹24.048</Typography>
        </Grid>
         <Grid item md={2} xs={2}>
         <Typography variant="">Equity<br/> <Typography style={{color:"rgb(119,119,119)"}}>Global - Other</Typography></Typography>
        
        </Grid>
        <Grid item xs={2} md={2}>
         <Typography variant="" style={{fontWeight:"bolder",color:"rgb(78,184,114)"}}>17.45%</Typography>
         </Grid>
         <Grid item xs={2} md={2}>
         <Typography variant="">₹59</Typography>
        </Grid>
        <Grid item xs={1} md={1}>

        </Grid>
        <Grid item xs={2} md={2}>
         <Typography variant="">1.52%</Typography>
         </Grid>
        </ListItem>
        </List>
      </List>
      
    </div>
    </Grid>
    </Grid>
    <Grid item container style={{justifyContent:"center",alignItems:"center",marginTop:"50px"}}>
         <Grid >
        <Avatar className={classes.link4}>1</Avatar>
        
         </Grid>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Avatar className={classes.link4}>2</Avatar> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Avatar className={classes.link4}>3</Avatar>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Avatar className={classes.link4}>4</Avatar> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Avatar className={classes.link4}>5</Avatar> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h5 className={classes.link5}>Next  </h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h5 className={classes.link5}>Last  </h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Grid>
        <Paper style={{marginTop:'100px',alignItems:"center",backgroundColor:"rgb(247,247,247)" ,justifyContent:"center"}}>
                 
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
          <Typography className={classes.header2}>
          Fund Houses
          </Typography>
          <br/>
          <br/>
      <Typography variant="" className={classes.caption1}>
      ICICI Mutual Fund | HDFC Mutual Fund | Aditya Birla Sun Life Mutual Fund | Nippon India Mutual Fund | SBI Mutual Fund |
      </Typography>
      <br/> <br/>
      <Typography variant="" className={classes.caption1}>
      UTI Mutual Fund | Kotak Mahindra Mutual Fund | Franklin Templeton Mutual Fund | DSP Mutual Fund | IDFC Mutual Fund |
      </Typography>
      <br/> <br/>
      <Typography variant="" className={classes.caption1}>
      BNP Paribhas Mutual Fund | Canara Robeco Mutual Fund | PGIM India Mutual Fund | Edelweiss Mutual Fund | HSBC Mutual Fund | Union Mutual Fund |
      </Typography>
      <br/> <br/>
      <Typography variant="" className={classes.caption1}>
      Indiabulls Mutual Fund | L&T Mutual Fund | LIC Mutual Fund | Principal Mutual Fund | IIFL Mutual Fund | Sundaram Mutual Fund |
      </Typography>
      <br/> <br/>
      <Typography variant="" className={classes.caption1}>
      Quantum Mutual Fund | Taurus Mutual Fund | Mirae Asset Mutual Fund | Essel Mutual Fund | PPFAS Mutual Fund | Axis Mutual Fund |
      </Typography>
      <br/>
      <Typography variant="" className={classes.caption1}>
      IDBI Mutual Fund | Baroda Pioneer Mutual Fund | Tata Mutual Fund | JM financial Mutual Fund | Mahindra Mutual Fund | Motilal Oswal Mutual Fund | Invesco Mutual Fund
      </Typography>
      <br/>
      <Typography variant="" className={classes.header2}>
          Fund categories
          </Typography>
          <br/>
          <Typography variant="" className={classes.caption1}>
          Balanced | Debt | ELSS-Tax-Saving | Equity | Index | Liquid
      </Typography>
      <br/>
      <Typography variant="h4" className={classes.header2}>
      Calculators
          </Typography>
          <br/>
          <Typography variant="" className={classes.caption1}>
          Lumpsum Calculator | SIP Calculator | Direct vs Regular returns Calculator
      </Typography>
      <Typography variant="" className={classes.header2}>
      Lumpsum
          </Typography>
          <Typography variant="" className={classes.caption1}>
          HDFC Mutual Fund Calculator | SBI Mutual Fund Calculator | ICICI Pru Mutual Fund Calculator | Franklin Templeton Mutual Fund Calculator | Nippon India Mutual Fund calculator
           | L&T Mutual Fund Calculator |
      </Typography>
      <Typography variant="" className={classes.caption1}>
      Kotak Mutual Fund Calculator | Aditya Birla Mutual Fund Calculator | DSP Mutual Fund Calculator | Axis Mutual Fund Calculator | IDFC Mutual Fund Calculator | UTI Mutual Fund Calculator


      </Typography>
          <Typography variant="h4" className={classes.header2}>
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
        </div>
    )
}
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },]
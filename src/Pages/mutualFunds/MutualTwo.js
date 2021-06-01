import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import Mutualfund1 from './mutualfund1'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MfundFinder from './MfundFinder'
import Mfundcompare from './Mfundcompare'
import{
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import  Bestmfund from './Bestmutualfund'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    
  },
  title: {
    flexGrow: 1,
    color:"blue",
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: "100%"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    width:"100%",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function PersistentDrawerRight() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
        <BrowserRouter>
      <CssBaseline />
    
      <AppBar
      style={{backgroundColor:"white"}}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
          
          </Typography>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
        <Switch >
        
         
       
        <Route path="/Best"><Bestmfund/></Route>
        <Route path="/Compare"><Mfundcompare/></Route>
        <Route path="/Fund"><MfundFinder/></Route>
        <Route path="/">
        <Mutualfund1/>
          </Route>
        </Switch>
        
        </Typography>
        <Typography paragraph>
        
        </Typography>
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
       
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        <AccordionDetails>
        <li>
              <Link to="/"></Link>
            </li>
     </AccordionDetails>
        <AccordionDetails>
        <Accordion style={{width:"100%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          onClose={handleClose1}
        >
          
          <Typography className={classes.heading} >MutualFund</Typography>
        </AccordionSummary>
        <AccordionDetails onClick={handleDrawerClose}>
          
        <ListItem button  >
      <h6><Link style={{color:"black"}}to="/Best">Best Mutual funds</Link></h6>
      
      
        </ListItem>
        </AccordionDetails>
        <AccordionDetails onClick={handleDrawerClose}>
        <ListItem button  >
      <h6><Link style={{color:"black"}}to="/Compare" style={{color:"rgb(119,119,119)"}}> Compare mutual funds</Link></h6>
      
      
        </ListItem>
        </AccordionDetails>
        <AccordionDetails onClick={handleDrawerClose}>
        <ListItem button  >
      <h6><Link style={{color:"black"}}to="/Fund"> Fund Finder</Link></h6>
      
      
        </ListItem>
        </AccordionDetails>
      </Accordion>
        </AccordionDetails>
        <AccordionDetails>
        <Accordion style={{width:"100%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} style={{fontWeight:"bolder"}}>Calculators</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="caption">
            SIP Calculators
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography variant="caption">
            Lumpsum Calculator
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography variant="caption">
            Direct Vs Regular Calculator
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography variant="caption">
           FundHouse Calculator
          </Typography>
        </AccordionDetails>
      </Accordion>
        </AccordionDetails>
     <AccordionDetails>
         Calculator
     </AccordionDetails>
     <AccordionDetails>
         Gold
     </AccordionDetails>
     <AccordionDetails>
        Blog
     </AccordionDetails>
     <AccordionDetails>
        Help
     </AccordionDetails>
     <AccordionDetails style={{color:"blue",fontWeight:"bolder"}}>
        Sign in
     </AccordionDetails>
     <AccordionDetails style={{color:"blue"}}>
       <button style={{color:"blue",borderRadius:"20px",backgroundColor:"white",
       borderColor:"rgb(1,115,207)",borderWidth:"3px",fontWeight:"bolder"}} onClick={handleClose1}> Create an account</button>
     </AccordionDetails>
      
        </List>
        <Divider />
                <ListItem button  >
      <h6><Link style={{color:"black"}}to="/Best">What are mutual funds?</Link></h6>
      
      
        </ListItem>
        <ListItem button ></ListItem>
        
       
      </Drawer>
      </BrowserRouter>
    </div>
  );
}
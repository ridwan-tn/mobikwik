import React, { Component, useState } from "react";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Tooltip from "@material-ui/core/Tooltip";
import Paper from "@material-ui/core/Paper";
import mobikwik from "../assets/mobikwik.webp";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Tabs from "@material-ui/core/Tabs";
import Avatar from "@material-ui/core/Avatar";
import Tab from "@material-ui/core/Tab";
import Mutualfund5 from "./mutualfund5";
import Bestmfund from "./Bestmutualfund";
import Fundexplore from "./Mfundexplorer";
import MfundFinder from "./MfundFinder";
import Mfundcompare from "./Mfundcompare";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Mutualfund1 from "./mutualfund1";
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  media: {
    height: 100,
    width: 200,

    [theme.breakpoints.down("sm")]: {
      height: 75,
      width: 150,
    },
  },
  menuicon1: {
    color: "white",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      color: "black",
      display: "flex",
      marginLeft: "100px",
    },
  },
  media1: {
    height: 100,
    width: 200,

    [theme.breakpoints.down("sm")]: {
      height: 75,
      width: 150,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    color: "white",
  },
  tabContainer: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  Content: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "justify",
    fontSize: "1.2em",
    fontWeight: 400,
    lineHeight: 1,
    width: "100%",
    color: "white",
    paddingLeft: "3em",
    paddingRight: "3em",
    paddingTop: "2em",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      paddingLeft: "1em",
      paddingRight: "1em",
    },
  },

  paper: {
    margin: "2em",
    width: "100%",
    height: "500px",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: "4px",
  },

  paperContainer: {
    backgroundColor: "white",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  tabs: {
    borderRadius: "4px",
    backgroundColor: "white",
    color: "black",
    width: "750%",
    indicator: {
      color: "white",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  button1: {
    borderRadius: "25px",
    borderColor: "blue",
    borderWidth: "5px",
    fontSize: "15px",
    color: "blue",
    backgroundColor: "white",
  },
  tabpanel1: {
    margin: "1.5em",
    backgroundColor: "green",
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    width: "75%",
    height: "150px",
  },
}));
const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "rgb(0,115,207)",
    height: "",
  },
})(Tabs);
const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#FFFFF",
    fontSize: "20px",
    minWidth: 85,
    fontWeight: 50,
    columnSpan: 20,
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#40a9ff",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);
const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  style: { width: "7rem", height: "2rem" },
  borderColor: "text.primary",
};
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
export default function MutualOne() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(0);
  const preventDefault = (event) => event.preventDefault();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handle = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const longText = `
  Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
  Praesent non nunc mollis, fermentum neque at, semper arcu.
  Nullam eget est sed sem iaculis gravida eget vitae justo.
  `;
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    ></Menu>
  );

  return (
    <div className={classes.grow}>
      <BrowserRouter>
        <AppBar style={{ backgroundColor: "white" }}>
          <Grid item container>
            <Grid item md={2} xs={2}>
              <Card className={classes.media1}>
                <CardActionArea>
                  <CardMedia className={classes.media} image={mobikwik} />
                </CardActionArea>
              </Card>
            </Grid>
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                className={classes.title}
              ></Typography>
              <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}
              >
                <MenuIcon className={classes.menuicon1} />
              </IconButton>
            </Toolbar>

            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeader} />
              <Typography paragraph></Typography>
              <Typography paragraph></Typography>
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
                  {theme.direction === "rtl" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </div>
              <Divider />
              <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                  (text, index) => (
                    <ListItem button key={text} onClick={handleDrawerClose}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>

                      <ListItemText primary={text} />
                    </ListItem>
                  )
                )}
              </List>
              <Divider />
              <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
            <Grid item md={4} xs={4}>
              <Tabs
                className={classes.tabs}
                aria-label="simple tabs example"
                style={{ fontSize: "" }}
                value={value}
                onChange={handleChange}
                variant="scrollable"
                width=""
                scrollButtons="on"
                indicatorColor="primary"
                textColor="white"
                style={{ fontSize: "", fontweight: "bolder" }}
                backgroundColor="white"
                aria-label="scrollable force tabs example"
              >
                <AntTabs
                  value={value}
                  onChange={handleChange}
                  aria-label="ant example"
                  style={{ backgroundColor: "white" }}
                >
                  <AntTab label="Home" style={{}} {...a11yProps(0)} />
                </AntTabs>

                <Tooltip
                  title={
                    <div>
                      <List
                        component="nav"
                        aria-label="secondary mailbox folders"
                        style={{
                          width: "200px",
                          maxWidth: "500px",
                          backgroundColor: "rgb(245,247,248)",
                          color: "black",
                        }}
                      >
                        <ListItem button>
                          <h6>
                            <Link style={{ color: "black" }} to="/Contact">
                              What are mutual funds?
                            </Link>
                          </h6>
                        </ListItem>
                        <ListItem button>
                          <h6>
                            <Link style={{ color: "black" }} to="/Best">
                              Best Mutual Funds
                            </Link>
                          </h6>
                        </ListItem>

                        <ListItem button>
                          <h6>
                            <Link style={{ color: "black" }} to="/FundFinder">
                              Fund Finder
                            </Link>
                          </h6>
                        </ListItem>

                        <ListItem button>
                          <h6>
                            <Link style={{ color: "black" }} to="/FundExplorer">
                              Fund Explorer
                            </Link>
                          </h6>
                        </ListItem>

                        <ListItem button>
                          <h6>
                            <Link
                              style={{ color: "black" }}
                              to="/CompareMutual"
                            >
                              Compare Mutual Funds
                            </Link>
                          </h6>
                        </ListItem>
                        <ListItem button>
                          <h6>
                            <Link style={{ color: "black" }} to="/About">
                              Resources
                            </Link>
                          </h6>
                        </ListItem>
                      </List>
                    </div>
                  }
                  interactive
                >
                  <AntTab label="Mutual Funds" style={{}} />
                </Tooltip>
                <Tooltip
                  title={
                    <div>
                      <List
                        component="nav"
                        aria-label="secondary mailbox folders"
                        style={{
                          width: "150px",
                          maxWidth: "360px",
                          backgroundColor: "rgb(245,247,248)",
                          color: "black",
                        }}
                      >
                        <ListItem button>
                          <ListItemText primary="Sip calculator" />
                        </ListItem>
                        <ListItemLink href="#simple-list">
                          <ListItemText primary="Lampsum Calculator" />
                        </ListItemLink>

                        <ListItem button>
                          <ListItemText primary="Direct VS Regular Calculator" />
                        </ListItem>
                        <ListItemLink href="#simple-list">
                          <ListItemText primary="Fund House Calculator" />
                        </ListItemLink>
                      </List>
                    </div>
                  }
                  interactive
                >
                  <AntTab label="Calculators" style={{ fontSize: "20px" }} />
                </Tooltip>
                <AntTab label="Gold" style={{ fontSize: "20px" }} />
                <AntTab label="Help" style={{ fontSize: "20px" }} />
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search Mutual Funds"
                    style={{ fontSize: "15px", fontStyle: "" }}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
                <AntTab label="Sign In" style={{ fontSize: "10px" }} />
                <button className={classes.button1}>Open an account</button>
              </Tabs>
            </Grid>
          </Grid>
        </AppBar>

        <TabPanel value={value} index={0}>
          <Mutualfund1 />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Switch>
            <Route path="/Best">
              <Bestmfund />
            </Route>
            <Route path="/Contact">
              <Mutualfund5 />
            </Route>
            <Route path="/FundFinder">
              <MfundFinder />
            </Route>
            <Route path="/FundExplorer">
              <Fundexplore />
            </Route>
            <Route path="/CompareMutual">
              <Mfundcompare />
            </Route>
          </Switch>
        </TabPanel>
        {renderMobileMenu}
        {renderMenu}
      </BrowserRouter>
    </div>
  );
}

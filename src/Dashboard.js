import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TableBody from '@material-ui/core/TableBody';
import Snackbar from '@material-ui/core/Snackbar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {
  ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Slider from "@material-ui/core/Slider";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
// import Chart from "./../elements/Chart";
// import Deposits from "./../elements/Deposits";
import TopMenu from "./Appbar.js";
// import StockCards from "../elements/StockCards";
// import PieCharts from "../elements/PieChart";
import { Button } from "@material-ui/core";
//import Skeleton from '@material-ui/lab/Skeleton';

import "./Dashboard.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Aryan Nayak
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  triangle: {
    color: "#219653",
    fontSize: "min(6vw, 21px)",
    transform: "rotate(270deg)",
    [theme.breakpoints.down("md")]: {
      fontSize: "min(10vw, 91px)",
    },
  },
  greenElement: {
    color: "#219653",

    // justifyContent: "right",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    // overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  headerGraph: {
    height: 500,
    width: "800px",
  },
  headerGraph2: {
    height: 600,
    width: "800px",
  },
  cardRow: {
    justifyContent: "space-between+",
  },
  headingContext: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "1.4rem",
  },
}));
function valuetext(value) {
  return `${value}°C`;
}

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Open', "11,353.90","Day Low", "11,353.90"),
  createData('Previous Close', "11,353.90","52 Week High", "11,353.90"),
  createData('Day High', "11,353.90", "52 Week Low","11,353.90"),

];
const data = [
  {
    name: '10 Jan', uv: 590, pv: 800, amt: 1400,
  },
  {
    name: '10 May', uv: 868, pv: 967, amt: 1506,
  },
  {
    name: '10 June', uv: 1397, pv: 1098, amt: 989,
  },
  {
    name: '10 July', uv: 1480, pv: 1200, amt: 1228,
  },
  {
    name: '10 August', uv: 1520, pv: 1108, amt: 1100,
  },
  {
    name: 'Page F', uv: 1400, pv: 680, amt: 1700,
  },
];

const CustomizedDot = (props) => {
  const { cx, cy, value } = props;

  if (value > 2500) {
    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill="green"
        viewBox="0 0 1024 1024"
      >
        <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
      </svg>
    );
  }

  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={20}
      height={20}
      fill="red"
      viewBox="0 0 1024 1024"
    >
      <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
    </svg>
  );
};

const options = ['NSE', 'BSE'];
export default function Dashboard() {
  const classes = useStyles();
  const anchorRef = React.useRef(null);
   const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [open, setOpen] = React.useState(false);
   const handleClick2 = () => {
     console.info(`You clicked ${options[selectedIndex]}`);
   };

   const handleMenuItemClick = (event, index) => {
     setSelectedIndex(index);
     setOpen(false);
   };

   const handleToggle = () => {
     setOpen((prevOpen) => !prevOpen);
   };

   const handleClose2 = (event) => {
     if (anchorRef.current && anchorRef.current.contains(event.target)) {
       return;
     }

     setOpen(false);
   };


  const [state, setState] = React.useState({
   open: false,
   vertical: 'top',
   horizontal: 'right',
 });

 const { vertical, horizontal} = state;

 const handleClick = (newState) => () => {
   setState({ open: true, ...newState });
 };

 const handleClose = () => {
   setState({ ...state, open: false });
 };

 const buttons = (
   <React.Fragment>

     <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}></Button>

   </React.Fragment>
 );

  const greenlarge = clsx(classes.greenElement, classes.largetext);
  const greentext = clsx(classes.greenElement, classes.text);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeaderGraph = clsx(classes.paper, classes.headerGraph);
  const fixedHeaderGraph2 = clsx(classes.paper, classes.headerGraph2);
  const [tabValue, setTabValue] = React.useState(1);
const handleChangeTab = (event, newValue) => {
  setTabValue(newValue);
};
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <TopMenu className={classes.toolbar} />
      </AppBar>




      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {/*  */}


        <Container
          className={classes.container}
          style={{
            display: "block",
            position: "relative",
            left: "200px",
            width: "1200px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={18} md={8} lg={6}>
              <Paper
                className={fixedHeaderGraph}
                style={{display:"flex",flexDirection:"column"}}
              >

              <Grid container direction="column" alignItems="start"  style={{ display: "flex", alignItems: "start" }}>
                   <Grid item xs={12}>
                     <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                     <Button onClick={handleClick2}>{options[selectedIndex]}</Button>
                       <Button
                         color="primary"
                         size="small"
                         aria-controls={open ? 'split-button-menu' : undefined}
                         aria-expanded={open ? 'true' : undefined}
                         aria-label="select merge strategy"
                         aria-haspopup="menu"
                         onClick={handleToggle}
                       >
                         <ArrowDropDownIcon />
                       </Button>
                     </ButtonGroup>
                     <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                       {({ TransitionProps, placement }) => (
                         <Grow
                           {...TransitionProps}
                           style={{
                             transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                           }}
                         >
                           <Paper>
                             <ClickAwayListener onClickAway={handleClose2}>
                               <MenuList id="split-button-menu">
                                 {options.map((option, index) => (
                                   <MenuItem
                                     key={option}
                                     disabled={index === 2}
                                     selected={index === selectedIndex}
                                     onClick={(event) => handleMenuItemClick(event, index)}
                                   >
                                     {option}
                                   </MenuItem>
                                 ))}
                               </MenuList>
                             </ClickAwayListener>
                           </Paper>
                         </Grow>
                       )}
                     </Popper>
                   </Grid>
                 </Grid>
                <Typography style={{ display: "flex", alignItems: "start" }}>
                  <h1>NIFTY 50</h1>
                </Typography>
                <Typography
                  component="p"
                  variant="h4"
                  className={greentext}
                  style={{ display: "flex", alignItems: "start" }}
                >
                  ₹10,000
                </Typography>
                <Typography className={greenlarge} variant="h6" component="h6" style={{ display: "flex", alignItems: "start" }}>
                  <PlayArrowIcon className={classes.triangle} />
                  23.13(0.21%)
                </Typography>
                <Typography style={{ display: "flex", alignItems: "start" }}><h6>As on 14 August, 2020 </h6>
              </Typography>
                <div style={{display:"flex"}}>
                <Typography id="discrete-slider-small-steps" gutterBottom   style={{ display: "flex", alignItems: "start", paddingRight:"20px"}}>
                Day Range
                </Typography>
                <Slider
                  defaultValue={0.00000005}
                  getAriaValueText={valuetext}
                  style={{ display: "flex", alignItems: "flex-end", width:"300px"}}
                  aria-labelledby="discrete-slider-small-steps"
                  step={100}
                  marks
                  min={0}
                  max={1000}
                  valueLabelDisplay="auto"
                />
                <Typography id="discrete-slider-small-steps" gutterBottom style={{ display: "flex", alignItems: "end"}}>
                  52 week Range
                </Typography>
                <Slider
                  defaultValue={0.00000005}
                  style={{ display: "flex", alignItems: "start", width:"300px"}}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider-small-steps"
                  step={100}
                  marks
                  min={0}
                  max={1000}
                  valueLabelDisplay="auto"
                />
                </div>

                <div>
                <Typography style={{ display: "flex", alignItems: "start", width:"300px", paddingRight:"20px"}}>Overview</Typography>
                <TableContainer component={Paper}>

                     <Table className={classes.table} size="small" aria-label="a dense table">

                       <TableBody>
                         {rows.map((row) => (
                           <TableRow key={row.name}>
                             <TableCell component="th" scope="row">
                               {row.name}
                             </TableCell>
                             <TableCell align="right">{row.calories}</TableCell>
                             <TableCell align="right">{row.fat}</TableCell>
                             <TableCell align="right">{row.carbs}</TableCell>
                             <TableCell align="right">{row.protein}</TableCell>
                           </TableRow>
                         ))}
                       </TableBody>
                     </Table>
                   </TableContainer>
                </div>



                <Box className={classes.container}>



                  <div class="top-container"></div>

                  <div className={classes.bottomContainer}>
                    <Box className={classes.increment}></Box>
                  </div>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="lg" className={classes.container}   style={{
            display: "block",
            position: "relative",
            left: "200px",
            width: "1200px",
          }}>
      <div>
      <Paper
        className={fixedHeaderGraph2}
        style={{display:"flex",flexDirection:"column"}}
      >

                    <Grid container direction="column" alignItems="start"  style={{ display: "flex", alignItems: "start" }}>
                         <Grid item xs={12}>
                           <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                           <Button onClick={handleClick2}>{options[selectedIndex]}</Button>
                             <Button
                               color="primary"
                               size="small"
                               aria-controls={open ? 'split-button-menu' : undefined}
                               aria-expanded={open ? 'true' : undefined}
                               aria-label="select merge strategy"
                               aria-haspopup="menu"
                               onClick={handleToggle}
                             >
                               <ArrowDropDownIcon />
                             </Button>
                           </ButtonGroup>
                           <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                             {({ TransitionProps, placement }) => (
                               <Grow
                                 {...TransitionProps}
                                 style={{
                                   transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                 }}
                               >
                                 <Paper>
                                   <ClickAwayListener onClickAway={handleClose2}>
                                     <MenuList id="split-button-menu">
                                       {options.map((option, index) => (
                                         <MenuItem
                                           key={option}
                                           disabled={index === 2}
                                           selected={index === selectedIndex}
                                           onClick={(event) => handleMenuItemClick(event, index)}
                                         >
                                           {option}
                                         </MenuItem>
                                       ))}
                                     </MenuList>
                                   </ClickAwayListener>
                                 </Paper>
                               </Grow>
                             )}
                           </Popper>
                         </Grid>
                       </Grid>

      <h1>CHARTS</h1>
      <Tabs
            classes={{
              root: classes.tabsRoot,
            }}
            value={tabValue}
            onChange={handleChangeTab}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab classes={{ root: classes.tab }} label="1D" />
            <Tab classes={{ root: classes.tab }} label="1 Week" />
            <Tab classes={{ root: classes.tab }} label="1 Month" />
            <Tab classes={{ root: classes.tab }} label="1 Year" />
          </Tabs>
      <ResponsiveContainer>
    <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20, right: 20, bottom: 20, left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
  </ResponsiveContainer>
          </Paper>
          </div>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>


        {buttons}
        <Snackbar
             anchorOrigin={{ vertical, horizontal }}
             open={open}
             onClose={handleClose}
             message=<div>
             <div><h2>NIFTY 50
             </h2>
             <h1>
             11,3250.10
             </h1>
             </div>

             <div style={{display:"contents"}}>
             <h5>
             Previous close:
                   11,3150.10
                  </h5>

             </div>
             </div>

             key={vertical + horizontal}
           />




      </main>

    </div>
  );
}

import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logo from './logo.png'
import clsx from "clsx";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://innventory.co" target="_blank">
      Aryan Nayak
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  titleText: {
    marginTop: theme.spacing(4),
    display:"flex",
    flexDirection:"column",
    alignItems:"center"

  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(4),
    flexBasis: "25%",
    flexGrow: "0",
 },input:{
     display:"flex"
  },

  textHeading:{
    marginTop:"10px",
     fontSize: "18px",
   lineHeight: "21px",
    whiteSpace:"wrap",
    display:"flex"
  },
  googleLogin:{
    width: "30px",
  height: "31px",
  backgroundColor:"white"
  },

  login:{
    backgroundColor:"#2D9CDB",
    color:"white"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),

    width: "262px",
    height: "54px",
  },
}));

function SignIn() {
  const classes = useStyles();
  const loginButton = clsx(classes.login, classes.submit);

  return (
    <Container component="main" maxWidth="xs" style= {{backgroundColor: "#f2f1f1" }}>
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logo} alt="Logo" />
        <div className={classes.titleText}>
          <div>
          <Typography className={classes.textHeading} component="h1" variant="h5">
          Manage your savings effectively than traditional methods!
          </Typography>
          </div>

          <form className={classes.form} noValidate>
          <Grid   direction="column">
          <Grid item >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus

            />
              </Grid>
              <Grid item>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"

            />
              </Grid>
              </Grid>
            <FormControlLabel
              className={classes.checkBox}
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

            <Button
              type="submit"
              className={loginButton}
              variant="contained"
              href="/"
            >
              Login
            </Button>

            <Button variant="outlined" className={classes.submit} color="primary" href="https://mail.google.com/mail/u/0/">
            <img className={classes.googleLogin} src='data:image/jpeg;base64,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'/>
                 Use Google Account
             </Button>
             </div>
            <Grid container>
              <Grid item xs>
                <Link href="/forgotpassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs>
                <Link href="/signin" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export { Copyright };

export default SignIn;

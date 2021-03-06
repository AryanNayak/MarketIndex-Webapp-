import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logo from './logo.png'

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
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },topText:{
    fontSize: "18px",
    lineHeight: "21px",
     whiteSpace:"nowrap"
  },
  loginButton:{
    margin: theme.spacing(3, 0, 2),
    width: "262px",
    height: "54px",
    backgroundColor:"#2D9CDB",
    color:"white"
  }
}));

function ForgotPassword() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logo} alt="Logo" />
        <div className={classes.titleText}>
          <Typography className={classes.topText} component="h1" variant="h5">
            Reset Your Password
          </Typography>
          <form className={classes.form} noValidate>
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
              // focused="true"
            />

            <Button
              type="submit"

              variant="contained"

              className={classes.loginButton}
            >
              Send Reset Link
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/signin" variant="body2">
                  {"Want to Login?"}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
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

export default ForgotPassword;

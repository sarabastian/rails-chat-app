import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [patientQ, setPatientQ] = useState(false);
  const [pPQ, setPPQ] = useState(false);
  const history = useHistory();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePatientQ = () => {
    setPatientQ(true);
  };
  const handlePPQ = () => {
    setPPQ(true);
  };

  const name = `${firstName} ${lastName}`;

  const handleSubmit = (e) => {
    // console.log("working");
    e.preventDefault();

    fetch("http://localhost:3000/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
          full_name: name,
          patient: patientQ,
          patient_partner: pPQ,
        },
      }),
    })
      .then((response) => response.json())

      .then((data) => {
        console.log(data.user_info);
        console.log(data);
        localStorage.setItem("auth_key", data["auth_key"]);
        props.handleLogin();
        history.push("/login");
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleFirstName}
                autoComplete="fname"
                name="firstName"
                value={firstName}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleLastName}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleUsername}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Username"
                name="username"
                value={username}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handlePassword}
                variant="outlined"
                required
                fullWidth
                name="password"
                value={password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    onClick={handlePatientQ}
                    value={patientQ}
                    color="primary"
                  />
                }
                label="I am a Patient"
              />
              <FormControlLabel
                control={
                  <Checkbox onClick={handlePPQ} value={pPQ} color="primary" />
                }
                label="I am a PatientPartner"
              />
            </Grid>
          </Grid>
          <Button
            onClick={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

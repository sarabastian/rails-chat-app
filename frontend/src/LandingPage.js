import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                For Patients
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/login">
                <Button size="small">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button size="small">Sign Up</Button>
              </Link>
            </CardActions>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                For PatientPartners
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/login">
                <Button size="small">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button size="small">Sign Up</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;

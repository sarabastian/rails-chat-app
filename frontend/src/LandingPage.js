import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 500,
    width: 500,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid container justifyContent="center">
        <Box mx="auto" p={8}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="h2">
                Welcome to PatientPartner!
              </Typography>
            </CardContent>
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default LandingPage;

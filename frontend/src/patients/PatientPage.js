import React, { useEffect } from "react";
import PatientPartnerCard from "./PatientPartnerCard";
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    justifyContent: "center",
  },

  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const PatientPage = () => {
  const classes = useStyles();

  const [users, setAllUsers] = React.useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/users")
      .then((r) => r.json())
      .then((users) => setAllUsers(users));
  }, []);
  console.log(users);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Available PatientPartners
          </Typography>
          <Link to="/logout">
            <Button color="inherit">Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>
      {users.map((user) =>
        user.patient_partner ? (
          <Grid container className={classes.root} spacing={2}>
            <PatientPartnerCard key={user.id} user={user} />
          </Grid>
        ) : null
      )}
    </div>
  );
};

export default PatientPage;

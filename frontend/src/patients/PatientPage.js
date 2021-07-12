import React, { useEffect } from "react";
import PatientPartnerCard from "./PatientPartnerCard";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import axios from "axios";

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
}));

const PatientPage = () => {
  const classes = useStyles();
  const [users, setAllUsers] = React.useState([]);
  const [click, setClick] = React.useState(false);
  const handleClick = () => {
    setClick(!click);
    fetch("http://localhost:3000/api/v1/users")
      .then((r) => r.json())
      .then((data) => setAllUsers(data));
  };

  async function getUsers() {
    const URL = "http://localhost:3000/api/v1/users";
    const { data } = await axios.get(URL);
    return data;
  }
  useEffect(() => {
    (async () => {
      const result = await getUsers();
      setAllUsers(result);
    })();
  }, []);

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
          <Typography variant="h6" className={classes.title}></Typography>
          <Link to="/logout">
            <Button color="white">Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Button onClick={handleClick}>See Available PatientPartners</Button>
      {click
        ? users.map((user) =>
            user.patient_partner ? (
              <PatientPartnerCard key={user.id} user={user} />
            ) : null
          )
        : null}
    </div>
  );
};

export default PatientPage;

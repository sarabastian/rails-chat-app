import React, { useEffect } from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  List,
  ListItem,
} from "@material-ui/core";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",

    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    justifyContent: "center",
  },
}));

const PatientPartnerPage = () => {
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/users/${parseInt(localStorage.token)}`)
      .then((r) => r.json())
      .then((user) => setCurrentUser(user));
  }, []);

  const [currentUser, setCurrentUser] = React.useState({});
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    handleMessages();
  };
  const [conversations, setReceivedConversations] = React.useState([]);
  const handleMessages = () => {
    fetch(`http://localhost:3000/api/v1/users/${parseInt(localStorage.token)}`)
      .then((r) => r.json())
      .then((data) => setReceivedConversations(data.received_conversations));
  };

  console.log(conversations);
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
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
    </div>
  );
};

export default PatientPartnerPage;

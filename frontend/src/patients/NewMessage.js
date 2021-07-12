import React, { useEffect } from "react";
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
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
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

const NewMessage = () => {
  const classes = useStyles();
  const data = useLocation();
  const patientPartner = data.state.user;
  const currentUser = data.state.currentUser;
  const [body, setBody] = React.useState("");

  const history = useHistory();

  const handleBody = (e) => {
    setBody(e.target.value);
  };
  const [conversation, setNewConversation] = React.useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/conversations", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        sender_id: currentUser.id,
        receiver_id: patientPartner.id,
      }),
    })
      .then((r) => r.json())
      .then((data) => setNewConversation(data));
  }, []);
  const newMessage = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/api/v1/messages", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        body: body,
        conversation_id: conversation.id,
        user_id: currentUser.id,
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
    history.push({ pathname: "/patient-home" });
  };
  return (
    <>
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
            New Message
          </Typography>
          <Link to="/logout">
            <Button color="inherit">Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <form
        onSubmit={newMessage}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-read-only-input"
          label="To"
          defaultValue={patientPartner.full_name}
          InputProps={{
            readOnly: true,
          }}
        />
        <div>
          <TextField
            id="outlined-multiline-static"
            label=""
            multiline
            rows={14}
            defaultValue={body}
            variant="outlined"
            onChange={handleBody}
          />
        </div>
        <div>
          <Button type="submit">Send</Button>
        </div>
      </form>
    </>
  );
};

export default NewMessage;

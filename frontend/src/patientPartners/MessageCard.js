import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ReplyIcon from "@material-ui/icons/Reply";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const MessageCard = ({ conversation, currentUser }) => {
  const classes = useStyles();
  const [sender, setSender] = React.useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/users/${conversation.sender_id}`)
      .then((r) => r.json())
      .then((data) => setSender(data));
  }, [conversation.sender_id]);
  return conversation.messages.length > 0 ? (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={sender.full_name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {conversation.messages[0].body}
              </Typography>
            </React.Fragment>
          }
        />
        <Link
          to={{
            pathname: "/new-reply",
            state: {
              sender: sender,
              conversation: conversation,
              currentUser: currentUser,
            },
          }}
        >
          <IconButton>
            <ReplyIcon />
          </IconButton>
        </Link>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  ) : null;
};

export default MessageCard;

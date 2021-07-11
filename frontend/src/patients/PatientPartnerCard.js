import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  Modal,
  Backdrop,
  Fade,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const PatientPartnerCard = ({ user }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [subjectLine, setSubjectLine] = React.useState("");
  const [conversation, setNewConversation] = React.useState({});
  const handleSubjectLine = (e) => {
    setSubjectLine(e.target.value);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const history = useHistory();
  const newConversation = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/conversations", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        subject_line: subjectLine,
      }),
    })
      .then((r) => r.json())
      .then((data) => setNewConversation(data));
    console.log(conversation);
    history.push({
      pathname: "/new-message",
      state: {
        conversation: conversation,
        user: user,
      },
    });
  };

  return (
    <Grid item xs={12}>
      <Grid container justifyContent="center">
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {user.full_name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={handleOpen} size="small">
              Message
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <h2 id="transition-modal-title">
                    Start a conversation with {user.full_name}
                  </h2>
                  <div>
                    <form onSubmit={newConversation}>
                      <TextField
                        id="standard-multiline-flexible"
                        label="Subject Line"
                        multiline
                        maxRows={4}
                        defaultValue={subjectLine}
                        onChange={handleSubjectLine}
                      />

                      <div>
                        <Button type="submit">Continue to Message</Button>
                      </div>
                    </form>
                  </div>
                </div>
              </Fade>
            </Modal>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PatientPartnerCard;

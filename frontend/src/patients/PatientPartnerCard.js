import React, { useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const PatientPartnerCard = ({ user }) => {
  const [currentUser, setCurrentUser] = React.useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/users/${parseInt(localStorage.token)}`)
      .then((r) => r.json())
      .then((user) => setCurrentUser(user));
  }, []);

  return (
    <Grid item xs={12}>
      <Box mx="auto" p={3}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {user.full_name}
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              to={{
                pathname: "/new-message",
                state: {
                  user: user,

                  currentUser: currentUser,
                },
              }}
            >
              <Button size="small">Message</Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
};

export default PatientPartnerCard;

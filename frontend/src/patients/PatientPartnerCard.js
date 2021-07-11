import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const PatientPartnerCard = ({ user }) => {
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
            <Link to="/new-message">
              <Button size="small">Message</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PatientPartnerCard;

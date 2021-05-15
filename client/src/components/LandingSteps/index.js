import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./index.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
       
        <Grid item xs={4}>

              <h2>Sign Up</h2>

        </Grid>
        <Grid item xs={4}>

              <h2>Find Mentors</h2>

        </Grid>
        <Grid item xs={4}>

              <h2>Grow</h2>

        </Grid>
        
      </Grid>
    </div>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
          <Paper className={classes.paper}>
              <h2>Find Mentors</h2>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h2>Eat Salad</h2>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h2>Profit</h2>
          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
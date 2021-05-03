import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import UserProfile from '../components/UserProfile';
import EditProfileButton from '../components/EditProfileButton';
import ConnectionsCard from '../components/ConnectionsCard';
import PotentialConnections from '../components/PotentialConnections';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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
  
  export default function Dashboard() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          
          <Grid item xs={6}>
            <Paper className={classes.paper}><EditProfileButton /> <UserProfile /></Paper>
          </Grid>
          <Grid item xs={6}>
          <Paper className={classes.paper}><ConnectionsCard /></Paper>
        </Grid>
        
        <Grid item xs={6}>
          <Paper className={classes.paper}><Calendar /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><PotentialConnections /></Paper>
        </Grid>
        
        
      </Grid>
    </div>
  );
}

{/* function Dashboard() {
    return (
        <>
        
        <EditProfileButton />
        <UserProfile />
        Jenny Smith 
        Raleigh, NC

        <Calendar />

        <ConnectionsCard />
        <PotentialConnections />


        </>
    )
}

export default Dashboard;  */}

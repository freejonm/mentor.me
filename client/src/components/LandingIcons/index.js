import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import CodeIcon from '@material-ui/icons/Code';
import "./index.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

}));

export default function LandingIcons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
       
        
        <Grid item xs={4}>
          <div class="icons">
            <AccountBoxIcon style={{ fontSize: 150 }} />
          </div>
        </Grid>

        
        <Grid item xs={4}>
          <div class="icons">
            <GroupAddIcon style={{ fontSize: 150 }} />
          </div>
        </Grid>

        
        <Grid item xs={4}>
          <div class="icons">
            <CodeIcon style={{ fontSize: 150 }} />
          </div>
        </Grid>
        
        
        
      </Grid>
    </div>
  );
}



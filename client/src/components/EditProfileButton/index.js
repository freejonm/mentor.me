import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './index.scss';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
  
  export default function ButtonSizes() {
    const classes = useStyles();
  
    return (
      <div>
       
        
        <div>
          <Button variant="contained" size="small" color="orange" className={classes.margin}>
            Edit Profile
          </Button>
    
        </div>
      </div>
    );
  }


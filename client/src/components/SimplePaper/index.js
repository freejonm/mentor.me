import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import VideocamIcon from '@material-ui/icons/Videocam';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
        <Paper elevation={3}>
            First Name:
            <br></br> 
            Last Name:   
            <br></br> 
            Email:
            <br></br> 
            <IconButton aria-label="message">
        <MailOutlineIcon /> 
        </IconButton>
        <IconButton aria-label="calendar">
        <CalendarTodayIcon /> 
        </IconButton>
        {/* <IconButton aria-label="video-chat">
        <VideocamIcon /> 
        </IconButton> */}
        </Paper> 
        <Paper elevation={3}>
            First Name:
            <br></br> 
            Last Name:   
            <br></br> 
            Email:
            <br></br> 
            <IconButton aria-label="message">
            <MailOutlineIcon /> 
            </IconButton>
            <IconButton aria-label="calendar">
            <CalendarTodayIcon /> 
            </IconButton>
            {/* <IconButton aria-label="video-chat">
            <VideocamIcon /> 
            </IconButton> */}
        </Paper> 
        <Paper elevation={3}>
            First Name:
            <br></br> 
            Last Name:   
            <br></br> 
            Email:
            <br></br> 
            <IconButton aria-label="message">
            <MailOutlineIcon /> 
            </IconButton>
            <IconButton aria-label="calendar">
            <CalendarTodayIcon /> 
            </IconButton>
            {/* <IconButton aria-label="video-chat">
            <VideocamIcon /> 
            </IconButton> */}
        </Paper> 
        <Paper elevation={3}>
            First Name:
            <br></br> 
            Last Name:   
            <br></br> 
            Email:
            <br></br> 
            <IconButton aria-label="message">
            <MailOutlineIcon /> 
            </IconButton>
            <IconButton aria-label="calendar">
            <CalendarTodayIcon /> 
            </IconButton>
            {/* <IconButton aria-label="video-chat">
            <VideocamIcon /> 
            </IconButton> */}
        </Paper> 

    </div>
  );
}

import React from "react";
import './index.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';



const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
      font: 'Ubuntu',
    },
    pos: {
      marginBottom: 12,
    },
  });
  export default function Notifications({alerts}) {
    const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h3" component="h3">
         <h3>Notifications</h3>
        </Typography>
      <ul className="list-overflow-container">
        <li className="list-group-item">
              {/* {alerts} */}
              You have a mentor request from Ashley Smith.
        </li>
        <li className="list-group-item">
              {/* {alerts} */}
              You have a mentor request from Jim Beam.
        </li>
        <li className="list-group-item">
              {/* {alerts} */}
              You request from Ja Rule was denied.
        </li>
        <li className="list-group-item">
              {/* {alerts} */}
              Ja Rule commented on your post.
        </li>
      </ul>
       
      </CardContent>
    </Card>
  );
};

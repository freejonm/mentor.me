import React from 'react';
import './index.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';



const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14,
    font: 'Ubuntu'
  },
  pos: {
    marginBottom: 12
  }
});



const ViewRequestButton = styled.button`
  background-color: #01444c;
  color: white;
  border-radius: 3px;
  font-family: 'Righteous', sans-serif;
  border: none;
  height: 36px;
  padding: 0px 20px;
  margin: 10px;
  box-shadow: 0 3px 5px 2px rgba(219, 120, 77, 0.3);
  font-size: 16px;
  &:hover {
    background-color: #637f7d;
    color: #012a2f;
  }
  i {
    margin-right: 10px;
  }
`;

export default function Notifications({ alerts }) {
  const classes = useStyles();

  return (
    <>
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h3" component="h3">
          <h3>Notifications</h3>
        </Typography>
        <ul className="list-overflow-container">
          <li className="list-group-item">
            {/* {alerts} */}
            You have a request from Ja Rule. <ViewRequestButton>Accept Request</ViewRequestButton>
          </li>
        </ul>
      </CardContent>
    </Card>
    </>
  );
}

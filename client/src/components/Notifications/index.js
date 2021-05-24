import React, { useState, useEffect } from 'react';
import './index.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ModalProvider } from 'styled-react-modal';
import ViewRequestModal from '../ViewRequestModal';

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


export default function Notifications({
  user
}) {
  const classes = useStyles();

  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    if (user.mentorRequests) { 
      setNotifications(user.mentorRequests)
    }
  }, [])

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h3" component="h3">
            <h3>Notifications</h3>
          </Typography>
          <ul className="list-overflow-container">
            {notifications.map(request => {
             return ( <li className="list-group-item">
                you have a request from {request.username}
                <ModalProvider>
                  <ViewRequestModal request={request} user={user}/>
                </ModalProvider>
              </li>)
            })}
          </ul>
        </CardContent>
      </Card>
    </>
  );
}

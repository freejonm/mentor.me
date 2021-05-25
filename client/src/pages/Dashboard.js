import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Notifications from '../components/Notifications';
import UserProfile from '../components/UserProfile';
import { Connections, ConnectionsItem } from '../components/ConnectionsCard';
import {
  PotentialConnections,
  PotentialConnectionsItem
} from '../components/PotentialConnections';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import API from '../utils/API';
import AUTH from '../utils/AUTH';
import styled from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import EditModal from '../components/Modal';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(15)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.main,
    height: 400
  }
}));

const ConnectionsName = styled.strong`
  font-size: 22px;
  margin-left: 10px;
`;

export default function Dashboard({ user, rankedMentors }) {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [potentialMentors, setPotentialMentors] = useState([]);
  const [updatedUser, setUpdatedUser] = useState(user);

  useEffect(() => {
    loadUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };
  const handleSave = (e) => {
    e.preventDefault();
    API.updateUser(updatedUser).then((res) => {});
  };

  const getMatches = (userData) => {
    API.getMatches(userData).then((res) => {
      const matches = res.data.rankedMentors;
      setPotentialMentors(matches);
    });
  };

  function loadUsers() {
    AUTH.getUser().then((res) => {
      console.log('current user', res.data.user);
      setUpdatedUser(res.data.user);
      getMatches(res.data.user);
    });
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <UserProfile
              avatar={
                updatedUser
                  ? updatedUser.profilePicture
                  : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
              }
              userName={updatedUser ? updatedUser.username : ''}
              email={updatedUser ? updatedUser.email : ''}
              location={updatedUser ? updatedUser.location : ''}
              currentPosition={updatedUser ? updatedUser.currentPosition : ''}
              yearsExp={updatedUser ? updatedUser.yearsExperience : ''}
              fullName={
                updatedUser
                  ? updatedUser.firstName + ' ' + updatedUser.lastName
                  : ''
              }
            />
            <ModalProvider>
              <EditModal
                handleInputChange={handleInputChange}
                handleSave={handleSave}
                updatedUser={updatedUser ? updatedUser : ''}
                user={user}
              />
            </ModalProvider>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {user.friendsList ? (
              <Connections>
                {user.friendsList.map((connect) => (
                  <ConnectionsItem key={connect._id}>
                    <Link to={'/memberprofile/' + connect._id}>
                      <img src={connect.profilePicture} />
                      <ConnectionsName>
                        {connect.firstName + ' '}
                        {connect.lastName + ' '}
                        {'(' + connect.pronouns + ')'}
                      </ConnectionsName>
                    </Link>
                  </ConnectionsItem>
                ))}
              </Connections>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Notifications user={user}></Notifications>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {potentialMentors.length ? (
              <PotentialConnections>
                {potentialMentors.length > 0
                  ? potentialMentors.map((mentor) => {
                      if (
                        mentor._id !== user._id ||
                        user.friendsList.includes(mentor._id)
                      ) {
                        return (
                          <PotentialConnectionsItem
                            key={mentor._id}
                            mentorId={mentor._id}
                          >
                            <Link to={'memberprofile/' + mentor._id}>
                              <img src={mentor.profilePicture} />
                              <ConnectionsName>
                                {mentor.firstName} {mentor.lastName} (
                                {mentor.pronouns})
                              </ConnectionsName>
                            </Link>
                          </PotentialConnectionsItem>
                        );
                      }
                    })
                  : ''}
              </PotentialConnections>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

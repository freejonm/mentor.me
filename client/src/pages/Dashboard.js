import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Notifications from '../components/Notifications';
import UserProfile from '../components/UserProfile';
// import EditProfileButton from '../components/EditProfileButton';
// import ConnectionsCard from '../components/ConnectionsCard';
import { Connections, ConnectionsItem } from '../components/ConnectionsCard';
import {
  PotentialConnections,
  PotentialConnectionsItem
} from '../components/PotentialConnections';
// import PotentialConnections from '../components/PotentialConnections';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import API from '../utils/API';
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
    backgroundColor: theme.palette.secondary
  }
}));

const ConnectionsName = styled.strong`
  font-size: 22px;
  margin-left: 10px;
  /* background-color: #012a2f; */
`;

export default function Dashboard({ user, rankedMentors }) {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [connections, setConnections] = useState([]);
  const [potentialMentors, setPotentialMentors] = useState([]);
  const [updatedUser, setUpdatedUser] = useState(user

  );


  useEffect(() => {
    loadUsers();
    getConnections();
    getMatches();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
    // console.log('value', value);
  };
  const handleSave = (e) => {
    e.preventDefault();
    API.updateUser(updatedUser).then((res) => {
      console.log(res.data.user);
    });
  };

  const getConnections = () => {
    API.getConnections(user._id).then((res) => {
      // console.log(res.data.connections);

      setConnections(res.data.connections);
    });
  };

  const getMatches = () => {
    API.getMatches(user._id).then((res) => {
      console.log('ranked',res.data.rankedMentors);
      const matches = res.data.rankedMentors;
      setPotentialMentors(matches);
    });
  };

  function loadUsers() {
    API.getAllUsers()
      .then((res) => {
        // console.log(res.data.users);
        setUsers(res.data.users);
      })
      .catch((err) => console.log(err));
  }
console.log('user', user)
// console.log(potentialMentors)
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <UserProfile 
            userName={updatedUser.username} 
            email={updatedUser.email} 
            location={updatedUser.location} currentPosition={updatedUser.currentPosition} 
            yearsExp={updatedUser.yearsExperience}  />
            <ModalProvider>
              <EditModal
                handleInputChange={handleInputChange}
                handleSave={handleSave}
                updatedUser={updatedUser}
                user={user}
              />
            </ModalProvider>

            {/* <EditProfileButton/>  */}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {users.length ? (
              <Connections>
                {connections.map((connect) => (
                  <ConnectionsItem key={connect._id}>
                    <Link to={'/memberprofile/' + connect._id}>
                      <img src={connect.profilePicture} />
                      <ConnectionsName>
                        {connect.friendName}
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
            <Notifications />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {potentialMentors.length ? (
                <PotentialConnections>
            {potentialMentors.map((mentor) => (
                <PotentialConnectionsItem key={mentor._id}>
                  <Link to={'memberprofile/' + mentor._id}>
                    <img src={mentor.profilePicture} />
                    <ConnectionsName>
                      {mentor.firstName} {mentor.lastName} ({mentor.pronouns})
                    </ConnectionsName>
                  </Link>

                </PotentialConnectionsItem>
            ))}
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

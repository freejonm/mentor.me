import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Calendar from '../components/Calendar';
import UserProfile from '../components/UserProfile';
// import EditProfileButton from '../components/EditProfileButton';
// import ConnectionsCard from '../components/ConnectionsCard';
import { Connections, ConnectionsItem } from '../components/ConnectionsCard';
import {
  PotentialConnections,
  PotentialConnectionsItem
} from '../components/PotentialConnections';
// import PotentialConnections from '../components/PotentialConnections';
import AddtoCalendarButton from '../components/AddtoCalendarButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import API from '../utils/API';
import styled from 'styled-components';
import { ModalProvider, BaseModalBackground } from 'styled-react-modal';
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

// const StyledModal = Modal.styled`
//   width: 20rem;
//   height: 20rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: white;
// `;

export default function Dashboard({ user }) {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [connections, setConnections] = useState([]);
  const [potentialMentors, setPotentialMentors] = useState([]);
  //  const [formObject, setFormObject] = useState({});
  //  const formEl = useRef(null);

  useEffect(() => {
    loadUsers();
    getConnections();
    getMatches();
  }, []);

  const getConnections = () => {
    API.getConnections(user._id).then((res) => {
      console.log(res.data.connections);
      setConnections(res.data.connections);
    });
  };

  const getMatches = () => {
    API.getMatches(user._id).then((res) => {
      console.log(res.data.rankedMentors)
      setPotentialMentors(res.data.rankedMentors);
    })
  }

  function loadUsers() {
    API.getAllUsers()
      .then((res) => {
        console.log(res.data.users);
        setUsers(res.data.users);
      })
      .catch((err) => console.log(err));
  }
  


  console.log('user dash', user);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <UserProfile userName={user.username} />
            <ModalProvider>
              <EditModal />
            </ModalProvider>

            {/* <EditProfileButton/>  */}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {users.length ? (
              <Connections>
                {users.map((users) => (
                  <ConnectionsItem key={users._id}>
                    <Link to={'/memberprofile/' + users._id}>
                      <img src={users.profilePicture} />
                      <ConnectionsName>
                        {users.firstName} {users.lastName}
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
            <Calendar />
            <AddtoCalendarButton />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {users.length ? (
              <PotentialConnections>
                {users.map((users) => (
                  <PotentialConnectionsItem key={users._id}>
                    <Link to={'/users/' + users._id}>
                      <img src={users.profilePicture} />
                      <ConnectionsName
                        onClick={() =>
                          (window.location.href = '/memberprofile')
                        }
                      >
                        {users.firstName} {users.lastName}
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

import React, { useState, useEffect} from 'react';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import MemberDetails from '../components/MemberDetails';


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






function MemberProfile({ match }) {

  const { params: { userId } } = match;

  const [userData, setUserData] = useState({});

  useEffect(() => {
    API.getUserByID(userId).then(res => {
      console.log(res.data)
      setUserData(res.data);
      console.log(userData);
    })
    
  }, [userId])

  const classes = useStyles();

return (
  <>
      {/* ignore this line this is just a test to display the user info as a p tag */}
      {/* <p>{JSON.stringify(userData)}</p> */}
      <div className={classes.root}>
      <Grid container
  // direction="row"
  // justify="center"
  // alignItems="center"
>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
          <MemberDetails 
          userName={userData.username}
          email={userData.email} 
          location={userData.location} 
          currentPosition={userData.currentPosition} yearsExp={userData.yearsExperience} />
          </Paper>

            

        </Grid>
        </Grid>
        {/* <Grid item xs={6}>
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
        </Grid> */}
    </div>
 </>   
)
};

export default MemberProfile;
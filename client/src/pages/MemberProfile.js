import React, { useState, useEffect} from 'react';
import API from '../utils/API';
import MemberDetails from '../components/MemberDetails';



function MemberProfile({ match }) {

  const { params: { userId } } = match;

  const [userData, setUserData] = useState({});

  useEffect(() => {
    API.getUserByID(userId).then(res => {
      console.log(res.data)
      setUserData(res.data.users);
      // console.log(userData);
    })
    
  }, [userId])

  // const classes = useStyles();

return (
  <>
      {/* ignore this line this is just a test to display the user info as a p tag */}
      {/* <p>{JSON.stringify(userData)}</p> */}
      {/* <div className={classes.root}> */}
      {/* <Grid container */}
 
        {/* <Grid item xs={9}>
          <Paper className={classes.paper}> */}
          <MemberDetails 
          avatar={userData.profilePicture}
          userName={userData.username}
          email={userData.email} 
          location={userData.location} 
          currentPosition={userData.currentPosition} yearsExp={userData.yearsExperience} />
          {/* </Paper>

            

        </Grid>
        </Grid> */}
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
    {/* </div> */}
 </>   
)
};

export default MemberProfile;
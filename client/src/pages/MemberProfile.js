import React, { useState, useEffect} from 'react';
import API from '../utils/API';
import MemberDetails from '../components/MemberDetails';



function MemberProfile({ match }) {
  const { params: { userId } } = match;
  const [userData, setUserData] = useState({});

  useEffect(() => {
    API.getUserByID(userId).then(res => {
      setUserData(res.data.users);
    })
  }, [userId])

 

return (
  <>
          <MemberDetails 
          avatar={userData.profilePicture}
          fullName={userData.firstName + " " + userData.lastName}
          pronouns={userData.pronouns}
          userName={userData.username}
          email={userData.email} 
          location={userData.location} 
          currentPosition={userData.currentPosition} yearsExp={userData.yearsExperience} />
          
 </>   
)
};

export default MemberProfile;
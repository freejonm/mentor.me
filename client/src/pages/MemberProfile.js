import React, { useState, useEffect} from 'react';
import API from '../utils/API';


function MemberProfile({ match }) {

  const { params: { userId } } = match;

  const [userData, setUserData] = useState({});

  useEffect(() => {
    API.getUserByID(userId).then(res => {
      console.log(res.data)
      setUserData(res.data);
    })
    
  }, [userId])

return (
    <>
      {/* ignore this line this is just a test to display the user info as a p tag */}
      <p>{JSON.stringify(userData)}</p>

      {/* firstName: { type: String, unique: false },
  lastName: { type: String, unique: false },
  pronouns: { type: String, unique: false, required: false },
  username: { type: String, unique: false, required: false },
  password: { type: String, unique: false, required: false },
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
  },
  currentPosition: { type: String, unique: false, required: false },
  yearsExperience: {type: String, unique: false, required: false },
  education: { type: String, unique: false, required: false },
  location: */}
    </>
)
}

export default MemberProfile;
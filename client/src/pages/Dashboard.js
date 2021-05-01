import React, { useState } from 'react';
import UserProfile from '../components/UserProfile';
import EditProfileButton from '../components/EditProfileButton';
import Calendar from '../components/Calendar';


function Dashboard() {
    return (
        <>
        <EditProfileButton />
        <UserProfile />
        Jenny Smith 
        Raleigh, NC
        <Calendar />

    
        </>
    )
}

export default Dashboard; 



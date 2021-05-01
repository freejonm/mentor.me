import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import UserProfile from '../components/UserProfile';
import EditProfileButton from '../components/EditProfileButton';
import ConnectedPeople from '../components/ConnectedPeople';
import PotentialConnections from '../components/PotentialConnections';

function Dashboard() {
    return (
        <>
        <EditProfileButton />
        <UserProfile />
        Jenny Smith 
        Raleigh, NC

        <Calendar />

        <ConnectedPeople />
        <PotentialConnections />


        </>
    )
}

export default Dashboard; 

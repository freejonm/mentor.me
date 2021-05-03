import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import UserProfile from '../components/UserProfile';
import EditProfileButton from '../components/EditProfileButton';
import ConnectionsCard from '../components/ConnectionsCard';
import PotentialConnections from '../components/PotentialConnections';

function Dashboard() {
    return (
        <>
        <EditProfileButton />
        <UserProfile />
        Jenny Smith 
        Raleigh, NC

        <Calendar />

        <ConnectionsCard />
        <PotentialConnections />


        </>
    )
}

export default Dashboard; 

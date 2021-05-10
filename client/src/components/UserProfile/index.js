import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './index.scss';
import styled from 'styled-components';

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
}))(Badge);

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 600,
    height: 600,
    border: `2px solid ${theme.palette.background.paper}`
  }
}))(Avatar);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

const UserContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  height: 254px;
  margin: 0;
  padding: 0;
`;

const ColLeft = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  img {
    height: 220px;
    width: 200px;
    border-radius: 5%;
    box-shadow: 1px 1px 2px 2px black;
  }
`;

const ColRight = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  /* position: relative; */
  width: auto;
`;

const UserProfileTitle = styled.h1`
  display: flex;
  justify-content: flex-start;
  font-family: 'Righteous', sans-serif;
  font-size: 32px;
`;

const UserInfoContainer = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  height: auto;
  width: 100%;
  margin: 0px;
  padding: 0px;
`;

const ListGroup = styled.ul`
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  /* justify-content:space-evenly; */
  list-style-type: none;
  width: 100%;

  li {
    border: 2px solid #01444c;
    font-size: 16px;
    padding: 10px;
    border-left: 0;
    border-top: 0;
    border-right: 0;
  }
`;

const EditAvatar = styled.button `
display: flex;
justify-content: center;
align-items: center;
padding: 5px;
font-size: 16px;
border: 2px solid #db784d;
border-radius: 5px;
outline: none;
cursor: pointer;
background-color: #637f7d;
color: white;
margin-top: 5px;
&:hover {
  background-color: #db784d;
  text-decoration: none;
  color: white;
}

`;

export default function BadgeAvatars({
  avatar,
  userName,
  fullName,
  pronouns,
  email,
  currentPosition,
  yearsExp,
  education,
  location
}) {
  const classes = useStyles();

  return (
    <Card>
      <h3>{userName}'s Profile</h3>
      <br></br>
      <CardContent>
        <UserContainer>
          <ColLeft>
            <UserProfileTitle>{(fullName, pronouns)}</UserProfileTitle>
            <img src="https://randomuser.me/api/portraits/women/75.jpg" />
            <EditAvatar>Change Picture</EditAvatar>
          </ColLeft>

          <ColRight>
            <ListGroup>
              <li>Email</li>
              <li>Location</li>
              <li>Current Position</li>
              <li>Years Experience</li>
            </ListGroup>
          </ColRight>
          <ColRight>
            <ListGroup>
              <li>{email}</li>
              <li>{location}</li>
              <li>{currentPosition}</li>
              <li>{yearsExp}</li>
            </ListGroup>
          </ColRight>
        </UserContainer>
      </CardContent>
    </Card>
  );
}

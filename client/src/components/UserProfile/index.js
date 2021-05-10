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
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 600,
    height: 600,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);

const useStyles = makeStyles((theme) => ({
  root: {
     
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const UserContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
height:400px;
width: 100%;
`;

const ColLeft = styled.div`


`;

const ColRight =styled.div`

`;


const UserProfileTitle = styled.h1`
display:flex;
justify-content: flex-start;
font-family: 'Righteous', sans-serif;
font-size: 50px;
`;


export default function BadgeAvatars({ ProfilePic, Username  }) {
  const classes = useStyles();

  return (
    <Card>
      <h3>Profile</h3>
      <br></br>
    <CardContent>
      <UserContainer>
        <UserProfileTitle>
          Jared's Profile
        </UserProfileTitle>
      </UserContainer>
    </CardContent>
    </Card>
    

  );
}
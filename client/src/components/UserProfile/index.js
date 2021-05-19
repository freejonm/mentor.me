import React from 'react';
import './index.scss';
import styled from 'styled-components';


const ColRight = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: auto;

`;

const ListGroup = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style-type: none;
  width: 100%;

  li {
    font-size: 16px;
    padding: 2px;
    border-left: 0;
    border-top: 0;
    border-right: 0;
  }
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: auto;
  align-items: center;
  margin: auto;
  background-color: white;
  border-radius: 3px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  `;
  
const UserProfileTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: 'Righteous', sans-serif;
  font-size: 30px;
  color: white;
  background-color: #db784d;
  border-radius: 3px;
  margin-bottom: 0px;
  font-weight: bold;
`;
const Pic = styled.div`
img {
  width: 200px;
  height:200px;
  margin-top: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
}
  `;

const Body = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
font-family: 'Ubuntu';
width: 100%;
font-size: 16px;

ul{
    list-style-type: none;
    color: #012a2f;
    h5 {
        font-weight: 'bold';
        font-size: 18px;
        font-family: 'Righteous', sans-serif;
        margin-top: 0px;
    }
    li {
        flex-direction: row;
    }
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
   return (
    
    <div>
       <UserProfileTitle>{fullName}'s Profile</ UserProfileTitle>
        <UserContainer >
          <Pic> 
            <img src={avatar} /> 
          </Pic>
          <Body>
            <ul>
              <ColRight>
                <ListGroup>
                  <li><h5>Email: </h5> {email}</li>
                  <li><h5>Location: </h5>{location} </li>
                  <li><h5>Current Position:</h5>  {currentPosition}</li>
                </ListGroup>
              </ColRight> 
            </ul>
          </Body>            
        </UserContainer>
        </div>
  );
}

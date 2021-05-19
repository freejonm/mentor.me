import React from 'react';
import styled from 'styled-components';
import Auth from '../../utils/AUTH';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
  display: inline-flex;
  position: fixed;
  background-color: #db784d;
  padding: 2px;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  color: white;
  top: 0%;
  z-index: 100;
`;

const NavBrand = styled(Link)`
  font-size: 60px;
  color: white;
  font-family: 'Righteous', sans-serif;

  &:hover {
    color: #637f7d;
    text-decoration: none;
  }
`;

const NavLinkGroup = styled.ul`
  display: inline-flex;
  text-decoration: none;
  margin: 18px;
  padding-top: 5px;
`;

const StyledLink = styled(Link)`
  font-family: 'Righteous', sans-serif;
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 30px;
  margin-right: 15px;
  padding: 8px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 5px;
  border: 2px solid #01444c;
  background-color: #012a2f;

  &:hover {
    color: #012a2f;
    text-decoration: none;
    cursor: pointer;
    background-color: #637f7d;
  }
`;

const NavP = styled.a`
  color: white;
  font-size: 30px;
  margin-right: 15px;
  &:hover {
    color: #637f7d;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Nav = ({ loggedIn }) => {
  const handleSubmit = () => {
    Auth.logout().then((res) => {
      window.location.href = '/';
      console.log(res);
    });
  };
  return (
    <div>
      <NavContainer>
        <NavBrand to='/'>mentor me</NavBrand>
        <NavLinkGroup>
          {loggedIn ? (
            <>
              <StyledLink to='/dashboard'> Dashboard </StyledLink>
              <StyledLink to='/chat'> Chat </StyledLink>
              <StyledLink to='/resourcefeed'> Feed </StyledLink>
              <StyledLink to='/' onClick={handleSubmit}>
                {' '}
                <NavP>Logout</NavP>
              </StyledLink>
            </>
          ) : (
            <>
              <StyledLink to='/register'> Sign Up </StyledLink>
              <StyledLink to='/login'> Login </StyledLink>
            </>
          )}
        </NavLinkGroup>
      </NavContainer>
    </div>
  );
};

export default Nav;

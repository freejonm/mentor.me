import React from 'react';
import styled from 'styled-components';
import Auth from '../../utils/AUTH'

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

const NavBrand = styled.a`
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

const NavLink = styled.a`
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 32px;
  margin-right: 15px;
  font-weight: bold;
  &:hover {
    color: #637f7d;
    text-decoration: none;
  }
`;

const Nav = ({loggedIn}) => {
   const handleSubmit = () =>{
     Auth.logout().then(res => {
       window.location.href='/';
       console.log(res)
     });

   };
  return (
    <div>
      <NavContainer>

        <NavBrand href="/">mentor me</NavBrand>
        <NavLinkGroup>
          {loggedIn ? <>
            <NavLink href="/dashboard"> Dashboard </NavLink>
            <NavLink onClick={handleSubmit}> Logout </NavLink>
          </> : (<>
            <NavLink href="/register"> Getting Started </NavLink>
          <NavLink href="/login"> Login </NavLink>
          
          </>)}
                    
        </NavLinkGroup>
      </NavContainer>
    </div>
  );
};

export default Nav;

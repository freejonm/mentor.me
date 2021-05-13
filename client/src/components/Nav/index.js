import React from 'react';
import styled from 'styled-components';
import Auth from '../../utils/AUTH';

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
  font-family: 'Righteous', sans-serif;
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 30px;
  margin-right: 15px;
  padding: 8px;
  border-radius: 5px;
  /* border-left: 5px solid #01444c; */
  border: 5px solid #01444c;
  background-color: #eda320;

  &:hover {
    color: #012a2f;
    text-decoration: none;
    cursor: pointer;
    background-color: #637f7d;
    /* border-right:none; */
    /* border-left:none; */
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
        <NavBrand href="/">mentor me</NavBrand>
        <NavLinkGroup>
          {loggedIn ? (
            <>
              <NavLink href="/dashboard"> Dashboard </NavLink>
              {/* <NavPipe /> */}
              <NavLink href="/chat"> Chat </NavLink>
              {/* <NavPipe /> */}
              <NavLink href="/resourcefeed"> Feed </NavLink>
              {/* <NavPipe /> */}
              <NavLink href="/" onClick={handleSubmit}>
                {' '}
                <NavP>Logout</NavP>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink href="/register"> Getting Started </NavLink>
              {/* <NavPipe /> */}
              <NavLink href="/login"> Login </NavLink>
            </>
          )}
        </NavLinkGroup>
      </NavContainer>
    </div>
  );
};

export default Nav;

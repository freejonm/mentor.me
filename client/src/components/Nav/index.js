import React from 'react';
import './index.scss';
import styled from 'styled-components';

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
`;

const NavBrand = styled.h1`
  font-size: 60px;
  color: white;

`;

const NavLinkGroup = styled.ul`
  display: inline-flex;
  text-decoration: none;
  margin: 18px;

`;

const NavLink = styled.a`
display: flex;
justify-content:space-between;
color: white;
font-size: 24px;
margin-right:15px;
`;







const Nav = () => {
  return (

  <div>
    <NavContainer>
      <NavBrand>
        mentor me
      </NavBrand>
      <NavLinkGroup>
        <NavLink href="/register"> Getting Started </NavLink>
        <NavLink href="/login"> Login </NavLink>
      </NavLinkGroup>
    </NavContainer>
  </div>

    

//     <div>
//       <nav className="mentornav">
//         <h1 className="brandName"><a className="brandATag" href="/">mentor me</a></h1>
//         <ul className="headLinks">
//           <li className="navLink">
//             <a className="navATag"href="/register">Getting Started</a>
//           </li>
//           <li className="navLink">
//             <a className="navATag" href="/login">Login</a>
//           </li>
//         </ul>
//       </nav>
//     </div>
  );
};

export default Nav;

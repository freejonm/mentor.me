import React from 'react';
import './index.scss';

const Nav = () => {
  return (
    <div>
      <nav className="mentornav">
        <h1 className="brandName"><a className="brandATag" href="/">mentor me</a></h1>
        <ul className="headLinks">
          <li className="navLink">
            <a className="navATag"href="#">Getting Started</a>
          </li>
          <li className="navLink">
            <a className="navATag" href="#">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

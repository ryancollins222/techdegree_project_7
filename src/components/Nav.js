import React from 'react';
import {NavLink} from 'react-router-dom';

let Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/mountains'>Mountains</NavLink></li>
        <li><NavLink to='/forests'>Forests</NavLink></li>
        <li><NavLink to='/beer'>Beer</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
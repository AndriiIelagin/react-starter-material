import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

export default function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/registration/'>Registration</NavLink>
        </li>
        <li>
          <NavLink to='/Login/'>Login</NavLink>
        </li>
      </ul>
    </div>
  );
}

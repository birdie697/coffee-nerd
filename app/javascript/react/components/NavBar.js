import React from 'react';
import { Link } from 'react-router';

const NavBar = props => {
  return(
    <div>
      <div className='navbar'>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default NavBar;

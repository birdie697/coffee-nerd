import React from 'react';
import { Link } from 'react-router';

const NavBar = props => {
  return(
    <div>
      <div className='navbar'>
        <ul className='breadcrumbs'>
          <li><Link to ='/overall'>Why Use Coffee Nerd?</Link></li>
          <li><Link to ='/methods'>What Methods Are Supported?</Link></li>
          <li><Link to ='/ratio'>What's up with the Water Coffee Ratio?</Link></li>
          <li><Link to ='/grind'>What's up with the Grind Size?</Link></li>
        </ul>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default NavBar;

import React from 'react'
import { Link } from 'react-router'

const Hello = (props) => {
  return(
    <div className="mainPage">
    <h1>
      <a href= '/users/sign_up'>Sign Up</a>,
      <a href= '/users/sign_in'> Sign In</a>, 
      or Look Around
    </h1>

    </div>
  )
}

export default Hello


// <h1>
//   <Link to = '/users/sign_up'>Sign Up</Link>,
//   <Link to = '/users/sign_in'>Sign In</Link>,
//   or Look Around
// </h1>


//<h1>Sign Up, Sign In or Look Around </h1>

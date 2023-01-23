import React from 'react'
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
        <h1>Error 404: Page Not Found</h1>
        <p>You can back the parincipal page from here:</p>
        <Link to='/'>Click Here</Link>
    </div>
  )
}

export default Error
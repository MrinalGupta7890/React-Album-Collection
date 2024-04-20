// Import necessary modules
import React from 'react';
import { Link } from 'react-router-dom'

// Define the Navbar component as a functional component that takes in props as an argument
const Navbar = (props) => {

  // Return the JSX structure for the Navbar component
  return (
    <div className='navbar'>
      <h2>ALBUMS</h2>
      {/* When the button is clicked, navigate to the path specified in props.path */}
      <Link to={props.path}><button>{props.page}</button></Link>
    </div>
  )
}

// Export the Navbar component as the default export
export default Navbar

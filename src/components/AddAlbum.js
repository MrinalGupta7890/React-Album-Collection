// Import necessary modules
import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';

// Define the AddAlbum component as a functional component
const AddAlbum = (props) => {

  // Define a function called getAlbumFormData that gets the user ID and album title from the input fields
  // and calls the addAlbumToList function passed in as a prop with the user ID and album title as arguments
  const getAlbumFormData = () => {
    const userId = document.getElementById('aaform-userid-inp').value;
    const title = document.getElementById('aaform-title-inp').value;
    props.addAlbumToList(Number(userId), title)
  }

  // Return the JSX structure for the AddAlbum component
  return (
    <>
      {/* Include the Navbar component at the top of the page */}
      <Navbar path="/" page="Home" />


      <div className='addalbum-container'>
        <div className='addalbum-form'>
          <h4>Enter New Album Details</h4>
          <div className='inp-container'>
            Enter User Id :
            <input id='aaform-userid-inp' type="number" />
          </div>
          <div className='inp-container'>
            Enter Album Title :
            <input id='aaform-title-inp' type="text" />
          </div>
          <div>
            {/* When the button is clicked, call the getAlbumFormData function */}
            <Link to="/"><button onClick={getAlbumFormData}>Add To List</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

// Export the AddAlbum component as the default export
export default AddAlbum

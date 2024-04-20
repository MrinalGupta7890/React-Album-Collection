// Import necessary modules
import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';

// Define the UpdateAlbum component as a functional component that takes in props as an argument
const UpdateAlbum = (props) => {

  // Define a function called getUpdateData that gets the updated title and user ID from the input fields
  // and calls the updateAlbumInList function passed in as a prop with the album ID, updated title, updated user ID, and the old album object as arguments
  const getUpdateData = () => {
    const id = props.album.id;
    let updateTitle = document.getElementById('title-inp').value;
    let updateUserid = document.getElementById('userid-inp').value;

    if (updateTitle === '') {
      updateTitle = props.album.title;
    }
    if (updateUserid === '') {
      updateUserid = props.album.userId;
    }
    props.updateAlbumInList(id, updateTitle, Number(updateUserid), props.album);
  }

  // Return the JSX structure for the UpdateAlbum component
  return (
    <>
      <Navbar path="/" page="Home" />
      <div className='update-album'>
        <div className='form-container'>
          <h4>Title : {props.album.title}</h4>
          <div className='inp-container'>
            Enter New Title :
            <input type="text" id='title-inp'></input>
          </div>

          <h4>User Id : {props.album.userId}</h4>
          <div className='inp-container'>
            Enter New UserId :
            <input type="number" id='userid-inp'></input>
          </div>

          {/* When the button is clicked, call the getUpdateData function */}
          <Link to='/'><button type='submit' onClick={getUpdateData}>Save</button></Link>
        </div>
      </div>
    </>
  )
}

// Export the UpdateAlbum component as the default export
export default UpdateAlbum

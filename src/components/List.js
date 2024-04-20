// Import necessary modules
import React from 'react'
import { Link } from "react-router-dom";

// Define the List component as a functional component that takes in props as an argument
const List = (props) => {

  // Return the JSX structure for the List component
  return (
    <div className='list'>
      <h3>{props.album.title}</h3>
      <div className='button-group'>
        {/* When the EDIT button is clicked, call the setUpdateAlbum function with the album object as an argument */}
        <Link to="/update-album"><button className="update-btn" onClick={() => props.setUpdateAlbum(props.album)}>EDIT</button></Link>
        {/* When the DELETE button is clicked, call the deleteAlbumFromList function with the album ID as an argument */}
        <button className='delete-btn' onClick={() => props.deleteAlbumFromList(props.album.id)}>DELETE</button>
      </div>
    </div>
  )
}

// Export the List component as the default export
export default List

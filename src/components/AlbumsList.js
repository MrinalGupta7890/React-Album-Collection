// Import necessary modules
import React from 'react'
import List from './List'
import Navbar from './Navbar'


// Define the AlbumsList component as a functional component that takes in props as an argument
const AlbumsList = (props) => {

  // Return the JSX structure for the AlbumsList component
  return (
    <>
      {/* Include the Navbar component at the top of the page */}
      <Navbar page="Add Album" path="/add-album" />

      {/* Create a div element with a class of 'albums-list' */}
      <div className='albums-list'>

        {/* Use the map function to iterate over the albums array in props and return a List component for each album */}
        {props.albums.map((album) => <List album={album} key={album.id} setUpdateAlbum={props.setUpdateAlbum} deleteAlbumFromList={props.deleteAlbumFromList} />)}
      </div>
    </>
  )
}

// Export the AlbumsList component as the default export
export default AlbumsList

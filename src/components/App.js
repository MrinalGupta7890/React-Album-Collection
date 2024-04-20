// Import necessary modules
import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import AddAlbum from './AddAlbum';
import AlbumsList from './AlbumsList';
import UpdateAlbum from './UpdateAlbum';

// Define the App component as a class component that extends Component
export default class App extends Component {
  // Initialize the state of the component with an empty array for albums and an empty object for updateAlbum
  constructor() {
    super();
    this.state = {
      albums: [],
      updateAlbum: {}
    }
  }

  // This function is called when the component is first rendered
  // It fetches the albums from the JSONPlaceholder API and sets the state of the component with the fetched albums
  componentDidMount = async () => {
    const albums = await fetch('https://jsonplaceholder.typicode.com/albums')
     .then((response) => response.json())
     .then((json) => json);
    this.setState({
      albums
    })
  }

  // This function is called when the user wants to delete an album
  // It takes the album ID as an argument, fetches the album from the JSONPlaceholder API, and deletes it
  // It then updates the state of the component with the new list of albums
  deleteAlbumFromList = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, { method: 'DELETE', })
    const newAlbums = this.state.albums.filter((album) => album.id!== id);
    alert("Your Album Deleted successfully");
    this.setState({
      albums: newAlbums,
    })
  }

  // This function is called when the user wants to update an album
  // It takes the album object as an argument and sets the state of the component with the updated album
  setUpdateAlbum = async (album) => {
    this.setState({
      updateAlbum: album
    })
  }

  // This function is called when the user wants to update an album
  // It takes the album ID, updated title, updated user ID, and the old album object as arguments
  // It fetches the album from the JSONPlaceholder API, updates it with the new title and user ID, and sets the state of the component with the updated album
  updateAlbumInList = async (id, updateTitle, updateUserid, oldAlbum) => {
    const albums = this.state.albums;
    const index = albums.indexOf(oldAlbum);
    let updatedAlbum = [];
    if (id < 100) {
      updatedAlbum = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          userId: updateUserid,
          id: id,
          title: updateTitle,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json()).then((json) => json);
    } else {
      updatedAlbum = {
        userId: updateUserid,
        id: id,
        title: updateTitle
      }
    }
    albums[index] = updatedAlbum;
    this.setState({
      albums: albums
    })
    alert("Update Successfully done")
  }

  // This function is called when the user wants to add an album
  // It takes the user ID and title as arguments, fetches the albums from the JSONPlaceholder API, and adds the new album to the list
  // It then sets the state of the component with the new list of albums
  addAlbumToList = (userId, title) => {
    fetch('https://jsonplaceholder.typicode.com/albums', {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        id: this.state.count,
        title: title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json()).then((json) => json);
    const length = this.state.albums.length;
    const lastId = this.state.albums[length - 1].id;
    const album = {
      userId: userId,
      id: lastId + 1,
      title: title,
    }
    this.setState({
      albums: [...this.state.albums, album]
    })
    alert("New Album added successfully in the bottom");
  }

  // This function is called when the component is rendered
  // It returns a JSX structure that includes a Routes component with three Route components
  // The first Route component renders the AlbumsList component with the albums, setUpdateAlbum, and deleteAlbumFromList props
  // The second Route component renders the AddAlbum component with the addAlbumToList prop
  // The third Route component renders the UpdateAlbum component with the album and updateAlbumInList props
  render() {
    return (
      <>
       <Routes>
          <Route path='/' element={<AlbumsList albums={this.state.albums} setUpdateAlbum={this.setUpdateAlbum} deleteAlbumFromList={this.deleteAlbumFromList} />}></Route>
          <Route path='/add-album' element={<AddAlbum addAlbumToList={this.addAlbumToList} />}></Route>
          <Route path='/update-album' element={<UpdateAlbum album={this.state.updateAlbum} updateAlbumInList={this.updateAlbumInList} />}></Route>
        </Routes>
      </>
    )
  }
}

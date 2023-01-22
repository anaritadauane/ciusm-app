import React from 'react'
import './SearchBar.css'

function SearchBar () {
  return (
    <div class="SearchBar">
        <input placeholder="enter a song, album, or artist" />
        <button class="SearchButton">SEARCH</button>
    </div>
  );
}

export default SearchBar
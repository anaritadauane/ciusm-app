import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults'
import { TiThMenu} from "react-icons/ti";
import React from 'react';
// import { useState } from 'react';

class App extends React.Component{  
  constructor(props){
    super(props); 
    this.state = {
      searchResults: [
        { name: 'name1', artist: 'artist1', album: 'album1', id: 1 },
        { name: 'name2', artist: 'artist2', album: 'album1', id: 2 },                       
        { name: 'name3', artist: 'artist3', album: 'album3', id: 3 }
      ]
    }

    this.search = this.search.bind(this);
  }

  search(term){
    console.log(term);
  }

  render(){
    return (
      <div>
        <div className="screen">
          <h1>cisum</h1>
          <p className="greetings" >Morning @chinesechin!</p>
          <button className="menuBtn"><TiThMenu/></button>
        </div>
        <div className="App">
          {/* greetings */}
          {/* <h1 class="greetings">Hello @username!</h1> */}
          <SearchBar onSearch={this.search}/>
          <div className="App-results">
          <SearchResults searchResults={this.state.searchResults}/>
          </div>
        </div>
      </div>
    );
  }
}



export default App;

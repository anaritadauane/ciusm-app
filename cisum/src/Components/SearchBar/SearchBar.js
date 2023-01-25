import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props){
       super(props);

       this.search = this.search.bind(this)
    }

    search(){
        this.props.onSearch(this.state.term)
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="enter a song, album, or artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        );
    }
}

export default SearchBar
import React from 'react'
import '../SearchResults/SearchResults.css'
import '../ListResults/ListResults'
import ListResults from '../ListResults/ListResults'

class SearchResults extends React.Component {

    render(){
        return (
            <div className="SearchResults">
            <h2 className='ResultsTitle'>Results</h2>
            {/* <!-- Add List component --> */}
                <ListResults results={this.props.searchResults}/>
            </div>
        )
    }
}

export default SearchResults
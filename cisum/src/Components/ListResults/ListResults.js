import React from 'react'
import '../ListResults/ListResults.css'
import '../Result/Result'
import Result from '../Result/Result'

class ListResults extends React.Component{
    render(){
  return (
    <div className="ListResults">
    {
        this.props.results.map( result => {
            return <Result result={result} key={result.id}   />}
            )}
    
    </div>
  )
    }
}

export default ListResults
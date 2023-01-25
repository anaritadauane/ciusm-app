import React from 'react'
import '../Result/Result.css'

class Result extends React.Component {
    render(){
  return (
    <div className="Track">
        <div className="Track-information">
                <h3>{this.props.result.name}</h3>
                <p>{this.props.result.artist} | {this.props.result.album}</p>
        </div>
    
    {/* <button class="Track-action"><!-- + or - will go here --></button> */}
    </div>  
  )
    }
}

export default Result
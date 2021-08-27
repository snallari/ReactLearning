import React, { Component } from 'react'
import './Name.css'

export class Name extends Component {
    render() {
       const {name, rank,price}=this.props.name
       let className= rank==1?"coloring && grounding":''
       const inline={
           color:"red",
           backgroundColor:"yellow"
       }
        return (
            <div className={`${className} fonting`}>
                <h1 style={inline}>{name}</h1>
                <p>{rank}</p>
            </div>
        )
    }
}

export default Name

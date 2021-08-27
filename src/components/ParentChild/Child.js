import React, { Component } from 'react'
import Parent from './Parent'

export class Child extends Component {
    render() {
        return (
           <button onClick={()=>this.props.handleClick("its me Child")}>Greet Parent</button>
        )
    }

    handle(){
        
    }
}

export default Child

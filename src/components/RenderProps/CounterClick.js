import React, { Component } from 'react'

export class CounterClick extends Component {
   
    
    render() {
        const {updateCounter, counter}=this.props
        return (
            <div>
                <button onClick={updateCounter}>  Text {counter}</button>
            </div>
        )
    }
}

export default CounterClick

import React, { Component } from 'react'


export class CounterHover extends Component {   
    render() {
        const {updateCounter, counter}=this.props
        return (
            <div onMouseOver={updateCounter}>
                Text {counter}
            </div>
        )
    }
}

export default CounterHover

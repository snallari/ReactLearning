import React, { Component } from 'react'
import ComponentB from './ComponentB'

export class ComponentA extends Component {
    render() {
        console.log("in a",this.props)
        return (
            <div>
                <ComponentB/>
            </div>
        )
    }
}

export default ComponentA

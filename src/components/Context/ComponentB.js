import React, { Component } from 'react'
import ComponentC from './ComponentC'

export class ComponentB extends Component {
    render() {
        console.log("in b",this.props)
        return (
            <div>
                <ComponentC/>
            </div>
        )
    }
}

export default ComponentB

import React, { Component } from 'react'

export class ErrorTest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default ErrorTest

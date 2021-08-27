import React, { Component } from 'react'

export class ClassClick extends Component {
    
    handle() {
        console.log("click me")
    }

    render() {
        return (
            <div onClick={this.handle}>
                Class Click
            </div>
        )
    }
}
export default ClassClick

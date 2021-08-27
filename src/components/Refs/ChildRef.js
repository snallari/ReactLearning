
import React, { Component } from 'react'

export class ChildRef extends Component {
    constructor(props) {
        super(props)

        this.inputRef=React.createRef()
    }

    focusMe(){
        console.log("text is there", this.inputRef)
        // this.inputRef.current.focus();
    }
    
    render() {
        return (
            <div>
                <input rfe={this.inputRef} />
            </div>
        )
    }
}

export default ChildRef


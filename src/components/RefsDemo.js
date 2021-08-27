import React, { Component } from 'react'

export class RefsDemo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.inputRef=React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus();
    }

    clickHandler=()=>{
        console.log(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default RefsDemo

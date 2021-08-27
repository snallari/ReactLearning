import React, { Component } from 'react'

export class ClickBinding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Sai"
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(){
        this.setState({name:"Shruti"})
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                {/* <button onClick={this.handleChange.bind(this)}>Click to Change</button>*/}
                {/* <button onClick={()=>this.handleChange()}>Click to Change</button>  */}
                <button onClick={this.handleChange}>Click to Change</button>
            </div>
        )
    }
}

export default ClickBinding

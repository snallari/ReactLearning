import React, { Component } from 'react'

export class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:''
        }
        console.log("const 1")
    }

    componentDidUpdate(){
        console.log("update", this.state)
    }

    getSnapshotBeforeUpdate(props,state){
        console.log("snap" ,props, state)
        return null
    }

    componentDidMount(){
        console.log("mount 3")
    }

    handle=()=>{
        console.log("handle")
        this.setState({
            name:"sai"
        })
    }
    
    render() {
        console.log("render 2")
        return (
            <div>
                <button onClick={this.handle}>Text</button>
            </div>
        )
    }
}

export default LifeCycle

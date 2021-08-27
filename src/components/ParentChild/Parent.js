import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Shruti"
        }
        this.clickHandler=this.clickHandler.bind(this)
    }
    

    clickHandler(params){
        this.setState({name:"Sai"})
        console.log("Text"+params);
    }

    render() {
        return (
               <Child handleClick={this.clickHandler}/>
        )
    }
}

export default Parent

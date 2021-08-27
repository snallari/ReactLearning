import React, {Component} from "react"

class Counter extends Component{

    constructor(){
        super()
        this.state={name:0, val:"count"}
    }

    ///Edit the state with prev state
    increaseMe(){
        this.setState(prevState=>({
            name:prevState.name+1
        }))
    }

    decreaseMe(){
        this.setState(prevState=>({
            name:prevState.name+1
        }))
    }

    render(){
       const {val, name}=this.state
        console.log(this.state)
        return (<div>
             <h1>{val}{name}</h1>
             <button onClick={()=>this.increaseMe()}>+</button>
             <button onClick={()=>this.decreaseMe()}>-</button>
        </div>)
       
    }

}

export default Counter;
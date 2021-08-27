import React, {Component} from "react"

class Message extends Component{

    constructor(){
        super()
        this.state={name:"Hello"}
    }

    changeText(){
        this.setState({name:"Hey You"})
    }

    render(){
        console.log(this.state)
        return <div>
             <h1>{this.state.name}</h1>
             <button onClick={()=>this.changeText()}>Change Me</button>
        </div>
       
    }

}

export default Message;
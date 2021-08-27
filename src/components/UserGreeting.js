import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {
        let message
        // if(this.state.isLoggedIn){
        //     message=<div>Yay Shruti</div>
        // }else{
        //     message=<div>Nay</div>
        // }
      // return this.state.isLoggedIn?(<div>Yay</div>):(<div>Nay</div>)
      return this.state.isLoggedIn && <div>Yay</div>
    }
    
}

export default UserGreeting

import React, { Component } from "react";

class Welcome extends Component{

    render(){
        let {name, children, heroName}=this.props
        return <h1>{name} aka {children} {heroName}</h1>
    }

}

export default Welcome;
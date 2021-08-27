import React from "react"

// function Greet(){
//     return <h1>Hello Shruti</h1>
// }

const Greet=(props)=>{
    let {name, heroName}=props
    return(
        <div>
        <h1>{name}{heroName}</h1>
        {props.children}
        </div>
    )
}


export default Greet
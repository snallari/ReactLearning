import React from "react"

const Hello=()=>{
    // return <h1>Hi Shruti</h1>
    return React.createElement("div", null, React.createElement("h1", null, "Hello Shruti create element"));
}

export default Hello
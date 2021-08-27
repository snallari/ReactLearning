import React from 'react'

function FunctionalComponent() {
   function touchme(){
        console.log("touch me");
    }
    return (
        <div onClick={touchme}>
            touchme
        </div>
    )
}

export default FunctionalComponent
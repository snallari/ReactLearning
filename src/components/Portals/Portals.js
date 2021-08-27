import React from 'react'
import ReactDOM from 'react-dom'

function Portals() {
    return ReactDOM.createPortal(
        <div>
            Test
        </div>, document.getElementById("portals")
    )
}

export default Portals

import ChildRef from './ChildRef'

import React, { Component } from 'react'

export class ParentRef extends Component {

    constructor(props) {
        super(props)
        this.componentRef=React.createRef()
    }
    

    handleMe=()=>{
        this.componentRef.current.focusMe()
    }

    render() {
        return (
            <div>
                <ChildRef ref={this.componentRef}/>
                <button onClick={this.handleMe}>Text</button>
            </div>
        )
    }
}

export default ParentRef

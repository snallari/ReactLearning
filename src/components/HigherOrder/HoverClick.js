import React, { Component } from 'react'
import highOrderComponent from './highOrder'
import highOrder from './highOrder'

export class HoverClick extends Component {
   
    render() {
        const {count, setcounter, name, god} = this.props
        console.log("hoc",this.props)
        return (
            <div onMouseOver={setcounter}>
                Click Me {count} {name} {god}
            </div>
        )
    }
}

export default highOrderComponent(HoverClick, 5)

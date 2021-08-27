import React, { Component } from 'react'
import highOrderComponent from './highOrder'
import highOrder from './highOrder'


export class CounterClick extends Component {
    
    render() {
        const {count, setcounter, name} = this.props
        return (
            <div>
                <button onClick={setcounter}>Click Me {count} {name}</button>
            </div>
        )
    }
}

export default highOrderComponent(CounterClick,100)

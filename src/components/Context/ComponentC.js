import React, { Component } from 'react'
import { UserConsumer } from './useContext'

export class ComponentC extends Component {
    render() {
        console.log("in c",this.props)
        return (
            <UserConsumer>
                {
                    userName=>{
                        console.log(userName)
                        return <div>Hello {userName.name} {userName.age}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentC

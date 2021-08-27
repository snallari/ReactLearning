import React, { Component } from 'react'

export class Wraper extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             counter:0
        }
    }

    updateCounter=()=>{
        this.setState(prevState=>
           {
            return {
                counter:prevState.counter+1
            }
        });
    }

    render() {
        return (
            <div>
                {this.props.renderMe(this.state.counter, this.updateCounter)}
            </div>
        )
    }
}

export default Wraper

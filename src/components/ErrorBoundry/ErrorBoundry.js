import React, { Component } from 'react'

class ErrorBoundry extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    

    static getDerivedStateFromError(error){
        console.log(error)
        this.hasError=true
    }

    componentDidCatch(error, info){
        console.log(error, info)
    }

    render() {
        return (
            <div>
                <h1>Alert!! Error</h1>
            </div>
        )
    }
}

export default ErrorBoundry

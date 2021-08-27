import React, { Component } from 'react'


const highOrderComponent=(OriginalComponent, incrementNumber)=>

    class extends Component {

        constructor(props) {
            super(props)
            this.state = {
                 counter:0
            }
        }
    
        setcounter=()=>{
            console.log("its here")
            this.setState(prevState =>{
                return{
                    counter:prevState.counter+incrementNumber
                }
            });
            console.log(this.state.counter)
        }

        render() {
            //Pass the props down because when you add props to one of the components it goes to hoc first.
            console.log("HOC", this.props)
            return (
               <OriginalComponent count={this.state.counter} setcounter={this.setcounter}  name={"shruti"} {...this.props}/>
            )
        }
    }


export default highOrderComponent

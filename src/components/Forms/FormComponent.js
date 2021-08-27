import React, { Component } from 'react'


export class FormComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             gender:'',
             desc:''
        }
        // this.handleName=this.handleName.bind(this)
        // this.handleDesc=this.handleDesc.bind(this)
        // this.handleGender=this.handleGender.bind(this)
    }

    handleDesc=(event)=>{
        this.setState({
            desc:event.target.value
        })
    }
    
    handleName=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    handleGender=(event)=>{
        this.setState({
            gender:event.target.value
        })
    }

    submitChange=(event)=>{
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h2>Form Component</h2>
                <form>
                    <div>
                    <label>Name</label>
                    <input type="text" value={this.state.name} onChange={this.handleName}/>
                    </div>
                    <div>
                    <label>Description</label>
                    <textarea value={this.state.desc} onChange={this.handleDesc}></textarea>
                    </div>
                    <div>
                    <label>Gender</label>
                   <select value={this.state.gender} onChange={this.handleGender}>
                       <option>Select</option>
                       <option value="Female">Female
                       </option>
                       <option value="Male">Male</option>
                   </select>
                    </div>
                    <button type="submit" onClick={this.submitChange}>Submit</button>
                </form>
            </div>
        )
    }
}

export default FormComponent

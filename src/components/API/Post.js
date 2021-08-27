import React, { Component } from 'react'

export class Post extends Component {
    render() {
        console.log(this.props)
        return (
            <div key={this.props.post}>
                <h1>{this.props.post.title}</h1>
            </div>
        )
    }
}

export default Post

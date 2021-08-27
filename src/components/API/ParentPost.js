import React, { Component } from "react";
import FormDialog from "./Dialogs/FormDialog";
import GetPost from "./GetPostList/GetPost";
import Header from "./Header";
import "./ParentPost.css";

export class ParentPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isRefresh: false,
    };
  }

  render() {
    return (
      <div className={"postContainer"}>
        <Header />
        <FormDialog isRefresh={this.isRefresh()} />
        <GetPost />
      </div>
    );
  }

  isRefresh() {
    console.log("its refresh");
  }
}

export default ParentPost;

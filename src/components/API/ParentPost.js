import React, { Component } from "react";
import FormDialog from "./Dialogs/FormDialog";
import AppFilter from "./Filter/AppFilter";
import GetPost from "./GetPostList/GetPost";
import { Paper, Grid, CardContent, Typography, Button, Dialog, DialogActions, DialogContent } from "@material-ui/core";
import Header from "./Header";
import "./ParentPost.css";
import PostDetails from "./Details/PostDetailsContainer";

export class ParentPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRefresh: false,
      isAdmin: true,
    };
  }

  render() {
    return (
      <div className={"postContainer"}>
        <Header />
        <Grid container spacing={0}>
          <Grid item xs={10}>
            <FormDialog
              handleClick={this.clickHandler}
              isAdmin={this.state.isAdmin}
            />
          </Grid>
          <Grid item xs={2}>
            <AppFilter />
          </Grid>
        </Grid>
        <GetPost isAdmin={this.state.isAdmin}  handleClick={this.clickHandler}/>
       {/* <PostDetails/> */}
      </div>
    );
  }

  clickHandler(params) {
    //this.setState({name:"Sai"})
    console.log("Refresh" + params);
    window.location.reload();
  }
}

export default ParentPost;

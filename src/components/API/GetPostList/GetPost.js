import React, { Component } from "react";
import axios from "axios";
import { Card, Grid, CardContent, Typography, Button, Dialog, DialogActions, DialogContent } from "@material-ui/core";
import "../ParentPost.css";
import CreatePost from "../Dialogs/CreatePost";
import PostMenu from "../Menu/PostMenu";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
} from "react-router-dom";


export class GetPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      posts: {},
      error: "",
      open:false,
      item:{},
      styleName:"",
      isDetails:false
    };
  }

  componentDidMount() {
    this.getPost();
  }

  componentDidUpdate() {
    console.log("update", this.state, this.props);
  }

  getPost() {
    this.setState({
      isLoading: true,
    });
    //  axios.get('https://whispering-lowlands-74128.herokuapp.com/listClasses')
    axios
      .get("http://localhost:8081/listClasses")
      .then((response) => {
        console.log(response.data);
        this.setState({
          posts: response.data,
          isLoading: false,
        });
      })
      .catch((response) => {
        console.log(response);
        this.setState({
          isLoading: false,
          error: "Error Retrieving Data",
        });
      });

    console.log(this.state);
  }

  getItem(post) {
    console.log("post", post);
    this.setState({
      open: true,
      item:post,
      isDetails:false
    });
    console.log(this.state.isDetails)
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    console.log(this.state);
    const { posts, isLoading, error, styleName, isDetails } = this.state;
    if(!isDetails){
    return (
      <div>
        <Grid container spacing={3}>
          {isLoading ? (
            <div>Loading</div>
          ) : posts ? (
            posts.length > 0 ? (
              posts.map((post) => (
                <Grid item xs={3} key={post._id}>
                  <Card className={`item`}>
                    <Grid container spacing={2}>
                      <Grid className={"itemHeaderText"} item xs={10} onClick={() => this.getItem(post)}> 
                        {post.title}
                      </Grid>
                      <Grid className={"itemHeaderText"} item xs={2}>
                        <PostMenu getid={post._id}/>
                      </Grid>
                      <Grid className={"itemSubHeaderText"} item xs={4} onClick={() => this.getItem(post)}>
                        Description:
                      </Grid>
                      <Grid className={"itemText"} item xs={8} onClick={() => this.getItem(post)}>
                        {post.description}
                      </Grid>
                      <Grid className={"itemSubHeaderText"} item xs={4} onClick={() => this.getItem(post)}>
                        Notes:
                      </Grid>
                      <Grid className={"itemText"} item xs={8} onClick={() => this.getItem(post)}>
                        {post.notes ? post.notes : "....."}
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              ))
            ) : (
              <h1>Its empty</h1>
            )
          ) : (
            <h1>{error}</h1>
          )
  }
        </Grid>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <CreatePost handleClose={this.handleClose} action="Edit Post" post={this.state.item} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} className={"btnClass"}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}else{
  return(
  <div>
    <Redirect to={{
      pathname: '/postDetails',
      item: { item: this.state.item}
    }} />
  </div>
  );
}
  }
}

export default GetPost;

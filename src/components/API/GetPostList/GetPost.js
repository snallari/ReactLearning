import React, { Component } from "react";
import axios from "axios";
import {
  Paper,
  Grid,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Link
} from "@material-ui/core";
import "../ParentPost.css";
import CreatePost from "../Dialogs/CreatePost";
import PostMenu from "../Menu/PostMenu";
import ErrorIcon from "@material-ui/icons/Error";
import Tooltip from "@material-ui/core/Tooltip";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import PostDetailsContainer from "../Details/PostDetailsContainer";
import companyLogo from "../../../logo.svg";

export class GetPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      posts: {},
      error: "",
      open: false,
      item: {},
      styleName: "",
      isDetails: false,
      isAdmin: props.isAdmin,
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
    if (this.state.isAdmin) {
      this.setState({
        open: false,
        item: post,
        isDetails: true,
      });
    }

    console.log(this.state.isDetails);
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    console.log(this.state);
    const { posts, isLoading, error, styleName, isDetails } = this.state;
    if (!isDetails) {
      return (
        <div>
          <Grid container spacing={3}>
            {isLoading ? (
              <div>Loading</div>
            ) : posts ? (
              posts.length > 0 ? (
                posts.map((post) => (
                  <Grid item xs={3} key={post._id}>
                    <Paper
                      my={6} py={3}
                      className={`item`}
                      elevation={post.classType === undefined ? 6 : 0}
                    >
                      <Grid
                        container
                        spacing={2}
                        className={
                          post.classType === undefined
                            ? "unassigned"
                            : post.classType === "mathCore"
                            ? "mathcore"
                            : post.classType === "algebra"
                            ? "algebra"
                            : "math8"
                        } px={3}
                      >
                        {/* <Grid item xs={3} >
                          <img
                            src={companyLogo}
                            alt="BigCo Inc. logo"
                          />
                        </Grid> */}
                        <Grid  xs={12} container
                        spacing={2} >
                          <Grid
                            className={"itemHeaderText"}
                            item
                            xs={9}
                            onClick={() => this.getItem(post)}
                          >
                            {post.title}{" "}
                            {post.classType === undefined ? (
                              <Tooltip title="Class is not assigned">
                                <ErrorIcon className={`alert`}></ErrorIcon>
                              </Tooltip>
                            ) : (
                              <span></span>
                            )}
                          </Grid>
                          {/* <Grid className={"itemHeaderText"}> */}
                          <PostMenu
                            getid={post._id}
                            item
                            xs={3}
                            isAdmin={this.state.isAdmin}
                            handleRefresh={() => this.props.handleClick("its me Child")}
                          />
                          {/* </Grid> */}
                          <Grid
                            className={"itemSubHeaderText"}
                            item
                            xs={4}
                            onClick={() => this.getItem(post)}
                          >
                            Description:
                          </Grid>
                          <Grid
                            className={"itemText"}
                            item
                            xs={8}
                            onClick={() => this.getItem(post)}
                          >
                            {post.description}
                          </Grid>
                          <Grid
                            className={"itemSubHeaderText"}
                            item
                            xs={4}
                            onClick={() => this.getItem(post)}
                          >
                            Notes:
                          </Grid>
                          <Grid
                            className={"itemText"}
                            item
                            xs={8}
                            onClick={() => this.getItem(post)}
                          >
                            {post.notes ? post.notes : "....."}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))
              ) : (
                <h1>Its empty</h1>
              )
            ) : (
              <h1>{error}</h1>
            )}
          </Grid>

          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogContent>
              <CreatePost
                handleClose={this.handleClose}
                action="View Post"
                post={this.state.item}
                handleRefresh={() => this.props.handleClick("its me Child")}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} className={"btnClass"}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    } else {
      return (
           <Link to="/postDetails"underline="none">
            <PostDetailsContainer post={this.state.item} />
          </Link> 
      );
    }
  }
}

export default GetPost;

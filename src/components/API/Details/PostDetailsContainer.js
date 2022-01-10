import React from 'react'
import AppImageList from './AppImageList'
import {Box, Typography} from '@mui/material/';
import PostDetails from './PostDetails';


const PostDetailsContainer=(props)=>{

  console.log("from router"+props)
  const getPost = (post) => {
    let obj=
      [
        {
          param: "id",
          val: post._id,
        },
        {
          param: "Description",
          val: post.description,
        },{
          param: "Notes",
          val: post.notes,
        },
        {
          param:"Class",
          val:post.classType
        }
      ]
      return obj;
  };

  console.log("postDetails",props)
    return (
      <Box
        py={6}
        sx={{
          marginLeft: "50px",
          marginRight: "50px",
          backgroundColor: "white",
        }}
      >
        <Typography variant="h6" component="div" justifyContent="center">
         View Details  {props.post.title?"of "+props.post.title:" "}
        </Typography>
        {/* <AppImageList /> */}
        <CreatePost
                action="View Post"
                post={this.props.post}
              />
      </Box>
    );
}




export default PostDetailsContainer

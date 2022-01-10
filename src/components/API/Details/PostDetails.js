import React from "react";
import { Paper, Grid, Container,Typography} from "@mui/material";
import "../ParentPost.css";

function PostDetails(props) {
  console.log(props);
  return (
    <Container>
      <Paper elevation={6} className={"postSpaces"}>
        {props.post.map((post) => (
          <Grid
            spacing={2}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6} md={4} justifyContent="right">
              <Typography variant="subtitle1" component="p"  >
                {post.param}
              </Typography>
            </Grid>
            <Grid item xs={6} md={8}>
              <Typography variant="subtitle1" component="p">
                {post.val}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Paper>
    </Container>
  );
}

export default PostDetails;

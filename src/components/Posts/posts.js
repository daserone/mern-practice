import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/post";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";
function Posts({ setCurrentId }) {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  const postsList = posts.map((post) => {
    return (
      <Grid key={post._id} item xs={12} sm={6}>
        <Post {...post} setCurrentId={setCurrentId}></Post>
      </Grid>
    );
  });
  return (
    <div>
      {!posts.length ? (
        <CircularProgress></CircularProgress>
      ) : (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {postsList}
        </Grid>
      )}
    </div>
  );
}

export default Posts;

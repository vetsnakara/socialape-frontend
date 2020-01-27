import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";

import Post from "../../components/Post";
import Profile from "../../components/Profile";

const Home = ({ posts = [], loading, error, fetchPosts }) => {
  useEffect(() => {
    if (posts.length === 0) {
      fetchPosts();
    }
  }, []);

  return (
    <Grid container spacing={4}>
      <Grid item sm={8} xs={12}>
        {/* todo: extract post list to component */}
        {loading && <p>Loading posts...</p>}
        {error && <p>{error.message}</p>}
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </Grid>
      <Grid item sm={4} xs={12}>
        <Profile />
      </Grid>
    </Grid>
  );
};

export default Home;

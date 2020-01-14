import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";

import Post from "../../components/Post";

const Home = ({ posts, loading, error, fetchPosts }) => {
  useEffect(() => {
    if (posts.length === 0) {
      fetchPosts();
    }
  }, []);

  return (
    <Grid container spacing={10}>
      <Grid item sm={8} xs={12}>
        {loading && <p>Loading ...</p>}
        {error && <p>Something went wrong ..</p>}
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </Grid>
      <Grid item sm={4} xs={12}>
        <p>Profile ...</p>
      </Grid>
    </Grid>
  );
};

export default Home;

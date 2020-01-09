import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import Post from "../components/Post";

import api from "../services/api";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);

    api
      .getPosts()
      .then(posts => {
        setError(null);
        setPosts(posts);
      })
      .catch(error => {
        setError(error);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
    setPosts(posts);
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

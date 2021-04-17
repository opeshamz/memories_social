import React from 'react';
import Post from './post/Post.js'
import{CircularProgress, Grid} from '@material-ui/core'
import useStyle from './Style';
import {useSelector} from 'react-redux';



const Posts = () => {
     const classes = useStyle();
     const posts = useSelector((state)=>state.posts);
     console.log(posts);
   
 return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};
export default Posts
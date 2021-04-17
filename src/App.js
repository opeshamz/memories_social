import React, {useEffect} from "react";
import {Container,AppBar,Typography,Grow, Grid } from "@material-ui/core";
import Memory from './imagies/home_memory.png';
import Posts from './components/posts/Posts'
import Form from './components/form/Form'
import useStyle from './Styls';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';


function App() {
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])
  return (
    <div className="App">
      <Container>
        <AppBar className={classes.appBar}>
          <Typography className={classes.headings} variant="h2" align="center">
            Memories
          </Typography>
          <image className={classes.image} src={Memory} alt="memories" height="40" />
        </AppBar>
        <Grow in>
          <Container classname={classes.container} >
            <Grid
              
              justify="space-between"
              alignItems="stretch"
              spacing={2}
            >
              <Grid item xm={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;

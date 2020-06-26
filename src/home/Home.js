import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Container, Grid, Message, Card, Segment, Header} from 'semantic-ui-react';
import Category from './Category';

function Home() {
  const categories = useSelector(state => state.categories);

  return (
    <Container>
      <Grid divided>
        <Grid.Column width={4} stretched>
          <Segment secondary textAlign="center">
            <Header as="h1">
              reactified
            </Header>
            <Header as="h4">
              <Link to="/createPost">create a post</Link>
            </Header>
          </Segment>
        </Grid.Column>

        <Grid.Column width={9}>
          <Card.Group>
            {categories.map(category => (
              <Category key={category.id} category={category} />
            ))}
          </Card.Group>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default Home;

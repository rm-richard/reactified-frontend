import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Container, Grid, Card, Segment, Header, List} from 'semantic-ui-react';
import Category from './Category';

function Home() {
  const categories = useSelector(state => state.categories);

  return (
    <Container>
      <Grid divided>
        <Grid.Column width={4} stretched>
          <Segment secondary textAlign="center">
            <Header as="h1">
              <Link to="/">reactified</Link>
            </Header>
            <Header as="h4">
              <List relaxed>
                <List.Item>
                  <Link style={{background: 'yellow'}} to="/createPost">create a post</Link>
                </List.Item>
                <List.Item>
                  <Link to="/createPost">about</Link>
                </List.Item>
              </List>
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

import React from 'react';
import {useSelector} from 'react-redux';
import {Container, Message, Card} from 'semantic-ui-react';
import Category from './Category';

function Home() {
  const categories = useSelector(state => state.categories);

  return (
    <Container text>
      <Message success icon="thumbs up" header="Alles gucci" content="Home page renders." />
      <Card.Group>
        {categories.map(category => (
          <Category key={category.name} category={category} />
        ))}
      </Card.Group>
    </Container>
  );
}

export default Home;

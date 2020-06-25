import React from 'react';
import {Link} from 'react-router-dom';
import {List, Card} from 'semantic-ui-react';

const Category = function(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.category.name}</Card.Header>
        <Card.Description>
          <List>
            {props.category.subCategories.map(sub => (
              <List.Item key={sub.name}>
                <Link to={'/listing/' + sub.id}>{sub.name}</Link>
              </List.Item>
            ))}
          </List>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Category;

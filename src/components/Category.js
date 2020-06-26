import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {List, Card} from 'semantic-ui-react';

const Category = function(props) {
  const subCategories = useSelector(state => state.subCategories);
  const visibleSubs = subCategories.filter(s => s.categoryId === props.category.id);

  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.category.name}</Card.Header>
        <Card.Description>
          <List>
            {visibleSubs.map(sub => (
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

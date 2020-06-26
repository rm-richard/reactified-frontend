import React from 'react';
import {useSelector} from 'react-redux';
import {Card} from 'semantic-ui-react';
import Category from './Category';

function MainCategoryList() {
  const categories = useSelector(state => state.categories);

  return (
    <Card.Group>
      {categories.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </Card.Group>
  );
}

export default MainCategoryList;

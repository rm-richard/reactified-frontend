import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Container, List} from 'semantic-ui-react';
import Post from './Post';
import SubpageHeader from './SubpageHeader';

const Listing = function(props) {
  const categories = useSelector(state => state.categories);
  const subCategories = useSelector(state => state.subCategories);
  const posts = useSelector(state => state.posts);
  const id = props.match.params.categoryId;

  const subCategory = subCategories.find(s => s.id === parseInt(id));

  if (!subCategory) {
    return <Redirect to="/" />
  }

  const category = categories.find(c => c.id === subCategory.categoryId);
  const visiblePosts = posts
    .filter(p => p.subCategoryId === subCategory.id)
    .sort((p1, p2) => p2.date - p1.date);

  return (
    <Container text>
      <SubpageHeader title={category.name + " > " + subCategory.name} />
      <List divided ordered>
        {visiblePosts.map(post => (
          <Post key={post.title} post={post} />
        ))}
      </List>
    </Container>

  );
};

export default Listing;

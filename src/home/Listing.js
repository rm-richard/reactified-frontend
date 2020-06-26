import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Container, Header, List} from 'semantic-ui-react';
import Post from './Post';

const Listing = function(props) {
  const categories = useSelector(state => state.categories);
  const subCategories = useSelector(state => state.subCategories);
  const posts = useSelector(state => state.posts);
  const id = props.match.params.categoryId;

  const subCategory = subCategories.find(s => s.id == id);
  const category = categories.find(c => c.id === subCategory.categoryId);
  const visiblePosts = posts.filter(p => p.subCategoryId === subCategory.id);

  return (
    <Container text>
      <Header as="h4">
        <Link to="/">{"<< Home"}</Link>
      </Header>
      <Header as="h2">{category.name} {" > "} {subCategory.name}</Header>
      <List divided ordered>
        {visiblePosts.map(post => (
          <Post key={post.title} post={post} />
        ))}
      </List>
    </Container>

  );
};

export default Listing;

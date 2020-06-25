import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Container, Header, List} from 'semantic-ui-react';
import Post from './Post';

function findCategoryById(id, categories) {
  for (let category of categories) {
    for (let subcategory of category.subCategories) {
      if (subcategory.id == id) {
        return [category, subcategory];
      }
    }
  }
  return [null, null];
}

function findPostsBySubCategory(posts, subCategory) {
  return posts.filter(post => post.subCategory == subCategory.name);
}

const Listing = function(props) {
  const categories = useSelector(state => state.categories);
  const posts = useSelector(state => state.posts);
  const id = props.match.params.categoryId;
  const [category, subCategory] = findCategoryById(id, categories);
  const visiblePosts = findPostsBySubCategory(posts, subCategory);

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

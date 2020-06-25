import React from 'react';
import {List} from 'semantic-ui-react';


const Post = function(props) {
  return (
    <List.Item>
      <List.Header>{props.post.title}</List.Header>
      {props.post.description}
    </List.Item>
  );
};

export default Post;

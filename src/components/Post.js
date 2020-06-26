import React from 'react';
import {List} from 'semantic-ui-react';


const Post = function(props) {
  return (
    <List.Item verticalAlign="top">
      <List.Content floated="right">
        <i>{props.post.date.toLocaleDateString("hu-HU")}</i>
      </List.Content>

      <List.Header>
        {props.post.title}
      </List.Header>

      <List.Content>
        {props.post.description}
      </List.Content>
    </List.Item>
  );
};

export default Post;

import React from 'react';
import {Link} from 'react-router-dom';
import {Segment, Header, List} from 'semantic-ui-react';

function Sidebar() {
  return (
    <Segment secondary textAlign="center" style={{height: '175px'}}>
      <Header as="h1">
        <Link to="/">reactified</Link>
      </Header>
      <Header as="h4">
        <List relaxed>
          <List.Item>
            <Link style={{background: 'yellow'}} to="/createPost">create a post</Link>
          </List.Item>
          <List.Item>
            <Link to="/about">about</Link>
          </List.Item>
        </List>
      </Header>
    </Segment>
  );
}

export default Sidebar;

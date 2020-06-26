import React from 'react';
import {Container, List, Icon} from 'semantic-ui-react';
import SubpageHeader from './SubpageHeader';

const About = function() {
  return (
    <Container text>
      <SubpageHeader title="about" />
      <p>
        Simple craigslist-like React app to try the framework. No backend
        available, all data live in your browser only. Tech used:
      </p>
      <List bulleted>
        <List.Item>
          <b><a href="https://reactjs.org/">React</a></b>, for building the UI
        </List.Item>
        <List.Item>
          <b><a href="https://redux.js.org/">Redux</a></b>, for managing the state
        </List.Item>
        <List.Item>
          <b><a href="https://reacttraining.com/react-router/web/guides/quick-start">React Router</a></b>, to manage the routes
        </List.Item>
        <List.Item>
          <b><a href="https://github.com/Semantic-Org/Semantic-UI-React">Semantic-UI-React</a></b>, for the clean look
        </List.Item>
      </List>

      <p>
        <a href="https://github.com/rm-richard/reactified-frontend">
          <Icon name="github"/>Source available on GitHub
        </a>
      </p>
    </Container>
  );
};

export default About;

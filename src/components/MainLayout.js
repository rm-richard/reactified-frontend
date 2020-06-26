import React from 'react';
import {Container, Grid} from 'semantic-ui-react';
import Sidebar from './Sidebar';

function MainLayout(props) {
  return (
    <Container>
      <Grid divided>
        <Grid.Column width={4}>
          <Sidebar />
        </Grid.Column>
        <Grid.Column width={9}>
          {props.children}
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default MainLayout;

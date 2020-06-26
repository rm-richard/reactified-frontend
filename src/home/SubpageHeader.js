import React from 'react';
import {Link} from 'react-router-dom';
import {Header} from 'semantic-ui-react';

const SubpageHeader = function(props) {
  return (
    <div>
      <Header as="h4">
        <Link to="/">{"<< Home"}</Link>
      </Header>
      <Header as="h2">{props.title}</Header>
    </div>
  );
};

export default SubpageHeader;

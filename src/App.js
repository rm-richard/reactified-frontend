import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './home/Home';
import Listing from './home/Listing';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/listing/:categoryId" exact component={Listing} />
        <Route component={Home} />
      </Switch>
    </div>
  );
}

export default App;

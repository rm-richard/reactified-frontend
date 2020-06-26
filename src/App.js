import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Listing from './home/Listing';
import CreatePost from './home/CreatePost';
import MainCategoryList from './home/MainCategoryList';
import MainLayout from './home/MainLayout';
import About from './home/About';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Switch>
          <Route path="/" exact component={MainCategoryList} />
          <Route path="/listing/:categoryId" exact component={Listing} />
          <Route path="/createPost" exact component={CreatePost} />
          <Route path="/about" exact component={About} />
          <Route component={MainCategoryList} />
        </Switch>
      </MainLayout>
    </div>
  );
}

export default App;

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Listing from './components/Listing';
import CreatePost from './components/CreatePost';
import MainCategoryList from './components/MainCategoryList';
import MainLayout from './components/MainLayout';
import About from './components/About';

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

import {combineReducers} from 'redux';
import {CREATE_POST} from './actions';
import {defaultCategories, defaultSubCategories, defaultPosts} from './sampleData.js';

function categories(state = defaultCategories, action) {
  return state;
}

function subCategories(state = defaultSubCategories, action) {
  return state;
}

function posts(state = defaultPosts, action) {
  switch (action.type) {
    case CREATE_POST:
      return [...state, action.post]
    default:
      return state;
  }
}

export default combineReducers({
  categories, subCategories, posts
});

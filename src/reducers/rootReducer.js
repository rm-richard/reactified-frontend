import {combineReducers} from 'redux';

const defaultCategories = [
  { id: 0, name: 'housing' },
  { id: 1, name: 'jobs'}
];

const defaultSubCategories = [
  // housing
  {id: 1, categoryId: 0, name: 'apt / housing'},
  {id: 2, categoryId: 0, name: 'room share'},
  {id: 3, categoryId: 0, name: 'vacation rentals'},
  {id: 4, categoryId: 0, name: 'office / commercial'},
  {id: 5, categoryId: 0, name: 'parking / storage'},
  // jobs
  {id: 6, categoryId: 1, name: 'blue collar'},
  {id: 7, categoryId: 1, name: 'white collar'},
];

const defaultPosts = [
  {
    title: 'Small house for sale',
    description: 'sample description',
    subCategoryId: 1
  },
  {
    title: 'Another house for sale',
    description: 'sample description 2',
    subCategoryId: 1
  },
  {
    title: 'Farm for sale',
    description: 'sample description 3',
    subCategoryId: 1
  },
  {
    title: 'Room for rent',
    description: 'room for rent description',
    subCategoryId: 2
  }
];

function categories(state = defaultCategories, action) {
  return state;
}

function subCategories(state = defaultSubCategories, action) {
  return state;
}

function posts(state = defaultPosts, action) {
  return state;
}

export default combineReducers({
  categories, subCategories, posts
});

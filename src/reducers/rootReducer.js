import {combineReducers} from 'redux';

const defaultCategories = [
  {
    name: 'housing', subCategories: [
      {id: 1, name: 'apt / housing'},
      {id: 2, name: 'room share'},
      {id: 3, name: 'vacation rentals'},
      {id: 4, name: 'office / commercial'},
      {id: 5, name: 'parking / storage'},
    ]
  },
  {
    name: 'jobs', subCategories: [
      {id: 6, name: 'blue collar'},
      {id: 7, name: 'white collar'},
    ]
  }
];

const defaultPosts = [
  {
    title: 'Small house for sale',
    description: 'sample description',
    subCategory: 'apt / housing'
  },
  {
    title: 'Another house for sale',
    description: 'sample description 2',
    subCategory: 'apt / housing'
  },
  {
    title: 'Farm for sale',
    description: 'sample description 3',
    subCategory: 'apt / housing'
  },
  {
    title: 'Room for rent',
    description: 'room for rent description',
    subCategory: 'room share'
  }
];

function categories(state = defaultCategories, action) {
  return state;
}

function posts(state = defaultPosts, action) {
  return state;
}

export default combineReducers({
  categories, posts
});

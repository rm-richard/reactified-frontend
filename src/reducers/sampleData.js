export const defaultCategories = [
  { id: 0, name: 'housing' },
  { id: 1, name: 'jobs'},
  { id: 2, name: 'for sale'},
];

export const defaultSubCategories = [
  // housing
  {id: 1, categoryId: 0, name: 'apt / housing'},
  {id: 2, categoryId: 0, name: 'room share'},
  {id: 3, categoryId: 0, name: 'vacation rentals'},
  // for sale
  {id: 4, categoryId: 2, name: 'cheap stuff'},
  {id: 5, categoryId: 2, name: 'expensive stuff'},
  // jobs
  {id: 6, categoryId: 1, name: 'blue collar'},
  {id: 7, categoryId: 1, name: 'white collar'},
];

export const defaultPosts = [
  {
    title: 'Small house for sale',
    description: 'sample description',
    subCategoryId: 1,
    date: new Date('2020-03-15'),
  },
  {
    title: 'Another house for sale',
    description: 'sample description 2',
    subCategoryId: 1,
    date: new Date('2020-03-17'),
  },
  {
    title: 'Farm for sale',
    description: 'sample description 3',
    subCategoryId: 1,
    date: new Date('2020-06-01'),
  },
  {
    title: 'Room for rent',
    description: 'room for rent description',
    subCategoryId: 2,
    date: new Date('2020-04-23'),
  },
  {
    title: 'Selling my old CD player',
    description: 'idk if it even works',
    subCategoryId: 4,
    date: new Date('2020-04-25'),
  },
  {
    title: 'Buy my car',
    description: 'My car is for sale',
    subCategoryId: 5,
    date: new Date('2020-05-19'),
  },
  {
    title: 'Mow my lawn',
    description: 'I need a gardener',
    subCategoryId: 6,
    date: new Date('2020-01-15'),
  },
  {
    title: 'Code me a website',
    description: 'React hacker wanted',
    subCategoryId: 7,
    date: new Date('2020-06-21'),
  },
];

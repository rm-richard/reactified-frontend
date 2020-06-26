// action types
export const CREATE_POST = 'CREATE_POST';

// action creators
export function createPost(post) {
  return { type: CREATE_POST, post: post };
}

import * as actionTypes from "../actions/actions";

const initialState = {
  posts: [
    { id: 1, title: "Pikachu" },
    { id: 2, title: "Mew" },
    { id: 3, title: "Charizard" }
  ]
};

const rootReducer = (state = initialState, action) => {
  if (action.type === actionTypes.DELETE_POST) {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;

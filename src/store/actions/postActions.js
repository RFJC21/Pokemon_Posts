import * as actionTypes from "./actions";

export const deletePost = id => {
  return {
    type: actionTypes.DELETE_POST,
    id
  };
};

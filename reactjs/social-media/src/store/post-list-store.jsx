import { useEffect, useReducer, useState } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type == "CREATE_POST") {
    newPostList = [action.payload, ...newPostList];
  } else if (action.type == "DELETE_POST") {
    newPostList = newPostList.filter((item) => action.payload.id != item.id);
  } else if (action.type == "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    console.log("___ adding a post", post);
    dispatchPostList({
      type: "CREATE_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = () => {};

  return (
    <>
      <PostList.Provider
        value={{ postList, addPost, addInitialPosts, deletePost }}
      >
        {children}
      </PostList.Provider>
    </>
  );
};

export default PostListProvider;

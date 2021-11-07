import React, { useState, useEffect, useCallback } from "react";
/* helpers */
import getUsers from "./helpers/getUser";
import getPosts from "./helpers/getPosts";

const FetchCard = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const updateUser = () => {
    getUsers().then((newUser) => {
      setUser(newUser);
    });
  };
  const updatePosts = useCallback(() => {
    getPosts(user.id).then((newPosts) => {
      setPosts(newPosts);
    });
  },[user.id]);

  useEffect(() => {
    updateUser();
  }, []);

  useEffect(() => {
    if (user?.id) {
      updatePosts();
    }
  }, [user, updatePosts]);

  return (
    <div>
      <h2>FetchCard</h2>
      <button onClick={updateUser}>anotherUser</button>
      <h3>Name: {user.name}</h3>
      <h3>Email: {user.email}</h3>
      <br />
      <h4>POSTS id:{user.id}</h4>
      {posts && posts.map((post) => <li key={post.id}>{post.body}</li>)}
    </div>
  );
};

export default FetchCard;

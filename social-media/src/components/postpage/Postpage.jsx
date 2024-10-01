import React, { useContext } from "react";
import Post from "../Post";
import { PostList } from "../Context/post-context";
import "./Postpage.css";

const Postpage = () => {
  const { postList } = useContext(PostList);

  return (
    <div className="posts">
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Postpage;

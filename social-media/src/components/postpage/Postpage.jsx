import React, { useContext } from "react";
import Post from "../Post";
import { PostList } from "../Context/post-context";

const Postpage = () => {
  const { postList, likePost } = useContext(PostList);

  const addlike = (postId) => {
    likePost(postId); // Increment the like count for the post
  };

  return (
    <div className="posts">
      {postList.map((post) => (
        <Post key={post.id} post={post} addlike={addlike} />
      ))}
    </div>
  );
};

export default Postpage;

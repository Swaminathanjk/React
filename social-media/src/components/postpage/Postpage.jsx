import React, { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList } from "../Context/post-context";
import "./Postpage.css";
import Empty_postpage from "../Empty_postpage";

const Postpage = () => {
  const { postList, addapi } = useContext(PostList);

  useEffect(() => {
    fetch("https://apigenerator.dronahq.com/api/sqNioehA/data")
      .then((res) => res.json())
      .then((data) => {
        addapi(data);
      });
  }, []);

  return (
    <div className="posts">
      {postList.length === 0 ? (
        <Empty_postpage />
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Postpage;

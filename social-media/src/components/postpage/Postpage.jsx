import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList } from "../Context/post-context";
import "./Postpage.css";
import Empty_postpage from "../Empty_postpage";
import Loading from "../Loading";

const Postpage = () => {
  const { postList, addapi } = useContext(PostList);
  const [fetching, setfetching] = useState(false);

  useEffect(() => {
    setfetching(true);
    fetch("https://apigenerator.dronahq.com/api/sqNioehA/data")
      .then((res) => res.json())
      .then((data) => {
        addapi(data);
        setfetching(false);
      });
  }, []);

  return (
    <div className="posts">
      {fetching && <Loading />}
      {!fetching && postList.length === 0 ? (
        <Empty_postpage />
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Postpage;

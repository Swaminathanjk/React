import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "./Context/post-context";

const Post = ({ post }) => {
  const { deletefromList, likePost } = useContext(PostList);
  return (
    <div className="card mb-3 " style={{ width: "18rem" }}>
      <div className="card-body">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <MdDelete onClick={() => deletefromList(post.id)} />
        </span>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <div className="d-flex flex-wrap mb-3">
          {post.tags.map((tag, index) => (
            <span key={index} className="badge bg-primary me-1">
              {tag}
            </span>
          ))}
        </div>
        <button className="btn btn-primary" onClick={() => likePost(post.id)}>
          Like 👍 {post.reactions}
        </button>
      </div>
    </div>
  );
};

export default Post;

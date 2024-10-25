import React, { useContext, useRef } from "react";
import { PostList } from "./Context/post-context";

const New_post = () => {
  const { addtoList } = useContext(PostList);
  const useridElement = useRef();
  const postTitleElement = useRef();
  const postbodyElement = useRef();
  const tagsElement = useRef();

  const handlechange = (event) => {
    event.preventDefault();
    const userid = useridElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postbody = postbodyElement.current.value;
    const tags = tagsElement.current.value;

    addtoList(userid, postTitle, postbody, tags);

    useridElement.current.value = "";
    postTitleElement.current.value = "";
    postbodyElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <form onSubmit={handlechange}>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          USER-ID
        </label>
        <input
          type="text"
          className="form-control"
          id="userid"
          ref={useridElement}
          placeholder="User-ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="Title..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Caption
        </label>
        <textarea
          type="text"
          ref={postbodyElement}
          rows={4}
          className="form-control"
          id="body"
          placeholder="Caption..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          # Tags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="# Tags (seperated by space)"
        />
      </div>

      <button type="submit" className="btn btn-primary"> 
        Post
      </button>
    </form>
  );
};

export default New_post;

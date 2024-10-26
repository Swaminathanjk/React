import React from "react";
import { useSelector } from "react-redux";

const Privacy_toggle = () => {
  const { count } = useSelector((store) => store.counter);
  const { privacy } = useSelector((store) => store.privacy);

  return (
    <div>
      {privacy ? (
        <strong>Privacy is ON</strong>
      ) : (
        <strong>COUNTER VALUE : {count} </strong>
      )}
    </div>
  );
};

export default Privacy_toggle;

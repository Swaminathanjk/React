import { useReducer, createContext } from "react";

// const D_POST_LIST = [
//   {
//     id: 1,
//     title: "Exploring the Mountains",
//     body: "Had an amazing hike in the Rockies! The views were breathtaking. Can't wait to go back.",
//     reactions: 125,
//     userid: "user-101",
//     tags: ["Hiking", "Nature", "Adventure"],
//   },
//   {
//     id: 2,
//     title: "Coffee Lovers Unite",
//     body: "Just brewed the perfect cup of coffee this morning. Who else can't start their day without it?",
//     reactions: 87,
//     userid: "user-102",
//     tags: ["Coffee", "MorningRoutine", "Caffeine"],
//   },
//   {
//     id: 3,
//     title: "Weekend Movie Marathon",
//     body: "Spent the weekend binge-watching classic movies. What’s your all-time favorite?",
//     reactions: 56,
//     userid: "user-103",
//     tags: ["Movies", "BingeWatch", "WeekendVibes"],
//   },
//   {
//     id: 4,
//     title: "DIY Home Decor",
//     body: "Just finished a fun DIY project for my living room. So happy with how it turned out!",
//     reactions: 93,
//     userid: "user-104",
//     tags: ["DIY", "HomeDecor", "Crafty"],
//   },
//   {
//     id: 5,
//     title: "Travel Bucket List",
//     body: "Writing down my travel goals for the next year. Where should I go first?",
//     reactions: 75,
//     userid: "user-105",
//     tags: ["Travel", "Wanderlust", "BucketList"],
//   },
// ];

export const PostList = createContext({
  postList: [],
  addtoList: () => {},
  deletefromList: () => {},
  likePost: () => {},
});

const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case "LIKE_POST":
      return currPostList.map((post) =>
        post.id === action.payload
          ? { ...post, reactions: post.reactions + 1 }
          : post
      );
    case "DELETE":
      return currPostList.filter((post) => post.id !== action.payload);
    case "ADD":
      return [action.payload, ...currPostList];
    default:
      return currPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addtoList = (userid, postTitle, postbody, tags) => {
    dispatchPostList({
      type: "ADD",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postbody,
        reactions: 0,
        userid: userid,
        tags: tags.split(" "),
      },
    });
  };

  const deletefromList = (postId) => {
    dispatchPostList({ type: "DELETE", payload: postId });
  };

  const likePost = (postId) => {
    dispatchPostList({ type: "LIKE_POST", payload: postId });
  };

  return (
    <PostList.Provider
      value={{ postList, addtoList, deletefromList, likePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
